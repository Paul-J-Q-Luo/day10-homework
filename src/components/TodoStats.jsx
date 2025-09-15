import {Progress} from 'antd';
import {useMemo} from 'react';

export function TodoStats({todos = []}) {
    const {completedCount, totalCount, percent} = useMemo(() => {
        const total = todos.length;
        if (total === 0) {
            return {completedCount: 0, totalCount: 0, percent: 0};
        }
        const completed = todos.filter(todo => todo.done).length;
        const percentage = Math.round((completed / total) * 100);
        return {completedCount: completed, totalCount: total, percent: percentage};
    }, [todos]);

    if (totalCount === 0) {
        return null;
    }

    return (
        <div className="todo-stats-container">
            <Progress
                percent={percent}
                format={() => `${completedCount} / ${totalCount}`}
                size={[300, 20]}
                strokeColor="#B7EB8F"
            />
        </div>
    );
}
