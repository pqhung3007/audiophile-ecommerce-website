import Head from "next/head";
import BackButton from "../components/BackButton";
import CheckoutForm from "../components/CheckoutForm";

export default function CheckoutPage() {
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <main className="mx-auto max-w-7xl bg-product px-6 pb-20 pt-6 md:px-12 lg:px-16">
        <BackButton />

        <CheckoutForm />
      </main>
    </>
  );
}
