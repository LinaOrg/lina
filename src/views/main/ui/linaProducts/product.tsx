import { BgBox, CircleArrowIcon, Image } from "@/shared/ui";
import React from "react";
import classes from "./linaProducts.module.scss";

export const Product = () => {
  return (
    <div className={classes.product}>
      <BgBox className={classes.bgBox}>
        <h4>خانواده چیپس لینا</h4>
        <p>
          تنوع در چیپس‌های دلینا حرف اول را می‌زند. طعم‌های بی‌نظیری که به تردی
          و تازگی برگه‌های سیب‌زمینی اضافه شده و تجربه متفاوتی از چیپس را برای
          شما رقم می‌زنند. این چیپس‌ها با حداقل چربی و با سالم‌ترین و به‌روزترین
          روش فراوری جهان تولید می‌شوند.
        </p>
      </BgBox>
      <Image src={"/images/potato.png"} alt="" width={450} height={571} />
      <div className={classes.storiesWrapper}>
        <Image
          src={"/images/product-story.png"}
          alt=""
          width={108}
          height={108}
          className={classes.active}
        />
        <Image
          src={"/images/product-story.png"}
          alt=""
          width={108}
          height={108}
        />
        <Image
          src={"/images/product-story.png"}
          alt=""
          width={108}
          height={108}
        />
      </div>
    </div>
  );
};
