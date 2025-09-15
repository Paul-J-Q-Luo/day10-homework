import {api} from "./api/mockApi";

export function useTodoService() {
    const loadTodos = () => api.get("/todos")
        .then(response => response.data);

    const updateTodo = todo => api.put(`/todos/${todo.id}`, todo)
        .then(res => res.data);

    const deleteTodo = props => api.delete(`/todos/${props.todo.id}`);

    const createTodo = newTodo => api.post("/todos", newTodo)
        .then(res => res.data);

    return {loadTodos, updateTodo, deleteTodo, createTodo};
}