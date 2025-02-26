"use client";

import React, { useState, useEffect } from "react";
import { Divider, Title } from "@/shared/ui";
import styles from "./jobPosting.module.scss";

export const JobPosting: React.FC = () => {
  const title = "کارشناس منابع انسانی";
  const [isMobile, setIsMobile] = useState(() => window.innerWidth <= 402);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 402);
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
            <Title size="lg" className={styles.title}>{title}</Title>
            <div className={styles.imageContainer}>
              <img src={"/images/handShake.png"} alt="Hand Shaking" />
            </div>
            <div className={styles.textContainer}>
              <div className={styles.preContent}>
                عاشق ارتباط‌گیری با افراد هستید و برای همکاران خود سنگ تمام می‌گذارید؟
              </div> 
              <Divider width="70%" height="2px" className={styles.customDivider} />
              <div className={styles.textContent}>
                نیازمند یک <span className={styles.localSpan}>«کارشناس منابع انسانی»</span> هستیم که با شناسایی و جذب بهترین استعدادها، به سرمایه انسانی لینا اعتبار ببخشد...
              </div>
            </div>
          </>
        ) : (
          <>
            <div className={styles.textContainer}>
              <Title size="lg" className={styles.title}>{title}</Title>
              <Divider width="70%" height="2px" className={styles.customDivider} />
              <div className={styles.preContent}>
                عاشق ارتباط‌گیری با افراد هستید و برای همکاران خود سنگ تمام می‌گذارید؟
              </div>
              <div className={styles.textContent}>
                نیازمند یک <span className={styles.localSpan}>«کارشناس منابع انسانی»</span> هستیم که با شناسایی و جذب بهترین استعدادها، به سرمایه انسانی لینا اعتبار ببخشد...
              </div>
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
