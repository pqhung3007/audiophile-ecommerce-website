import Head from "next/head";
import BackButton from "../components/BackButton";
import CheckoutForm from "../components/CheckoutForm";

export default function CheckoutPage() {
  return (
    <>
      <Head>
        <title>Checkout</title>
      </Head>
      <main className="bg-product">
        <div className="mx-auto max-w-7xl space-y-6 px-6 pb-20 pt-6 md:px-12 lg:px-16">
          <BackButton />
          <CheckoutForm />
        </div>
      </main>
    </>
  );
}
