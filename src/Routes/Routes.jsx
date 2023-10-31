import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/home/Home";
import ErrorElement from "../pages/error/ErrorElement";
import Login from "../pages/login/Login";
import SignUp from "../pages/signUp/SignUp";
import CheckOut from "../pages/checkout/CheckOut";
import Bookings from "../pages/Bookings/Bookings";
import PrivateRoutes from "./PrivateRoutes";




const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorElement></ErrorElement>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/signUp",
        element: <SignUp></SignUp>,
      },
      {
        path: "/checkout/:id",
        element:<PrivateRoutes> <CheckOut></CheckOut></PrivateRoutes>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
      {
        path: "/bookingsItems",
        element: <PrivateRoutes><Bookings></Bookings></PrivateRoutes>,
       
      },
    ],
  },
]);

export default router;
