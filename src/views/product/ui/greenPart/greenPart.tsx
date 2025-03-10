import React from "react";
import classes from "../product.module.scss";
import clsx from "clsx";
import { Image } from "@/shared/ui";

type TGreenPartItems = {
  title: string;
  image: string;
};

type TGreenPartProps = {
  title: string;
  items: TGreenPartItems[];
};

export const GreenPart = ({ items, title }: TGreenPartProps) => {
  const classNames = clsx("container", classes.greenPart);
  return (
    <section className={classNames}>
      <h5>{title}</h5>
      <ul>
        {items.map((item, index) => {
          return (
            <li key={index}>
              <Image
                src={item.image}
                alt={item.title}
                width={100}
                height={100}
              />
              <h4>{item.title}</h4>
            </li>
          );
        })}
      </ul>
    </section>
  );
};
