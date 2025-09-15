import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {TodoContext} from "../contexts/TodoContext";
import {useTodoService} from "../useTodoService";

export function TodoItem(props) {
    const [state, dispatch] = useContext(TodoContext);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isAdding, setIsAdding] = useState(true);
    const navigate = useNavigate();
    const {updateTodo, deleteTodo} = useTodoService();

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAdding(false);
        }, 10);
        return () => clearTimeout(timer);
    }, []);

    function makeDone() {
        updateTodo(props)
            .then(todo => dispatch({
                type: "UPDATE_TODO",
                payload: todo
            }));
    }

    function makeDelete() {
        setIsDeleting(true);

        const animationDuration = 300;
        setTimeout(() => {
            deleteTodo(props)
                .then(() => {
                    dispatch({
                        type: "DELETE_TODO",
                        payload: {id: props.todo.id}
                    });
                })
                .catch(error => {
                    alert("Failed to delete the todo item. Please try again.");
                    console.error("Failed to delete todo:", error);
                    setIsDeleting(false);
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
        <div className="todo-item-buttons">
            <button onClick={makeDelete}>X</button>
            {props.showDetail && <button onClick={goToDetail}>detail</button>}
        </div>
    </div>;
}