import { createBrowserRouter } from "react-router";
import HomeLayout from "../layouts/HomeLayout";
import Home from "../components/HomeLayout/Home";
import CategoryNews from "../Pages/CategoryNews";
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
    element: <h2>Authintication layout</h2>,
  },
  {
    path: "*",
    element: <h1>Error 404</h1>,
  },
]);

export default router;