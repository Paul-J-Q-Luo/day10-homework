import './App.css';
import {useReducer} from "react";
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {TodoApp} from "./components/TodoApp";

export const initData = [
    {id: 1, text: "the first todo", done: false},
    {id: 2, text: "the second todo", done: true}
];

function App() {
    const [state, dispatch] = useReducer(todoReducer, initData);
    return (
        <div className="App">
            <TodoContext value={[state, dispatch]}>
                <TodoApp/>
            </TodoContext>
        </div>
    );
}

export default App;