import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Carousel from "./Carousel";
import interiorimg1 from '../assets/Interior design/inerior-image1.jpg'
import interiorimg2 from '../assets/Interior design/inerior-image2.jpg'
import interiorimg3 from '../assets/Interior design/inerior-image3.jpg'
import loan1 from '../assets/LOAN__01-transformed.jpeg'
import loan2 from '../assets/LOAN__02-transformed.jpeg'

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
import invest1 from '../assets/pexels-yankrukov-7698799.jpg'
import invest2 from '../assets/pexels-tiger-lily-7109288.jpg'
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

  // Array of background images for dynamic change
  const bannerImages = [bgimg1, bgimg];
const inertior = [interiorimg1,interiorimg2,interiorimg3  ];
const loan =[loan1,loan2];
const Investment =[ invest2,invest1,]
  return (
    <div>
      <Carousel images={images} dynamicContent={dynamicContent} />

      <div data-aos="fade-out">
        <FeaturedCatagory />
      </div>

      <div data-aos="fade-in" data-aos-duration="1000" data-aos-delay="500">
        <LokingForNewHome />
      </div>

      <div data-aos="fade-out">
        <WeUseRealestate />
      </div>

      <div data-aos="fade-out">
        <WhyShould />
      </div>

      <div data-aos-duration="2000" data-aos-delay="300" data-aos="fade-in">
        <FeaturedProperty />
      </div>

      <div data-aos="fade-out">
        <ReusableBanner
          bgImgs={bannerImages} // Pass the array of images for background
          title="Property Services"
          description="Discover properties that match your style and budget."
          buttonText="View Properties"
          buttonLink="/properties"
          intervalSeconds={5}
        />
      </div>

      <div data-aos="fade-out">
        <ReusableBanner
          bgImgs={loan} // Pass the array of images for background
          title="Loan & Finance"
          description="Get the best financial advice and services for your dream home."
          buttonText="View All"
          buttonLink="/ourservices/loan"
          intervalSeconds={6}
        />
      </div>

      <div data-aos="fade-out">
        <ReusableBanner
          bgImgs={inertior} // Pass the array of images for background
          title="Interior Design"
          description="Create spaces that truly feel like home with professional designs."
          buttonText="View All"
          buttonLink="/ourservices/interior"
          intervalSeconds={7}
        />
       <ReusableBanner
  bgImgs={Investment} // Pass the array of images for background
  title="Investment Planning"
  description="Secure your financial future with tailored investment strategies."
  buttonText="Explore More"
  buttonLink="/ourservices/investmentplanning"
  intervalSeconds={8}
/>

      </div>
    </div>
  );
}
