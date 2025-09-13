import './App.css';
import {useReducer} from "react";
import {TodoGroup} from "./components/TodoGroup";
import {todoReducer} from "./reducers/TodoReducer";
import {TodoContext} from "./contexts/TodoContext";
import {TodoAddForm} from "./components/TodoAddForm";

export const initData = [
    {id: 1, text: "the first todo", done: false},
    {id: 2, text: "the second todo", done: true}
];

function App() {
    const [state, dispatch] = useReducer(todoReducer, initData);
    return (
        <div className="App">
            <TodoContext value={[state, dispatch]}>
                <TodoGroup/>
                <TodoAddForm/>
            </TodoContext>
        </div>
    );
}

export default App;