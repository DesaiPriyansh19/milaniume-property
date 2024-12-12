import React from "react";
import Room from "../assets/Room.jpeg";
function Cards() {
  const data = [
    { imgSrc: Room, text1: "Thaltej", text2: "8 properies" },
    { imgSrc: Room, text1: "Gota", text2: "9 properties" },
    { imgSrc: Room, text1: "Bopal", text2: "15 properties" },
    { imgSrc: Room, text1: "Stalite", text2: "18 properties" },
    { imgSrc: Room, text1: "SciCity", text2: "11 properties" },
  ];
  return (
    <>
      <section className=" p-6 mt-[30%] md:mt-[20%] lg:mt-16">
        <h3 className="text-center text-2xl font-medium">
          Find Properties in These Area
        </h3>
        <p className="text-center text-sm mb-3">
          Your Dreams, Our Vision; A Sustainable Future
        </p>
        <div className="flex flex-wrap space-x-4 items-center justify-center">
          {data.map((item, index) => (
            <div
              key={index}
              className="w-[90%]   mb-5  sm:w-1/3 md:w-1/4 lg:w-1/6 bg-cover bg-center rounded-lg h-[44vh] "
              style={{
                backgroundImage: `url(${item.imgSrc})`,
                filter: "brightness(85%)",
              }}
            >
              <div className="p-4">
                <p className="text-white font-normal  text-[1.2rem]">
                  {item.text1}
                </p>
                <p className="text-white font-light text-[.8rem]">
                  {item.text2}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default Cards;
