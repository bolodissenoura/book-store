import Head from "next/head";
import { useRouter } from "next/router";

export default function Product() {
  const { query } = useRouter();
  return (
    <>
      <Head>
        <title>Buuk - Venda e compre e-books</title>
        <meta name="description" content="📚Book store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Product: {JSON.stringify(query)}</h1>
      </main>
    </>
  );
}
