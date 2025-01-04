import React, { useState } from "react";

import HomeSvg from "../../../../svg/Icon/HomeSvg/index";

export default function MainDashBoard() {
  const [progress, setProgress] = useState(60);

  const cardsData = [
    {
      title: "Post Property",
      value: "1,200",
      goal:"1800",
      description: "Total Post",
      progressColor: "#ef476f",
      percentage: 30,
    },
    {
      title: "Total Enquiry Today",
      value: "800",
      goal:"1800",
      description: "Enquiries Today",
      progressColor: "#4ecdae",
      percentage: 25,
    },
    {
      title: "Total Requirement Today",
      value: "1,500",
      goal:"1800",
      description: "Requirements Today",
      progressColor: "#ff9f1c",
      percentage: 18,
    },
  ];
  return (
    <div className="text-white  mx-auto p-4">
      <p className="text-xl font-semibold uppercase ">DashBoard</p>
      <p className="mb-6 text-sm text-gray-200">Welcome to your Dashboard</p>
      <div className="flex justify-between gap-4 w-full">
        {cardsData.map((card, i) => (
          <div
            key={i}
            className="bg-gray-800 rounded-lg shadow-md w-full relative"
          >
            <div className="p-5 flex justify-between ">
              <div>
                <div className="mb-2">
                  <HomeSvg />
                </div>
                <p className="font-sans mb-1">{card.value} / {card.goal}</p>
                <p className="font-mono text-[#4ecdae]">{card.description} </p>
              </div>
              <div className="flex flex-col justify-between">
                <div className="relative w-10 h-10">
                  {/* Circle background */}
                  <div className="absolute w-full h-full rounded-full bg-[#424395]"></div>
                  {/* Progress */}
                  <div
                    className="absolute w-full h-full rounded-full"
                    style={{
                      background: `conic-gradient(${card.progressColor} 0% ${card.percentage}%, transparent ${card.percentage}% 100%)`,
                    }}
                  ></div>
                  {/* Inner Circle (optional for hollow look) */}
                  <div className="absolute w-8 h-8 top-1 left-1 rounded-full bg-gray-800 "></div>
                </div>
                <div className="italic text-[#4ecdae]">+{card.percentage}%</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
