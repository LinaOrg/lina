"use client";
import React, { useState } from "react";
import classes from "./nutritionFacts.module.scss";
import { Image, Swiper } from "@/shared/ui";
import { Thumbs } from "swiper/modules";
import "swiper/css/thumbs";
import { Slide } from "./slide";
import { useDeviceStore } from "@/shared/model";

export const NutritionFacts = () => {
  const { isMobile } = useDeviceStore();
  const [thumbsSwiper, setThumbsSwiper] = useState<any>();

  return (
    <section className={classes.root}>
      <div className={classes.titleWrapper}>
        <h4 className="title">حقایق ارزش غذایی</h4>
      </div>
      <div className={classes.sectionWrapper}>
        <div className={classes.sliderWrapper}>
          <Swiper
            className={classes.mainSlider}
            modules={[Thumbs]}
            swiperSlides={[
              <Slide />,
              <Slide />,
              <Slide />,
              <Slide />,
              <Slide />,
              <Slide />,
              <Slide />,
              <Slide />,
            ]}
            thumbs={{ swiper: thumbsSwiper }}
          />
          <Swiper
            modules={[Thumbs]}
            slidesPerView={5}
            breakpoints={{
              320: {
                spaceBetween: 10,
              },
              991: { spaceBetween: 20 },
            }}
            className={classes.thumbSlider}
            swiperSlides={[
              <Image
                src={"/images/thumb.png"}
                alt=""
                width={isMobile ? 21 : 50}
                height={isMobile ? 21 : 50}
              />,
              <Image
                src={"/images/thumb.png"}
                alt=""
                width={isMobile ? 21 : 50}
                height={isMobile ? 21 : 50}
              />,
              <Image
                src={"/images/thumb.png"}
                alt=""
                width={isMobile ? 21 : 50}
                height={isMobile ? 21 : 50}
              />,
              <Image
                src={"/images/thumb.png"}
                alt=""
                width={isMobile ? 21 : 50}
                height={isMobile ? 21 : 50}
              />,
              <Image
                src={"/images/thumb.png"}
                alt=""
                width={isMobile ? 21 : 50}
                height={isMobile ? 21 : 50}
              />,
              <Image
                src={"/images/thumb.png"}
                alt=""
                width={isMobile ? 21 : 50}
                height={isMobile ? 21 : 50}
              />,
              <Image
                src={"/images/thumb.png"}
                alt=""
                width={isMobile ? 21 : 50}
                height={isMobile ? 21 : 50}
              />,
              <Image
                src={"/images/thumb.png"}
                alt=""
                width={isMobile ? 21 : 50}
                height={isMobile ? 21 : 50}
              />,
            ]}
            onSwiper={(swiper) => setThumbsSwiper(swiper)}
          />
        </div>
        <div className={classes.container}>
          <div className={classes.header}>
            <h3>جدول حقایق تغذیه ای</h3>
            <p>(در ۳۰ گرم)</p>
          </div>
          <div className={classes.separator} />
          <div className={classes.nutritionList}>
            <div className={classes.nutritionHeader}>
              <span>ترکیبات غذایی</span>
              <span>مقدار</span>
            </div>
            {nutritionData.map((item, index) => (
              <div key={index} className={classes.nutritionItem}>
                <span className={classes.label}>{item.label}</span>
                <span className={classes.value}>{item.value}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

const nutritionData = [
  { label: "چربی کل", value: "۷.۸۰ گرم" },
  { label: "اسید چرب اشباع", value: "۳.۷۰ گرم" },
  { label: "اسید چرب ترانس", value: "۰.۰۰ گرم" },
  { label: "سدیم", value: "۱۸۰ میلی گرم" },
  { label: "کربوهیدرات", value: "۱۸.۰۹ گرم" },
  { label: "قند", value: "۵.۰۰ گرم" },
  { label: "پروتئین", value: "۳.۴۲ گرم" },
  { label: "انرژی", value: "۱۵۲.۷۸ کیلوکالری" },
];
