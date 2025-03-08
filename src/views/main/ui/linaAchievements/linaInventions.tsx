import { Image } from "@/shared/ui";
import classes from "./linaAchivements.module.scss";
export const LinaInventions = () => {
  return (
    <>
      <div className={classes.titleSection}>
        <h3 className="title">اختراعات‌ لینا</h3>
      </div>
      <div className={classes.itemsWrapper}>
        <Image
          width={155}
          height={190}
          src="/images/america.png"
          alt="امریکا"
          layout="responsive"
        />
        <Image
          width={155}
          height={190}
          src="/images/certificate.png"
          alt="اروپا"
          layout="responsive"
        />
        <Image
          width={155}
          height={190}
          src="/images/iran.png"
          alt="ایران"
          layout="responsive"
        />
      </div>
    </>
  );
};
