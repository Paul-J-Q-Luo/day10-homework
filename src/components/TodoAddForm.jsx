import { useState, useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export function TodoAddForm() {
    const [inputText, setInputText] = useState("");
    const [state, dispatch] = useContext(TodoContext);
    const [inputInvalid, setInputInvalid] = useState(false);

    function handleSubmit(e) {
        e.preventDefault(); // 阻止表单默认提交行为
        if (inputText.trim() === "") {
            setInputInvalid(true); // 如果为空，设置状态为true
            return;
        }

        const newTodo = {
            id: Date.now(), // 使用时间戳作为唯一ID
            text: inputText,
            done: false
        };

        dispatch({
            type: "ADD_TODO",
            payload: newTodo
        });

        setInputText(""); // 清空输入框
        setInputInvalid(false); // 成功添加后，重置状态
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