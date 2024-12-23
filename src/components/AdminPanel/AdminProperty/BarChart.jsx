import { ResponsiveBar } from "@nivo/bar";
import React from "react";

export default function BarChart() {
  const data = [
    {
      country: "USA",
      "hot dog": 120,
      burger: 200,
      sandwich: 100,
      kebab: 150,
      fries: 180,
      donut: 50,
    },
    {
      country: "Germany",
      "hot dog": 100,
      burger: 130,
      sandwich: 90,
      kebab: 180,
      fries: 170,
      donut: 60,
    },
    {
      country: "France",
      "hot dog": 80,
      burger: 110,
      sandwich: 120,
      kebab: 160,
      fries: 140,
      donut: 70,
    },
    {
      country: "UK",
      "hot dog": 90,
      burger: 160,
      sandwich: 110,
      kebab: 130,
      fries: 160,
      donut: 55,
    },
    {
      country: "Italy",
      "hot dog": 70,
      burger: 150,
      sandwich: 80,
      kebab: 140,
      fries: 150,
      donut: 60,
    },
  ];

  return (
    <div className="text-white w-full h-auto mx-auto p-4">
      <p className="text-xl font-semibold uppercase">BarChart</p>
      <p className="text-sm text-gray-200">Your Personalised Bar Chart</p>
      <div className="w-full h-[90vh]">
        <ResponsiveBar
          data={data}
          keys={["hot dog", "burger", "sandwich", "kebab", "fries", "donut"]}
          indexBy="country"
          margin={{ top: 50, right: 130, bottom: 50, left: 60 }}
          padding={0.25}
          valueScale={{ type: "linear" }}
          indexScale={{ type: "band", round: true }}
          valueFormat=" >-"
          colors={{ scheme: "nivo" }}
          defs={[
            {
              id: "dots",
              type: "patternDots",
              background: "inherit",
              color: "#38bcb2",
              size: 4,
              padding: 1,
              stagger: true,
            },
            {
              id: "lines",
              type: "patternLines",
              background: "inherit",
              color: "#eed312",
              rotation: -45,
              lineWidth: 6,
              spacing: 10,
            },
          ]}
          fill={[
            {
              match: {
                id: "fries",
              },
              id: "dots",
            },
            {
              match: {
                id: "sandwich",
              },
              id: "lines",
            },
          ]}
          borderColor={{
            from: "color",
            modifiers: [["darker", 1.6]],
          }}
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,

            legend: "country",
            legendPosition: "middle",
            legendOffset: 32,
            truncateTickAt: 0,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "food",
            legendPosition: "middle",
            legendOffset: -40,
            truncateTickAt: 0,
          }}
          labelSkipWidth={12}
          labelSkipHeight={12}
          labelTextColor="#ffffff"
          theme={{
            axis: {
              ticks: {
                text: {
                  fill: "#ffffff", // Axis text color
                },
              },
              legend: {
                text: {
                  fill: "#ffffff", // Legend text color
                },
              },
            },
            legends: {
              text: {
                fill: "#ffffff", // Set legend text color to white
              },
              symbol: {
                fill: "#ffffff", // Set legend symbol color to white
              },
            },
          }}
          legends={[
            {
              dataFrom: "keys",
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 120,
              translateY: 0,
              itemsSpacing: 2,
              itemWidth: 100,
              itemHeight: 20,
              itemDirection: "left-to-right",
              itemOpacity: 0.85,
              symbolSize: 20,
              effects: [
                {
                  on: "hover",
                  style: {
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
          role="application"
          ariaLabel="Nivo bar chart demo"
          barAriaLabel={(e) =>
            e.id + ": " + e.formattedValue + " in country: " + e.indexValue
          }
        />
      </div>
    </div>
  );
}
