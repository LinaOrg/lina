import React from "react";
import { ProductList } from "./productList";

const getProducts = async () => {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });
  return res.json();
};

export const Products = async () => {
  const products = await getProducts();
  return <ProductList products={products} />;
};
