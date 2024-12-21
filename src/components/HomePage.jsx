import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Carousel from "./Carousel";
import Cards from "./Cards";
import WhyShould from "./WhyShould";
import Img1 from "../assets/office.jpeg";
import room from "../assets/Room3.jpg";
import UploadWidget from "./UploadWidget/UploadWidget";
import SignInDiv from "./SignInDiv";
import FeaturedProperty from "./FeaturedProperty";
import FilterTwo from './Properties/FilterTwo';
import WeUseRealestate from './WeUseRealestate';
import Properties from './Properties/Properties';
import FeaturedCatagory from './FeaturedCatagory';

export default function HomePage() {
  useEffect(() => {
    AOS.init({ once: true }); // Initialize AOS
  }, []);
  
  const images = [Img1, room];

  const dynamicContent = [
    {
      title: "Welcome to Millennium Properties",
      description: "We Build Your Dreams",
    },
    {
      title: "Luxury Apartment",
      description: "Your Dreams, Our Vision, A Sustainable Future",
    },
  ];

  return (
    <div>
      <Carousel images={images} dynamicContent={dynamicContent} />
      
   <FilterTwo/>
   <div data-aos="fade-out">
        
         <FeaturedCatagory/>
         </div>
      <div data-aos="fade-out">
         <WhyShould/>
      
         </div>
           
   
      <div data-aos="fade-out"><WeUseRealestate/>
         </div>
      <div data-aos="fade-out">
      <FeaturedProperty/>
      </div>
      <div data-aos="fade-out">
      <SignInDiv/> 
      </div>
    </div>
  );
}
