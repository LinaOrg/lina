"use client";
import { Swiper as SwiperWrapper, SwiperSlide } from "swiper/react";
import { Pagination,Navigation } from "swiper/modules";
import "swiper/css";
import { FC } from "react";
import { TSwiperProps } from "./swiper.types";

export const Swiper: FC<TSwiperProps> = ({
  swiperSlides,
  slidesPerView,
  spaceBetween = 20,
  isPagination = false,
  isNavigation = false,
}) => {
  return (
    <SwiperWrapper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      pagination={{
        enabled: isPagination,
      }}
      navigation={{
        enabled: isNavigation
      }}
      modules={[Pagination,Navigation]}>
      {swiperSlides.map((item, index) => (
        <SwiperSlide key={index}>{item}</SwiperSlide>
      ))}
    </SwiperWrapper>
  );
};
