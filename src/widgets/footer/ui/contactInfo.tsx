import Link from "next/link";
import React from "react";
import classes from "./footer.module.scss";
import { AparatIcon, EmailIcon, LinkedInIcon, PhoneIcon } from "@/shared/ui";
import clsx from "clsx";
export const ContactInfo = () => {
  const classNames = clsx(classes.nav, classes.contactInfo);
  return (
    <nav className={classNames}>
      <Link href="/">
        <PhoneIcon />
        <span>021_88835264</span>
      </Link>
      <Link href="/">
        <EmailIcon />
        <span>Info@Linagroup.org</span>
      </Link>
    </nav>
  );
};
