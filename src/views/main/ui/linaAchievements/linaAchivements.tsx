import classes from "./linaAchivements.module.scss";
import clsx from "clsx";
import { Swiper } from "@/shared/ui";
import { LinaStory } from "./linaStory";
import { LinaInventions } from "./linaInventions";
import { LinaCertifications } from "./linaCertifications";
export const LinaAchievements = () => {
  const classNames = clsx("container", classes.root);
  return (
    <section className={classNames}>
      <Swiper
        slidesPerView={1}
        swiperSlides={[
          <LinaStory />,
          <LinaInventions />,
          <LinaCertifications />,
        ]}
      />
    </section>
  );
};
