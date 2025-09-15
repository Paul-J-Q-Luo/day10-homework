import {NavLink, Outlet} from "react-router";

export function DefaultLayout() {
    return (
        <div className="layout-container">
            <header className="main-header">
                <nav className="main-nav">
                    <ul>
                        <li><NavLink to={"/"}>Home</NavLink></li>
                        <li><NavLink to={"/done"}>Done List</NavLink></li>
                        <li><NavLink to={"/about"}>About</NavLink></li>
                    </ul>
                </nav>
            </header>
            <main>
                <Outlet/>
            </main>
        </div>
    );
}