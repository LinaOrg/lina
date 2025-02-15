import React from "react";
import { clsx } from "clsx";
import classes from "./header.module.scss";
import { Logo } from "@/shared/ui";
import { Menus } from "./menus";
import { UserAcount } from "./userAcount";

export const Header = () => {
  const classNames = clsx("container", classes.header);
  return (
    <header className={classNames}>
      <Logo />
      <Menus />
      <UserAcount />
    </header>
  );
};
