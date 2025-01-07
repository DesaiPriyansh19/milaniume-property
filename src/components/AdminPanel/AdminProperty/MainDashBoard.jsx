import React, { useEffect, useState } from "react";
import HomeSvg from "../../../../svg/Icon/HomeSvg/index";
import useFetch from "../../../../hooks/useFetch";

export default function MainDashBoard() {
  const { data, loading, error } = useFetch(
    "https://milaniumepropertybackend.vercel.app/api/property/allprops/admin/todaysIncrement"
  );

  const [cardsData, setCardsData] = useState([
    {
      title: "Post Property",
      value: 0,
      goal: 100,
      description: "Total Post",
      progressColor: "#ef476f",
      percentage: 0,
    },
    {
      title: "Total Enquiry Today",
      value: 0,
      goal: 100,
      description: "Enquiries Today",
      progressColor: "#4ecdae",
      percentage: 0,
    },
    {
      title: "Total Requirement Today",
      value: 0,
      goal: 100,
      description: "Requirements Today",
      progressColor: "#ff9f1c",
      percentage: 0,
    },
  ]);

  useEffect(() => {
    if (data) {
      setCardsData((prevCards) =>
        prevCards.map((card) => {
          if (card.title === "Post Property") {
            return {
              ...card,
              value: data?.propertyAdded?.length || 0, // Use `data.posts` for Post Property
              percentage: ((data?.propertyAdded.length || 0) / card.goal) * 100, // Calculate percentage
            };
          }
          if (card.title === "Total Enquiry Today") {
            return {
              ...card,
              value: data?.EnquiryAdded.length || 0, // Use `data.enquiries` for Total Enquiry Today
              percentage: ((data?.EnquiryAdded.length || 0) / card.goal) * 100, // Calculate percentage
            };
          }
          if (card.title === "Total Requirement Today") {
            return {
              ...card,
              value: data?.RequirementAdded.length || 0, // Use `data.requirements` for Total Requirement Today
              percentage:
                ((data?.RequirementAdded.length || 0) / card.goal) * 100, // Calculate percentage
            };
          }
          return card; // Default: return the card as-is
        })
      );
    }
  }, [data]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error loading data</p>;

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
                <p className="font-sans mb-1">
                  {card.value} / {card.goal}
                </p>
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
