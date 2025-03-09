import { Button, Title } from "@/shared/ui";
import styles from "./linaStoryDesktop.module.scss";


export const LinaStoryDesktop = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <Title>قصه <span className={styles.localSpan}>لینا</span> از کجا شروع شد؟</Title>
      </div>
      <div className={styles.content}>
        <div className={styles.text}>
          <p>
            محصولی باکیفیت و خلق برندی شناخته‌شده در سطح جهانی، دغدغه روزهای جوانی بنیانگذار لینا بود. اگر خاطراتی خوبی از اسنک «مریخی» داشته باشید، بد نیست بدانید که اولین تولید انبوه‌مان با این برند انجام شد. زمانی که با تولید اسنکی جدید و ارائه طعم مطلوب و بسته‌بندی خاص، یکی از پرفروش‌ترین اسنک‌ها را به بازار عرضه کردیم. استفاده از رنگ‌های مصنوعی در اسنک‌های آن زمان و خطرات این مواد افزودنی، تیم تحقیقاتی‌مان را به فکر واداشت تا اولین اسنک با رنگ طبیعی را در کشور تولید کنند.
          </p>
     <div className={styles.btnS}>
     <Button variant="filled"  color="primary" className={styles.btn}>
          تماس با ما
          </Button>  <Button variant="filled"  color="primary" className={styles.btn}>
          همکاری با ما
          </Button>
     </div>
        </div>
        <div className={styles.imageWrapper}>
          <img src="/images/linaStory1.png" alt="Lina Story Image" />
          <img src="/images/linaStory2.png" alt="Lina Story Image 2" />
        </div>
      </div>
    </div>
  );
}


