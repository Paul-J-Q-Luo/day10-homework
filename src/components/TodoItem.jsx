import {useContext} from "react";

import {TodoContext} from "../contexts/TodoContext";

export function TodoItem(props) {
    const [state, dispatch] = useContext(TodoContext);

    function makeDone() {
        dispatch({
            type: "TOGGLE_TODO",
            payload: {id: props.todo.id}
        })
    }

    return <div className={"todo-item"}>
        <span className={props.todo.done ? "todo-done" : ""}
              onClick={makeDone}>
            {props.todo.text}
        </span>
    </div>;
}