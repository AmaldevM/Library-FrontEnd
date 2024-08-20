import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./routes/Root";
import ErrorPage from "./routes/ErrorPage";
import HomePage from "./routes/HomePage";
import BooksPage from "./routes/BooksPage";
import AuthorPage from "./routes/AuthorPage";
import BookDetailsPage from "./routes/BookDetailPage";
import { loader as bookDetailLoader } from "./loaders/bookDetailsLoader";
import { loader as booksLoader } from "./loaders/booksLoader";
import SignUpPage from "./routes/SignUpPage";
import LoginPage from "./routes/LoginPage";
import store from "./app/store";
import { Provider } from "react-redux";
import {loader as authorLoader} from "./loaders/authorLoader"
import AuthorDetailsPage from "./routes/AuthorDetailsPage";
import {loader as authorDetailLoader} from "./loaders/authorDetailLoader"
import {loader as homeLoader} from "./loaders/homeLoader"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: homeLoader
      },
      {
        path: "/books",
        element: <BooksPage />,
        loader: booksLoader,
      },
      {
        path: "/signup",
        element: <SignUpPage />,
      },
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/books/:bookId",
        element: <BookDetailsPage />,
        loader: bookDetailLoader,
      },
      {
        path: "/authors/:authorId",
        element: <AuthorDetailsPage/>,
        loader: authorDetailLoader
      },
      {
        path: "/authors",
        element: <AuthorPage />,
        loader: authorLoader
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
