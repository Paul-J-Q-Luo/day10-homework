import { TodoGroup } from "./TodoGroup";
import { TodoAddForm } from "./TodoAddForm";
import {TodoStats} from "./TodoStats";
import {TodoContext} from "../contexts/TodoContext";
import {useContext} from "react";

export function TodoApp() {
    const [todos] = useContext(TodoContext);

    return (
        <div className="app-main-container">
            <h2 className="todo-list-title">TODO LIST</h2>
            <TodoStats todos={todos}/>
            <TodoGroup />
            <TodoAddForm />
        </div>
    );
}