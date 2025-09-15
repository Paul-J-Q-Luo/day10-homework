export function About() {
    return (
        <div className="app-main-container">
            <h2 className="page-title">About Us</h2>
            <div className="about-content">
                <div className="about-section">
                    <h3>Introduction</h3>
                    <p>
                        This is a simple yet powerful Todo application built to showcase modern web development
                        practices with React. It allows you to efficiently manage your daily tasks.
                    </p>
                </div>
                <div className="about-section">
                    <h3>Features</h3>
                    <ul>
                        <li>Add new tasks to your list.</li>
                        <li>Mark tasks as complete or incomplete.</li>
                        <li>Delete tasks you no longer need.</li>
                        <li>View a separate list of all completed tasks.</li>
                    </ul>
                </div>
                <div className="about-section">
                    <h3>Technology</h3>
                    <p>
                        Built with React, utilizing Hooks for state management (`useReducer`, `useContext`) and React
                        Router for seamless navigation.
                    </p>
                </div>
            </div>
        </div>
    );
}