import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {TodoContext} from "../contexts/TodoContext";

export function TodoItem(props) {
    const [state, dispatch] = useContext(TodoContext);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isAdding, setIsAdding] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAdding(false);
        }, 10);
        return () => clearTimeout(timer);
    }, []);

    function makeDone() {
        dispatch({
            type: "TOGGLE_TODO",
            payload: {id: props.todo.id}
        })
    }

    function makeDelete() {
        setIsDeleting(true);

        const animationDuration = 300;
        setTimeout(() => {
            dispatch({
                type: "DELETE_TODO",
                payload: { id: props.todo.id }
            });
        }, animationDuration);
    }

    function goToDetail() {
        navigate(`/todos/${props.todo.id}`);
    }

    return <div className={`todo-item ${isDeleting ? "deleting" : ""} ${isAdding ? "adding" : ""}`}>
            <span
                className={props.todo.done ? "todo-done" : ""}
                onClick={makeDone}
            >
                {props.todo.text}
            </span>
        <button onClick={makeDelete}>X</button>
        <button onClick={goToDetail}>detail</button>
    </div>;
}