import {useContext} from "react";
import {TodoItem} from "./TodoItem";

import {TodoContext} from "../contexts/TodoContext";

export function TodoGroup() {
    const [state, dispatch] = useContext(TodoContext);

    return <div>
        <div className="todo-list-wrapper">
            {state.length > 0 ? (
                state.map((item) => {
                    return <TodoItem key={item.id} todo={item} showDetail={true}/>;
                })
            ) : (
                <p className="empty-message">Add the things you need to do today...</p>
            )}
        </div>
    </div>
}