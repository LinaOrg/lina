import React from "react";
import styles from "./salariesMobile.module.scss";
import { Title } from "@/shared/ui";
import { Button } from "@/shared/ui/button";

export const SalariesMobile = () => {
    const title = "حقوق و مزایا";
    const benefits = [
      "وام",
      "بیمه درمان تکمیلی",
      "امور مرتبط با آموزش",
      "بسته و هدایای مناسبتی",
    ];
    
    return ( <>    <div className={styles.container}>
        <div className={styles.cart}>
          <div className={styles.textContainer}>
            <Title size="lg" className={styles.title}>
              {title}
            </Title>
            <ul className={styles.items}>
              {benefits.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
          </div>
          <div className={styles.imageContainer}>
            <img src={"/images/salariesImg.png"} alt="" />
          </div>
        </div>
        <div className={styles.buttonContainer}>
          <Button className={styles.btn} variant="filled"  color="primary" size="xs" >
          تکمیل فرم ثبت نام
          </Button>
        </div>
      </div></> );
}
 
