import React from "react";

import styles from "./button.module.scss";

export const Button: React.FC<React.ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  return (
    <button className={styles.button} type="button" {...props}>
      {props.children}
    </button>
  );
};
