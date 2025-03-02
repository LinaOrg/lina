"use client";

import React from "react";
import { Divider, Title } from "@/shared/ui";
import styles from "./jobPostingDesktop.module.scss";

interface Props {
  jobTitle: string;
  preContentText: string;
  textContent: string;
}

export const JobPostingDesktop: React.FC<Props> = ({
  jobTitle,
  preContentText,
  textContent,
}) => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <Title size="lg" className={styles.title}>
          {jobTitle}
        </Title>
        <Divider width="70%" height="1px" className={styles.customDivider} />
        <div className={styles.preContent}>{preContentText}</div>
        <div
          className={styles.textContent}
          dangerouslySetInnerHTML={{ __html: textContent }}
        />
      </div>
      <div className={styles.imageContainer}>
        <img src="/images/handShake.png" alt="Hand Shaking" />
      </div>  
    
    </div>
  );
};
