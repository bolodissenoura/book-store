import Head from "next/head";
import { styled } from "../styles";
import { HomeContainer, Product } from "../styles/pages/home";
import Image from "next/image";
import book1 from "../assets/exbook1.png";

import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";
export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 1,
      spacing: 32,
    },
    breakpoints: {
      "(min-width: 800px)": {
        slides: {
          perView: 2,
          spacing: 48,
        },
      },
    },
  });

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="📚Book store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContainer ref={sliderRef} className="keen-slider">
        <Product className="keen-slider__slide">
          <Image src={book1} width={300} height={480} alt="" />
          <footer>
            <strong>Book x</strong>
            <span>79,90</span>
          </footer>
        </Product>
        <Product className="keen-slider__slide">
          <Image src={book1} width={300} height={480} alt="" />
          <footer>
            <strong>Book x</strong>
            <span>79,90</span>
          </footer>
        </Product>
        <Product className="keen-slider__slide">
          <Image src={book1} width={300} height={480} alt="" />
          <footer>
            <strong>Book x</strong>
            <span>79,90</span>
          </footer>
        </Product>
        <Product className="keen-slider__slide">
          <Image src={book1} width={300} height={480} alt="" />
          <footer>
            <strong>Book x</strong>
            <span>79,90</span>
          </footer>
        </Product>
      </HomeContainer>
    </>
  );
}
