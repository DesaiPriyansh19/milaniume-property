import { ResponsiveLine } from "@nivo/line";
import React from "react";

export default function LineChart() {
  const data = [
    {
      id: "japan",
      color: "hsl(264, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 232,
        },
        {
          x: "helicopter",
          y: 262,
        },
        {
          x: "boat",
          y: 64,
        },
        {
          x: "train",
          y: 24,
        },
        {
          x: "subway",
          y: 31,
        },
        {
          x: "bus",
          y: 227,
        },
        {
          x: "car",
          y: 36,
        },
        {
          x: "moto",
          y: 61,
        },
        {
          x: "bicycle",
          y: 267,
        },
        {
          x: "horse",
          y: 196,
        },
        {
          x: "skateboard",
          y: 64,
        },
        {
          x: "others",
          y: 157,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(324, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 178,
        },
        {
          x: "helicopter",
          y: 175,
        },
        {
          x: "boat",
          y: 15,
        },
        {
          x: "train",
          y: 276,
        },
        {
          x: "subway",
          y: 249,
        },
        {
          x: "bus",
          y: 34,
        },
        {
          x: "car",
          y: 184,
        },
        {
          x: "moto",
          y: 74,
        },
        {
          x: "bicycle",
          y: 251,
        },
        {
          x: "horse",
          y: 92,
        },
        {
          x: "skateboard",
          y: 68,
        },
        {
          x: "others",
          y: 37,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(235, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 38,
        },
        {
          x: "helicopter",
          y: 283,
        },
        {
          x: "boat",
          y: 211,
        },
        {
          x: "train",
          y: 226,
        },
        {
          x: "subway",
          y: 235,
        },
        {
          x: "bus",
          y: 208,
        },
        {
          x: "car",
          y: 68,
        },
        {
          x: "moto",
          y: 113,
        },
        {
          x: "bicycle",
          y: 85,
        },
        {
          x: "horse",
          y: 196,
        },
        {
          x: "skateboard",
          y: 103,
        },
        {
          x: "others",
          y: 248,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(281, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 226,
        },
        {
          x: "helicopter",
          y: 287,
        },
        {
          x: "boat",
          y: 168,
        },
        {
          x: "train",
          y: 275,
        },
        {
          x: "subway",
          y: 100,
        },
        {
          x: "bus",
          y: 182,
        },
        {
          x: "car",
          y: 138,
        },
        {
          x: "moto",
          y: 258,
        },
        {
          x: "bicycle",
          y: 294,
        },
        {
          x: "horse",
          y: 47,
        },
        {
          x: "skateboard",
          y: 289,
        },
        {
          x: "others",
          y: 164,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(213, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 271,
        },
        {
          x: "helicopter",
          y: 6,
        },
        {
          x: "boat",
          y: 192,
        },
        {
          x: "train",
          y: 25,
        },
        {
          x: "subway",
          y: 55,
        },
        {
          x: "bus",
          y: 212,
        },
        {
          x: "car",
          y: 254,
        },
        {
          x: "moto",
          y: 213,
        },
        {
          x: "bicycle",
          y: 86,
        },
        {
          x: "horse",
          y: 232,
        },
        {
          x: "skateboard",
          y: 106,
        },
        {
          x: "others",
          y: 21,
        },
      ],
    },
  ];
  return (
    <div className="text-white w-full h-auto mx-auto p-4">
      <p className="text-xl font-semibold uppercase">Custom Line Chart</p>
      <p className="text-sm text-gray-200">Your personalized line chart</p>
      <div className="w-full h-[90vh]">
        <ResponsiveLine
          data={data}
          margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
          xScale={{ type: "point" }}
          yScale={{
            type: "linear",
            min: "auto",
            max: "auto",
            stacked: true,
            reverse: false,
          }}
          yFormat=" >-.2f"
          axisTop={null}
          axisRight={null}
          axisBottom={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "transportation",
            legendOffset: 36,
            legendPosition: "middle",
            truncateTickAt: 0,
          }}
          axisLeft={{
            tickSize: 5,
            tickPadding: 5,
            tickRotation: 0,
            legend: "count",
            legendOffset: -40,
            legendPosition: "middle",
            truncateTickAt: 0,
          }}
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
          pointSize={10}
          pointColor={{ theme: "background" }}
          pointBorderWidth={2}
          pointBorderColor={{ from: "serieColor" }}
          pointLabel="data.yFormatted"
          pointLabelYOffset={-12}
          enableTouchCrosshair={true}
          useMesh={true}
          tooltip={({ point }) => (
            <div
              style={{
                padding: 12,
                color: "black",
                background: "white",
                borderRadius: 8,
                boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              }}
              className="flex justify-center items-center"
            >
              <div
                style={{ background: `${point.serieColor}` }}
                className="w-4 h-4 rounded-full"
              ></div>
              <span className="uppercase ml-2">
                {point.serieId}: {point.data.xFormatted},{" "}
                {point.data.yFormatted}
              </span>
            </div>
          )}
          legends={[
            {
              anchor: "bottom-right",
              direction: "column",
              justify: false,
              translateX: 100,
              translateY: 0,
              itemsSpacing: 0,
              itemDirection: "left-to-right",
              itemWidth: 80,
              itemHeight: 20,
              itemOpacity: 0.75,
              symbolSize: 12,
              symbolShape: "circle",
              symbolBorderColor: "rgba(0, 0, 0, .5)",
              effects: [
                {
                  on: "hover",
                  style: {
                    itemBackground: "rgba(0, 0, 0, .03)",
                    itemOpacity: 1,
                  },
                },
              ],
            },
          ]}
        />
      </div>
    </div>
  );
}
