import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

import "./styles/root.scss";

export const App: React.FC = () => {
  return <RouterProvider router={router} />;
};
