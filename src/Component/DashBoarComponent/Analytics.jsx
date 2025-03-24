import React from 'react'
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import { FaArrowUp } from "react-icons/fa";
import { BiDownArrowAlt } from "react-icons/bi";
import { FaArrowTrendUp } from "react-icons/fa6";
import { BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

export default function Analytics() {

    const barData = [{ views: 1300 }, { views: 1500 }, { views: 1700 }, { views: 900 }, { views: 1200 }, { views: 2000 }, { views: 2000 }, { views: 500 }, { views: 700 }, { views: 2000 },
    ];
    const data = [
        { "name": "Jan", "shoes": 4000, "shirt": 2400, "pents": 2400 },
        { "name": " Feb", "shoes": 3000, "shirt": 1398, "pents": 2210 },
        { "name": "Mar", "shoes": 2000, "shirt": 9800, "pents": 2290 },
        { "name": "Apr", "shoes": 5980, "shirt": 3908, "pents": 2000 },
        { "name": "May", "shoes": 1890, "shirt": 4800, "pents": 2181 },
        { "name": "June", "shoes": 2390, "shirt": 3800, "pents": 200 }
    ]

    const percentage = 75; // Progress Percentage

    const totalSegments = 30; // Total bars in semi-circle
    const filledSegments = Math.round((percentage / 100) * totalSegments); // Filled sections based on percentage

    const Piedata = Array.from({ length: totalSegments }, (_, index) => ({
        name: index < filledSegments ? "Completed" : "Remaining",
        value: 1, // Keeping equal parts for a balanced arc
    }));

    const COLORS = Piedata.map((entry, index) =>
        index < filledSegments ? "#00C49F" : "#000000"
    );

    return (
        <>
            <div style={{ scrollbarWidth: "none", overflowY: "none" }} className='h-[92vh] bg-[#002022] overflow-auto p-3'>
                <div className='flex justify-between'>
                    <div className='border border-cyan-500 shadow-lg shadow-black rounded w-[30%] h-[220px]'>
                        <div className='flex items-center m-2 p-1 h-[40%]'>
                            <span className='bg-[#1f585c] rounded-xs p-2 h-[55%]'>
                                <ShoppingBagIcon sx={{ color: "white" }} />
                            </span>
                            <div className='text-white ml-5 w-[100%]  font-bold'>
                                <p>1300</p>
                                <p className='capitalize'>total Sales</p>
                                <p className='text-green-500 font-light'> <FaArrowUp /> 20% this month</p>
                            </div>
                        </div>
                        <div className='h-[105px] ml-2 flex justify-center items-center w-[105px] border-[5px] border-dashed border-[#058ba6] p-1 rounded-full'>
                            <div className="relative h-[90px] w-[90px] flex justify-center items-center">
                                <div className="absolute h-full w-full rounded-full" style={{ background: `conic-gradient(#00AEEF ${50 * 2.5}deg, gray 0deg)`, mask: 'radial-gradient(transparent 59%, #000 59%)', WebkitMask: 'radial-gradient(transparent 59%, #000 59%)' }}></div>
                                <span className="absolute text-white text-lg font-bold">35%</span>
                            </div>
                        </div>
                    </div>
                    <div className='border border-cyan-500 shadow-lg shadow-black rounded w-[30%] h-[220px]'>
                        <div className='flex items-center m-2 p-1 h-[40%]'>
                            <span className='bg-[#1f585c] rounded-xs p-2 h-[55%]'>
                                <ShoppingBagIcon sx={{ color: "white" }} />
                            </span>
                            <div className='text-white ml-5 w-[100%]  font-bold'>
                                <p>$200,000</p>
                                <p className='capitalize'>total revenue</p>
                                <p className='text-green-500 font-light'> <FaArrowUp /> 20% this month</p>
                            </div>
                        </div>
                        <div className='h-[105px] ml-2 flex justify-center items-center w-[105px] border-[5px] border-dashed border-[#058ba6] p-1 rounded-full'>
                            <div className="relative h-[90px] w-[90px] flex justify-center items-center">
                                <div className="absolute h-full w-full rounded-full" style={{ background: `conic-gradient(#00AEEF ${50 * 3.7}deg, gray 0deg)`, mask: 'radial-gradient(transparent 59%, #000 59%)', WebkitMask: 'radial-gradient(transparent 59%, #000 59%)' }}></div>
                                <span className="absolute text-white text-lg font-bold">50%</span>
                            </div>
                        </div>
                    </div>
                    <div className='border border-cyan-500 shadow-lg shadow-black rounded w-[30%] h-[220px]'>
                        <div className='flex items-center m-2 p-1 h-[40%]'>
                            <span className='bg-[#1f585c] rounded-xs p-2 h-[55%]'>
                                <ShoppingBagIcon sx={{ color: "white" }} />
                            </span>
                            <div className='text-white ml-5 w-[100%]  font-bold'>
                                <p>50000</p>
                                <p className='capitalize'>total Profit</p>
                                <p className='text-red-600 font-light flex'><BiDownArrowAlt className='text-red-600' /> 20% this month</p>
                            </div>
                        </div>
                        <div className='h-[105px] ml-2 flex justify-center items-center w-[105px] border-[5px] border-dashed border-[#3257c7] p-1 rounded-full'>
                            <div className="relative h-[90px] w-[90px] flex justify-center items-center">
                                <div
                                    className="absolute h-full w-full rounded-full"
                                    style={{
                                        background: `conic-gradient(#00AEEF ${50 * 5.0}deg, gray 0deg)`,
                                        mask: 'radial-gradient(transparent 59%, #000 59%)', WebkitMask: 'radial-gradient(transparent 59%, #000 59%)'
                                    }}></div>
                                <span className="absolute text-white text-lg font-bold">75%</span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex justify-between items-center'>
                    <div className="bg-gray-800 w-[25%] h-[370px] mt-5 rounded-2xl shadow-lg shadow-black">
                        <h3 className="text-xl text-center font-bold text-white ">Website Traffic</h3>
                        <ResponsiveContainer width="100%" height={340} style={{ backgroundColor: "#1F2937", borderRadius: "10px" }}>
                            <BarChart data={barData} barGap={20}>
                                <CartesianGrid strokeDasharray="3 3" stroke="none" />
                                <XAxis dataKey="day" stroke="none" />
                                <YAxis stroke="#ddd" hide={true} domain={[0, "dataMax + 10"]} />
                                <Tooltip contentStyle={{ backgroundColor: '#00132e', borderRadius: "10px", color: '#fff', border: 'none' }} cursor={{ fill: 'transparent' }} />
                                <Legend />
                                <defs>
                                    <linearGradient id="gradient" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="0%" stopColor="#009ba3" stopOpacity={1} />
                                        <stop offset="50%" stopColor="#002022" stopOpacity={1} />
                                        <stop offset="100%" stopColor="#002022" stopOpacity={0.2} />
                                    </linearGradient>
                                </defs>
                                <Bar dataKey="views" fill="url(#gradient)" barSize={12} radius={[10, 10, 10, 10]} />
                            </BarChart>
                        </ResponsiveContainer>
                    </div>

                    <div className="bg-gray-800 p-6 w-[50%] h-[370px] mt-5 rounded-2xl shadow-lg shadow-black text-white">
                        <h3 className="text-xl text-center mb-1">Sales Statistics</h3>
                        <ResponsiveContainer width="100%" height={300}>
                            <AreaChart data={data} margin={{ top: 5, right: 10, left: 0, bottom: 0 }}>
                                <defs>
                                    <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#a83232" stopOpacity={0.8} />
                                        <stop offset="50%" stopColor="#a83232" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorPv1" x1="2" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#82ca4d" stopOpacity={0.9} />
                                        <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                    </linearGradient>
                                    <linearGradient id="colorPv2" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#4da17b" stopOpacity={1} />
                                        <stop offset="95%" stopColor="#4da17b" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <XAxis dataKey="name" />
                                <YAxis />
                                {/* <CartesianGrid strokeDasharray="none" /> */}
                                <Tooltip contentStyle={{ backgroundColor: "#002000", opacity: "0.8", borderRadius: "10px" }} />
                                <Area type="monotone" dataKey="shoes" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                                <Area type="monotone" dataKey="pents" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv1)" />
                                <Area type="monotone" dataKey="shirt" stroke="#FF6B6B" fillOpacity={1} fill="url(#colorPv2)" />
                            </AreaChart>
                        </ResponsiveContainer>
                    </div>

                    <div className='w-[23%] h-[360px] rounded-lg shadow-lg shadow-black mt-6'>
                        <div style={{ backgroundColor: "#0d1b2a", padding: "0px" }}>
                            <PieChart width={200} height={130}>
                                <Pie data={Piedata} startAngle={180} endAngle={0} cx="50%" cy="100%" innerRadius={50} outerRadius={70} paddingAngle={2} dataKey="value">
                                    {Piedata.map((entry, index) => (
                                        <Cell key={`cell-${index}`} fill={COLORS[index]} />
                                    ))}
                                </Pie>
                            </PieChart>
                            <div className='flex justify-center items-center ml-5 ' >
                                <span className='text-white font-bold mr-1'>{percentage}%</span>
                                <span className='text-[#0dcaf0] font-semibold'>Profit</span>
                            </div>
                        </div>

                        <div className="bg-[#0d1b2a] text-white p-4 rounded-xl w-[100%] h-[205px] shadow-lg">
                            {/* Income Section */}
                            <div className="flex justify-between items-center">
                                <span className="text-sm text-gray-300">Income</span>
                                <span className="text-lg font-semibold">$47,289</span>
                            </div>
                            <div className="relative w-full h-2 bg-gray-700 rounded-full mt-1">
                                <div className="absolute h-2 bg-blue-400 rounded-full" style={{ width: "75%" }}></div>
                            </div>
                            <div className="flex items-center text-green-400 text-sm mt-1">
                                <FaArrowTrendUp size={14} />
                                <span>2%</span>
                            </div>

                            {/* Expenses Section */}
                            <div className="flex justify-between items-center mt-3">
                                <span className="text-sm text-gray-300">Expenses</span>
                                <span className="text-lg font-semibold">$25,763</span>
                            </div>
                            <div className="relative w-full h-2 bg-gray-700 rounded-full mt-1">
                                <div className="absolute h-2 bg-red-400 rounded-full" style={{ width: "50%" }}></div>
                            </div>
                            <div className="flex items-center text-red-400 text-sm mt-1">
                                <FaArrowTrendUp size={14} />
                                <span>13%</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}