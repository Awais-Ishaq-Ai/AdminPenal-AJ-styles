import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { FaFire, FaExclamationTriangle, FaBalanceScale } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Sales() {
    const salesData = [
        { id: 1, name: "T-Shirt", sales: 10 },
        { id: 2, name: "Jeans", sales: 5 },
        { id: 3, name: "Sweater", sales: 25 },
        { id: 4, name: "Pent", sales: 30 },
        { id: 5, name: "Shoes", sales: 20 },
        { id: 6, name: "Hat", sales: 1500 },
        { id: 7, name: "Socks", sales: 20 },
        { id: 8, name: "Watch", sales: 5 }, 
    ];

    const highestSales = Math.max(...salesData.map((p) => p.sales));
    const lowestSales = Math.min(...salesData.map((p) => p.sales));
    const averageSales = salesData.reduce((acc, p) => acc + p.sales, 0) / salesData.length;

    const SalesChart = ({ product }) => {
        // Each product has its own independent scale (0 to 100%)
        const percentage = (product.sales / 100) * 100; // Assuming 100 is max possible sales
        const totalSegments = 30;
        const filledSegments = Math.min(Math.round((percentage / 100) * totalSegments), totalSegments);

        const Piedata = Array.from({ length: totalSegments }, (_, index) => ({
            name: index < filledSegments ? "Completed" : "Remaining",
            value: 1,
        }));

        const COLORS = Piedata.map((_, index) =>
            index < filledSegments ? `hsl(${180 * (percentage/100)}, 100%, 50%)` : "#000000"
        );

        return (
            <motion.div 
                className="bg-[#013237] p-3 rounded-lg text-white w-[200px] text-center shadow-md"
                whileHover={{ scale: 1.05 }}
            >
                <h3 className="text-lg font-semibold flex items-center justify-center gap-2">
                    {product.name}

                    {product.sales === highestSales && (
                        <FaFire className="text-red-500 text-xl" />
                    )}

                    {product.sales === lowestSales && (
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 0.8, repeat: Infinity }}
                        >
                            <FaExclamationTriangle className="text-yellow-400 text-xl" />
                        </motion.div>
                    )}

                    {product.sales !== highestSales && product.sales !== lowestSales &&
                        Math.abs(product.sales - averageSales) <= 10 && (
                            <FaBalanceScale className="text-blue-300 text-xl" />
                        )
                    }
                </h3>
                <PieChart width={200} height={130}>
                    <Pie
                        data={Piedata}
                        startAngle={180}
                        endAngle={0}
                        cx="50%"
                        cy="100%"innerRadius={50}outerRadius={70}paddingAngle={2}dataKey="value">
                        {Piedata.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                    </Pie>
                </PieChart>
                <p className="text-blue-400">Sales: {product.sales}</p>
                {/* <div className="h-2 w-full bg-gray-700 rounded-full mt-2">
                    <div 
                        className="h-full rounded-full bg-cyan-500" 
                        style={{ width: `${percentage}%` }}
                    ></div>
                </div> */}
            </motion.div>
        );
    };

    return (
        <div className="h-[92vh] bg-[#002022] overflow-auto p-3">
            <h2 className="text-[#00eeff] text-2xl font-extrabold text-center mb-2">
                Product Sales Performance
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 p-4">
                {salesData.map((product) => (
                    <SalesChart key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}