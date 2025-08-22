import {
  createBrowserRouter,
 
} from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/Home/Home";
import Register from "../pages/register/Register";
import SignIn from "../pages/signIn/SignIn";
import JobDetails from "../pages/jobdetails/JobDetails";
import PrivateRoute from "./PrivateRoute";
import JobApply from "../pages/jobApply/JobApply";
import MyApplications from "../pages/MyApplications/MyApplications";
import AddJob from "../pages/addJob/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs/MyPostedJobs";
import ViewApplications from "../pages/ViewApplications/ViewApplications";
const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children:[
        {
            path: "/",
            element:<Home></Home>
        },
        {
          path:'jobs/:id',
          element:<PrivateRoute><JobDetails></JobDetails></PrivateRoute>,
          loader: ({params}) => fetch(`http://localhost:3000/jobs/${params.id}`)
        },
        {
             path: '/jobApply/:id',
             element: <PrivateRoute><JobApply></JobApply></PrivateRoute>
        },
        {path: 'myApplications',
          element:<PrivateRoute><MyApplications></MyApplications></PrivateRoute>

        },
        {
           path: 'viewApplications/:job_id',
           element: <PrivateRoute><ViewApplications></ViewApplications></PrivateRoute>,
           loader: ({params}) => fetch(`http://localhost:3000/job-applications/jobs/${params.job_id}`)
        },
        {path: 'myPostedJobs',
          element:<PrivateRoute><MyPostedJobs></MyPostedJobs></PrivateRoute>

        },
        {
     path: 'addJOb',
     element: <PrivateRoute><AddJob></AddJob></PrivateRoute>
        },
        {
            path: "register",
            element: <Register></Register>
        },
        {
          path: "signIn",
          element: <SignIn></SignIn>
        }
    ]
  },
]);

export default router;