"use client";
import { Button, Image } from "@/shared/ui";
import classes from "./linaAchivements.module.scss";
import { useDeviceStore } from "@/shared/model";
export const LinaInventions = () => {
  const { isMobile } = useDeviceStore();
  return (
    <>
      <div className={classes.titleSection}>
        <h3 className="title">اختراعات‌ لینا</h3>
      </div>
      <div className={classes.itemsWrapper}>
        <Image
          width={isMobile ? 69 : 155}
          height={isMobile ? 94 : 190}
          src="/images/america.png"
          alt="امریکا"
        />
        <Image
          width={isMobile ? 69 : 155}
          height={isMobile ? 94 : 190}
          src="/images/certificate.png"
          alt="اروپا"
        />
        <Image
          width={isMobile ? 69 : 155}
          height={isMobile ? 94 : 190}
          src="/images/iran.png"
          alt="ایران"
        />
      </div>

      <div className={classes.bottomSection}>
        <Button size={isMobile ? "xs" : "md"}>نمایش بیشتر</Button>
      </div>
    </>
  );
};
