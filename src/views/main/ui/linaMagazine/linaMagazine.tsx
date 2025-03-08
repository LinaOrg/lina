import classes from "./linaMagazine.module.scss";
import clsx from "clsx";
import { MagazineCard } from "@/entities";
import Link from "next/link";
import { Swiper } from "@/shared/ui";
export const LinaMagazine = () => {
  const classNames = clsx("container", classes.root);
  return (
    <section className={classNames}>
      <div className={classes.titleSection}>
        <h3 className="title">مجله لینا</h3>
        <Link className="textLink primary" href="/">
          مشاهده بیشتر
        </Link>
      </div>
      <div className={classes.cardList}>
        <Swiper
          slidesPerView={4}
          breakpoints={{
            365: {
              slidesPerView: 1.2,
            },
            992: {
              slidesPerView: 4,
            },
          }}
          swiperSlides={[
            <MagazineCard />,
            <MagazineCard />,
            <MagazineCard />,
            <MagazineCard />,
            <MagazineCard />,
          ]}
        />
      </div>
    </section>
  );
};
