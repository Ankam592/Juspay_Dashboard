import React, { useState, useContext } from "react";
import * as FaIcons from "react-icons/fa";
import * as PiIcons from "react-icons/pi";
import * as HiIcons from "react-icons/hi";
import * as lucide from "lucide-react";
import { Button } from "../Button/Button";
import { HiChevronDown, HiChevronRight } from "react-icons/hi";
import { ModeContext } from "../../Context/ModeContext";
export const ModalLayout = ({ isModal, onClose }) => {
    const { theme, toggleTheme } = useContext(ModeContext);
    const bg = theme === "light" ? "bg-white" : "bg-[#111111]";
    const txt = theme === "light" ? "text-[#1C1C1C]" : "text-gray-300";
    const Faicons = { ...FaIcons, ...PiIcons, ...HiIcons, ...lucide }
    const [menu, setMenu] = useState([
        {
            section: "Dashboard",
            items: [
                {
                    label: "Default",
                    icon: "PiChartPieSlice",
                    Isopen: false,
                },
                {
                    label: "eCommerce",
                    icon: "HiOutlineShoppingBag",
                    Isopen: false,
                    children: [
                        { label: "Shop", link: "/dashboard/ecommerce/shop" },
                        { label: "Product", link: "/dashboard/ecommerce/product" },
                    ],
                },
                {
                    label: "Projects",
                    icon: "FaProjectDiagram",
                    Isopen: false,
                    children: [
                        { label: "Project 1", link: "/dashboard/projects/1" },
                        { label: "Project 2", link: "/dashboard/projects/2" },
                    ],
                },
                {
                    label: "Online Courses",
                    icon: "BookOpen",
                    Isopen: false,
                    children: [
                        { label: "Course 1", link: "/dashboard/courses/1" },
                        { label: "Course 2", link: "/dashboard/courses/2" },
                    ],
                },
            ],
        },
        {
            section: "Pages",
            items: [
                {
                    label: "User Profile",
                    icon: "PiIdentificationBadge",
                    Isopen: false,
                    children: [
                        { label: "Overview" },
                        { label: "Projects" },
                        { label: "Campaigns" },
                        { label: "Documents" },
                        { label: "Followers" },
                    ],
                },
                {
                    label: "Account",
                    icon: "PiIdentificationCard",
                    Isopen: false,
                },
                {
                    label: "Corporate",
                    icon: "PiUsersThree",
                    Isopen: false,
                },
                {
                    label: "Blog",
                    icon: "PiNotebook",
                    Isopen: false,
                },
                {
                    label: "Social",
                    icon: "PiChatsCircle",
                    Isopen: false,
                },
            ],
        },
    ]);

    // toggle dropdown open/close
    const toggleChild = (sectionIndex, itemIndex) => {
        setMenu((prev) =>
            prev.map((section, i) => {
                if (i !== sectionIndex) return section;
                return {
                    ...section,
                    items: section.items.map((item, j) =>
                        j === itemIndex ? { ...item, Isopen: !item.Isopen } : item
                    ),
                };
            })
        );
    };
    return (
        <>
            <aside
                className={`
          ${isModal
                        ? `fixed top-0 left-0 h-full w-[212px] ${bg} shadow z-50 py-5 px-4 gap-4`
                        : `flex flex-col ${bg} ${theme === "light" ? "border-[#1C1C1C66] " : "border-[#FFFFFF66] "}   py-5 px-4  w-[212px] h-full gap-4`}
        `}>



                <div className="w-full h-[32px] flex justify-start items-center p-1 rounded-lg">

                    <div className="w-1/2 h-full flex justify-between items-center rounded-lg">
                        <div className="w-6 h-6 bg-[url('assets/IconText.png')] rounded-[80px] flex-none order-0 grow-0">

                        </div>
                        <div className="flex flex-col justify-center items-start p-0 w-[58px] h-5 rounded-md flex-none order-1 grow-0">
                            <p className={`font-inter font-normal text-sm leading-5 ${txt} tracking-normal`}>  ByeWind</p>

                        </div>
                    </div>
                </div>
                <div className={`w-full h-auto flex justify-center items-center pb-3 gap-1 flex-wrap ${txt}`}>
                    <div className="w-full h-auto flex justify-start items-center p-1 rounded-lg gap-2">
                        <div className="w-1/2 h-full flex justify-between items-center rounded-lg px-2 py-1 gap-1">
                            <Button className={`w-full h-5 border-none `} value={`Favorites`}>Favorites</Button>
                        </div>
                        <div className="w-1/2 h-full flex justify-between items-center rounded-lg px-2 py-1 gap-1">
                            <Button className={`w-full h-5 border-none `} value={`Recently`}>Recently</Button>
                        </div>
                    </div>

                    <div className="w-full h-auto flex justify-start items-center p-1 rounded-lg gap-2">
                        <div className="w-full h-auto flex justify-start items-center  rounded-lg gap-1">
                            <div className="w-4 h-4 flex justify-center items-center rounded-lg ">
                                <div className={`w-[6px] h-[6px] ${theme === "light" ? "bg-[#1C1C1C33]" : "bg-[#FFFFFF66]"} rounded-full `}></div>
                            </div>
                            <div className="w-auto h-[20px] flex justify-between items-center rounded-lg px-2 py-1 gap-1">
                                <p className="">Overview</p>
                            </div>
                        </div>
                    </div>

                    <div className="w-full h-auto flex justify-start items-center p-1 rounded-lg gap-2">
                        <div className="w-full h-auto flex justify-start items-center  rounded-lg gap-1">
                            <div className="w-4 h-4 flex justify-center items-center rounded-lg ">
                                <div className={`w-[6px] h-[6px] ${theme === "light" ? "bg-[#1C1C1C33]" : "bg-[#FFFFFF66]"} rounded-full`}></div>
                            </div>
                            <div className="w-auto h-[20px] flex justify-between items-center rounded-lg px-2 py-1 gap-1">
                                <p className="">Projects</p>
                            </div>
                        </div>
                    </div>
                </div>

                {menu.map((cur, i) => {
                    return <nav key={i} className={`flex flex-col w-full h-auto pb-3 gap-1 ${txt}`}>

                        <div className="w-full h-7 flex items-center justify-start rounded-2 py-1 px-3 gap-1">
                            <p className={`font-inter font-normal text-[14px] leading-5 tracking-normal text-[#1C1C1C66] ${theme === "light" ? "text-[#1C1C1C33]" : "text-[#FFFFFF66]"} `}>{cur.section}</p>
                        </div>
                        {cur.items.map((Item, j) => {
                            const Icon = Faicons[Item.icon];
                            return (
                                <React.Fragment key={`${Item.label}-${i}-${j}`}>
                                    <div
                                        className={`w-full flex items-center justify-start rounded-2 py-1 pr-2 gap-1 ${txt}`}
                                        onClick={() => toggleChild(i, j)}
                                    >
                                        <div className="w-6 h-5 flex items-center justify-center rounded-2">
                                            <div className="w-5 h-5 flex items-center justify-center rounded-2">
                                                {!Item.Isopen ? (
                                                    <HiChevronRight size={20} color={theme === "light" ? "#1C1C1C33" : "#FFFFFF66"} />
                                                ) : (
                                                    <HiChevronDown size={20} color={theme === "light" ? "#1C1C1C33" : "#FFFFFF66"} />
                                                )}
                                            </div>
                                        </div>

                                        <div className="w-36 h-5 flex items-center justify-start rounded-2 gap-1">
                                            <div className="w-5 h-5 flex items-center justify-start rounded-2">
                                                {Icon && <Icon size={20} />}
                                            </div>
                                            <div className="h-4 flex items-center justify-start rounded-2">
                                                <p className={`font-inter font-normal text-sm leading-5 ${txt} tracking-normal text-[#1C1C1C]`}>
                                                    {Item.label}
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* 🔹 children loop */}
                                    {Item.Isopen &&
                                        Item.children &&
                                        Item.children.map((child, k) => (
                                            <div
                                                key={`${Item.label}-${j}-${i}-${k}`}  // ✅ unique key
                                                className="w-full flex items-center justify-start rounded-2 py-1 pr-2 gap-1"
                                            >
                                                <div className="w-6 h-5 flex items-center justify-center rounded-2">
                                                    <div className="w-5 h-5 flex items-center justify-center rounded-2">
                                                        {/* no chevron */}
                                                    </div>
                                                </div>

                                                <div className="w-36 h-5 flex items-center justify-start rounded-2 gap-1">
                                                    <div className="w-5 h-5 flex items-center justify-start rounded-2">
                                                        {/* no icon */}
                                                    </div>
                                                    <div className="h-4 flex items-center justify-start rounded-2">
                                                        <p className={`font-inter font-normal text-sm leading-5 tracking-normal ${txt}`}>
                                                            {child.label}
                                                        </p>
                                                    </div>
                                                </div>
                                            </div>
                                        ))}
                                </React.Fragment>

                            );


                        })
                        }
                    </nav>


                })}

               { isModal && <button
                    onClick={onClose}
                    className="absolute top-3 right-3 text-gray-500 hover:text-gray-800"
                >
                    ✕
                </button> }
            </aside>

        </>
    );
};
