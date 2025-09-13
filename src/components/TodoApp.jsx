import { TodoGroup } from "./TodoGroup";
import { TodoAddForm } from "./TodoAddForm";

export function TodoApp() {
    return (
        <div className="app-main-container">
            <h2 className="todo-list-title">TODO LIST</h2>
            <TodoGroup />
            <TodoAddForm />
        </div>
    );
}