import Link from "next/link";
import React from "react";
import classes from "./footer.module.scss"
export const Menus = () => {
  return (
    <nav className={classes.nav}>
      <Link href="/">صفحه نخست</Link>
      <Link href="/">درباره ما</Link>
      <Link href="/">مجله</Link>
      <Link href="/">تماس با ما</Link>
      <Link href="/">جوایز و افتخارات</Link>
    </nav>
  );
};
