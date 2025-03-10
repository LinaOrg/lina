import { Image } from "@/shared/ui";
import React from "react";
import classes from "./standards.module.scss";

export const Standards = () => {
  return (
    <section className={classes.root}>
      <Image src={"/images/standard-4.png"} alt={""} width={122} height={155} />
      <Image src={"/images/standard-3.png"} alt={""} width={193} height={155} />
      <Image src={"/images/standard-2.png"} alt={""} width={155} height={155} />
      <Image src={"/images/standard-1.png"} alt={""} width={170} height={152} />
    </section>
  );
};
