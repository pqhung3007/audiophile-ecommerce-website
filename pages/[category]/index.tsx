import { GetStaticPaths, GetStaticProps } from "next";
import React from "react";
import Params from "../../models/Params";
import { Product } from "../../models/Product";
import { getCategories, getProductsByCategory } from "../../utils/product";

function CategoryPage({ products }: { products: Product[] }) {
  console.log(products);
  return (
    <div>
      {products.map((product) => (
        <>
          <h1 key={product.id}>{product.name}</h1>
          <p>{product.description}</p>
        </>
      ))}
    </div>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const categories = getCategories();
  const paths = categories.map((category) => ({
    params: { category },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  /* add Params by this reference 
  https://wallis.dev/blog/nextjs-getstaticprops-and-getstaticpaths-with-typescript */
  const params = context.params as Params;
  const products: Product[] = getProductsByCategory(params.category);

  return {
    props: {
      products,
    },
  };
};

export default CategoryPage;