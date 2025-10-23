import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/HomeLayout/Home";
import CategoryNews from "../Pages/CategoryNews";
import Login from "../components/Auth/Login";
import Register from "../components/Auth/Register";
import AuthLayout from "../components/Auth/AuthLayout";
import NewsDetails from "../components/NewsDetails";
import PrivateRoute from "../components/provider/PrivateRoute";
const router = createBrowserRouter([
  {
    path: "/",
    Component: HomeLayout,
    children: [
      {
        path: "",
        Component: Home,
      },
      {
        path: "category/:id",
        element: <CategoryNews />,
        loader: () => fetch("../news.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <Login />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },

  {
    path: "news-details/:id",
    element: <PrivateRoute><NewsDetails/></PrivateRoute>,
    loader: () => fetch("../news.json"),
  },
  {
    path: "*",
    element: <h1>Error 404</h1>,
  },
  {
    HydrateFallback:<div>Loading....</div>
  }
]);

export default router;