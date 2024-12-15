import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/main/Main";
import Home from "../layout/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import AllJobs from "../pages/AllJobs";
import JobApply from "../pages/JobApply";
import JobDetails from "../pages/JobDetails";
import MyApplication from "../pages/MyApplication";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/all_jobs',
                element: <AllJobs></AllJobs>
            },
            {
                path: '/job_apply/:id',
                element: <JobApply></JobApply>
            },
            {
                path: '/job/:id',
                element: <JobDetails></JobDetails>
            },
            {
                path:'/my_application',
                element: <MyApplication></MyApplication>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            }
        ]
    }
])

export default router
