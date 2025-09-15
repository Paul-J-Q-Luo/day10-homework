import './App.css';
import {useReducer} from "react";
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {TodoApp} from "./components/TodoApp";
import {createBrowserRouter, RouterProvider} from "react-router";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <TodoApp />
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
            <TodoContext value={[state, dispatch]}>
                <RouterProvider router={routes}></RouterProvider>
            </TodoContext>
        </div>
    );
}

export default App;