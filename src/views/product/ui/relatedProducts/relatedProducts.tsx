"use client";
import React, { useRef } from "react";
import classes from "./relatedProducts.module.scss";
import { Button, Image, Swiper } from "@/shared/ui";
import { Product } from "@/entities";
import clsx from "clsx";
import { useDeviceStore } from "@/shared/model";

export const RelatedProducts = () => {
  const swiperRef = useRef<any>(null);
  const { isMobile } = useDeviceStore();
  return (
    <section className={classes.root}>
      <div className={classes.titleWrapper}>
        <h4 className="title">دیگر رفیق‌های ترد و خوشمزه</h4>
      </div>
      <div className={classes.swiperWrapper}>
        <Swiper
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          className={classes.swiper}
          slidesPerView={3}
          breakpoints={{
            320: { slidesPerView: 2 },
            991: { slidesPerView: 3 },
          }}
          swiperSlides={[
            <Product
              description="لوله‌های پوشیده از ذرت و بدون رنگ مصنوعی"
              image="/images/lina-lulei.png"
              name="اسنک لوله‌ای لینا"
              imageWidth={!isMobile ? 220 : 109}
              imageHeight={!isMobile ? 270 : 129}
            />,
            <Product
              description="لوله‌های پوشیده از ذرت و بدون رنگ مصنوعی"
              image="/images/lina-lulei.png"
              name="اسنک لوله‌ای لینا"
              imageWidth={!isMobile ? 220 : 109}
              imageHeight={!isMobile ? 270 : 129}
            />,
            <Product
              description="لوله‌های پوشیده از ذرت و بدون رنگ مصنوعی"
              image="/images/lina-lulei.png"
              name="اسنک لوله‌ای لینا"
              imageWidth={!isMobile ? 220 : 109}
              imageHeight={!isMobile ? 270 : 129}
            />,
            <Product
              description="لوله‌های پوشیده از ذرت و بدون رنگ مصنوعی"
              image="/images/lina-lulei.png"
              name="اسنک لوله‌ای لینا"
              imageWidth={!isMobile ? 220 : 109}
              imageHeight={!isMobile ? 270 : 129}
            />,
            <Product
              description="لوله‌های پوشیده از ذرت و بدون رنگ مصنوعی"
              image="/images/lina-lulei.png"
              name="اسنک لوله‌ای لینا"
              imageWidth={!isMobile ? 220 : 109}
              imageHeight={!isMobile ? 270 : 129}
            />,
            <Product
              description="لوله‌های پوشیده از ذرت و بدون رنگ مصنوعی"
              image="/images/lina-lulei.png"
              name="اسنک لوله‌ای لینا"
              imageWidth={!isMobile ? 220 : 109}
              imageHeight={!isMobile ? 270 : 129}
            />,
          ]}
        />
        <Button
          variant="text"
          onClick={() => swiperRef?.current?.slidePrev()}
          className={clsx(classes.navigation, classes.prev)}>
          <Image
            src={"/images/navigationArrow.svg"}
            alt=""
            width={!isMobile ? 58 : 28}
            height={!isMobile ? 58 : 28}
          />
        </Button>
        <Button
          variant="text"
          onClick={() => swiperRef?.current?.slideNext()}
          className={clsx(classes.navigation, classes.next)}>
          <Image
            src={"/images/navigationArrow.svg"}
            alt=""
            width={!isMobile ? 58 : 28}
            height={!isMobile ? 58 : 28}
          />
        </Button>
      </div>
    </section>
  );
};
