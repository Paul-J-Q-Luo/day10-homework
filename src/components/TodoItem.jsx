import {useContext, useEffect, useState} from "react";
import {useNavigate} from "react-router-dom";
import {TodoContext} from "../contexts/TodoContext";
import {useTodoService} from "../useTodoService";
import {Button, Modal, Input} from 'antd';
import {CloseOutlined, EditOutlined} from '@ant-design/icons';

export function TodoItem(props) {
    const [state, dispatch] = useContext(TodoContext);
    const [isDeleting, setIsDeleting] = useState(false);
    const [isAdding, setIsAdding] = useState(true);
    const navigate = useNavigate();
    const {updateTodo, deleteTodo} = useTodoService();
    const [isModalVisible, setIsModalVisible] = useState(false);
    const [editText, setEditText] = useState(props.todo.text);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsAdding(false);
        }, 10);
        return () => clearTimeout(timer);
    }, []);

    function makeDone() {
        const updatedTodo = { ...props.todo, done: !props.todo.done };
        updateTodo(updatedTodo)
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
                    setIsDeleting(false);
                });
        }, animationDuration);
    }

    function goToDetail() {
        navigate(`/todos/${props.todo.id}`);
    }

    const showEditModal = () => {
        setEditText(props.todo.text);
        setIsModalVisible(true);
    };

    const handleOk = () => {
        const updatedTodo = {...props.todo, text: editText};
        updateTodo(updatedTodo)
            .then(todo => {
                dispatch({
                    type: "UPDATE_TODO",
                    payload: todo
                });
                setIsModalVisible(false);
            })
            .catch(error => {
                alert("Failed to update the todo item.");
                console.error("Failed to update todo:", error);
            });
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };

    return (
        <>
            <div className={`todo-item ${isDeleting ? "deleting" : ""} ${isAdding ? "adding" : ""}`}>
                <span
                    className={props.todo.done ? "todo-done" : ""}
                    onClick={makeDone}
                >
                    {props.todo.text}
                </span>
                <div className="todo-item-buttons">
                    {props.showDetail && <Button size="small" onClick={goToDetail}>Detail</Button>}
                    <Button
                        size="small"
                        shape="circle"
                        icon={<EditOutlined/>}
                        onClick={showEditModal}
                    />
                    <Button
                        size="small"
                        danger
                        shape="circle"
                        icon={<CloseOutlined/>}
                        onClick={makeDelete}
                    />
                </div>
            </div>
            <Modal
                title="Edit Todo"
                open={isModalVisible}
                onOk={handleOk}
                onCancel={handleCancel}
            >
                <Input value={editText} onChange={(e) => setEditText(e.target.value)}/>
            </Modal>
        </>
    );
}