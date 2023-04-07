import React from "react";
import cn from "classnames";

import styles from "./input-text.module.scss";

export const InputText = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>(function InputText(props, ref) {
  const { children, ...rest } = props;

  return (
    <div
      className={cn(styles.inputLayout, {
        [styles.relativeInputLayout]: children,
      })}
    >
      <input
        className={cn(styles.input, props.className)}
        type="text"
        ref={ref}
        {...rest}
      />
      {children && <div className={styles.inputChildren}>{children}</div>}
    </div>
  );
});
