// src/Components/Dashboard/RevenueChart.jsx
import React,{useContext} from "react";
import { ModeContext } from "../../Context/ModeContext";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

export default function RevenueChart({ data }) {
     const { theme, toggleTheme } = useContext(ModeContext);
              const bg = theme === "light" ? "bg-[#F7F9FB]" : "bg-[#FFFFFF0D]";
              const txt = theme==='light' ? 'text-[#000000]' : 'text-[#FFFFFF]'
  // Prepare chart data
  const chartData = data.months.map((month, i) => ({
    month,
    current: data.current_week[i],
    previous: data.previous_week[i],
  }));

  return (
    <div className={`w-full gap-4 h-[318px] p-6 rounded-xl  ${theme==='light'?'bg-[#F7F9FB] text-black' : 'bg-[#FFFFFF0D] text-white' }` }>
      {/* Title + legend */}
      <div className={`flex justify-start items-center gap-6 mb-4  `}>
        <h2 className={`font-inter font-semibold text-base  ${txt}` }>
          Revenue
        </h2>
        <div className="flex items-center gap-6 text-sm">
          <span className={`flex items-center gap-1   ${txt}`}>
            <span className={`w-2 h-2 rounded-full ${ theme === 'light' ?  "bg-[#000000]" : 'bg-[#C6C7F8]'} inline-block`}> </span>
           Current Week{" "}
            <span className="font-semibold">
              $
              {data.current_week[data.current_week.length - 1].toLocaleString()}
            </span>
          </span>
          <span className={`flex items-center gap-1 ${txt} `}>
            <span className={`w-2 h-2 rounded-full ${ theme === 'light' ?  "bg-[#1C1C1C66]" : 'bg-[#FFFFFF66]'} inline-block`}></span>
            Previous Week{" "}
            <span className="font-semibold">
              $
              {data.previous_week[
                data.previous_week.length - 1
              ].toLocaleString()}
            </span>
          </span>
        </div>
      </div>

      {/* Chart */}
      <ResponsiveContainer width="100%" height={270}>
        <LineChart
          data={chartData}
          margin={{ top: 10, right: 20, left: 0, bottom: 20 }}
        >
          {/* Background grid */}
          <CartesianGrid
             stroke= {theme === 'light' ?  "#1C1C1C66" : '#FFFFFF66'}
            strokeWidth={0.2  }
            vertical={false}
            strokeDasharray="0"
          />

          {/* X axis */}
          <XAxis
            dataKey="month"
            axisLine={{ stroke: "#E5E7EB", strokeWidth: 0.75 }}
            tickLine={false}
            tick={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: 12,
              fill:  theme === 'light' ?  "#1C1C1C66" : '#FFFFFF66'
            }}
          />

          {/* Y axis */}
          <YAxis
            axisLine={false}
            tickLine={false}
            ticks={[0, 10000000, 20000000, 30000000]}
            tickFormatter={(v) => `${Math.round(v / 1000000)}M`}
            tick={{
              fontFamily: "Inter, sans-serif",
              fontWeight: 500,
              fontSize: 12,
              fill:  theme === 'light' ?  "#1C1C1C66" : '#FFFFFF66'
            }}
          />

          {/* Tooltip */}
          <Tooltip
            formatter={(v) => `$${v.toLocaleString()}`}
            labelStyle={{ fontWeight: "600" }}
          />

          {/* Current Week (black, dashed after April like your screenshot) */}
          <Line
            type="monotone"
            dataKey="current"
            stroke={ theme === 'light' ?  "#000000" : '#C6C7F8'}
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
            strokeDasharray="0 0"
          />

          {/* Previous Week (blue) */}
          <Line
            type="monotone"
            dataKey="previous"
            stroke={ theme === 'light' ?  "#A8C5DA" : '#A8C5DA'}
            strokeWidth={2}
            dot={false}
            isAnimationActive={false}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
