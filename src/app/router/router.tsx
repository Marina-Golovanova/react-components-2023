import React from "react";
import { createBrowserRouter } from "react-router-dom";
import AboutUsPage from "../../pages/about-us-page/AboutUsPage";
import ArticlesPage from "../../pages/articles-page/ArticlesPage";
import NotFoundPage from "../../pages/not-found-page/NotFoundPage";
import { routes } from "../constants";

export const router = createBrowserRouter([
  {
    path: routes.root,
    element: <ArticlesPage />,
  },
  {
    path: routes.aboutUs,
    element: <AboutUsPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
