import React from 'react';
import styles from "./imageListDesktop.module.scss";
import { Title } from '@/shared/ui';

const images = [
  "/images/imageListItem1.png",
  "/images/imageListItem2.png",
  "/images/imageListItem3.png",
  "/images/imageListItem4.png",
];

const imageTexts = [
  "تنظیم قرارداد‌ها",
  "محاسبه حقوق و دستمزد",
  "پیگیری امور بیمه کارکنان",
  "ارزیابی عملکرد کارکنان",
];

export const ImageListDesktop = () => {
  return (
    <div className={styles.container}>
      <Title size="lg" className={styles.title}>
        ارزشی که برای ما خلق می‌کنید
      </Title>
      <div className={styles.imageWrapper}>
        {images.map((src, index) => (
          <div key={index} className={styles.imageContainer}>
            <img src="/images/border-image.png" alt="border" className={styles.borderImg} />
            <img src={src} alt={`item-${index + 1}`} className={styles.image} />
            <span className={styles.imageText}>{imageTexts[index]}</span>
          </div>
        ))}
      </div>
    </div>
  );
};