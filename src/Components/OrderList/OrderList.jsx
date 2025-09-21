import React, { useContext, useState } from "react";
import { useDashboardData } from "../Hooks/useDashboardData";
import { Search } from "lucide-react";
import { ModeContext } from "../../Context/ModeContext";
import { Plus, Filter, ArrowUpDown } from "lucide-react";

export default function OrderList() {
    const { information, loading, error } = useDashboardData();
    const [search, setSearch] = useState("");
    const [page, setPage] = useState(1);
    const pageSize = 5;
    const { theme, setTheme } = useContext(ModeContext);
    const [hovered, setHovered] = useState(false);
    const bg = theme === 'light' ? 'bg-[#FFFFFF]' : 'bg-[#000000]';
    const txt = theme === 'light' ? 'text-[#1C1C1C]' : 'text-[#FFFFFF]'
    if (loading) return <p>Loading!</p>;
    if (error) return <p>Error loading orders.</p>;

    // filter by search
    const filtered = information.orders.filter((order) =>
        [order.orderId, order.user, order.project, order.status]
            .join(" ")
            .toLowerCase()
            .includes(search.toLowerCase())
    );

    // pagination
    const totalPages = Math.ceil(filtered.length / pageSize);
    const paginated = filtered.slice((page - 1) * pageSize, page * pageSize);

    return (
        <div className={`p-7 gap-3 w-full flex justify-between  items-center flex-wrap ${bg} ${txt}`}>
            <div className=" w-full h-7 flex justify-start rounded-lg">
                <div className="w-[83px] px-2 py-1 h-7 flex justify-start items-center">
                    <p className="font-inter font-semibold text-[14px] leading-[20px] tracking-[0]">Order List</p>
                </div>
            </div>
            <div className={`p-2 gap-4 w-full h-11 flex justify-between ${theme === 'light' ? 'bg-[#F7F9FB]' : 'bg-[#FFFFFF0D]'} `}>
                <div className="max-w-[980px] h-7 flex justify-start items-center">
                    <div className="flex justify-center items-center w-7 h-full gap-1 p-1">
                        <Plus size={20} />
                    </div>
                    <div className="flex justify-center items-center w-7 h-full gap-1 p-1">
                        <Filter size={20} />
                    </div>
                    <div className="flex justify-center items-center w-7 h-full gap-1 p-1">
                        <ArrowUpDown size={20} />
                    </div>

                </div>
                <div className="w-[160px] h-7 flex justify-center items-center">
                    <div className="flex items-center border rounded-lg px-2 py-1 w-60 ">
                        <Search size={16} className="text-gray-400 mr-2" />
                        <input
                            type="text"
                            placeholder="Search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                            className="w-full bg-transparent outline-none text-sm text-gray-700"
                        />

                    </div>
                </div>
            </div>

            <div className="block md:hidden">
                {paginated.map((order,i) => (
                    <div key={i} className="border p-4 mb-2 rounded-lg shadow">
                        <p><strong>Order ID:</strong> {order.orderId}</p>
                        <p><strong>User:</strong> {order.user}</p>
                        <p><strong>Project:</strong> {order.project}</p>
                        <p><strong>Address:</strong> {order.address}</p>
                        <p><strong>Date:</strong> {order.date}</p>
                        <p><strong>Status:</strong> {order.status}</p>
                    </div>
                ))}
            </div>

            {/* Normal table only on medium+ screens */}
            <div className="hidden md:flex w-full">
                <table className="w-full ">
                    <thead>
                        <tr className={`w-full border-b ${theme === 'light' ? 'text-[#1C1C1C66] border-[1C1C1C33]' : 'text-[#FFFFFF66] border-[#FFFFFF66]'}`}>
                            <th className="py-2 px-3 w-6 text-left gap-1 ">
                                <input type="checkbox" className="w-4 h-4" />

                            </th>
                            <th className="py-2 px-3 text-left ">Order ID</th>
                            <th className="py-2 px-4 text-left ">User</th>
                            <th className="py-2 px-4 text-left ">Project</th>
                            <th className="py-2 px-4 text-left ">Address</th>
                            <th className="py-2 px-4 text-left ">Date</th>
                            <th className="py-2 px-4 text-left ">Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {paginated.map((order, idx) => (
                            <tr
                                key={idx}
                                className={`border-b ${theme === 'light' ? 'border-[#1C1C1C0D]' : 'border-[#FFFFFF1A]'} hover:bg-[#1C1C1C0D]`}
                                onMouseEnter={() => setHovered(true)}
                                onMouseLeave={() => setHovered(false)}
                            >
                                <td className="w-6 h-10 py-2 px-3 text-left">
                                    {hovered && <input type="checkbox" className="w-4 h-4" />}
                                </td>
                                <td className="py-2 px-3 ">
                                    {order.orderId}
                                </td>
                                <td className="py-2 px-3 ">
                                    <div className="flex items-center gap-2">
                                        <img
                                            src={`assets/${order.avatar}.png`}
                                            alt={order.user}
                                            className="w-6 h-6 rounded-full"
                                        />
                                        {order.user}
                                    </div>
                                </td>
                                <td className="py-2 px-3 ">{order.project}</td>
                                <td className="py-2 px-3 ">{order.address}</td>
                                <td className="py-2 px-3 ">
                                    {new Date(order.date).toLocaleDateString("en-US", {
                                        month: "short",
                                        day: "numeric",
                                        year: "numeric",
                                    })}
                                </td>
                                <td className="py-2 px-3  ">
                                    <span
                                        className={`px-2 py-1 rounded text-xs font-medium ${order.status === "In Progress"
                                            ? "text-blue-600"
                                            : order.status === "Complete"
                                                ? "text-green-600"
                                                : order.status === "Pending"
                                                    ? "text-yellow-600"
                                                    : order.status === "Approved"
                                                        ? "text-orange-600"
                                                        : "text-red-600"
                                            }`}
                                    >
                                        {order.status}
                                    </span>
                                </td>
                            </tr>
                        ))}
                    </tbody>

                </table>
            </div>




            <div className="flex justify-end items-center  gap-2 text-sm">
                <button
                    disabled={page === 1}
                    onClick={() => setPage((p) => Math.max(p - 1, 1))}
                    className="px-2 py-1 border rounded disabled:opacity-40"
                >
                    &lt;
                </button>
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((num) => (
                    <button
                        key={num}
                        onClick={() => setPage(num)}
                        className={`px-2 py-1 border rounded ${page === num ? "bg-[#FFFFFF1A] text-white" : ""
                            }`}
                    >
                        {num}
                    </button>
                ))}
                <button
                    disabled={page === totalPages}
                    onClick={() => setPage((p) => Math.min(p + 1, totalPages))}
                    className="px-2 py-1 border rounded disabled:opacity-40"
                >
                    &gt;
                </button>
            </div>




        </div >



    );
}
