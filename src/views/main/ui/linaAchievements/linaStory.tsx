"use client";
import { useDeviceStore } from "@/shared/model";
import classes from "./linaAchivements.module.scss";
import { Button } from "@/shared/ui";
export const LinaStory = () => {
  const { isMobile } = useDeviceStore();
  return (
    <>
      <div className={classes.titleSection}>
        <h3 className="title">لینا، داستان یک اردوی خوشمزه</h3>
      </div>
      <div className={classes.itemsWrapper}>
        <p>
          مسیر ماجراجویی‌مان در گروه لینا با تولید محصولات سالم و خلق طعم‌های
          خاص شروع شد. هدفی که از همان روزهای اول با لینا متولد شد و مفتخریم که
          امروز، نقشی مهم در صنعت غذایی کشور ایفا می‌کنیم. آرزوهای‌مان برآورده
          می‌شود وقتی که این مسیر به میان وعده‌های‌تان راه پیدا کند و فرصت آن
          راداشته باشیم تا سلامتی‌تان را ارج بنهیم.
        </p>
      </div>
      <div className={classes.bottomSection}>
        <Button size={isMobile ? "xs" : "md"}>ادامه داستان</Button>
      </div>
    </>
  );
};
