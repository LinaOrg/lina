"use client";
import { IProduct, Product } from "@/entities";
import { Button, Image } from "@/shared/ui";
import clsx from "clsx";
import React, { useState } from "react";
import classes from "./productList.module.scss";

interface ProductListProps {
  products: IProduct[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const categories = [...new Set(products.map((product) => product.category))];
  [] = useState();
  const [selectedCategory, setSelectedCategory] = useState<string | undefined>(
    "",
  );
  const filteredProducts = products.filter(
    (product) => product.category === selectedCategory,
  );
  const classNames = clsx("container", classes.root);
  return (
    <section className={classNames}>
      <div className={classes.categories}>
        {categories.map((category) => (
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            color={"primary"}
            variant={selectedCategory === category ? "filled" : "outlined"}
            size="sm">
            {category}
          </Button>
        ))}
      </div>
      <div className={classes.productWrapper}>
        <div className={classes.titleSection}>
          <h3 className="title">تازه ‌‌نفس‌های لینا</h3>
          <div className={classes.subTitle}>
            <Image
              width={90}
              height={22}
              alt=""
              src={"/images/arrow-to-left.svg"}
            />
            <p>جدیدترین محصولاتی که ذائقه‌تان را شگفت‌زده می‌کنند‌‍</p>
            <Image
              width={90}
              height={22}
              alt=""
              src={"/images/arrow-to-right.svg"}
            />
          </div>
        </div>
        <div className={classes.products}>
          {filteredProducts.map((product) => (
            <Product
              key={product.id}
              name={product.name}
              description={product.description}
              image={product.image}
            />
          ))}
        </div>
        <div className={classes.catStory}>
          <div>
            <h4>داستان خانواده چیپس های لینا</h4>
            <p>
              سیب‌زمینی‌ها آن‌قدر هم که فکر می‌کنید « سیب‌زمینی» نیستند! به ویژه
              وقتی به چیپس تبدیل می‌شوند. پس چرا آنها را جدی نگیریم؟ چیپس‌ها
              حرف‌های زیادی برای هر سلیقه‌ای دارند; به شرط آنکه طعم آن را درست
              انتخاب کنیم! طعم‌های جدیدی که اشتهای شما را قلقلک می‌دهند. هرگاه
              نقل از حکایت چیپس‌های دلینا باشد، سلامتی‌تان در اولویت است و خبری
              از چربی و نمک اضافه نخواهد بود.
            </p>
          </div>
          <Image
            src={"/images/cat-story.png"}
            alt=""
            width={332}
            height={303}
          />
        </div>
      </div>
    </section>
  );
};
