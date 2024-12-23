import React, { useState } from "react";

import HomeSvg from "../../../../svg/Icon/HomeSvg/index";

export default function MainDashBoard() {
  const [progress, setProgress] = useState(60);
  return (
    <div className="text-white  mx-auto p-4">
      <p className="text-xl font-semibold uppercase ">DashBoard</p>
      <p className="mb-6 text-sm text-gray-200">Welcome to your Dashboard</p>
      <div className="flex justify-between gap-4 w-full">
        {Array(4)
          .fill()
          .map((_, i) => {
            return (
              <div
                key={i}
                className="bg-gray-800 rounded-lg shadow-md w-full relative"
              >
                <div className="p-5 flex justify-between ">
                  <div>
                    <div className="mb-2">
                      <HomeSvg />
                    </div>
                    <p className="font-sans mb-1">24,000</p>
                    <p className="font-mono text-[#4ecdae]">Email Sent</p>
                  </div>
                  <div className="flex flex-col justify-between">
                    <div className="relative w-10 h-10">
                      {/* Circle background */}
                      <div className="absolute w-full h-full rounded-full bg-[#424395]"></div>
                      {/* Progress */}
                      <div
                        className="absolute w-full h-full rounded-full"
                        style={{
                          background: `conic-gradient(#41a494 0% ${progress}%, transparent ${progress}% 100%)`,
                        }}
                      ></div>
                      {/* Inner Circle (optional for hollow look) */}
                      <div className="absolute w-8 h-8 top-1 left-1 rounded-full bg-gray-800 "></div>
                    </div>
                    <div className="italic text-[#4ecdae]">+21%</div>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
    </div>
  );
}
