import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Home from "../layout/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    }
])

export default router
