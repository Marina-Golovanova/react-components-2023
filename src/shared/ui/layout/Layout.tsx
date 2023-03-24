import React from "react";
import Header from "../header/Header";

import styles from "./layout.module.scss";

export default class Layout extends React.Component<React.PropsWithChildren> {
  render() {
    return (
      <div className={styles.layout}>
        <Header />
        {this.props.children}
      </div>
    );
  }
}
