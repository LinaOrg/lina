import React, { FC, ReactNode } from "react";
import classes from "./bgBox.module.scss";
import Image from "next/image";
import clsx from "clsx";
import { CircleArrowIcon } from "../icons";

type TProps = {
  children: ReactNode;
  className?: string;
};
export const BgBox: FC<TProps> = ({ children, className }) => {
  const classNames = clsx(className, classes.root);
  return (
    <div className={classNames}>
      {children}
      <Image src="/images/rect-bg.svg" alt="rect-bg" fill />
      <div className={classes.circleArrow}>
        <CircleArrowIcon />
      </div>
    </div>
  );
};
