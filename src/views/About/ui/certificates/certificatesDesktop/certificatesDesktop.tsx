import { Button } from "@/shared/ui";
import styles from "./certificatesDesktop.module.scss";
import { Swiper, SwiperSlide } from 'swiper/react';



import 'swiper/css/pagination';
import 'swiper/css/navigation';


import {  Navigation } from 'swiper/modules';

export const CertificateDesktop = () => {
    return (
        <div className={styles.container}>
            <div  className={styles.btnBox}  >
            <Button    className={styles.btn}>
            اختراعات لینا
          </Button>  <Button    className={styles.btn}>
          افتخارات لینا
          </Button>  <Button   className={styles.btn}>
          گواهی‌نامه‌های لینا
          </Button>
            </div>
            <div className={styles.swiper}>
                <Swiper
                    pagination={{
                        type: 'fraction',
                    }}
                    navigation={true}
                    modules={[ Navigation]}
                    className={styles.mySwiper}
                >
                    <SwiperSlide>
                    <img src="/images/certificates2.png" alt="" />
                    </SwiperSlide><SwiperSlide>
                    <img src="/images/certificates2.png" alt="" />
                    </SwiperSlide><SwiperSlide>
                    <img src="/images/certificates2.png" alt="" />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
}
