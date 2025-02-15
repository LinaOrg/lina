import Image from "next/image";
import Link from "next/link";
import React from "react";
import classes from "./logo.module.scss";

export const Logo = () => {
  return (
    <Link href="/" className={classes.logo}>
      <Image alt="لینا" src={"/images/logo.svg"} width={60} height={50} />
    </Link>
  );
};
