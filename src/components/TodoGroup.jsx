import {useContext} from "react";
import {TodoItem} from "./TodoItem";

import {TodoContext} from "../contexts/TodoContext";

export function TodoGroup() {
    const [state, dispatch] = useContext(TodoContext);

    const totalTodos = state.length;
    const completedTodos = state.filter(item => item.done).length;

    return <div>
        <div className="todo-list-wrapper">
            {totalTodos > 0 && (
                <p className="todo-stats">{completedTodos} of {totalTodos} tasks completed</p>
            )}

            {state.length > 0 ? (
                state.map((item) => {
                    return <TodoItem key={item.id} todo={item} />;
                })
            ) : (
                <p className="empty-message">Add the things you need to do today...</p>
            )}
        </div>
    </div>
}