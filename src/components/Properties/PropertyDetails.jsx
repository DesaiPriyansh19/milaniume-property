import React, { useEffect, useState } from "react";
import img2 from "../../assets/slider1.jpg.png";
import img from "../../assets/property_2_-853gCunl--transformed.webp";
import bgImg from "../../assets/pexels-clubhouseconvos-13620073.webp";
import {
  FaMapMarkerAlt,
  FaRulerCombined,
  FaBed,
  FaBath,
  FaTag,
  FaBuilding,
  FaHome,
  FaWrench,
  FaIndustry,
  FaTree,
} from "react-icons/fa"; // Importing icons
import {
  FaInfoCircle,
  FaCalendarCheck,
  FaCheckCircle,
  FaClock,
  FaUsers,
  FaCogs,
  FaCompass,
  FaCheck,
} from "react-icons/fa";
import { useParams } from "react-router-dom";
import useFetch from "../../../hooks/useFetch";
const PropertyDetailPage = () => {
  const [fadeIn, setFadeIn] = useState(false);
  const { id } = useParams();
  const businessWhatsAppNumber = "919898152554"; // Replace with the business number


  const { data } = useFetch(
    `https://milaniumepropertybackend.vercel.app/api/property/${id}`
  );

  const handleWhatsAppClick = () => {
    const message = `
    Hello, 
     I am interested in this property 
 
    **Here are the details**:  
    ->Property ID: ${data?._id}
    ->Location: ${data?.Address || "Not Available"}  
    ->${
      data?.ForSale === true && data?.ForRent === true
        ? "For Sale / Rent"
        : data?.ForSale
        ? "For Sale"
        : data?.ForRent
        ? "For Rent"
        : "Status Not Available"
    }
    ->Name: ${data?.PropertyName || "Not Available"}  
    ->Price: ${
      data?.Prices?.SalesPrice
        ? `₹ ${Intl.NumberFormat().format(data.Prices.SalesPrice)}`
        : data?.Prices?.RentPrice
        ? `₹ ${Intl.NumberFormat().format(data.Prices.RentPrice)}/month`
        : "Price Not Available"
    }
    
   Please let me know the next steps, 
        Thank you! 
    `;
    
    // Generate WhatsApp URL
    const whatsappURL = `https://wa.me/${businessWhatsAppNumber}?text=${encodeURIComponent(
      message
    )}`;

    // Debugging: Log the URL
    console.log("Generated WhatsApp URL:", whatsappURL);

    // Open WhatsApp chat
    window.open(whatsappURL, "_blank");
  };

  const sectionsConfig = {
    Residential: [
      {
        title: "Availability Type",
        key: "ResidentialAvailabilityType",
        icon: <FaCalendarCheck className="text-[#1F4B43] text-2xl" />,
      },
      {
        title: "Condition",
        key: "Condition",
        icon: <FaCheckCircle className="text-[#1F4B43] text-2xl" />,
      },
      {
        title: "Amenities",
        key: "Amenities",
        icon: <FaCogs className="text-[#1F4B43] text-2xl" />,
      },
      {
        title: "Facing",
        key: "Facing",
        icon: <FaCompass className="text-[#1F4B43] text-2xl" />,
      },
      {
        title: "Available For",
        key: "ResidentAvailable",
        icon: <FaUsers className="text-[#1F4B43] text-2xl" />,
      },
    ],
    Commercial: [
      {
        title: "All Commercial",
        key: "AllCommercial",
        icon: <FaBuilding className="text-[#1F4B43] text-2xl" />,
      },
      {
        title: "Amenities",
        key: "Amenities",
        icon: <FaCogs className="text-[#1F4B43] text-2xl" />,
      },
      {
        title: "Commercial Property Features",
        key: "CommercialPropertyFeatures",
        icon: <FaWrench className="text-[#1F4B43] text-2xl" />,
      },
      {
        title: "Facing",
        key: "Facing",
        icon: <FaCompass className="text-[#1F4B43] text-2xl" />,
      },
    ],
    Industrial: [
      {
        title: "Condition",
        key: "Condition",
        icon: <FaCheckCircle className="text-[#1F4B43] text-2xl" />,
      },
      {
        title: "All Industrial",
        key: "AllIndustrial",
        icon: <FaIndustry className="text-[#1F4B43] text-2xl" />,
      },
      {
        title: "Amenities",
        key: "Amenities",
        icon: <FaCogs className="text-[#1F4B43] text-2xl" />,
      },
      {
        title: "Facing",
        key: "Facing",
        icon: <FaCompass className="text-[#1F4B43] text-2xl" />,
      },
    ],
    "Agricultural Plot": [
      {
        title: "All Plot Land",
        key: "AllPlotLand",
        icon: <FaTree className="text-[#1F4B43] text-2xl" />,
      },
      {
        title: "Facing",
        key: "Facing",
        icon: <FaCompass className="text-[#1F4B43] text-2xl" />,
      },
    ],
    // Add more configurations for other PropertyTypes as needed
  };

  useEffect(() => {
    setTimeout(() => setFadeIn(true), 200); // Delayed fade-in effect
  }, []);

  const images = [img, img2, img, img2];
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  const propertyType = data?.PropertyType || "Residential"; // Default to Residential if PropertyType is not provided
  const sections = sectionsConfig[propertyType] || [];
  return (
    <>
      <div className="relative w-full mb-0 pb-0">
        {/* Background Image with Blur */}
        <img
          src={bgImg}
          alt="Background"
          className="w-full h-[500px] sm:h-[500px] md:h-[600px] object-cover object-top filter blur-[0px]"
        />

        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-black opacity-[0.3] z-10"></div>

        {/* Text Content */}
        <div
          className="absolute mt-[100px] sm:mt-[50px] text-center inset-0 flex flex-col justify-center items-center text-white z-20"
          style={{
            textShadow: "4px 4px 8px rgba(1, 1, 0.9, 0.1)",
          }}
        >
          <h1 className="text-white text-3xl sm:text-3xl md:text-5xl px-2 md:px-0 font-normal">
            View Property Details
          </h1>
          <p className="text-white mt-2 md:mt-4 px-2 sm:px-0 text-center text-sm md:text-base lg:text-lg font-normal">
            Find the  Perfect Property – Where Your Search Ends.
          </p>
        </div>
      </div>

      <section className="bg-white py-16 px-8 sm:px-16 lg:px-32">
        <div className="max-w-screen-xl mx-auto">
          {/* Hero Section with Carousel */}
          <div className="relative mb-6">
            <div className="relative w-full h-96 overflow-hidden rounded-lg shadow-xl">
              {/* Current Image */}
              <img
                src={data?.PropertyPhotos[currentIndex]}
                alt={`Property Image ${currentIndex + 1}`}
                className="w-full h-full object-cover transition-all duration-500"
              />

              {/* Left Button */}
              <button
                onClick={handlePrev}
                className="absolute top-1/2  md:top-[90%] left-4 md:left-20 transform -translate-y-1/2 bg-white bg-opacity-50 text-black p-3 rounded-full hover:bg-opacity-70 transition-all"
              >
                &#8592;
              </button>

              {/* Right Button */}
              <button
                onClick={handleNext}
                className="absolute top-1/2 md:top-[90%] right-4 md:right-20 transform -translate-y-1/2 bg-white bg-opacity-50 text-black   p-3 rounded-full hover:bg-opacity-70 transition-all"
              >
                &#8594;
              </button>
            </div>
          </div>

          {/* Property Information */}
          <div className="flex flex-col sm:flex-row justify-between mb-12 bg-white p-8 shadow-lg rounded-lg">
            {/* Left Side: Title & Address */}
            <div className="w-full sm:w-1/2 bg-white p-6 rounded-xl ">
              {/* Title */}
              <h2 className="text-xl lg:text-3xl xl:text-4xl font-semibold text-gray-900 flex items-center gap-3">
                <FaBuilding className="text-[#1F4B43] text-3xl" />
                {data?.PropertyName}
              </h2>

              {/* Address */}
              <p className="text-lg text-gray-700 mt-4 flex items-center gap-3">
                <FaMapMarkerAlt className="text-red-500 text-xl" />
                <span className="font-medium">{data?.Address}</span>
              </p>

              {/* Sale/Rent Info */}
              <p className="text-lg font-semibold text-gray-800 mt-4 flex items-center gap-2 bg-gray-100 px-3 py-2 rounded-lg w-fit">
                <FaHome className="text-[#1F4B43] text-lg" />
                {data?.ForSale === true &&
                  data?.ForRent === true &&
                  "For Sale / Rent"}
                {data?.ForSale === true &&
                  data?.ForRent === false &&
                  "For Sale "}
                {data?.ForSale === false &&
                  data?.ForRent === true &&
                  "For  Rent"}
              </p>
              {/* Property Id */}
              <p className="text-lg  font-normal text-gray-800 mt-4 items-center gap-2 bg-gray-100 px-6 py-1 rounded-lg w-fit">
                Property Id :
               <span className="text-sm md:text-lg"> {data?._id}</span>
              </p>

              {/* Price */}
              <p className="text-2xl font-bold text-gray-900 mt-6 flex items-center gap-2">
                <FaTag className="text-green-600 text-xl" />₹
                {data?.Prices?.SalesPrice
                  ? Intl.NumberFormat().format(data.Prices.SalesPrice)
                  : data?.Prices?.RentPrice
                  ? `${Intl.NumberFormat().format(data.Prices.RentPrice)}/month`
                  : "Price Not Available"}
              </p>
              <button  onClick={() => handleWhatsAppClick("Buy")} className="text-lg mt-3 px-6 py-[5px] hover:scale-95 shadow-sm shadow-[#1F4B43] border-[#1F4B43] border-[0.5px] rounded-full  text-white bg-[#1F4B43] ">
              {data?.ForSale === true &&
                  data?.ForRent === true &&
                  " Buy / Rent"}
                {data?.ForSale === true &&
                  data?.ForRent === false &&
                  "Buy"}
                {data?.ForSale === false &&
                  data?.ForRent === true &&
                  "For  Rent"}
              </button>
          
            </div>

            {/* Right Side: Property Details */}
            <div className="w-full sm:w-1/2 h-[60%] grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Area */}
              <div className="bg-gradient-to-r from-green-50 to-gray-100 p-6 rounded-xl shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300">
                <div className="bg-[#1F4B43] text-white p-3 rounded-full shadow-md mb-3">
                  <FaRulerCombined className="text-3xl" />
                </div>
                <p className="text-xl text-center text-gray-700 font-medium">
                  {data?.PropertyDetails?.Sqft}
                </p>
                <h4 className="text-xl text-center font-semibold text-gray-900 mt-1">
                  Area
                </h4>
              </div>

              {/* Bedrooms */}

              <div className="bg-gradient-to-r from-green-50 to-gray-100 p-6 rounded-xl shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300">
                <div className="bg-[#1F4B43] text-white p-3 rounded-full shadow-md mb-3">
                  <FaBed className="text-3xl" />
                </div>
                <p className="text-2xl text-center text-gray-700 font-medium">
                  {data?.PropertyDetails?.Bedrooms}
                </p>
                <h4 className="text-xl text-center font-semibold text-gray-900 mt-1">
                  B.H.K
                </h4>
              </div>

              {/* Bathrooms */}
              <div className="bg-gradient-to-r from-green-50 to-gray-100 p-6 rounded-xl shadow-lg flex flex-col items-center hover:scale-105 transition-transform duration-300">
                <div className="bg-[#1F4B43] text-white p-3 rounded-full shadow-md mb-3">
                  <FaBath className="text-3xl" />
                </div>
                <p className="text-2xl text-gray-700 text-center font-medium">
                  {data?.PropertyDetails?.Bathrooms}
                </p>
                <h4 className="text-xl font-semibold  text-center text-gray-900 mt-1">
                  Bathrooms
                </h4>
              </div>
            </div>
          </div>

          {/* Property Details */}
          <div className="space-y-12">
            {/* Property Description */}
            <div className="bg-gray-50 p-6 rounded-xl shadow-md">
              <h3 className="text-3xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                <FaInfoCircle className="text-[#1F4B43] text-2xl" />
                Property Description
              </h3>
              <p className="text-lg text-gray-700 leading-relaxed">
                {data?.PropertyDescription
                  ? data?.PropertyDescription
                  : "  This spacious and luxurious apartment is located in the heart of downtown, offering easy access to shopping, dining, and entertainment. Featuring modern interiors, high-end finishes, and breathtaking views of the city skyline, this property blends comfort and style seamlessly. The apartment boasts an open floor plan, a contemporary kitchen, and large windows that flood the space with natural light. Ideal for families or professionals looking for a stylish city living experience."}
              </p>
            </div>
            <div className="grid  sm:grid-cols-2  w-full gap-2  lg:space-y-2 ">
              {/* Common Features */}
              {sections.map((section, index) => {
                const features = data?.[section.key] || {}; // Fetch section data dynamically
                const featureList = Object.keys(features).filter(
                  (key) => features[key]
                ); // Only include true values

                return (
                  <div
                    key={index}
                    className="bg-gray-50  p-4 w-full sm:w-[95%] md:w-[90%] lg:w-[80%] mx-auto rounded-xl shadow-md"
                  >
                    <h3 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-3">
                      {section.icon} {section.title}
                    </h3>
                    <ul className="list-none space-y-2 text-lg text-gray-700">
                      {featureList.length > 0 ? (
                        featureList.map((feature, idx) => (
                          <li key={idx} className="flex items-center gap-2">
                            <FaCheck className="text-green-500" />{" "}
                            {feature.replace(/([A-Z])/g, " $1").trim()}
                          </li>
                        ))
                      ) : (
                        <li className="text-gray-500">No features available</li>
                      )}
                    </ul>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Property Gallery */}
          <div className="mb-12 mt-8">
            <h3 className="text-3xl font-semibold text-gray-800 mb-6">
              Gallery
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {data?.PropertyPhotos.map((img, idx) => (
                <img
                  key={idx}
                  src={img}
                  alt={`Gallery Image ${idx + 1}`}
                  className="w-full h-64 object-cover rounded-lg shadow-lg"
                />
              ))}
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default PropertyDetailPage;
