import classes from "./footer.module.scss";
import { Menus } from "./menus";
import { SocialMedia } from "./socialMedia";
import { ContactInfo } from "./contactInfo";
import { Image } from "@/shared/ui";

export const Footer = () => {
  return (
    <>
      <footer className={classes.footer}>
        <h1>با لینا، خوشحالینا!</h1>
        <Menus />
        <SocialMedia />
        <ContactInfo />
        <Image alt="footer-bg" src="/images/footer-bg.png" fill />
      </footer>
      <div className={classes.copyRight}>
        <p>
          تمامی حقوق مادی و معنوی این سایت متعلق به سازمان فروش و پخش لینا
          می‌باشد
        </p>
      </div>
    </>
  );
};
