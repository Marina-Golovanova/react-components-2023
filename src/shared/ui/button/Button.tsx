import React from "react";

import styles from "./button.module.scss";

export default class Button extends React.Component<
  React.ButtonHTMLAttributes<HTMLButtonElement>
> {
  render() {
    return (
      <button className={styles.button} type="button" {...this.props}>
        {this.props.children}
      </button>
    );
  }
}
