import './App.css';
import {useEffect, useReducer} from "react";
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {RouterProvider} from "react-router";
import {routes} from "./routes/Routes";
import axios from "axios";

const api = axios.create({
    baseURL: 'https://68c7ac905d8d9f51473287d2.mockapi.io/',
    headers: {'Content-Type': 'application/json'},
    timeout: 10_000
});

function App() {
    const [state, dispatch] = useReducer(todoReducer, []);
    useEffect(() => {
        api.get("/todos")
            .then(response => response.data)
            .then(todos => dispatch({type: "LOAD_TODOS", payload: todos}))
    }, [dispatch]);

    return (
        <div className="App">
            <TodoContext.Provider value={[state, dispatch]}>
                <RouterProvider router={routes}></RouterProvider>
            </TodoContext.Provider>
        </div>
    );
}

export default App;