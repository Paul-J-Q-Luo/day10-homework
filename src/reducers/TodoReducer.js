export function todoReducer(state, action) {
    switch (action.type) {
        case "LOAD_TODOS":
            return action.payload;
        case "ADD_TODO":
            return [...state, action.payload];
        case "TOGGLE_TODO":
            return state.map(todo =>
                todo.id === action.payload.id ? {...todo, done: !todo.done} : todo
            );
        case "DELETE_TODO":
            return state.filter(todo => todo.id !== action.payload.id);
        default:
            return state;
    }
    return state;
}