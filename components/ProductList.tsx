import React from "react";
import { Product } from "../models/Product";
import ProductItem from "./ProductItem";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <section className="mb-40 space-y-16">
      {products.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </section>
  );
}
