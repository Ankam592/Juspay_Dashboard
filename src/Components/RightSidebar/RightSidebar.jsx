import React,{useContext} from "react";
import "./RightSidebar.css"
import { ModeContext } from "../../Context/ModeContext";
import {
    PiUser,
    PiBugBeetle,
    PiUserCirclePlus,
    PiBell,
    PiUpload,
    PiFileText,
    PiTrash,
    PiBroadcast 
} from "react-icons/pi";

export const RightSidebar = () => {
     const { theme, toggleTheme } = useContext(ModeContext);
          const bg = theme === "light" ? "bg-white" : "bg-[#111111]";
          const txt = theme === "light" ? "text-[#1C1C1C]" : "text-gray-300";
          const iconColor = theme === "light" ? "#1C1C1C" : "#FFFFFF";
    // Notifications Section
    const notifications = [
        {
            id: 1,
            icon: PiBugBeetle,
            text: "You have a bug that needs...",
            time: "Just now",
        },
        {
            id: 2,
            icon: PiUser,
            text: "New user registered",
            time: "59 minutes ago",
        },
        {
            id: 3,
            icon: PiBugBeetle,
            text: "You have a bug that needs...",
            time: "12 hours ago",
        },
        {
            id: 4,
            icon: PiBroadcast,
            text: "Andi Lane subscribed to you",
            time: "Today, 11:59 AM",
        },
    ];

    // Activities Section
    const activities = [
        {
            id: 1,
            icon: '01',
            text: "You have a bug that needs...",
            time: "Just now",
        },
        {
            id: 2,
            icon: '02',
            text: "Released a new version",
            time: "59 minutes ago",
        },
        {
            id: 3,
            icon: '03',
            text: "Submitted a bug",
            time: "12 hours ago",
        },
        {
            id: 4,
            icon: '04',
            text: "Modified A data in Page X",
            time: "Today, 11:59 AM",
        },
        {
            id: 5,
            icon: '05',
            text: "Deleted a page in Project X",
            time: "Feb 2, 2023",
        },
    ];

    // Contacts Section
    const contacts = [
        { id: '06', name: "Natali Craig", avatar: "/avatars/natali.png" },
        { id: '07', name: "Drew Cano", avatar: "/avatars/drew.png" },
        { id: '08', name: "Orlando Diggs", avatar: "/avatars/orlando.png" },
        { id: '09', name: "Andi Lane", avatar: "/avatars/andi.png" },
        { id: '10', name: "Kate Morrison", avatar: "/avatars/kate.png" },
        { id: '11', name: "Koray Okumus", avatar: "/avatars/koray.png" },
    ];

    return (
        <div id='rightbar' className={`${bg} flex flex-col  fixed right-0 top-0 w-[280px] h-full p-5 gap-6 shadow border-l ${theme === "light" ? "border-[#1C1C1C66] " : "border-[#FFFFFF66] "} `}>
            {/* Notifications */}
            <div className="w-full">
                <div className="flex justify-start items-center w-full py-2  px-1 rounded-lg">
                    <p className={`font-inter font-semibold text-sm mb-2 ${txt}`}>Notifications</p>
                </div>

                {notifications.map((cur) => {
                    const Icon = cur.icon;
                    return (
                        <div
                            key={cur.id}
                            className="flex items-start justify-start gap-2 p-1 rounded-lg hover:bg-gray-50"
                        >
                            <div className={`w-6 h-6 flex items-center justify-center  rounded-lg bg-[#E3F5FF] `}>
                                <Icon size={18} />
                            </div>
                            <div>
                                <p className={`font-inter text-sm text-[#1C1C1C] font-normal ${txt}`}>{cur.text}</p>
                                <p className={`font-inter text-xs ${theme === "light" ? "text-[#1C1C1C66]" : "text-[#FFFFFF66]"} font-normal`}>{cur.time}</p>
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Activities */}
            <div className="w-full">
                 <div className="flex justify-start items-center w-full py-2  px-1 rounded-lg">
                    <p className={`font-inter font-semibold text-sm mb-2 text-[#1C1C1C] ${txt}`}>Activities</p>
                </div>
                {activities.map((cur) => {
                    const Icon = cur.icon;
                    return (
                        <div
                            key={cur.id}
                            className="flex items-start gap-2 p-1 rounded-lg hover:bg-gray-50"
                        >
                            <div className={`w-6 h-6 flex items-center justify-center  rounded-full bg-cover`}  style={{ backgroundImage: `url(assets/${cur.icon}.png)` }} >
                                {/* <Icon size={18} /> */}
                            </div>
                            <div>
                               <p className={`font-inter text-sm text-[#1C1C1C] font-normal ${txt}`}>{cur.text}</p>
                                <p className={`font-inter text-xs ${theme === "light" ? "text-[#1C1C1C66]" : "text-[#FFFFFF66]"} font-normal`}>{cur.time}</p>
                            
                            </div>
                        </div>
                    );
                })}
            </div>

            {/* Contacts */}
            <div className="w-full">
                  <div className="flex justify-start items-center w-full py-2  px-1 rounded-lg">
                    <p className={`font-inter font-semibold text-sm mb-2  ${txt}`}>Contacts</p>
                </div>
                {contacts.map((cur) => (
                    <div
                        key={cur.id}
                        className="flex items-center gap-2 p-1 rounded-lg hover:bg-gray-50"
                    >
                        <img
                            src={`assets/${cur.id}.png`}
                            alt={cur.name}
                            className="w-6 h-6 rounded-full object-cover"
                        />
                        <p className={`font-inter text-sm text-[#1C1C1C] font-normal ${txt}`}>{cur.name}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};
