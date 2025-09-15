import {api} from "./api/mockApi";

export function useTodoService() {
    const loadTodos = () => api.get("/todos")
        .then(response => response.data);

    const updateTodo = props => api.put("/todos/" + props.todo.id, {text: props.todo.text, done: !props.todo.done})
        .then(res => res.data);

    const deleteTodo = props => api.delete(`/todos/${props.todo.id}`);

    const createTodo = newTodo => api.post("/todos", newTodo)
        .then(res => res.data);

    return {loadTodos, updateTodo, deleteTodo, createTodo};
}