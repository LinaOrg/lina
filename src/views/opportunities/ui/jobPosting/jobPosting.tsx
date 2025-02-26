"use client";

import React, { useState, useEffect } from "react";
import { Divider, Title } from "@/shared/ui";
import styles from "./jobPosting.module.scss";

export const JobPosting: React.FC = () => {
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 402);


  const [jobTitle, setJobTitle] = useState("کارشناس منابع انسانی");
  const [preContentText, setPreContentText] = useState("عاشق ارتباط‌گیری با افراد هستید و برای همکاران خود سنگ تمام می‌گذارید؟");
  const [textContent, setTextContent] = useState(
    'نیازمند یک <span class="' + styles.localSpan + '">«کارشناس منابع انسانی»</span> هستیم که با شناسایی و جذب بهترین استعدادها، به سرمایه انسانی لینا اعتبار ببخشد، آموزش و ارزیابی کارکنان را در اولویت قرار دهد و با بهبود فرآیندهای استخدامی، نیروی کار را به موتور محرک سازمان تبدیل کند. اگر دغدغه ایجاد محیطی را دارید که حمایت از کارکنان آنجا، حرف اول را بزند، شرایط زیر را بررسی کنید.'
  );

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 991);
    };

    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        {isMobile ? (
          <>  
            <Title size="lg" className={styles.title}>{jobTitle}</Title>
            <div className={styles.imageContainer}>
              <img src={"/images/handShake.png"} alt="Hand Shaking" />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.preContent}>
                {preContentText}
              </div> 
              <Divider width="60%" height="1px" className={styles.customDivider} />
              <div className={styles.textContent} dangerouslySetInnerHTML={{ __html: textContent }} />
            </div>
          </>
        ) : (
          <>
            <div className={styles.textContainer}>
              <Title size="lg" className={styles.title}>{jobTitle}</Title>
              <Divider width="70%" height="1px" className={styles.customDivider} />
              <div className={styles.preContent}>
                {preContentText}
              </div>
              <div className={styles.textContent} dangerouslySetInnerHTML={{ __html: textContent }} />
            </div>
            <div className={styles.imageContainer}>
              <img src={"/images/handShake.png"} alt="Hand Shaking" />
            </div>
          </>
        )}
      </div>
    </div>
  );

};
