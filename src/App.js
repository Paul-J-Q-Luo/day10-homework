import logo from './logo.svg';
import './App.css';
import {createContext, useContext, useReducer} from "react";

export const TodoContext = createContext();

function TodoItem(props) {
    const [state, dispatch] = useContext(TodoContext);

    function makeDone() {
        dispatch({
            type: "TOGGLE_TODO",
            payload: {id: props.todo.id}
        })
    }

    return <div className={"todo-item"}>
        <span className={props.todo.done ? "todo-done" : ""}
              onClick={makeDone}>
            {props.todo.text}
        </span>
    </div>;
}

function TodoGroup() {
    const [state, dispatch] = useContext(TodoContext);

    return <div>
        {
            state.map((item, index) => {
                return <TodoItem key={index} todo={item} index={index}/>
            })
        }
    </div>
}

export const initData = [
    {id: 1, text: "the first todo", done: false},
    {id: 2, text: "the second todo", done: true}
];

export function todoReducer(state, action) {
    switch (action.type) {
        case "TOGGLE_TODO":
            const newState = [...state];
            const id = action.payload.id;
            return newState.map((value) => {
                if (value.id === id) {
                    return {
                        id,
                        text: value.text,
                        done: !value.done
                    };
                }
                return value;
            })
        default:
            return state;
    }
    return state;
}

function App() {
    const [state, dispatch] = useReducer(todoReducer, initData);
    return (
        <div className="App">
            <TodoContext.Provider value={[state, dispatch]}>
                <TodoGroup/>
            </TodoContext.Provider>
        </div>
    );
}

export default App;