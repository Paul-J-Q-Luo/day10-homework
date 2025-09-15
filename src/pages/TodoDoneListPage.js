import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {TodoItem} from "../components/TodoItem";

export function TodoDoneListPage() {
    const [state] = useContext(TodoContext)
    return <div>
        {state.length > 0 ? (
            state.filter(item => item.done).map((item) => {
                return <TodoItem key={item.id} todo={item} />;
            })
        ) : (
            <p className="empty-message">No done things...</p>
        )}
    </div>;
}