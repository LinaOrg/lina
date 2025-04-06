import { Button } from "@/shared/ui";
import styles from "./certificatesDesktop.module.scss";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper/modules";

export const CertificateDesktop = () => {
  return (
    <div className={styles.container}>
      <div className={styles.btnBox}>
        <Button className={styles.btn}>اختراعات لینا</Button>
        <Button className={styles.btn}>افتخارات لینا</Button>
        <Button className={styles.btn}>گواهی‌نامه‌های لینا</Button>
      </div>
      <div className={styles.swiper}>
        <Swiper
          navigation={{
            nextEl: `.${styles.customNext}`,
            prevEl: `.${styles.customPrev}`,
          }}
          modules={[Navigation]}
          className={styles.mySwiper}>
          <SwiperSlide>
            <img
              className={styles.customImage}
              src="/images/certificates2.png"
              alt="گواهی‌نامه"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.customImage}
              src="/images/certificates2.png"
              alt="گواهی‌نامه"
            />
          </SwiperSlide>
          <SwiperSlide>
            <img
              className={styles.customImage}
              src="/images/certificates2.png"
              alt="گواهی‌نامه"
            />
          </SwiperSlide>
        </Swiper>
        <div className={`${styles.customNav} ${styles.customPrev}`}>←</div>
        <div className={`${styles.customNav} ${styles.customNext}`}>→</div>
      </div>
    </div>
  );
};
