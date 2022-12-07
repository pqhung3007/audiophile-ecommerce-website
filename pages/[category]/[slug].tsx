import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Params from "../../models/Params";
import { Product } from "../../models/Product";
import { getProductDetails, getProductsPath } from "../../utils/product";

type Props = {
  product: Product;
};

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

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  /* context params reference:
   https://github.com/vercel/next.js/discussions/16522 */
  const params = context.params;
  const product = getProductDetails(params!.slug);

  return {
    props: {
      product,
    },
  };
};
