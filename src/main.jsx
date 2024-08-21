import React from "react";
import ReactDOM from "react-dom/client";
import App from "./routes/App";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Explore from "./routes/Explore";
import Favourites from "./routes/Favourites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { path: "/", element: <Explore /> },
      {
        path: "/Favourites",
        element: <Favourites />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
