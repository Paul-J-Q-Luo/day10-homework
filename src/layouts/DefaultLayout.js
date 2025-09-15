import { NavLink, Outlet, useLocation } from "react-router-dom";
import { Layout, Menu } from 'antd';
import { useEffect, useState } from "react";

const { Header, Content, Footer } = Layout;

const routeToKey = {
    "/": "1",
    "/done": "2",
    "/about": "3"
};

const navItems = [
    { key: "1", label: <NavLink to="/">Home</NavLink> },
    { key: "2", label: <NavLink to="/done">Done List</NavLink> },
    { key: "3", label: <NavLink to="/about">About</NavLink> }
];

export function DefaultLayout() {
    const location = useLocation();
    const [currentKey, setCurrentKey] = useState('1');

    useEffect(() => {
        const pathKey = routeToKey[location.pathname] || '1';
        setCurrentKey(pathKey);
    }, [location.pathname]);

    return (
        <Layout style={{ minHeight: '100vh' }}>
            <Header style={{
                position: 'sticky',
                top: 0,
                zIndex: 1,
                width: '100%',
                display: 'flex',
                alignItems: 'center'
            }}>
                <Menu
                    theme="dark"
                    mode="horizontal"
                    selectedKeys={[currentKey]}
                    items={navItems}
                    style={{ flex: 1, minWidth: 0 }}
                />
            </Header>
            <Content style={{ padding: '0 48px', marginTop: '24px' }}>
                <div style={{
                    padding: 24,
                    minHeight: 380,
                    background: '#fff',
                    borderRadius: '8px'
                }}>
                    <Outlet />
                </div>
            </Content>
            <Footer style={{ textAlign: 'center' }}>
                My Todo App ©{new Date().getFullYear()}
            </Footer>
        </Layout>
    );
}