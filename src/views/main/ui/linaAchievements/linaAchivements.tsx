"use client";
import classes from "./linaAchivements.module.scss";
import clsx from "clsx";
import { Button, Image, Swiper } from "@/shared/ui";
import { LinaStory } from "./linaStory";
import { LinaInventions } from "./linaInventions";
import { LinaCertifications } from "./linaCertifications";
import { useDeviceStore } from "@/shared/model";
import { useRef } from "react";
export const LinaAchievements = () => {
  const classNames = clsx("container", classes.root);
  const { isMobile } = useDeviceStore();
  const swiperRef = useRef<any>(null);
  return (
    <section className={classNames}>
      <div className={classes.uninons}>
        <Image
          src={"/images/right-union.svg"}
          alt=""
          width={isMobile ? 45 : 122}
          height={isMobile ? 118 : 264}
        />
        <Image
          src={"/images/left-union.svg"}
          alt=""
          width={isMobile ? 45 : 122}
          height={isMobile ? 118 : 264}
        />
      </div>
      <Swiper
        onSwiper={(swiper) => (swiperRef.current = swiper)}
        slidesPerView={1}
        swiperSlides={[
          <LinaStory />,
          <LinaInventions />,
          <LinaCertifications />,
        ]}
      />
      <Button
        variant="text"
        onClick={() => swiperRef?.current?.slidePrev()}
        className={clsx(classes.navigation, classes.prev)}>
        <Image
          src={"/images/croton-right-arrow.svg"}
          alt=""
          width={!isMobile ? 92 : 28}
          height={!isMobile ? 113 : 28}
        />
      </Button>
      <Button
        variant="text"
        onClick={() => swiperRef?.current?.slideNext()}
        className={clsx(classes.navigation, classes.next)}>
        <Image
          src={"/images/croton-left-arrow.svg"}
          alt=""
          width={!isMobile ? 92 : 28}
          height={!isMobile ? 113 : 28}
        />
      </Button>
    </section>
  );
};
