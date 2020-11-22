import React from "react";
import { NavBar } from '../../core/components/navbar/navbar';
import { Footer } from '../../core/components/footer/footer';
import { CarouselSlider } from '../../core/components/carousel/carousel';
import { JumbotronBanner } from '../../core/components/jumbotron/jumbotron';
import carouselImageOne from "../../images/IMG_2751.jpeg";
import carouselImageTwo from "../../images/IMG_3071.jpeg";
import carouselImageThree from "../../images/IMG_3961.jpeg";
import { serviceItem, ServiceBanner } from '../../core/components/serviceBanner/serviceBanner';



const text = "Providing high quality home and mobile based automotive detailing services in Surrey, British columbia"
const carouselImages = [carouselImageOne, carouselImageTwo, carouselImageThree];
var services: serviceItem[] = [
  { title: "Exterior", description: "Wash, wax, wheels, trim restoration and more" },
  { title: "Interior", description: "Carpet and fabric shampooing, steam cleaning, glass super cleaning, and leather conditioning" },
  { title: "Paint Correction", description: "Paint enhancements to bring back shine, and one step corrections for paint defects such as swirl marks" },
  { title: "Other", description: "Engine bay detailing, paint transfer removal, and much more" }
]

export const MainLayoutPage = () => {

  return (
    <>
      
      <CarouselSlider imageList={carouselImages} />
      <JumbotronBanner jumbotronText={text} />
      <ServiceBanner listOfService={services} />
     
    </>
  );
}