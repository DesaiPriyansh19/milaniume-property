import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Carousel from "./Carousel";

import WhyShould from "./WhyShould";
import Img1 from "../assets/office.jpeg";
import room from "../assets/Room3.jpg";

import SignInDiv from "./SignInDiv";
import FeaturedProperty from "./FeaturedProperty";

import WeUseRealestate from './WeUseRealestate';
import Properties from './Properties/Properties';
import FeaturedCatagory from './FeaturedCatagory';
import LokingForNewHome from './LokingForNewHome';
import Discover from './Discover';
import ReusableBanner from './ReusableBanner';
import bgimg from '../assets/slider1.jpg.png'
import bgimg1 from '../assets/pexels-heyho-8134845.jpg'
import bgimg2 from '../assets/shutterstock_291968042.jpg'

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
      


   <div data-aos="fade-out">
         <FeaturedCatagory/>
         </div>

            <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500"> <LokingForNewHome/></div>
         
         <div data-aos="fade-out"><WeUseRealestate/>
         </div>
      
      <div data-aos="fade-out">
         <WhyShould/>
      
         </div>
           
   
    
      <div data-aos-duration="2000" data-aos-delay="300" data-aos="fade-in">
      <FeaturedProperty/>
      </div>
      <div data-aos="fade-out">
      <ReusableBanner
        bgImg={bgimg1}
        title="Property Services"
        description="Discover properties that match your style and budget."
        buttonText="View Properties"
        buttonLink="/properties"
      />
      
      </div>
      <div data-aos="fade-out">
      <ReusableBanner
        bgImg={bgimg2}
        title="Loan & Finance"
        description="Get the best financial advice and services for your dream home."
        buttonText="View Properties"
        buttonLink="/properties"
      />
      </div>
      <div data-aos="fade-out">
      <ReusableBanner
        bgImg={bgimg}
        title="Interior Design"
        description="Create spaces that truly feel like home with professional designs."
        buttonText="View Properties"
        buttonLink="/properties"
      />
      </div>
    </div>
  );
}
