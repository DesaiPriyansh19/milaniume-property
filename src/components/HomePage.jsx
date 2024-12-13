import React from "react";
import Carousel from "./Carousel";
import Cards from "./Cards";
import WhyShould from "./WhyShould";
import Img1 from "../assets/office.jpeg";
import room from "../assets/Room3.jpg";
import UploadWidget from "./UploadWidget/UploadWidget";

export default function HomePage() {
  const images = [Img1, room];

  const dynamicContent = [
    {
      title: "Welcome to Millennium Properties",
      description: "We Build Your Dreams",
    },
    {
      title: "Luxury Apartment",
      description: "Your Dreams, Our Vision; A Sustainable Future",
    },
  ];

  return (
    <div>
      <Carousel images={images} dynamicContent={dynamicContent} />
      <Cards />
      <WhyShould />
      
    </div>
  );
}
