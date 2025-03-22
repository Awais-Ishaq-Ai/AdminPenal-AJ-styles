import React, { useEffect, useState } from "react";

const productsData = [
    { id: 1, name: "T-Shirt", available: true, purchaseFrom: "J. store", price: 1500, totalStock: 100, remainingStock: 30, purchasePrice: 1200 },
    { id: 2, name: "Shoes", available: false, purchaseFrom: "Chase value", price: 3000, totalStock: 50, remainingStock: 5, purchasePrice: 2500 },
    { id: 3, name: "Watch", available: true, purchaseFrom: "Imtiaz Market", price: 5000, totalStock: 40, remainingStock: 15, purchasePrice: 4000 },
    { id: 4, name: "Pant", available: false, purchaseFrom: "Millennium Malls", price: 2000, totalStock: 80, remainingStock: 0, purchasePrice: 1500 },
    { id: 5, name: "Shalwar Kameez", available: false, purchaseFrom: "AJ store", price: 2000, totalStock: 80, remainingStock: 10, purchasePrice: 1500 },
];

export default function AvailableProduct() {
    const [outOfStockProducts, setOutOfStockProducts] = useState([]);

    useEffect(() => {
        const outOfStock = productsData.filter(p => p.remainingStock === 0).map(p => p.name);
        setOutOfStockProducts(outOfStock);
    }, []);

    const totalStock = productsData.reduce((sum, p) => sum + p.totalStock, 0);
    const remainingStock = productsData.reduce((sum, p) => sum + p.remainingStock, 0);

    const totalProfit = productsData.reduce((sum, p) => {
        const profitPerItem = p.price - p.purchasePrice;
        return sum + (p.totalStock * profitPerItem);
    }, 0);

    return (
        <div className="h-[92vh] overflow-y-auto bg-[#002022] text-white p-5 flex justify-center">
            <div className="w-full p-5 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text- mb-4">Product Summary</h2>

                {outOfStockProducts.length > 0 && (
                    <div className="fixed top-10 right-5 bg-red-600 text-white p-3 font-semibold text-center rounded shadow-lg z-50 
                        animate-blink">
                        ⚠️ Out of Stock: {outOfStockProducts.join(", ")} - Please update inventory!
                    </div>
                )}

                <table className="w-full border border-gray-500 text-left">
                    <thead>
                        <tr className="bg-gray-800">
                            <th className="border border-gray-500 p-2">Product Name</th>
                            <th className="border border-gray-500 p-2">Purchase From</th>
                            <th className="border border-gray-500 p-2">Price</th>
                            <th className="border border-gray-500 p-2">Total Stock</th>
                            <th className="border border-gray-500 p-2">Remaining Stock</th>
                            <th className="border border-gray-500 p-2">Profit Per Item</th>
                            <th className="border border-gray-500 p-2">Total Profit</th>
                        </tr>
                    </thead>
                    <tbody>
                        {productsData.map((product) => {
                            const profitPerItem = product.price - product.purchasePrice;
                            const totalProfit = product.totalStock * profitPerItem;

                            return (
                                <tr key={product.id} className="bg-gray-700">
                                    <td className="border border-gray-500 p-3">{product.name}</td>
                                    <td className="border border-gray-500 p-3">{product.purchaseFrom}</td>
                                    <td className="border border-gray-500 p-3">Rs. {product.price}</td>
                                    <td className="border border-gray-500 p-3">{product.totalStock}</td>
                                    <td className={`border border-gray-500 p-3 ${product.remainingStock === 0 ? "bg-red-500" : ""}`}>
                                        {product.remainingStock}
                                    </td>
                                    <td className="border border-gray-500 p-2">Rs. {profitPerItem}</td>
                                    <td className="border border-gray-500 p-2">Rs. {totalProfit}</td>
                                </tr>
                            );
                        })}

                        <tr className="">
                            <td colSpan={3} className="border text-center  border-gray-500 p-3"><strong className="border-b-2">Total Stock: {totalStock}</strong> </td>
                            <td colSpan={2} className="border border-gray-500 p-3"><strong>Remaining Stock:</strong> {remainingStock}</td>
                            <td colSpan={2} className="border border-gray-500 p-3"><strong>Total Profit:</strong> Rs. {totalProfit}</td>
                        </tr>
                    </tbody>
                </table>
            </div>

            {/* Blink Animation */}
            <style>
                {`
                    @keyframes blink {
                        0% { opacity: 1; }
                        50% { opacity: 0; }
                        100% { opacity: 1; }
                    }

                    .animate-blink {
                        animation: blink 1.5s infinite;
                    }
                `}
            </style>
        </div>
    );
}
