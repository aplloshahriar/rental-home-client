import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Listing from "../Pages/Listing/Listing/Listing";
import Login from "../Pages/Login/Login";
import Register from "../Pages/Register/Register";
import PrivateRoutes from "./PrivateRoutes";
import Secret from "../Pages/Shared/Secret/Secret";
import Dashboard from "../Layout/Dashboard";
import { MyLocation } from "@mui/icons-material";
import MyWatch from "../Pages/Dashboard/MyWatch/MyWatch";
import AllUsers from "../Pages/Dashboard/AllUsers/AllUsers";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/listing",
        element: <Listing></Listing>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/secret",
        element: (
          <PrivateRoutes>
            <Secret></Secret>
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoutes>
        <Dashboard></Dashboard>
      </PrivateRoutes>
    ),
    children: [
      {
        path: "mywatch",
        element: <MyWatch></MyWatch>,
      },
      {
        path: "allusers",
        element: <AllUsers></AllUsers>,
      },
    ],
  },
]);
