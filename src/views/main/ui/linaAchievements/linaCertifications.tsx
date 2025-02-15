import classes from "./linaAchivements.module.scss";
import Image from "next/image";
export const LinaCertifications = () => {
  return (
    <>
      <div className={classes.titleSection}>
        <h3 className="title">گواهی‌نامه‌های لینا</h3>
      </div>
      <div className={classes.itemsWrapper}>
        <Image
          width={155}
          height={190}
          src="/images/iso45001.png"
          alt="گواهی نامه ایزو 45001"
        />
        <Image
          width={155}
          height={190}
          src="/images/drug.png"
          alt="گواهی نامه سازمان غذا و دارو"
        />
        <Image
          width={155}
          height={190}
          src="/images/iso22000.png"
          alt="گواهی نامه ایزو 22000"
        />
      </div>
    </>
  );
};
