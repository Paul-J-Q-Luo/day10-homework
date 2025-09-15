import {Card, List, Typography} from 'antd';
import {
    PlusOutlined,
    CheckOutlined,
    DeleteOutlined,
    EyeOutlined
} from '@ant-design/icons';

const {Title, Paragraph} = Typography;

export function About() {
    return (
        <div className="about-page">
            <Title level={2} className="page-title">About Us</Title>

            <Card title="Introduction" className="about-card">
                <Paragraph>
                    This is a simple yet powerful Todo application built to showcase modern web development
                    practices with React. It allows you to efficiently manage your daily tasks.
                </Paragraph>
            </Card>

            <Card title="Features" className="about-card">
                <List
                    itemLayout="horizontal"
                    dataSource={[
                        {icon: <PlusOutlined/>, text: 'Add new tasks to your list.'},
                        {icon: <CheckOutlined/>, text: 'Mark tasks as complete or incomplete.'},
                        {icon: <DeleteOutlined/>, text: 'Delete tasks you no longer need.'},
                        {icon: <EyeOutlined/>, text: 'View a separate list of all completed tasks.'},
                    ]}
                    renderItem={(item, index) => (
                        <List.Item>
                            <List.Item.Meta
                                avatar={item.icon}
                                description={item.text}
                            />
                        </List.Item>
                    )}
                />
            </Card>

            <Card title="Technology" className="about-card">
                <Paragraph>
                    Built with React, utilizing Hooks for state management (`useReducer`, `useContext`) and React
                    Router for seamless navigation.
                </Paragraph>
            </Card>
        </div>
    );
}