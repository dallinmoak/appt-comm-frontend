import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";

import { RouterProvider, createBrowserRouter } from "react-router-dom";

import myRoutes from "./Routes.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={createBrowserRouter(myRoutes)} />
  </StrictMode>
);
