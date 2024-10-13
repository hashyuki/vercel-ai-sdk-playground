import { InputHTMLAttributes } from "react";

import styles from "./text-input.module.css";

/* -------------------------------------------------------------------------------------------------
 * TextInput
 * -----------------------------------------------------------------------------------------------*/

export type TextInputProps = Omit<
  InputHTMLAttributes<HTMLInputElement>,
  "size"
> & {
  size?: "sm" | "md" | "lg";
};

export function TextInput({ size = "md", ...props }: TextInputProps) {
  const className = [styles.textInput, styles[size]].join(" ");

  return <input type="text" className={className} {...props} />;
}
