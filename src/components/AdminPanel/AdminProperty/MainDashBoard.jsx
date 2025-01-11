import React, { useEffect, useState } from "react";
import HomeSvg from "../../../../svg/Icon/HomeSvg/index";
import useFetch from "../../../../hooks/useFetch";
import { ResponsivePie } from "@nivo/pie";
import axios from "axios";

export default function MainDashBoard() {
  const [cardsData, setCardsData] = useState([
    {
      title: "Post Property",
      value: 0,
      total: 0,
      description: " Properties",
      
    },
    {
      title: "Quick Enquiry",
      value: 0,
      total: 0,
      description: "Quick Enquiries",
    },
    {
      title: "Total Requirement",
      value: 0,
      total: 0,
      description: "Requirements",
    },
  ]);

  const [pieData, setPieData] = useState([
    { id: "", value: 0, color: "hsl(197, 70%, 50%)" },
    { id: "", value: 0, color: "hsl(75, 70%, 50%)" },
    { id: "", value: 0, color: "hsl(132, 70%, 50%)" },
    { id: "", value: 0, color: "hsl(266, 70%, 50%)" },
    { id: "", value: 0, color: "hsl(285, 70%, 50%)" },
  ]);

  const commonProperties = {
    margin: { top: 80, right: 80, bottom: 60, left: 80 },
    innerRadius: 0.5,
    padAngle: 0.7,
    cornerRadius: 3,
    activeOuterRadiusOffset: 8,
    colors: { scheme: "tableau10" },
    borderWidth: 1,
    borderColor: "#000000",
    arcLinkLabelsSkipAngle: 3,
    arcLinkLabelsTextColor: "#ffffff",
    arcLinkLabelsThickness: 2,
    arcLinkLabelsColor: { from: "color" },
    arcLabelsSkipAngle: 10,
    arcLabelsTextColor: "#000000",
  };

  const { data, loading, error } = useFetch(
    "https://milaniumepropertybackend.vercel.app/api/property/allprops/admin/todaysIncrement"
  );
  console.log(data);

  useEffect(() => {
    const getAnalysis = async () => {
      try {
        const response = await axios.get(
          "https://milaniumepropertybackend.vercel.app/api/property/allprops/admin/analysis"
        );
        if (response.data) {
          if (response && response.data.data.propertyCounts) {
            const formattedData = response.data.data.propertyCounts.map(
              (item) => ({
                id: item.propertyType,
                value: item.total,
                color: `hsl(${Math.floor(Math.random() * 360)}, 70%, 50%)`, // Generate random color
              })
            );

            setPieData(formattedData);
          }
        }
      } catch (err) {
        setError(err.message);
      }
    };

    getAnalysis();
  }, []);

  useEffect(() => {
    if (data) {
      setCardsData((prevCards) =>
        prevCards.map((card) => {
          if (card.title === "Post Property") {
            return {
              ...card,
              value: data?.propertyAdded?.today?.length || 0, // Use `data.posts` for Post Property
              total: data?.propertyAdded?.total || 0,
            };
          }
          if (card.title === "Quick Enquiry") {
            return {
              ...card,
              value: data?.enquiryAdded?.today?.length || 0, // Use `data.enquiries` for Total Enquiry Today
              total: data?.enquiryAdded?.total || 0,
            };
          }
          if (card.title === "Total Requirement") {
            return {
              ...card,
              value: data?.requirementAdded?.today?.length || 0, // Use `data.requirements` for Total Requirement Today
              total: data?.requirementAdded?.total || 0,
            };
          }
          return card; // Default: return the card as-is
        })
      );
    }
  }, [data]);

  if (error) return <p className=" text-center text-xl">Error loading data</p>;
  if (loading && !data) {
    return (
      <p className="text-white text-center text-3xl mt-5 mx-auto p-4">
        Loading....
      </p>
    );
  }
  return (
    <div className="text-white  mx-auto p-4">
      <p className="text-xl font-semibold uppercase ">DashBoard</p>
      <p className="mb-6 text-sm text-gray-200">
        You can See All  Statastics Here.
      </p>
      <div className="flex justify-between mb-4 gap-4 w-auto lg:w-[50%] ml-5 rounded-md">
  <div className="bg-gray-800 text-xl rounded-lg shadow-md w-full relative">
    <div className="overflow-x-auto">
      <table className="min-w-full border  shadow-md rounded-lg">
        {/* Table Header */}
        <thead>
          <tr className="bg-gray-200 text-gray-700 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">CATEGORY</th>
            <th className="py-3 px-6 text-left">TODAY</th>
            <th className="py-3 px-6 text-left">ALL</th>
          </tr>
        </thead>

        {/* Table Body */}
        <tbody className="text-gray-600 text-sm font-light">
          {cardsData.map((card, index) => (
            <tr key={index} className="border-b border-gray-300 ">
              <td className="py-3 px-6 text-left font-mono text-white">
                {card.description}
              </td>
              <td className="py-3 text-white px-6 text-left font-bold">
                {card.value}
              </td>
              <td className="py-3 text-yellow-400 px-6 text-left font-bold">
                {card.total}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  </div>
</div>

      <div className="grid grid-cols-3">
        <div className="h-[71vh] rounded-lg col-span-3 w-full">
          <div className="h-full relative rounded-lg bg-gray-800  w-full col-span-4">
            <ResponsivePie
              data={pieData}
              {...commonProperties}
              tooltip={({ datum: { id, value, color } }) => (
                <div
                  style={{
                    padding: "12px",
                    color: "black",
                    background: "white",
                    borderRadius: "8px",
                    boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
                  }}
                  className="flex items-center space-x-2"
                >
                  <div
                    style={{ background: `${color}`, borderRadius: 4 }}
                    className="w-4 h-4 "
                  ></div>
                  <span className="capitalize">
                    {id}: {value}
                  </span>
                </div>
              )}
              theme={{
                tooltip: {
                  container: {
                    background: "#333",
                    color: "#fff", // Tooltip text color
                    borderRadius: "8px",
                    padding: "8px 12px",
                  },
                },
              }}
            />
            <div className="absolute top-3 left-3">
              <p className="text-xl font-semibold uppercase ">
                Real Estate PortFolio
              </p>
            </div>
            <div className="absolute bottom-10 right-14">
              <p className="text-xl font-semibold uppercase ">
                Total Properties -{" "}
                {pieData?.reduce((acc, item) => acc + item.value, 0)}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
