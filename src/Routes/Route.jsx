import { createBrowserRouter } from "react-router";
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Installation from "../Pages/Installation/Installation";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: MainLayout,
    errorElement: ErrorPage,
    children: [
        {
            index: true,
            loader: () => fetch('HomeApps.json'),
            Component: Home,
        },
        {
            path: "/apps",
            Component: Apps,
        },
        {
            path: "/installation",
            Component: Installation,
        },
    ]
  },
]);