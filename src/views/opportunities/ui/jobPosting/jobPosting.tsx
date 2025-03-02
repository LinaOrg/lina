"use client";

import React, { useEffect } from "react";
import { useDeviceStore } from "@/shared/model";
import { JobPostingMobile } from "./jobPostingMobile/jobPostingMobile";
import { JobPostingDesktop } from "./jobPostingDesktop/jobPostingDesktop";

export const JobPosting: React.FC = () => {
  const { isMobile, setIsMobile } = useDeviceStore();
  
  const jobTitle = "کارشناس منابع انسانی";
  const preContentText =
    "عاشق ارتباط‌گیری با افراد هستید و برای همکاران خود سنگ تمام می‌گذارید؟";
  const textContent = `نیازمند یک کارشناس منابع انسانی هستیم که با شناسایی و جذب بهترین استعدادها، به سرمایه انسانی اعتبار ببخشد، آموزش و ارزیابی کارکنان را در اولویت قرار دهد و با بهبود فرآیندهای استخدامی، نیروی کار را به موتور محرک سازمان تبدیل کند. اگر دغدغه ایجاد محیطی را دارید که حمایت از کارکنان آنجا، حرف اول را بزند، شرایط زیر را بررسی کنید.`;

  useEffect(() => {
    if (typeof window !== "undefined") {
      setIsMobile(); 
      const handleResize = () => setIsMobile();
      window.addEventListener("resize", handleResize);

      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, [setIsMobile]);

  const addStylingToText = (text: string) => {
    return text.replace(
      /کارشناس منابع انسانی/g,
      '<span style="color:var(--primary-color); font-weight: bold;">کارشناس منابع انسانی</span>'
    );
  };

  const styledPreContentText = addStylingToText(preContentText);
  const styledTextContent = addStylingToText(textContent);

  return (
    <div className="container">
      <div className="content">
        {isMobile ? (
          <JobPostingMobile
            jobTitle={jobTitle}
            preContentText={styledPreContentText}
            textContent={styledTextContent}
          />
        ) : (
          <JobPostingDesktop
            jobTitle={jobTitle}
            preContentText={styledPreContentText}
            textContent={styledTextContent}
          />
        )}
      </div>
    </div>
  );
};
