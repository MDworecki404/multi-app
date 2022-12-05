import React from "react";
import ReactDOM from "react-dom/client";
import { Main } from "./components/mainComponent";
import { Apps } from "./components/appsComponent";
import { Technology } from "./components/technologyComponent";
import "./index.css";
import "./app.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
  },
  {
    path: "/app",
    element: <Apps></Apps>,
  },
  {
    path: "/technology",
    element: <Technology></Technology>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
