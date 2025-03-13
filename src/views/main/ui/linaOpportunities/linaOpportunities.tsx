"use client";
import classes from "./linaOpportunities.module.scss";
import clsx from "clsx";
import Link from "next/link";
import { Button, Image } from "@/shared/ui";
import { useDeviceStore } from "@/shared/model";
export const LinaOpportunities = () => {
  const { isMobile } = useDeviceStore();
  const classNames = clsx("container", classes.root);
  return (
    <section className={classNames}>
      <div className={classes.contentBox}>
        <h3 className="title">همکاری با لینا</h3>
        {isMobile && (
          <div className={classes.imageBox}>
            <Image
              alt="موقعیت های شغلی لینا"
              src="/images/opportunities.jfif"
              fill
            />
          </div>
        )}
        <h4> به دانش و تجربه شما نیازمندیم</h4>
        <p>
          اگر به دنبال محیطی برای رشد هستید و می‌دانید که چطور از مهارت‌تان
          استفاده کنید، جای شما در یکی از موقعیت‌های شغلی زیر خالی است.
        </p>
        <ul>
          <li>
            <Link href="/">
              <Button size="sm" color="nuetral">
                کارشناس منابع انسانی
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/">
              <Button size="sm" color="nuetral">
                کارشناس لجستیک
              </Button>
            </Link>
          </li>
          <li>
            <Link href="/">
              <Button size="sm" color="nuetral">
                کارشناس محصول
              </Button>
            </Link>
          </li>
        </ul>
      </div>
      {!isMobile && (
        <div className={classes.imageBox}>
          <Image
            alt="موقعیت های شغلی لینا"
            src="/images/opportunities.jfif"
            fill
          />
        </div>
      )}
    </section>
  );
};
