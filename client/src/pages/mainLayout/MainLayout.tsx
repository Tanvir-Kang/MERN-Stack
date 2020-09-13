import React from "react";
import { NavBar } from '../../core/components/navbar/navbar';
import { Footer } from '../../core/components/footer/footer';
import { CarouselSlider } from '../../core/components/carousel/carousel';
import carouselImageOne from "../../images/IMG_2751.jpeg";
import carouselImageTwo from "../../images/IMG_3071.jpeg";
import carouselImageThree from "../../images/IMG_3961.jpeg";



const carouselImages = [carouselImageOne, carouselImageTwo, carouselImageThree];

export const MainLayoutPage = () => {

  return (
    <>
      <NavBar />
      <CarouselSlider imageList={carouselImages} />
      <Footer />
    </>
  );
}