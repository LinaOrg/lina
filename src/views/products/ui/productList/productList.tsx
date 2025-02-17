"use client";
import { IProduct } from "@/entities";
import { Button } from "@/shared/ui";
import clsx from "clsx";
import React, { useState } from "react";
import classes from "./productList.module.scss";

interface ProductListProps {
  products: IProduct[];
}

export const ProductList: React.FC<ProductListProps> = ({ products }) => {
  const categories = [...new Set(products.map((product) => product.category))];
  [] = useState();
  const [selectedCategory, setSelectedCategory] = useState<string>("");
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
      <div className="grid grid-cols-2 gap-4">
        {filteredProducts.map((product) => (
          <div key={product.id} className="border p-4 rounded">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-40 object-cover"
            />
            <h3 className="text-lg font-bold mt-2">{product.name}</h3>
            <p className="text-sm text-gray-600">{product.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};
