import { FormPage } from "../../pages/form-page/FormPage";
import { createBrowserRouter } from "react-router-dom";
import { AboutUsPage } from "../../pages/about-us-page/AboutUsPage";
import { NotFoundPage } from "../../pages/not-found-page/NotFoundPage";
import { routes } from "../constants";
import { CharactersPage } from "../../pages/characters-page/CharactersPage";

export const router = createBrowserRouter([
  {
    path: routes.root,
    element: <CharactersPage />,
  },
  {
    path: routes.aboutUs,
    element: <AboutUsPage />,
  },
  {
    path: routes.form,
    element: <FormPage />,
  },
  {
    path: "*",
    element: <NotFoundPage />,
  },
]);
