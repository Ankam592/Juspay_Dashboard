// src/Components/Dashboard/KPIs.jsx
import React,{useContext} from "react";
import { ModeContext } from "../../Context/ModeContext";
import { TrendingUp, TrendingDown } from "lucide-react";

export default function KPIs({ kpis }) {
     const { theme, toggleTheme } = useContext(ModeContext);
      const bg = theme === "light" ? "bg-white" : "bg-[#111111]";
  const txt = theme === "light" ? "text-[#1C1C1C]" : "text-gray-300";
  const iconColor = theme === "light" ? "#1C1C1C" : "#FFFFFF";
    const {
        customers,
        customers_change_pct,
        orders,
        orders_change_pct,
        revenue,
        revenue_change_pct,
        growth_pct,
    } = kpis;

    return (
        <>
            <KpiCard title="Customers" value={customers} change={customers_change_pct} className={`bg-[#E3F5FF] p-6 rounded-xl min-w-[200px] h-[112px]`} />
            <KpiCard title="Orders" value={orders} change={orders_change_pct} className={`  ${theme==='light'?'bg-[#F7F9FB] text-black' : 'bg-[#FFFFFF0D] text-white' }   p-6 rounded-xl min-w-[200px] h-[112px]`} />
            <KpiCard title="Revenue" value={`$${revenue.toLocaleString()}`} change={revenue_change_pct} className={` ${theme==='light'?'bg-[#F7F9FB] text-black' : 'bg-[#FFFFFF0D] text-white' }  p-6 rounded-xl min-w-[200px] h-[112px]`} />
            <KpiCard title="Growth" value={`${growth_pct}%`} change={growth_pct} className={` ${theme ? 'bg-[#E5ECF6]' : 'bg-[#E5ECF6]'} p-6 rounded-xl min-w-[200px] h-[112px]`} />
        </>
    );
}

function KpiCard({ title, value, change, className }) {
    const positive = change >= 0;
    return (
        <div className={className}>
            <div className="w-[154px] h-[20px] rounded-lg">
                <p className="font-inter font-semibold text-[14px] leading-5 tracking-normal">{title}</p>
            </div>
            <div className="w-[154px] h-[36px] rounded-lg flex justify-between items-center pr-4">
                <div className="w-[62px] h-[36px] rounded-lg">  <p className="font-inter font-semibold text-[24px] leading-9 tracking-normal">3781</p></div>
                <div className="w-[62px] h-[18px] rounded-lg flex justify-evenly items-center">
                    <div className="w-[62px] h-[36px] rounded-lg flex items-center">
                        <p className={`text-sm `}>
                        {positive ? "+" : ""}{change}%
                    </p>
                    </div>
                    <div className="w-[16px] h-[16px] rounded-lg flex justify-center pl-1">
                       {positive ?  <TrendingUp  size={15}/> : <TrendingDown size={15}/> } 
                    </div>
                    </div>
            </div>
        </div>
    );
}
