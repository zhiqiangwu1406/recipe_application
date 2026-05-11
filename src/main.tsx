import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router";
import Home from "./Pages/Home";
import Layout from "./Layout/Layout";
import About from "./Pages/About";
import Error from "./Pages/404";
import RecipePage from "./Pages/RecipePage";
// import SearchResults from "./Pages/SearchResults";

const router = createBrowserRouter([
  {
    path: "/recipe_application/",
    element: <Layout />,
    children: [
      {
        path: "/recipe_application/home",
        element: <Home />,
      },
      {
        path: "/recipe_application/about",
        element: <About />,
      },
      {
        path: "/recipe_application/recipes/:id",
        element: <RecipePage />,
      },
      {
        path: "/recipe_application/search/:search",
        element: <Home />,
      },
    ],
    errorElement: <Error />,
  },
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
);
