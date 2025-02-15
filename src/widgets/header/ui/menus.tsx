import Link from "next/link";
import React from "react";
import classes from "./header.module.scss";
export const Menus = () => {
  return (
    <nav className={classes.nav}>
      <Link href="/">خانه</Link>
      <Link href="/">محصولات ما</Link>
      <Link href="/">درباره ما</Link>
      <Link href="/">سامانه ها</Link>
      <Link href="/">مجله</Link>
    </nav>
  );
};
