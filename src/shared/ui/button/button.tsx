"use client";

import { FC, ReactNode } from "react";
import classes from "./button.module.scss";
import clsx from "clsx";

type TButtonVariants = "filled" | "outlined" | "text";
type TButtonSize = "xl" | "lg" | "md" | "sm" | "xs";
type TButtonColor = "primary" | "secondary" | "nuetral";
type TButtonProps = {
  children: ReactNode;
  onClick?: () => void;
  disabled?: boolean;
  variant?: TButtonVariants;
  size?: TButtonSize;
  color?: TButtonColor;
  className?: string;
};

export const Button: FC<TButtonProps> = ({
  children,
  onClick,
  disabled = false,
  variant = "filled",
  size = "md",
  color = "primary",
  className,
}) => {
  const classNames = clsx(
    classes.button,
    classes[variant],
    classes[size],
    classes[color],
    className,
  );
  return (
    <button className={classNames} onClick={onClick} disabled={disabled}>
      {children}
    </button>
  );
};
