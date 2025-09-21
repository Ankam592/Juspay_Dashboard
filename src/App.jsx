import { useState,useContext } from 'react'
import { LeftSidebar } from './Components/LeftSidebar/LeftSidebar'
import { RightSidebar } from './Components/RightSidebar/RightSidebar'
import { Header } from './Components/Header/Header'
import { Dashboard } from './Components/Dashboard/Dashboard'
import './App.css'
import { ModeContext } from './Context/ModeContext'
import { Outlet } from 'react-router'
function App() {
  const { theme, toggleTheme } = useContext(ModeContext);
  const bg = theme === "light" ? "bg-white" : "bg-[#111111]";
  const txt = theme === "light" ? "text-[#1C1C1C]" : "text-gray-300";
  const iconColor = theme === "light" ? "#1C1C1C" : "#FFFFFF";
  return (
    <div className={`min-h-screen w-full  flex ${bg}`}>
      {/* Left Sidebar */}

      <LeftSidebar />


      {/* Middle Section */}
      <div id="middle" className={`flex-1  flex flex-col   xl:ml-[212px] xl:mr-[280px] border-l ${theme === "light" ? "border-[#1C1C1C66]" : "border-[#FFFFFF66]"}   `}>
        {/* Header */}
        <Header />

        {/* Content */}
        <main className="flex-1 ">
          <Outlet></Outlet>
        </main>
      </div>

      {/* Right Sidebar */}

      <RightSidebar />

    </div>
  );
}


export default App
