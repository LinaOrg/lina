import React from "react";
import { Divider, Title } from "@/shared/ui";
import styles from "./jobPosting.module.scss";



export const JobPosting: React.FC = () => {
  const title = "کارشناس منابع انسانی";

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <Title size="lg" className={styles.title}>
            {title}
          </Title>
          <div>
          <Divider width="100%" height="2px" className={styles.customDivider} />
            عاشق ارتباط‌گیری با افراد هستید و برای همکاران خود سنگ تمام می‌گذارید؟
          </div>
          <div>
            نیازمند یک{" "}
            <span className={styles.localSpan}>«کارشناس منابع انسانی»</span> هستیم که
            با شناسایی و جذب بهترین استعدادها، به سرمایه انسانی لینا اعتبار
            ببخشد، آموزش و ارزیابی کارکنان را در اولویت قرار دهد و با بهبود
            فرآیندهای استخدامی، نیروی کار را به موتور محرک سازمان تبدیل کند. اگر
            دغدغه ایجاد محیطی را دارید که حمایت از کارکنان آنجا، حرف اول را بزند،
            شرایط زیر را بررسی کنید.
          </div>
        </div>
        <div className={styles.imageContainer}>
          <img src={"/images/handShake.png"} alt="Hand Shaking" />
        </div>
      </div>
    </div>
  );
};


