import { Title } from "@/shared/ui";
import styles from "./validityDesktop.module.scss";

export const ValidityDesktop = () => {
    return (
        <div className={styles.container}>
            <div className={styles.pic}>
                <img src="/images/hands.png" alt="" />
            </div>
            <div className={styles.text}>
                <div className={styles.title}>
                    <Title className={styles.titleText}>اسم رمز لینا</Title>
                    <div className={styles.topContent}>
                        <span><img src="/images/check.svg" alt="" /></span>
                        <div className={styles.textBody}>
                            حفظ کیفیت بالا و تضمین سلامت محصولات، هدف همیشگی‌مان بوده است. تیم لینا با به‌کارگیری دانش
                            و تجربه خبره‌های صنعت مواد غذایی ایران، توانسته تا مسیر روبه‌رشدش را هموار‌تر کند. درک صحیح از نیاز مصرف کننده، کمک‌مان کرد تا بهترین فرمول تن‌درستی را کشف کنیم و آن را چاشنی ثابت تمام محصولات‌مان قرار دهیم. پایبندی به این اصول، ماموریت دوست‌داشتنی ما خواهد بود.
                        </div>
                    </div>

                    <Title className={styles.titleText}>به سوی فردایی خوشمزه‌تر</Title>
                    <div className={styles.topContent}>
                        <span><img src="/images/Heand, Love, Heart.svg" alt="" /></span>
                        <div className={styles.textBody}>
                            ما آینده لینا را به وسعت سبد غذایی سرتاسر جهان تصور کرده‌ایم. قول می‌دهیم که تا چند سال آینده، نیاز‌های میان‌وعده‌تان را با محصولات‌مان پاسخ دهیم. معتقدیم که سلامت، جزئی از فرهنگ غذایی ایرانیان بوده و در تحقق آن ذره‌ای کم نخواهیم گذاشت. شما را تنها نمی‌گذاریم تا روزی که با کیفیت‌ترین سفره غذایی زندگی‌تان را پهن کنیم.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}