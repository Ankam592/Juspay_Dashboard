import { useState, useContext } from "react";
import { ModeContext } from "../../Context/ModeContext";
import { ModalLayout } from "../ModalLayout/ModalLayout";
import {
    FaBars,
    FaTachometerAlt,
    FaShoppingCart,
    FaProjectDiagram,
    FaBookOpen,
} from "react-icons/fa";

export const LeftSidebar = () => {
    const [openModal, setOpenModal] = useState(false);
    const { theme, toggleTheme } = useContext(ModeContext);
    return (

        <>
            <button
                onClick={() => setOpenModal((prev) => !prev)}
                className="lg:hidden p-2 fixed top-4 left-4 z-50 bg-gray-200 rounded">
                <FaBars size={20} />
            </button>
            <aside className={`hidden lg:flex w-16 flex-col items-center py-4 fixed top-0 left-0 h-full border-r ${theme === "light" ? "border-[#1C1C1C66] " : "border-[#FFFFFF66]"} `}>
                <button onClick={() => setOpenModal((prev) => !prev)} className="mb-6">
                    <FaTachometerAlt size={20} />
                </button>
                <button onClick={() => setOpenModal((prev) => !prev)} className="mb-6">
                    <FaShoppingCart size={20} />
                </button>
                <button onClick={() => setOpenModal((prev) => !prev)} className="mb-6">
                    <FaProjectDiagram size={20} />
                </button>
                <button onClick={() => setOpenModal((prev) => !prev)} className="mb-6">
                    <FaBookOpen size={20} />
                </button>


            </aside>

            <aside
                className={`hidden xl:flex w-[212px] flex-col items-center fixed top-0 left-0 h-full border-r ${theme === "light" ? "border-[#1C1C1C66]" : "border-[#FFFFFF66]"} 
                    }`}
            >
                <ModalLayout isModal={false} />
            </aside>


            {openModal && <aside  className={`flex w-[212px] flex-col items-center fixed top-0 left-0 z-50 h-full border-r ${theme === "light" ? "border-[#1C1C1C66] bg-white" : "border-[#FFFFFF66] bg-black"  }`}
>
                <ModalLayout isModal={true} onClose={()=>setOpenModal(false)}></ModalLayout>
            </aside>}


        </>

    );
}
