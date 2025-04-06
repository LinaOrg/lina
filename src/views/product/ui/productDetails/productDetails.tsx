"use client";
import React from "react";
import classes from "./productDetails.module.scss";
import { Image } from "@/shared/ui";
import { useDeviceStore } from "@/shared/model";

export const ProductDetails = () => {
  const { isMobile } = useDeviceStore();
  return (
    <section className={classes.root}>
      <div className={classes.detailWrapper}>
        <div className={classes.imageWrapper}>
          <Image
            src={"/images/delina.png"}
            alt=""
            width={isMobile ? 160 : 600}
            height={isMobile ? 160 : 550}
          />
        </div>
        <div className={classes.textWrapper}>
          <div className={classes.title}>
            <h1>چیپس پیاز و جعفری دلینا</h1>
            <p>طعم سلامت از دل طبیعت</p>
          </div>
          <div className={classes.lead}>
            <h5>معرفی کوتاه </h5>
            <p>
              چیپس پیاز و جعفری دلینا، نماینده شایسته چیپس‌های سلامت‌محور بازار
              خوراکی‌ها است. طعمی که ترکیب رایحه تازه جعفری و تندی ملایم پیاز را
              در دلش دارد و سرشار از مواد مغذی است.
            </p>
          </div>
          {!isMobile && <DetailComponent isMobile={isMobile} />}
        </div>
      </div>
      {isMobile && <DetailComponent isMobile={isMobile} />}
    </section>
  );
};

const DetailComponent = ({ isMobile }: { isMobile: boolean }) => {
  return (
    <>
      <div className={classes.moreDetails}>
        <div className={classes.suitableFor}>
          <Image
            src={"/images/family.png"}
            alt=""
            width={isMobile ? 51 : 78}
            height={isMobile ? 51 : 78}
          />
          <ul>
            <li>0 تا 2 سال مصرف نشود</li>
            <li>3 تا 6 سال تحت کنترل شود</li>
            <li> 6 سال با خیال راحت مصرف کنید</li>
          </ul>
        </div>
        <div className={classes.productSize}>
          <Image
            src={"/images/meat-chips.png"}
            alt=""
            width={isMobile ? 39 : 68}
            height={isMobile ? 48 : 87}
          />
          <ul>
            <li>
              <p>ابعاد بسته‌بندی</p>
              <p>27*16</p>
            </li>
            <li>
              <p>وزن بسته‌بندی</p>
              <p>57گرم</p>
            </li>
            <li>
              <p>وزن</p>
              <p>42گرم</p>
            </li>
          </ul>
        </div>
      </div>
      <div className={classes.lead}>
        <h5>آکریل آمید چیست؟</h5>
        <p>
          این ترکیب یک ماده اسیدی سرطان‌زا به شمار می‌آید که میتواند در طی
          فرآیندهای پخت در دمای بالا مانند سرخ کردن، برشته کردن . پختن ایجاد
          شود. آکریل آمید در فرآورده های سرخ یا برشته‌شده نظیر نان برشته، چیپس
          سیب‌زمینی، ته‌دیگ و سوسیس و ... ایجاد می‌شود. ما در تولید این محصول
          توانسته‌ایم علاوه بر استفاده از بهترین نوع سیب‌زمینی یا بهره‌گیری از
          تکنولوژی روز دنیا(OPTI-FLOW, Patent No:US10,499,769B2) میزان آکریل
          آمید را به پایین‌تر از حد استاندارد اتحادیه اروپا کاهش دهیم.
        </p>
      </div>
    </>
  );
};
