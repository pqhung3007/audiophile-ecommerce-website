import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Params from "../../models/Params";
import { Product } from "../../models/Product";
import { getProductDetails, getProductsPath } from "../../utils/product";

export default function ProductDetail() {
  return (
    <>
      <Head>
        <title>Hello</title>
      </Head>
    </>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getProductsPath().map((path) => ({
    params: {
      category: path.category,
      slug: path.slug,
    },
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
  const product: Product | undefined = getProductDetails(params.slug);

  return {
    props: {
      product,
    },
  };
};
