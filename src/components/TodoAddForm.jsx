import {useState, useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {api} from "../api/mockApi";

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
            text: inputText,
            done: false
        };

        api.post("/todos", newTodo)
            .then(res => res.data)
            .then(todo => dispatch({
                type: "ADD_TODO",
                payload: todo
            }));

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