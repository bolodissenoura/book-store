import Head from "next/head";
import { styled } from "../styles";

const Button = styled("button", {
  backgroundColor: "$primary50",
  height: "50px",
  padding: "0.5rem",
  border: "none",
  borderRadius: "0.25rem",
  "&:hover": {
    cursor: "pointer",
  },
});

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="📚Book store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <h1>Hello</h1>
        <Button>KOASOKPAPOKS</Button>
      </main>
    </>
  );
}
