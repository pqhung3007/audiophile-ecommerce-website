import Head from "next/head";
import BestGear from "../components/BestGear";
import Footer from "../components/Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Audiophile E-commerce</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="mx-auto max-w-7xl px-6 lg:px-16">
        <BestGear />
      </main>
      <Footer />
    </div>
  );
}
