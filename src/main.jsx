import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import ErrorPage from "./pages/ErrorPage.jsx";
import SingleBlogPost from "./pages/SingleBlogPost.jsx";
import Home from "./pages/Home.jsx";
import CategoryWiseBlog from "./pages/CategoryWiseBlog.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        index: "/",
        element: <Home title="Home" />,
      },
      {
        path: "/single_post/:id",
        element: <SingleBlogPost title="SingleBlogPost" />,
      },
      {
        path: "/view_all_blogs/:categoryId",
        element: <CategoryWiseBlog title="CategoryWiseBlog" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
