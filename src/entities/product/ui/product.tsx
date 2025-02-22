import React from "react";
import classes from "./product.module.scss";
import { Image } from "@/shared/ui";
import { IProduct } from "../model";
import Link from "next/link";

export const Product: React.FC<IProduct> = ({
  category,
  description,
  id,
  image,
  name,
}) => {
  return (
    <article className={classes.root}>
      <div className={classes.imageWrapper}>
        <Link href="/">
          <Image
            className={classes.productImage}
            src={image}
            alt={name}
            width={381}
            height={407}
          />
        </Link>
      </div>
      <div className={classes.contentWrapper}>
        <Link href="/">
          <h3>{name}</h3>
        </Link>
        <p>{description}</p>
      </div>
    </article>
  );
};
