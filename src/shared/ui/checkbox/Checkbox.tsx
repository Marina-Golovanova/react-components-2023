import React from "react";

import styles from "./checkbox.module.scss";

export type ICheckboxProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export const Checkbox = React.forwardRef<HTMLInputElement, ICheckboxProps>(
  function InputCheckbox(props, ref) {
    return (
      <label className={styles.label}>
        <input
          ref={ref}
          className={styles.checkboxInput}
          type="checkbox"
          {...props}
        />
        {props.label}
        {props.error && (
          <div className={styles.checkboxError}>{props.error}</div>
        )}
      </label>
    );
  }
);
