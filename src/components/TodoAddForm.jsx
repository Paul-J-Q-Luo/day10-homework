import { useState, useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export function TodoAddForm() {
    const [inputText, setInputText] = useState("");
    const [state, dispatch] = useContext(TodoContext);
    const [inputInvalid, setInputInvalid] = useState(false);

    function handleSubmit(e) {
        e.preventDefault();
        if (inputText.trim() === "") {
            setInputInvalid(true);
            return;
        }

        const newTodo = {
            id: Date.now(),
            text: inputText,
            done: false
        };

        dispatch({
            type: "ADD_TODO",
            payload: newTodo
        });

        setInputText("");
        setInputInvalid(false);
    }

    function handleInputChange(e) {
        setInputText(e.target.value);
        if (inputInvalid) {
            setInputInvalid(false);
        }
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputText}
                onChange={handleInputChange}
                placeholder="Add a new todo..."
                className={inputInvalid ? "input-invalid" : ""}
            />
            <button type="submit">Add</button>
        </form>
    );
}