import {useContext} from "react";
import {TodoContext} from "../contexts/TodoContext";
import {List, Typography, Empty} from 'antd';
import {TodoItem} from "../components/TodoItem";

const {Title} = Typography;

export function TodoDoneListPage() {
    const [state] = useContext(TodoContext);
    const doneTodos = state.filter(item => item.done);

    return (
        <div className="app-main-container">
            <Title level={2} className="page-title">Done List</Title>

            {doneTodos.length > 0 ? (
                <List
                    className="todo-list-wrapper"
                    dataSource={doneTodos}
                    renderItem={item => (
                        <List.Item>
                            <TodoItem key={item.id} todo={item}/>
                        </List.Item>
                    )}
                />
            ) : (
                <Empty description="No completed tasks yet. Go get some done!" />
            )}
        </div>
    );
}