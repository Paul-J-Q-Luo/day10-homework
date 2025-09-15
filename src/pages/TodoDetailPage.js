import { useParams } from "react-router";
import { useContext } from "react";
import { TodoContext } from "../contexts/TodoContext";
import { Card, Typography, Empty, Tag, Button } from 'antd';
import { ArrowLeftOutlined, CheckCircleOutlined, ClockCircleOutlined } from '@ant-design/icons';
import { useNavigate } from "react-router-dom";

const { Title, Paragraph } = Typography;

export function TodoDetailPage() {
    const { id } = useParams();
    const [state] = useContext(TodoContext);
    const navigate = useNavigate();

    const todo = state.find(item => item.id === id);

    if (!todo) {
        return (
            <div className="app-main-container">
                <Empty
                    description="Todo not found"
                    style={{ marginTop: '50px' }}
                />
            </div>
        );
    }

    return (
        <div className="app-main-container">
            <Title level={2} className="page-title">Todo Detail</Title>
            <Card
                title={
                    <div style={{ wordBreak: 'break-word', whiteSpace: 'normal' }}>
                        {todo.text}
                    </div>
                }
                extra={
                    <Button onClick={() => navigate(-1)} type="text" icon={<ArrowLeftOutlined />}>
                        Back
                    </Button>
                }
                style={{ width: '100%' }}
            >
                <div className="detail-status">
                    <Paragraph>
                        <strong style={{ marginRight: '8px' }}>Status:</strong>
                        {todo.done ? (
                            <Tag icon={<CheckCircleOutlined />} color="success">Completed</Tag>
                        ) : (
                            <Tag icon={<ClockCircleOutlined />} color="warning">Pending</Tag>
                        )}
                    </Paragraph>
                </div>
            </Card>
        </div>
    );
}