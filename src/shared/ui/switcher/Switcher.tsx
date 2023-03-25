import React from "react";

import styles from "./switcher.module.scss";

type SwitcherProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export const Switcher = React.forwardRef<HTMLInputElement, SwitcherProps>(
  function Switcher(props, ref) {
    return (
      <label className={styles.switch}>
        {props.label}
        <input
          ref={ref}
          className={styles.switchInput}
          type="checkbox"
          onChange={props.onChange}
          {...props}
        />
        <span className={styles.switchSlider} />
      </label>
    );
  }
);
