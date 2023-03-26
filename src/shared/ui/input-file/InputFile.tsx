import React from "react";
import cn from "classnames";

import styles from "./input-file.module.scss";

type IInputFileProps = React.InputHTMLAttributes<HTMLInputElement> & {
  label: string;
  error?: string;
};

export const InputFile = React.forwardRef<HTMLInputElement, IInputFileProps>(
  function InputFile(props, ref) {
    const [isImageSelected, setIsImageSelected] = React.useState(false);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      if (e.target.files) {
        setIsImageSelected(true);
        console.log(isImageSelected);
        if (props.onChange) {
          props.onChange(e);
        }
      }
    };

    return (
      <label
        className={cn(styles.label, {
          [styles.error]: props.error && !isImageSelected,
        })}
      >
        {props.error && !isImageSelected ? props.error : props.label}
        <input
          ref={ref}
          className={styles.input}
          type="file"
          {...props}
          onChange={handleChange}
        />
        <span className={styles.switchSlider} />
      </label>
    );
  }
);
