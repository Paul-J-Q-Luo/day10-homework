import './App.css';
import {useReducer} from "react";
import {TodoGroup} from "./components/TodoGroup";
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext as TodoContext1} from "./contexts/TodoContext";

export const initData = [
    {id: 1, text: "the first todo", done: false},
    {id: 2, text: "the second todo", done: true}
];

function App() {
    const [state, dispatch] = useReducer(todoReducer, initData);
    return (
        <div className="App">
            <TodoContext1 value={[state, dispatch]}>
                <TodoGroup/>
            </TodoContext1>
        </div>
    );
}

export default App;