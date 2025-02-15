import classes from "./linaAchivements.module.scss";
import Image from "next/image";
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
        />
        <Image
          width={155}
          height={190}
          src="/images/certificate.png"
          alt="اروپا"
        />
        <Image width={155} height={190} src="/images/iran.png" alt="ایران" />
      </div>
    </>
  );
};
