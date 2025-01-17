import React, { useState,useRef, useEffect } from "react";
import { Link } from "react-router-dom"; // Import Link for routing
import WhiteHamburgerIcon from "../../../../svg/Icon/WhiteHamburger/index";
import { FaHome, FaUsers, FaEnvelope, FaPlusCircle, FaUserEdit, FaClipboardList, FaTrashAlt } from "react-icons/fa";
import HomeSvg from "../../../../svg/Icon/HomeSvg/index";
import logo from "../../../../src/assets/logo final PNG.png";
import { IoPower } from "react-icons/io5";
export default function SidebarAdmin() {
  const [conMaxWidth, setConMaxWidth] = useState(288);
  const [modalPosition, setModalPosition] = useState({ top: 0, left: 0 });
  const targetElementRef = useRef(null); // The specific element
  const SideBarOption = [
    { name: "Dashboard", icon: <FaHome />, path: "/dashboard" },
    { name: "Quick Enquiries", icon: <FaEnvelope />, path: "/enquiries" },
    { name: "Requirements", icon: <FaClipboardList />, path: "/require-post" },
    { name: "User Post", icon: <FaUserEdit />, path: "/user-post" },
    { name: "Add Property", icon: <FaPlusCircle />, path: "/add-property" },
    { name: "Manage Peoples", icon: <FaUsers />, path: "/manage-peoples" },
  { name: "Recycle Bin", icon: <FaTrashAlt />, path: "/recycle-bin" },
  { name: "Log Out", icon: <IoPower />, path: "/logout" },
    // { name: "Bar Chart", icon: <HomeSvg />, path: "/bar-chart" },
    // { name: "Pie Chart", icon: <HomeSvg />, path: "/pie-chart" },
    // { name: "Line Chart", icon: <HomeSvg />, path: "/line-chart" },
  ];

  const handleMinimise = () => {
    setConMaxWidth((prev) => (prev === 288 ? 72 : 288));
  };

  return (
    <div
      style={{ maxWidth: `${conMaxWidth}px` }}
      className={`relative transition-all w-full duration-300 bg-[#161f30] ${
        conMaxWidth ? "min-h-screen" : "h-auto"
      }`}
    >
      <div className="w-full mx-auto">
        {/* Header Section */}
        <div
          className={`flex items-center ${
            conMaxWidth === 288 ? "justify-between" : "justify-center"
          } pt-4 mb-10 px-4`}
        >
          {conMaxWidth === 288 && (
            <Link to="/" className="text-2xl flex flex-col gap-3 justify-center items-center font-bold cursor-pointer text-white">
             <img
                       src={logo}
                       alt="Logo 1"
                       className="mx-2 w-[70px] sm:mx-0 sm:w-[90px] md:w-[80px] xl:w-[90px] transition-transform duration-500 ease-in-out hover:brightness-110 "
                     />  
            </Link>
          )}
          <div
            onClick={handleMinimise}
            className="cursor-pointer active:scale-95"
          >
            <WhiteHamburgerIcon />
          </div>
        </div>

        {/* Sidebar Options */}
        <div className="pb-10">
          {SideBarOption.map((category, index) => (
            <div key={index} className="mb-8 ">
              {/* Category Items */}
              <Link to={`/admin${category.path}`}>
                {" "}
                {/* Link added here */}
                <div
                  className={`flex    ${
                    conMaxWidth === 288 ? "ml-4 mb-4" : "justify-center items-center mb-8"
                  } cursor-pointer text-base font-light items-center gap-4`}
                >
                  <div className="relative hover:text-[#f5d170]  flex justify-center items-center text-white     text-xl group">
                 {category.icon}

                    <div
                      className={`absolute  top-[-1px] ${
                        conMaxWidth === 72
                          ? "left-10 opacity-0 z-10 bg-black group-hover:opacity-100 transition-opacity duration-300"
                          : "left-4 mb-1"
                      } text-white text-sm hover:text-[#E7C873] hover:scale-105  bg-opacity-60 px-2 ml-2  whitespace-nowrap rounded-md`}
                    >
                      {category.name}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>

        {/* <div
          className={`absolute w-full flex ${
            conMaxWidth === 72 ? "justify-center" : "justify-between"
          }  items-center h-auto bottom-8`}
        >
          <div
            className={`rounded-lg ${
              conMaxWidth === 72 ? "ml-0 w-10 h-10" : "ml-4 w-14 h-14"
            }  bg-gray-500`}
          ></div>
          <div
            className={`absolute text-xl text-white  ${
              conMaxWidth === 72 ? "left-full hidden" : "left-14 top-0"
            } ml-6  text-sm whitespace-nowrap  rounded-md `}
          >
            <p className="mb-1 font-medium">Testing</p>
            <p className="text-xs">test@gmail.com</p>
          </div>
        </div> */}
      </div>
    </div>
  );
}
