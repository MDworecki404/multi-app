import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import "./app.css";
import { createBrowserRouter, RouterProvider, Route } from "react-router-dom";
import { Main } from "./components/mainComponent";
import { Apps } from "./components/appsComponent";
import { Technology } from "./components/technologyComponent";
import { CurrentWeatherApp } from "./components/currentWeatherApp";
import { ToDoApp } from "./components/todoApp";
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
  {
    path: "/currentweatherapp",
    element: <CurrentWeatherApp></CurrentWeatherApp>,
  },
  {
    path: "/todoapp",
    element: <ToDoApp></ToDoApp>,
  },
]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
