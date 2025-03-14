import Link from "next/link";
import React from "react";
import classes from "./header.module.scss";
export const Menus = () => {
  return (
    <nav className={classes.nav}>
      <Link href="/">خانه</Link>
      <Link href="/products">محصولات ما</Link>
      <Link href="/about">درباره ما</Link>
      <Link href="/opportunities">موقعیت های شغلی</Link>
      <Link href="/">سامانه ها</Link>
      <Link href="/">مجله</Link>
    </nav>
  );
};
