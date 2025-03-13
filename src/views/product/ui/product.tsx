import React from "react";
import classes from "./product.module.scss";
import { ProductDetails } from "./productDetails";
import clsx from "clsx";
import { GreenPart } from "./greenPart";
import { StoryContent } from "@/widgets/storyContent";
import { Standards } from "@/widgets/standards";
import { RelatedProducts } from "./relatedProducts";
import { NutritionFacts } from "./nutritionFacts";

export const Product = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { slug } = await params;
  return (
    <div className={classes.root}>
      <div className={"container"}>
        <ProductDetails />
      </div>
      <div className={classes.greenBg}>
        <GreenPart
          title={"مواد تشکیل دهنده"}
          items={[
            { image: "/images/real-potato.png", title: "سیب زمینی" },
            { image: "/images/real-potato.png", title: "سیب زمینی" },
            { image: "/images/real-potato.png", title: "سیب زمینی" },
            { image: "/images/real-potato.png", title: "سیب زمینی" },
            { image: "/images/real-potato.png", title: "سیب زمینی" },
          ]}
        />
      </div>
      <div className="container">
        <NutritionFacts />
      </div>
      <div className={classes.greenBg}>
        <GreenPart
          title={"هر لیوان چیپس سیب زمینی(30گرم)"}
          items={[
            { image: "/images/real-potato.png", title: "سیب زمینی" },
            { image: "/images/real-potato.png", title: "سیب زمینی" },
            { image: "/images/real-potato.png", title: "سیب زمینی" },
            { image: "/images/real-potato.png", title: "سیب زمینی" },
            { image: "/images/real-potato.png", title: "سیب زمینی" },
          ]}
        />
      </div>
      <div className="container">
        <StoryContent
          title="داستان چیپس پیاز و جعفری دلینا"
          description={`چیپس پیاز و جعفری دلینا یک ترکیب خاص و خوشمزه برای عاشقان طعم‌های طبیعی است. با استفاده از عصاره پیاز و جعفری تازه، این محصول نه تنها طعمی متفاوت و دلچسب دارد، بلکه سرشار از آنتی‌اکسیدان‌ها و ویتامین C است که به سلامت شما کمک می‌کند.\n
پیاز و جعفری در این چیپس، طعمی متعادل و منحصر به‌ فرد ایجاد کرده‌اند؛ نه تند و نه ساده، بلکه کاملاً دلپذیر و هماهنگ. بدون هیچ افزودنی مضر، این محصول هم سالم است و هم خوشمزه.\n
چیپس پیاز و جعفری دلینا، با طراوت و تازگی خود، حس آرامش و طعمی فراموش‌نشدنی را به شما هدیه می‌دهد. انتخابی عالی برای تجربه‌ای سالم و لذت‌بخش!`}
          image={"/images/potato-story.png"}
          imageWidth={373}
          imageHeight={274}
        />
      </div>
      <div className={"container"}>
        <Standards />
      </div>
      <div className={"container"}>
        <RelatedProducts />
      </div>
    </div>
  );
};
