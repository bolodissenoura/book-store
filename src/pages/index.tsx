import Head from "next/head";
import { styled } from "../styles";
import {
  BookContainer,
  HomeContainer,
  ImgContainer,
  Product,
  SliderContainer,
} from "../styles/pages/home";
import Image from "next/image";
import book1 from "../assets/exbook1.png";

import { useKeenSlider } from "keen-slider/react";

import "keen-slider/keen-slider.min.css";
import { ProductInterface } from "../interfaces/product.interface";
import { fakeData } from "../utils/fakeData";
import { SubtitleSM, TextMD } from "../styles/pages/app";

export default function Home() {
  const [sliderRef] = useKeenSlider({
    slides: {
      perView: 2,
      spacing: 32,
    },
    breakpoints: {
      "(min-width: 800px)": {
        slides: {
          perView: 8,
          spacing: 16,
        },
      },
    },
  });

  return (
    <>
      <Head>
        <title>Buuk - Venda e compre e-books</title>
        <meta name="description" content="📚Book store" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <HomeContainer>
        <ImgContainer>
          <div>
            <TextMD css={{ marginLeft: 20 }}>Daniel Limae</TextMD>
            <SubtitleSM css={{ marginLeft: 20 }}>
              Eleito 3x melhor cachaceiro de São Paulo
            </SubtitleSM>
          </div>
        </ImgContainer>
        <SliderContainer ref={sliderRef} className="keen-slider">
          {fakeData?.map((item: ProductInterface) => (
            <>
              <Product
                className="keen-slider__slide"
                css={{
                  background: `linear-gradient(
                  to bottom,
                  ${item.bgColor} 0%,
                  ${item.bgColor} 50%,
                  #ffffff 50%,
                  #ffffff 100%
                );`,
                }}>
                <BookContainer>
                  <Image src={item.bookImg} width={124} height={222} alt="" />
                </BookContainer>
                <footer>
                  <strong>{item.title}</strong>
                  <p>De: R$ {item.fakePrice}</p>
                  <span>Por: R$ {item.price}</span>
                </footer>
              </Product>
            </>
          ))}
        </SliderContainer>
      </HomeContainer>
    </>
  );
}
