// src/Components/Dashboard/ProjectionsChart.jsx
import React,{useContext} from "react";
import { ModeContext } from "../../Context/ModeContext";
import {
    BarChart,
    Bar,
    CartesianGrid,
    XAxis,
    YAxis,
    Tooltip,
    ResponsiveContainer,
} from "recharts";

export default function ProjectionsChart({ data }) {
    // Take first 6 months only
     const { theme, toggleTheme } = useContext(ModeContext);
          const bg = theme === "light" ? "bg-[#F7F9FB]" : "bg-[#FFFFFF0D]";
    const monthsToShow = data.months.slice(0, 6);
    const chartData = monthsToShow.map((month, i) => ({
        month,
        actual: data.actuals[i] / 1_000_000,
        gap: (data.projections[i] - data.actuals[i]) / 1_000_000,
    }));

    return (
        <div className={`${theme==='light'?'bg-[#F7F9FB] text-black' : 'bg-[#FFFFFF0D] text-white' }   shadow rounded-xl p-6 gap-4 flex flex-col`}>
            <div className="h-5 w-full  ">
                <h2 className={`font-inter font-semibold ${theme==='light' ? 'text-[#000000]' : 'text-[#FFFFFF]'} leading-5 tracking-normal`}>Projections vs Actuals</h2>
            </div>
            <ResponsiveContainer width="100%" height={168}>
                <BarChart data={chartData}>
                    <CartesianGrid strokeDasharray="0"
                        stroke= {theme === 'light' ?  "#1C1C1C66" : '#FFFFFF66'}
                        strokeWidth={0.25}
                        vertical={false}
                        horizontal={true}
                    />
                    <XAxis dataKey="month"
                        axisLine={{ stroke: "#E5E7EB" , strokeWidth: 0.5,}}   // axis line color
                        tickLine={false}
                        tick={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 400,
                            fontSize: 12,
                            lineHeight: 18,
                            letterSpacing: 0,
                            textAnchor: "end",
                            fill:  theme === 'light' ?  "#1C1C1C66" : '#FFFFFF66'
                        }} />

                    <YAxis tickFormatter={(v) => `${v}M`}
                        axisLine={false}
                        tickLine={false}
                        ticks={[0, 10, 20, 30]}  
                         
                        tick={{
                            fontFamily: "Inter, sans-serif",
                            fontWeight: 400,
                            fontSize: 12,
                            lineHeight: 18, 
                            letterSpacing: 0,
                            textAnchor: "end",
                            fill:  theme === 'light' ?  "#1C1C1C66" : '#FFFFFF66'
                        }} />
                    <Tooltip formatter={(v) => `${v}M`} />

                    {/* Actual at bottom, gap stacked on top */}
                    <Bar dataKey="actual" stackId="a" fill="#A8C5DA" name="Actual" barSize={20} />
                    <Bar dataKey="gap" stackId="a" fill="#E5ECF6" fillOpacity={0.4} name="Projection" barSize={20} radius={[4, 4, 0, 0]} />
                </BarChart>
            </ResponsiveContainer>
        </div>
    );
}
