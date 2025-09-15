import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {TodoItem} from "../components/TodoItem";

export function TodoDoneListPage() {
    const [state] = useContext(TodoContext)
    const doneTodos = state.filter(item => item.done);

    return <div>
        {doneTodos.length > 0 ? (
            doneTodos.map((item) => {
                return <TodoItem key={item.id} todo={item} />;
            })
        ) : (
            <p className="empty-message">No done things...</p>
        )}
    </div>;
}