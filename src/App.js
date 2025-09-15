import './App.css';
import {useReducer} from "react";
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {createBrowserRouter, NavLink, Outlet, RouterProvider} from "react-router";
import {ErrorPage} from "./pages/ErrorPage";
import {HomePage} from "./pages/HomePage";

function DefaultLayout() {
    return <div>
        <header>
            <nav>
                <ul>
                    <li><NavLink to={"/"}>Home</NavLink></li>
                </ul>
            </nav>
        </header>
        <main>
            <Outlet/>
        </main>
    </div>
}

const routes = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: "/",
                element: <HomePage />
            }
        ]
    }
])

export const initData = [
    {id: 1, text: "the first todo", done: false},
    {id: 2, text: "the second todo", done: true}
];

function App() {
    const [state, dispatch] = useReducer(todoReducer, initData);
    return (
        <div className="App">
            <TodoContext.Provider value={[state, dispatch]}>
                <RouterProvider router={routes}></RouterProvider>
            </TodoContext.Provider>
        </div>
    );
}

export default App;