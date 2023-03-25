import React from "react";
import cn from "classnames";

import styles from "./input-text.module.scss";

interface InputTextProps {
  inputprops: React.InputHTMLAttributes<HTMLInputElement>;
  innerref: React.Ref<HTMLInputElement>;
}

class InputText extends React.Component<InputTextProps> {
  children: React.ReactNode;
  inputProps: React.InputHTMLAttributes<HTMLInputElement>;

  constructor(props: InputTextProps) {
    super(props);
    const { children, ...rest } = props.inputprops;

    this.children = children;
    this.inputProps = rest;
  }

  render() {
    return (
      <div
        className={cn(styles.inputLayout, {
          [styles.relativeInputLayout]: this.children,
        })}
      >
        <input
          className={cn(styles.input, this.inputProps.className)}
          type="text"
          ref={this.props.innerref}
          {...this.inputProps}
        />

        {this.children && (
          <div className={styles.inputChildren}>{this.children}</div>
        )}
      </div>
    );
  }
}

export const InputTextRefProvider = React.forwardRef<
  HTMLInputElement,
  React.InputHTMLAttributes<HTMLInputElement>
>((props, ref) => <InputText innerref={ref} inputprops={props} />);
