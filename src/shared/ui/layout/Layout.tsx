import React from "react";

import styles from "./layout.module.scss";

export default class Layout extends React.Component<React.PropsWithChildren> {
  render() {
    return <div className={styles.layout}>{this.props.children}</div>;
  }
}
