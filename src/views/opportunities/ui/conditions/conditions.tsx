import React from 'react';
import styles from "./conditions.module.scss";
export const Conditions: React.FC = () => {
  return (
    <>
  <div className={styles.container}>
  <div className={styles.shadowTop}></div>
  <div className={styles.contentBox}> 
     <div className={styles.topTrick}></div>
     <div className={styles.topTrickinner}></div>
    <ul>
      <li>سال تولد شما بعد از 1375 باشد.</li>
      <li>حداقل یک مدرک کارشناس در رشته‌‌های مدیریت منابع انسانی. </li>
      <li>ساکن پایتخت باشید.</li>
    </ul>
  </div>
  <div className={styles.shadowBottom}></div>
  </div>
    </>
  );
};
