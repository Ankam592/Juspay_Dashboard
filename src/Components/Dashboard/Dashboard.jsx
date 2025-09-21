import React, { useContext } from "react";
import { useDashboardData } from "../Hooks/useDashboardData";
import KPIs from "../KPI/KPI";
import ProjectionsChart from "../Projectionchart/Projectionchart";
import RevenueChart from "../RevenueChart/RevenueChart";
import RevenueByLocation from "../RevenueByLocation/RevenueByLocation";
import TopProducts from "../TopProducts/TopProducts";
import TotalSales from "../TotalSales/TotalSales";
import { ModeContext } from "../../Context/ModeContext";


export const Dashboard = () => {
    const { information, loading, error } = useDashboardData();
    const { theme, toggleTheme } = useContext(ModeContext);
    const bg = theme === "light" ? "bg-white" : "bg-[#111111]";
    const txt = theme === "light" ? "text-[#1C1C1C]" : "text-gray-300";
    const iconColor = theme === "light" ? "#1C1C1C" : "#FFFFFF";
    if (loading) return <p>Loading!</p>
    return (
        <div className={`p-7 gap-7 flex justify-evenly  items-center flex-wrap ${bg}`}>
            <div className="pl-[90px] w-full h-7 flex justify-start">
                <div className="w-[99px] h-7 flex justify-start items-center px-2 py-1">
                    <p className="font-inter font-semibold text-[14px] leading-[20px] tracking-[0]">eCommerce</p>
                </div>
            </div>
            <div className="w-full flex justify-evenly items-center flex-wrap  ">
                <div className="w-[432px] gap-7 flex flex-wrap">
                    <KPIs kpis={information.kpis}></KPIs>
                </div>
                <div className="w-[432px] gap-7 ">
                    <ProjectionsChart data={information.projections_vs_actuals}></ProjectionsChart>

                </div>
            </div>
            <div className="w-full h-auto flex justify-evenly items-center flex-wrap">
                <div className="max-w-[662px] h-auto ">
                    <RevenueChart data={information.revenue_chart}></RevenueChart>

                </div>
                <div className="w-[202px] ">
                    <RevenueByLocation data={information.revenue_by_location}></RevenueByLocation>
                </div>
            </div>
            <div className="w-full h-auto flex justify-evenly items-center flex-wrap">
                <div className="max-w-[662px]  ">
                    <TopProducts data={information.top_products}></TopProducts>

                </div>
                <div className="max-w-[202px] h-auto">
                    <TotalSales data={information.total_sales_breakdown}></TotalSales>
                </div>
            </div>

        </div>
    )

}