import React from "react";

import styles from "./input-file.module.scss";

type IInputFileProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
};

export const InputFile = React.forwardRef<HTMLInputElement, IInputFileProps>(
  function InputFile(props, ref) {
    return (
      <label className={styles.label}>
        {props.label}
        <input
          ref={ref}
          className={styles.input}
          type="file"
          {...props}
          onChange={props.onChange}
        />
        <span className={styles.switchSlider} />
      </label>
    );
  }
);
