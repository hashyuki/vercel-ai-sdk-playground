import { Slot } from "@radix-ui/react-slot";
import { ButtonHTMLAttributes } from "react";

import styles from "./button.module.css";

/* -------------------------------------------------------------------------------------------------
 * Button
 * -----------------------------------------------------------------------------------------------*/

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  size?: "sm" | "md" | "lg" | "icon";
  asChild?: boolean;
};

export function Button({
  size = "md",
  asChild = false,
  ...props
}: ButtonProps) {
  const Comp = asChild ? Slot : "button";
  const className = [styles.button, styles[size]].join(" ");

  return <Comp className={className} {...props} />;
}
