import { useContext, useState } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { useTodoService } from "../useTodoService";
import { Input, Button, Space } from 'antd';

export function TodoAddForm() {
    const [inputText, setInputText] = useState("");
    const [state, dispatch] = useContext(TodoContext);
    const [loading, setLoading] = useState(false); // Add a loading state for the button
    const { createTodo } = useTodoService();

    function handleSubmit(e) {
        e.preventDefault();
        if (inputText.trim() === "") {
            return;
        }

        setLoading(true);

        const newTodo = {
            text: inputText,
            done: false
        };

        createTodo(newTodo)
            .then(todo => {
                dispatch({
                    type: "ADD_TODO",
                    payload: todo
                });
            })
            .finally(() => {
                setLoading(false);
            });

        setInputText("");
    }

    return (
        <form onSubmit={handleSubmit} style={{ width: '100%' }}>
            <Space.Compact style={{ width: '100%' }}>
                <Input
                    placeholder="Add a new todo..."
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    status={inputText.trim() === "" ? "error" : undefined}
                />
                <Button
                    type="primary"
                    htmlType="submit"
                    loading={loading}
                    disabled={inputText.trim() === ""}
                >
                    Add
                </Button>
            </Space.Compact>
        </form>
    );
}