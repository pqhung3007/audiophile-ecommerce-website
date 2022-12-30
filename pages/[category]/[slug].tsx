import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import Params from "../../models/Params";
import { Product } from "../../models/Product";
import { getProductDetails, getProductsPath } from "../../utils/product";
import ProductDetail from "../../components/organisms/ProductDetail";
import CategoryLinks from "../../components/organisms/CategoryLinks";
import BestGear from "../../components/organisms/BestGear";
import BackButton from "../../components/atoms/BackButton";

type Props = {
  product: Product;
};

export default function ProductDetailPage({ product }: { product: Product }) {
  return (
    <>
      <Head>
        <title>{product.name}</title>
      </Head>

      <main className="mx-auto max-w-7xl px-6 pt-6 lg:px-16">
        <BackButton />
        <ProductDetail {...product} />
        <CategoryLinks />
        <BestGear />
      </main>
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
