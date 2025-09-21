import React ,{useContext}from "react";
import { ModeContext } from "../../Context/ModeContext";

export default function TopProducts({ data }) {
    const { theme } = useContext(ModeContext);
      const bg = theme === "light" ? "bg-[#F7F9FB]" : "bg-[#1F1F1F]";
      const text = theme === "light" ? "text-black" : "text-white";
    return (
        <div className={`h-[336px] shadow rounded-xl p-6 gap-1 ${theme==='light'?'bg-[#F7F9FB] text-black' : 'bg-[#FFFFFF0D] text-white' }   `}>
            <div className="h-5 w-full ">
                <h2 className="font-inter font-semibold text-sm leading-5 tracking-normal ">Top Selling Products</h2>
            </div>
            <div className="">
                <table className={`w-full text-sm font-inter ${theme==='light'?'text-black' : 'text-white' }  `}>
                    <thead>
                        <tr className={`w-full  gap-1 border-b  h-10 ${theme === "light" ? "text-[#1C1C1C66] border-[#1C1C1C33]" : "text-[#FFFFFF66] border-[#FFFFFF66]"} `}>
                            <th className="max-w-[224px] text-left py-2 pr-4 font-normal">Name</th>
                            <th className="max-w-[130px] text-left py-2 pr-4 font-normal">Price</th>
                            <th className="max-w-[130px] text-left py-2 pr-4 font-normal">Quantity</th>
                            <th className="max-w-[130px] text-left py-2 pr-4 font-normal">Amount</th>
                        </tr>
                    </thead>
                    <tbody>
                        {data.map((product, idx) => (
                            <tr key={idx} className={`w-full  gap-1 h-10 rounded-lg ${theme==='light'?'text-black' : 'text-white' }  `}>
                                <td className="max-w-[224px] py-2 pr-4 ">{product.name}</td>
                                <td className="max-w-[130px] py-2 pr-4 ">
                                    ${product.price.toFixed(2)}
                                </td>
                                <td className="max-w-[130px] py-2 pr-4 ">{product.quantity}</td>
                                <td className="max-w-[130px] py-2 pr-4 font-medium">
                                    ${product.amount.toLocaleString(undefined, {
                                        minimumFractionDigits: 2,
                                    })}
                                </td>   
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
