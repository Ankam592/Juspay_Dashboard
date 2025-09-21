// src/Components/TotalSales/TotalSales.jsx
import React, { useContext } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";
import { ModeContext } from "../../Context/ModeContext";

// small formatter helper
const fmtMoney = (v) => {
    if (v == null || Number.isNaN(Number(v))) return "$0.00";
    const n = Number(v);
    if (Math.abs(n) >= 1_000_000) return `$${(n / 1_000_000).toFixed(1)}M`;
    if (Math.abs(n) >= 1_000) return `$${(n / 1_000).toFixed(0)}K`;
    return `$${n.toFixed(2)}`;
};

export default function TotalSales({ data }) {
    const {theme,setTheme} = useContext(ModeContext)
    // safe fallback (used if data missing or empty)
    const fallback = [
        { channel: "Direct", value: 30056 },
        { channel: "Affiliate", value: 13518 },
        { channel: "Sponsored", value: 15154 },
        { channel: "E-mail", value: 4896 },
    ];

    // prefer incoming data if valid
    const chartData = Array.isArray(data) && data.length ? data : fallback;

    // sum — guard against missing/NaN
    const total = chartData.reduce(
        (s, item) => s + (Number(item?.value) || 0),
        0
    );

    // if no numeric data at all, show placeholder
    if (!total) {
        return (
            <div className="bg-[#F7F9FB] shadow rounded-xl p-4">
                <p className="font-inter font-semibold text-sm leading-5 ">
                    Total Sales
                </p>
            </div>
        );
    }

    const COLORS = [theme === 'light' ? "#111827" : "#C6C7F8" , "#86EFAC", "#95A4FC", "#BFDBFE"];

    // percent of first slice (with one decimal)
    const firstPercent = ((Number(chartData[0].value) / total) * 100).toFixed(1);

    return (
        <div className={`shadow rounded-xl p-4 w-full flex flex-wrap h-[344px] items-start ${theme==='light'?'bg-[#F7F9FB] text-black' : 'bg-[#FFFFFF0D] text-white'}`}>
            <p className="font-inter font-semibold text-sm leading-5 ">
                Total Sales
            </p>

            <div className="flex items-start flex-wrap justify-center">
                {/* Chart area */}
                <div className="relative">
                    <PieChart width={160} height={160}>
                        <Pie
                            data={chartData}
                            dataKey="value"
                            nameKey="channel"
                            cx="50%"
                            cy="50%"
                            outerRadius={60}
                            innerRadius={42}
                            paddingAngle={3}
                            cornerRadius={10}
                             stroke="none"
                        >
                            {chartData.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                    
                                />
                            ))}
                        </Pie>
                        <Tooltip
                            formatter={(v) => fmtMoney(v)}
                            wrapperStyle={{ zIndex: 1000 }}
                        />
                    </PieChart>

                   
                </div>

                {/* Legend / list */}
                <div className={`w-full pl-2 space-y-2 text-sm font-inter ${theme==='light'?'text-black' : 'text-white'} `}>
                    {chartData.map((item, idx) => (
                        <div
                            key={idx}
                            className="flex justify-between items-center w-36"
                        >
                            <span className="flex items-center gap-2">
                                <span
                                    className="w-2 h-2 rounded-full"
                                    style={{ backgroundColor: COLORS[idx % COLORS.length] }}
                                ></span>
                                {item.channel}
                            </span>
                            <span className=" font-small">
                                {fmtMoney(item.value)}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
