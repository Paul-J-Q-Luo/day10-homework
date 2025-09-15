import {createBrowserRouter} from "react-router";
import {DefaultLayout} from "../layouts/DefaultLayout";
import {ErrorPage} from "../pages/ErrorPage";
import {HomePage} from "../pages/HomePage";
import {TodoDetailPage} from "../pages/TodoDetailPage";
import {TodoDoneListPage} from "../pages/TodoDoneListPage";
import {About} from "../pages/About";

export const routes = createBrowserRouter([
    {
        path: "/",
        element: <DefaultLayout/>,
        errorElement: <ErrorPage/>,
        children: [
            {
                path: "/",
                element: <HomePage/>
            },
            {
                path: "/done",
                element: <TodoDoneListPage/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/todos/:id",
                element: <TodoDetailPage/>
            }
        ]
    }
])