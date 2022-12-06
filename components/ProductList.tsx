import React from "react";
import { Product } from "../models/Product";
import ProductItem from "./ProductItem";

export default function ProductList({ products }: { products: Product[] }) {
  return (
    <section className="mx-auto mb-20 max-w-7xl space-y-12 px-6 pt-20 md:space-y-20 lg:px-16">
      {products.map((product) => (
        <ProductItem key={product.id} {...product} />
      ))}
    </section>
  );
}
