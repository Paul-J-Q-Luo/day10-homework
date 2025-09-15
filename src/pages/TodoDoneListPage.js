import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {TodoItem} from "../components/TodoItem";

export function TodoDoneListPage() {
    const [state] = useContext(TodoContext)
    const doneTodos = state.filter(item => item.done);

    return (
        <div className="app-main-container">
            <h2 className="page-title">Done List</h2>
            {doneTodos.length > 0 ? (
                <div className="todo-list-wrapper">
                    {doneTodos.map((item) => (
                        <TodoItem key={item.id} todo={item} />
                    ))}
                </div>
            ) : (
                <p className="empty-message">No done things...</p>
            )}
        </div>
    );
}