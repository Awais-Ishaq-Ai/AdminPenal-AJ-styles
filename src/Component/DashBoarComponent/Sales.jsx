import React from "react";
import { PieChart, Pie, Cell } from "recharts";
import { FaFire, FaExclamationTriangle, FaBalanceScale } from "react-icons/fa";
import { motion } from "framer-motion"; // Import Framer Motion

export default function Sales() {
    const salesData = [
        { id: 1, name: "T-Shirt", sales: 10 },
        { id: 2, name: "T-Shirt", sales: 5 },
        { id: 3, name: "T-Shirt", sales: 25 },
        { id: 4, name: "Pent", sales: 30 },
        { id: 5, name: "Shoes", sales: 50 }, // Top Seller 🔥
        { id: 6, name: "Shoes", sales: 50 }, // Top Seller 🔥
        { id: 7, name: "Shoes", sales: 50 }, // Top Seller 🔥
        { id: 8, name: "Watch", sales: 5 },  // Dump Product ⚠️
    ];

    const highestSales = Math.max(...salesData.map((p) => p.sales));
    const lowestSales = Math.min(...salesData.map((p) => p.sales));
    const averageSales = salesData.reduce((acc, p) => acc + p.sales, 0) / salesData.length;

    const highestCount = salesData.filter((p) => p.sales === highestSales).length;
    const lowestCount = salesData.filter((p) => p.sales === lowestSales).length;

    const SalesChart = ({ product }) => {
        const totalSales = salesData.reduce((acc, item) => acc + item.sales, 0);
        const percentage = Math.round((product.sales / totalSales) * 100);

        const totalSegments = 30;
        const filledSegments = Math.round((percentage / 100) * totalSegments);

        const Piedata = Array.from({ length: totalSegments }, (_, index) => ({
            name: index < filledSegments ? "Completed" : "Remaining",
            value: 1,
        }));

        const COLORS = Piedata.map((_, index) =>
            index < filledSegments ? "#00C49F" : "#000000"
        );

        return (
            <div className="bg-[#013237] p-3 rounded-lg text-white w-[200px] text-center shadow-md">
                <h3 className="text-lg font-semibold flex items-center justify-center gap-2">
                    {product.name}

                    {/* 🔥 High Sales Icon */}
                    {product.sales === highestSales && (
                        <FaFire className="text-red-500 text-xl" />
                    )}

                    {/* ⚠️ Low Sales Icon (Animated) */}
                    {product.sales === lowestSales && (
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }} // Zoom In & Out Effect
                            transition={{ duration: 0.8, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <FaExclamationTriangle className="text-yellow-400 text-xl" />
                        </motion.div>
                    )}

                    {/* ⚖️ Average Sales Icon (If not highest or lowest) */}
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
                        cy="100%"
                        innerRadius={50}
                        outerRadius={70}
                        paddingAngle={2}
                        dataKey="value"
                    >
                        {Piedata.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={COLORS[index]} />
                        ))}
                    </Pie>
                </PieChart>
                <p className="text-blue-400">Sales: {product.sales}</p>
            </div>
        );
    };

    return (
        <div className="h-[92vh] bg-[#002022] overflow-auto p-3">
            <h2 className="text-[#00eeff] text-2xl font-extrabold text-center mb-2">
                Product Sales Performance
            </h2>
            <div className="flex flex-wrap gap-4 justify-center">
                {salesData.map((product) => (
                    <SalesChart key={product.id} product={product} />
                ))}
            </div>
        </div>
    );
}
