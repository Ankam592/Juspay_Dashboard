import React, { useContext } from "react";
import { VectorMap } from "@react-jvectormap/core";
import { worldMill } from "@react-jvectormap/world";
import { ModeContext } from "../../Context/ModeContext";

export default function RevenueByLocation({ data }) {
  const { theme } = useContext(ModeContext);

  const bg = theme === "light" ? "bg-[#F7F9FB]" : "bg-[#1F1F1F]";
  const text = theme === "light" ? "text-black" : "text-white";
  const barBg = theme === "light" ? "bg-gray-200" : "bg-gray-600";
  const barFill = "bg-[#93C5FD]";

  return (
    <div
      className={`h-[318px] shadow rounded-lg p-4 ${bg} ${text}`}
    >
      <h2 className="font-inter font-semibold text-[14px] leading-[20px] ">
        Revenue by Location
      </h2>

      {/* World Map */}
      <div className="h-30">
        <VectorMap
          map={worldMill}
          backgroundColor="transparent"
          zoomOnScroll={false}
          panOnDrag={false}
          zoomButtons={false}
          regionStyle={{
            initial: { fill: "#A8C5DA" },
            hover: { fill: "#93C5FD" },
          }}
          markerStyle={{
            initial: {
              fill: theme === "light" ? "#000000" : "#93C5FD",
              r: 4,
            },
          }}
          markers={[
            { name: "New York", latLng: [40.7128, -74.006] },
            { name: "San Francisco", latLng: [37.7749, -122.4194] },
            { name: "Sydney", latLng: [-33.8688, 151.2093] },
            { name: "Singapore", latLng: [1.3521, 103.8198] },
          ]}
        />
      </div>

      {/* Locations list with progress bars */}
      <div className="space-y-4">
        {data.map((loc, idx) => {
          const max = Math.max(...data.map((d) => d.value));
          const percent = (loc.value / max) * 100;
          return (
            <div key={idx}>
              <div className="h-[22px] flex justify-between items-center text-sm font-inter ">
                <span>{loc.location}</span>
                <span className="font-semibold">
                  {(loc.value / 1000).toFixed(0)}K
                </span>
              </div>
              <div className={`w-full h-[2px] rounded ${barBg}`}>
                <div
                  className={`${barFill} h-[2px] rounded`}
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
