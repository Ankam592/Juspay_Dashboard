import React, { useContext } from "react";
import { PiNotebook, PiStar } from "react-icons/pi";
import { Search, Sun, Moon, RefreshCcw, Bell, Layout } from "lucide-react";
import { ModeContext } from "../../Context/ModeContext";
import { NavLink, useNavigate } from "react-router";

export const Header = () => {
  const { theme, toggleTheme } = useContext(ModeContext);
  const nav = useNavigate()

  const bg = theme === "light" ? "bg-white" : "bg-[#111111]";
  const txt = theme === "light" ? "text-[#1C1C1C]" : "text-gray-300";
  const iconColor = theme === "light" ? "#1C1C1C" : "#FFFFFF";

  return (
    <div
className={`flex items-center justify-center md:justify-between h-auto px-7 py-5 gap-4 border-b ${
  theme === "light" ? "border-[#1C1C1C66]" : "border-[#FFFFFF66]"
} ${bg} flex-wrap`}
    >
      <div className="flex justify-evenly items-center gap-2 max-w-[256px]">
        <div className="flex justify-start items-center">
          <div className={`flex justify-center items-center w-7 h-full gap-1 p-1 ${txt}`}>
            <PiNotebook size={20} stroke={iconColor}/>
          </div>
          <div className="flex justify-center items-center w-7 h-full gap-1 p-1">
            <PiStar size={20} color={iconColor} />
          </div>
        </div>

        <div className={`flex justify-start items-center ${txt}`}>
          <div className="flex justify-center items-center gap-1 rounded-lg px-1 py-2">
            <div className="flex justify-center items-center w-[82px] h-5 gap-1 rounded-lg px-1 py-2" onClick={()=>nav('/')}>
              <p className={`font-inter font-normal text-sm leading-5 tracking-normal text-center align-middle ${theme === "light" ? "text-[#1C1C1C66]" : "text-[#FFFFFF66]"} `}>
                Dashboards
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-1 rounded-lg px-1 py-2">
            <div className="flex justify-center items-center w-[5px] h-5 gap-1 rounded-lg px-1 py-2">
              <p className="font-inter font-normal text-sm leading-5 tracking-normal text-center align-middle">
                /
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center gap-1 rounded-lg px-1 py-2">
            <div className="flex justify-center items-center w-[49px] h-5 gap-1 rounded-lg px-1 py-2" onClick={()=>nav('/orderlist')}>
              <p className="font-inter font-normal text-sm leading-5 tracking-normal text-center align-middle">
                Default
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-evenly items-center gap-2 max-w-[316px]">
        <div
          className={`flex justify-evenly items-center w-[160px] py-1 px-2 rounded-lg ${
            theme === "light" ? "bg-[#1C1C1C0D]" : "bg-gray-800"
          }`}
        >
          <div className="flex justify-center items-center rounded-lg gap-1">
            <div className="flex justify-center items-center w-4 h-4 rounded-lg">
              <Search size={16} color={theme === "light" ? "#1C1C1C33" : "#FFFFFF66"} />
            </div>
            <div className="flex justify-center items-center w-[96px] h-4">
              <input
                className={`w-[96px] bg-transparent ${txt} placeholder-gray-400`}
                type="text"
                placeholder="Search"
              />
            </div>
          </div>
          <div className="flex justify-center items-center w-5 h-full rounded-lg">
            <p className="font-inter font-normal text-[20px] leading-5 tracking-normal text-gray-400">
              ⌘/
            </p>
          </div>
        </div>

        <div className="flex justify-start items-center max-w-[136px] gap-2">
          <div className="flex justify-center items-center gap-1 rounded-lg p-1 ">
            <button className="w-5 h-5" onClick={toggleTheme}>
              {theme === "light" ? (
                <Moon size={18} color={iconColor} />
              ) : (
                <Sun size={18} color={iconColor} />
              )}
            </button>
          </div>
          <div className="flex justify-center items-center gap-1 rounded-lg p-1 ">
            <button className="w-5 h-5">
              <RefreshCcw size={18} color={iconColor} />
            </button>
          </div>
          <div className="flex justify-center items-center gap-1 rounded-lg p-1 ">
            <button className="w-5 h-5">
              <Bell size={18} color={iconColor} />
            </button>
          </div>
          <div className="flex justify-center items-center gap-1 rounded-lg p-1 ">
            <button className="w-5 h-5">
              <Layout size={18} color={iconColor} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
