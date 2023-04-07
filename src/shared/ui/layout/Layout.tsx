import React from "react";
import { Header } from "../header/Header";

import styles from "./layout.module.scss";

export const Layout: React.FC<React.PropsWithChildren> = (props) => {
  return (
    <div className={styles.layout}>
      <Header />
      {props.children}
    </div>
  );
};
