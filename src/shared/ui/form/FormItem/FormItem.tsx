import React from "react";
import cn from "classnames";

import styles from "./form-item.module.scss";

export type IFormItemProps = {
  tag: "input" | "select";
  field: string;
  value?: string;
  name: string;
  type?: string;
  error?: string;
  options?: string[];
  onChange?: (e: React.ChangeEvent) => void;
};

export const FormItem = React.forwardRef<HTMLElement, IFormItemProps>(
  function FormItem(props, ref) {
    return (
      <label className={cn(styles.label, { [styles.errorLabel]: props.error })}>
        {props.field}
        {props.tag === "input" ? (
          <input
            ref={ref as React.ForwardedRef<HTMLInputElement>}
            className={styles.formItem}
            type={props.type}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
          />
        ) : (
          <select
            ref={ref as React.ForwardedRef<HTMLSelectElement>}
            className={styles.formItem}
            name={props.name}
            value={props.value}
            onChange={props.onChange}
          >
            {props.options?.map((option) => (
              <option key={option}>{option}</option>
            ))}
          </select>
        )}
        <div className={styles.error}>{props.error}</div>
      </label>
    );
  }
);
