"use client";
import classes from "./footer.module.scss";
import { Menus } from "./menus";
import { SocialMedia } from "./socialMedia";
import { ContactInfo } from "./contactInfo";
import { Image } from "@/shared/ui";
import { useDeviceStore } from "@/shared/model";
import { CopyRight } from "./copyRight";

export const Footer = () => {
  const { isMobile } = useDeviceStore();
  console.log({ isMobile });
  return (
    <>
      <footer className={classes.footer}>
        <h1>با لینا، خوشحالینا!</h1>
        <Menus />
        {isMobile && <ContactInfo />}
        <SocialMedia />
        {!isMobile && <ContactInfo />}
        <Image alt="footer-bg" src="/images/footer-bg.png" fill />
        {isMobile && <CopyRight />}
      </footer>
      {!isMobile && <CopyRight />}
    </>
  );
};
