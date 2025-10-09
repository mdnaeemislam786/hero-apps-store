import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router/dom";
import { router } from "./Routes/Route";
import "./index.css"
import 'react-toastify/dist/ReactToastify.css';


const root = document.getElementById("root");


ReactDOM.createRoot(root).render(
  <RouterProvider router={router} />,
);
