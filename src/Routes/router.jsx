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
import DetailsHomes from "../Pages/DetailsHomes/DetailsHomes";
import AddHome from "../Pages/Dashboard/AddHome/AddHome";
import AdminRoutes from "../Routes/AdminRoutes";
import ManageHome from "../Pages/Dashboard/ManageHome/ManageHome";
import Payment from "../Pages/Dashboard/Payment/Payment";

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
        path: "/detailshomes/:id",
        element: <DetailsHomes></DetailsHomes>,
        loader: ({ params }) => {
          return fetch(`https://home-server-theta.vercel.app/home/${params.id}`);
        },
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
        path: "payment",
        element: <Payment></Payment>,
      },

      // admin routes
      {
        path: "allusers",
        element: (
          <AdminRoutes>
            <AllUsers></AllUsers>,
          </AdminRoutes>
        ),
      },
      {
        path: "addhome",
        element: (
          <AdminRoutes>
            <AddHome></AddHome>
          </AdminRoutes>
        ),
      },
      {
        path: "managehome",
        element: (
          <AdminRoutes>
            <ManageHome></ManageHome>
          </AdminRoutes>
        ),
      },
    ],
  },
]);
