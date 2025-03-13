"use client";
import { Image } from "@/shared/ui";
import React from "react";
import classes from "./storyContent.module.scss";
import { useDeviceStore } from "@/shared/model";

type TStoryContentProps = {
  title: string;
  description: string;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
};

export const StoryContent = ({
  description,
  image,
  title,
  imageWidth = 332,
  imageHeight = 303,
}: TStoryContentProps) => {
  const { isMobile } = useDeviceStore();
  return (
    <div className={classes.root}>
      <div>
        <h4>{title}</h4>
        {isMobile && (
          <Image
            src={image}
            alt={title}
            width={imageWidth}
            height={imageHeight}
          />
        )}
        <p>{description}</p>
      </div>
      {!isMobile && (
        <Image
          src={image}
          alt={title}
          width={imageWidth}
          height={imageHeight}
        />
      )}
    </div>
  );
};
