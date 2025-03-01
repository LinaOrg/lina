import React from "react";
import { clsx } from "clsx";
import classes from "./header.module.scss";
import { Logo } from "@/shared/ui";

export const HeaderMobile = () => {
  const classNames = clsx("container", classes.header);
  return (
    <header className={classNames}>
      <Logo />
    </header>
  );
};
