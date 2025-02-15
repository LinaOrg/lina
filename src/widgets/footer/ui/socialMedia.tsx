import Link from "next/link";
import React from "react";
import classes from "./footer.module.scss";
import { AparatIcon, InstagramIcon, LinkedInIcon } from "@/shared/ui";
import clsx from "clsx";
export const SocialMedia = () => {
  const classNames = clsx(classes.nav, classes.socialMedia);
  return (
    <nav className={classNames}>
      <Link href="/">
        <InstagramIcon />
      </Link>
      <Link href="/">
        <LinkedInIcon />
      </Link>
      <Link href="/">
        <AparatIcon />
      </Link>
    </nav>
  );
};
