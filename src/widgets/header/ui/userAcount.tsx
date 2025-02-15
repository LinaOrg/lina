import { CallIcon, ProfileIcon, SearchIcon } from "@/shared/ui";
import Link from "next/link";
import React from "react";
import classes from "./header.module.scss";
import clsx from "clsx";

export const UserAcount = () => {
  const classNames = clsx(classes.nav, classes.userAccount);
  return (
    <nav className={classNames}>
      <Link href="/">
        <CallIcon />
      </Link>
      <Link href="/">
        <SearchIcon />
      </Link>
      <Link href="/">
        <ProfileIcon />
      </Link>
    </nav>
  );
};
