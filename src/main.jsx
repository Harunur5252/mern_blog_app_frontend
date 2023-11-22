import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App.jsx";
import "react-loading-skeleton/dist/skeleton.css";
import ErrorPage from "./pages/ErrorPage.jsx";
import SingleBlogPost from "./pages/SingleBlogPost.jsx";
import Home from "./pages/Home.jsx";
import CategoryWiseBlog from "./pages/CategoryWiseBlog.jsx";
import { store } from "./store.js";
import { Provider } from "react-redux";
import TagWiseBlog from "./pages/TagWiseBlog.jsx";
import AboutUs from "./pages/AboutUs.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Provider store={store}>
        <App />
      </Provider>
    ),
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
        path: "/category/wise/blog/:categoryId",
        element: <CategoryWiseBlog title="CategoryWiseBlog" />,
      },
      {
        path: "/tag/wise/blog/:tagId",
        element: <TagWiseBlog title="TagWiseBlog" />,
      },
      {
        path: "/about/us",
        element: <AboutUs title="About Us" />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
