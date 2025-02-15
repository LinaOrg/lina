import { Swiper } from "@/shared/ui";
import classes from "./linaProducts.module.scss";
import clsx from "clsx";
import { Product } from "./product";

export const LinaProducts = () => {
  const classNames = clsx("container", classes.root);
  return (
    <section className={classNames}>
      <div className={classes.titleSection}>
        <h3 className="title">محصولات لینا</h3>
        <p className={classes.subTitle}>
          جدیدترین محصولاتی که ذائقه‌تان را شگفت‌زده می‌کنند‌‍
        </p>
      </div>
      <Swiper
        slidesPerView={1}
        isPagination={true}
        swiperSlides={[<Product />, <Product />, <Product />, <Product />]}
      />
    </section>
  );
};
