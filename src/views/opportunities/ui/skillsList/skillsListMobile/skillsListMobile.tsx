import { Divider, Title } from "@/shared/ui";
import styles from "./skillsListMobile.module.scss"
export const SkillsListMobile = () => {

    const title = "مهارت‌هایی که باید با آنها آشنا باشید";
    const skills = [
      "آشنا به فرآیند منابع انسانی",
      "تشکیل پرونده‌های پرسنلی، ثبت اطلاعات پرسنل در سیستم، ثبت تردد پرسنل",
      "امور مرتبط با آموزش",
      "قوانین تامین اجتماعی و قوانین کار",
      "نرم‌افزار بیمه تامین اجتماعی",
      "نامه‌نگاری، بایگانی و پیگیری درخواست‌های سازمانی پرسنل"
    ];
  
    return ( <>
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <Title size="lg" className={styles.title}>
            {title}
          </Title>
          <div>
            <Divider width="100%" height="1px" className={styles.customDivider} />
          </div>
          <ul className={styles.items}>
            {skills.map((skill, index) => (
              <li key={index} >{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
    </> );
}
 
