import { useState, useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";

export function TodoAddForm() {
    const [inputText, setInputText] = useState("");
    const [state, dispatch] = useContext(TodoContext);

    function handleSubmit(e) {
        e.preventDefault(); // 阻止表单默认提交行为
        if (inputText.trim() === "") return; // 避免添加空任务

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
    }

    return (
        <form className="add-form" onSubmit={handleSubmit}>
            <input
                type="text"
                value={inputText}
                onChange={(e) => setInputText(e.target.value)}
                placeholder="Add a new todo..."
            />
            <button type="submit">Add</button>
        </form>
    );
}