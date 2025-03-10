import { Image } from "@/shared/ui";
import React from "react";
import classes from "./storyContent.module.scss";

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
  return (
    <div className={classes.root}>
      <div>
        <h4>{title}</h4>
        <p>{description}</p>
      </div>
      <Image src={image} alt={title} width={imageWidth} height={imageHeight} />
    </div>
  );
};
