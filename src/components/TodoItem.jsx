import {useContext, useState} from "react";

import {TodoContext} from "../contexts/TodoContext";

export function TodoItem(props) {
    const [state, dispatch] = useContext(TodoContext);
    const [isDeleting, setIsDeleting] = useState(false);

    function makeDone() {
        dispatch({
            type: "TOGGLE_TODO",
            payload: {id: props.todo.id}
        })
    }

    function makeDelete() {
        setIsDeleting(true);

        const animationDuration = 300; // 动画持续时间，与CSS中的保持一致
        setTimeout(() => {
            dispatch({
                type: "DELETE_TODO",
                payload: { id: props.todo.id }
            });
        }, animationDuration);
    }

    return <div className={`todo-item ${isDeleting ? "deleting" : ""}`}>
            <span
                className={props.todo.done ? "todo-done" : ""}
                onClick={makeDone}
            >
                {props.todo.text}
            </span>
        <button onClick={makeDelete}>X</button>
    </div>;
}