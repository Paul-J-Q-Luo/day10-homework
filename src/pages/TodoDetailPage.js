import {useParams} from "react-router";
import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {TodoItem} from "../components/TodoItem";

export function TodoDetailPage() {
    const {id} = useParams()
    const [state] = useContext(TodoContext)
    const todo = state.filter((todo) => todo.id === parseInt(id))

    if (todo.length === 0) {
        return <div className="empty-message">Todo not found</div>
    }

    return <div className="app-main-container">
        <h2 className="page-title">Todo Detail</h2>
        <TodoItem todo={todo[0]} index={id}></TodoItem>
    </div>;
}