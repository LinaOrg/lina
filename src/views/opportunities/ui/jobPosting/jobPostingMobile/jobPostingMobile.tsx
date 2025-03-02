"use client";

import React from "react";
import { Divider, Title } from "@/shared/ui";
import styles from "./jobPostingMobile.module.scss";

interface Props {
  jobTitle: string;
  preContentText: string;
  textContent: string;
}

export const JobPostingMobile: React.FC<Props> = ({
  jobTitle,
  preContentText,
  textContent,
}) => {
  return (
    <>
   <div className={styles.textContainer}>
  <Title size="lg" className={styles.title}>
    {jobTitle}
  </Title>
  <div className={styles.imageContainer}>
    <img src="/images/handShake.png" alt="Hand Shaking" />
  </div>
  <div className={styles.preContent}>{preContentText}</div>
  <Divider width="60%" height="1px" className={styles.customDivider} />
  <div
    className={styles.textContent}
    dangerouslySetInnerHTML={{ __html: textContent }}
  />
</div>

    </>
  );
};
