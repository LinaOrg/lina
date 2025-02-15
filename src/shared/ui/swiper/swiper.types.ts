import { ReactNode } from "react";
import { SwiperProps } from "swiper/react";

export type TSwiperProps = SwiperProps & {
  swiperSlides: ReactNode[];
  isPagination?: boolean;
};
