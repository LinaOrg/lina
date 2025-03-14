import React, { useState } from "react";
import { clsx } from "clsx";
import classes from "./header.module.scss";
import { Button, Logo, MenuIcon } from "@/shared/ui";
import { Menus } from "./menus";

export const HeaderMobile = () => {
  const classNames = clsx("container", classes.header);
  const [open, setOpen] = useState(false);
  return (
    <header className={classNames}>
      <Button variant="text" onClick={() => setOpen(true)}>
        <MenuIcon />
      </Button>
      <div className={`${classes.drawer} ${open ? classes.open : ""}`}>
        <span className={classes["close-btn"]} onClick={() => setOpen(false)}>
          ×
        </span>
        <Menus />
      </div>
      <Logo />
    </header>
  );
};
