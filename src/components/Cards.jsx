import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS styles
import Room from "../assets/Room.jpeg";
function Cards() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Animation duration (in ms)
      once: true, // Whether animation should happen only once
    });
  }, []);
  const data = [
    { imgSrc: Room, text1: "Thaltej", text2: "8 properies" },
    { imgSrc: Room, text1: "Gota", text2: "9 properties" },
    { imgSrc: Room, text1: "Bopal", text2: "15 properties" },
    { imgSrc: Room, text1: "Stalite", text2: "18 properties" },
    { imgSrc: Room, text1: "SciCity", text2: "11 properties" },
  ];
  return (
    <>
      <section className=" p-6 mt-[56%] md:mt-[20%] lg:mt-16 "
       > 
        <h3 className="text-center text-2xl font-medium">
          Find Properties in These Area
        </h3>
        <p className="text-center text-[.7rem] mb-3">
          Your Dreams, Our Vision; A Sustainable Future
        </p>
        <button className=" hidden sm:flex text-black text-[.9rem] m-3 mb-5 font-extralight border-[.1px] px-3 py-1 rounded-lg border-[#E7C873] ">View all →</button>
        <div className="overflow-x-auto" >
  <div className="flex lg:flex-wrap space-x-4 w-full mx-auto items-center justify-start">
    {data.map((item, index) => (
      <div
        key={index}
        className="relative shrink-0 w-[45%] mb-5 sm:w-1/3 md:w-1/5 lg:w-1/6  bg-cover bg-center rounded-lg h-[180px] sm:h-[200px] md:h-[200px] lg:h-[210px] overflow-hidden"
        style={{
          backgroundImage: `url(${item.imgSrc})`,
        }}
        data-aos="fade-out"
        data-aos-delay="0"
        data-aos-duration="800"
      >
        {/* Black overlay */}
        <div className="absolute inset-0 bg-black opacity-15"></div>

        {/* Content */}
        <div className="relative p-4 text-white font-medium">
          <p>{item.text1}</p>
          <p className="text-white font-light text-[.7rem]">{item.text2}</p>
        </div>
      </div>
    ))}
  </div>
</div>
<button className=" sm:hidden text-black text-[.7rem] m-3 mb-5 font-extralight border-[.1px] px-3 py-1 rounded-lg border-[#E7C873] ">View all →</button>
      </section>
    </>
  );
}

export default Cards;
