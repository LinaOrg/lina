import React from "react";
import Arrow from "../../../../shared/ui/icons/arrow"; 
import styles from "./conditions.module.scss";
import { Title } from "@/shared/ui";

export const Conditions: React.FC = () => {
  const conditions = [
    "سال تولد شما بعد از 1375 باشد.",
    "حداقل یک مدرک کارشناسی در رشته‌‌های مدیریت منابع انسانی.",
    "ساکن پایتخت باشید.",
  ];

  
  
  return (
    <div className={styles.container}>
      <Title size="lg" className={styles.title}>شرایط مورد نیاز</Title>
      <Arrow  className={styles.curlyArrow} />
      <div className={styles.shadowTop}></div>
      <div className={styles.contentBox}>
        <ul>
          {conditions.map((condition, index) => (
            <li key={index}>{condition}</li>
          ))}
        </ul>
      </div>
      <div className={styles.shadowBottom}></div>
    </div>
  );
};
