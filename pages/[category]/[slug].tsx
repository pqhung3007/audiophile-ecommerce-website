import { GetStaticPaths, GetStaticProps } from "next";
import { useRouter } from "next/router";
import Head from "next/head";
import Params from "../../models/Params";
import { Product } from "../../models/Product";
import { getProductDetails, getProductsPath } from "../../utils/product";
import ProductDetail from "../../components/ProductDetail";
import CategoryLinks from "../../components/CategoryLinks";
import BestGear from "../../components/BestGear";

type Props = {
  product: Product;
};

export default function ProductDetailPage({ product }: { product: Product }) {
  const router = useRouter();

  return (
    <>
      <Head>
        <title>Hello</title>
      </Head>

      <main className="mx-auto max-w-7xl px-6 pt-6 lg:px-16">
        <button
          className="text-neutral-500 duration-200 hover:text-accent-hover"
          onClick={() => router.back()}
        >
          Go Back
        </button>

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
