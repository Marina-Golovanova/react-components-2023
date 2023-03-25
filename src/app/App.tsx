import React from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./router/router";

import "./styles/root.scss";

export class App extends React.Component {
  render() {
    return <RouterProvider router={router} />;
  }
}
