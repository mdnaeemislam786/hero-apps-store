import { createBrowserRouter } from "react-router"; 
import MainLayout from "../Layouts/MainLayout";
import Home from "../Pages/Home/Home";
import Apps from "../Pages/Apps/Apps";
import ErrorPage from "../Pages/ErrorPage/ErrorPage";
import Installation from "../Pages/Installation/Installation";
import AppDetails from "../Pages/AppDetails/AppDetails";
import ErrorApp from "../Components/ErrorApp/ErrorApp";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />, 
    errorElement: <ErrorPage />, 
    children: [
      {
        index: true,
        loader: () => fetch("/Apps.json"), 
        element: <Home />,
      },
      {
        path: "apps",
        element: <Apps />,
      },
      {
        path: "installation",
        element: <Installation />,
      },
      {
        path: "app-details/:id",
        element: <AppDetails />,
      },
      {
        path: "app-details/*",
        element:<ErrorApp></ErrorApp>
      }
    ],
  },
]);
