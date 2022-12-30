import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import BestGear from "../../components/organisms/BestGear";
import CategoryLinks from "../../components/organisms/CategoryLinks";
import ProductList from "../../components/organisms/ProductList";
import Params from "../../models/Params";
import { Product } from "../../models/Product";
import { getCategories, getProductsByCategory } from "../../utils/product";

type Props = {
  products: Product[];
};

export default function CategoryPage({ products }: { products: Product[] }) {
  const router = useRouter();
  let { category } = router.query;
  if (category) {
    category =
      category?.toString().charAt(0).toUpperCase() +
      category?.toString().slice(1);
  }

  return (
    <>
      <Head>
        <title>{`Audiophile - ${category}`}</title>
      </Head>
      <h1 className="bg-black py-12 text-center text-heading4 uppercase tracking-wider text-white md:text-heading2">
        {category}
      </h1>

      <main className="mx-auto max-w-7xl px-6 pt-12 lg:px-16">
        <ProductList products={products} />
        <CategoryLinks />
        <BestGear />
      </main>
    </>
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

export const getStaticProps: GetStaticProps<Props, Params> = async (
  context
) => {
  /* context params reference:
   https://github.com/vercel/next.js/discussions/16522 */
  const params = context.params;
  const products = getProductsByCategory(params!.category);

  return {
    props: {
      products,
    },
  };
};
