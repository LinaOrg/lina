"use client";
import { Button, Image } from "@/shared/ui";
import classes from "./linaAchivements.module.scss";
import { useDeviceStore } from "@/shared/model";
export const LinaCertifications = () => {
  const { isMobile } = useDeviceStore();
  return (
    <>
      <div className={classes.titleSection}>
        <h3 className="title">گواهی‌نامه‌های لینا</h3>
      </div>
      <div className={classes.itemsWrapper}>
        <Image
          width={isMobile ? 69 : 155}
          height={isMobile ? 94 : 190}
          src="/images/iso45001.png"
          alt="گواهی نامه ایزو 45001"
        />
        <Image
          width={isMobile ? 69 : 155}
          height={isMobile ? 94 : 190}
          src="/images/drug.png"
          alt="گواهی نامه سازمان غذا و دارو"
        />
        <Image
          width={isMobile ? 69 : 155}
          height={isMobile ? 94 : 190}
          src="/images/iso22000.png"
          alt="گواهی نامه ایزو 22000"
        />
      </div>
      <div className={classes.bottomSection}>
        <Button size={isMobile ? "xs" : "md"}>نمایش بیشتر</Button>
      </div>
    </>
  );
};
