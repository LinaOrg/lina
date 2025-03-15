import React from "react";
import classes from "./magazineCard.module.scss";
import { Button, CalendarIcon, Image, TriangleIcon } from "@/shared/ui";
import Link from "next/link";

export const MagazineCard = () => {
  return (
    <article className={classes.magazineCard}>
      <div className={classes.magazineImage}>
        <Link href="/">
          <Image
            alt="شیوه‌های معرفی چیپس و اسنک به مشتریان"
            src="/images/magazine-image-1.png"
            fill
          />
        </Link>
      </div>
      <div className={classes.magazineText}>
        <Link href="/">
          <h3>شیوه‌های معرفی چیپس و اسنک به مشتریان</h3>
        </Link>
        <p>
          آموزش کامل تکنیک های بهینه برای نمایش و تبلیغ تنقلات در فروشگاه‌ها و
          آنلاین‌شاپ ها
        </p>
        <div className={classes.bottomPart}>
          <div className={classes.createdOn}>
            <CalendarIcon /> 5 آبان 1403
          </div>
          <Link href="/">
            <Button variant="filled" color="secondary" size="xs">
              مطالعه <TriangleIcon />
            </Button>
          </Link>
        </div>
      </div>
    </article>
  );
};
