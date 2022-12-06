import { GetStaticPaths, GetStaticProps } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import BestGear from "../../components/BestGear";
import CategoryLinks from "../../components/CategoryLinks";
import ProductList from "../../components/ProductList";
import Params from "../../models/Params";
import { Product } from "../../models/Product";
import { getCategories, getProductsByCategory } from "../../utils/product";

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
      <ProductList products={products} />
      <CategoryLinks />
      <BestGear />
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
