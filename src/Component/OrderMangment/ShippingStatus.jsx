import React, { useState } from 'react';

export default function ShippingStatus() {
    // Sample data for shipping status
    const shippingData = [
        { id: 1, orderId: 'ORD12345', customer: 'John Doe', status: 'Shipped', trackingNumber: 'TN123456789', estimatedDelivery: '2023-10-15' },
        { id: 2, orderId: 'ORD12346', customer: 'Ali Sufyan', status: 'In Transit', trackingNumber: 'TN987654393', estimatedDelivery: '2023-10-11' },
        { id: 3, orderId: 'ORD12346', customer: 'Sanwal', status: 'Shipped', trackingNumber: 'TN987654306', estimatedDelivery: '2023-10-16' },
        { id: 4, orderId: 'ORD12346', customer: 'Muhammad Umair', status: 'In Transit', trackingNumber: 'TN987654327', estimatedDelivery: '2023-10-29' },
        { id: 5, orderId: 'ORD12346', customer: 'Jane Smith', status: 'Pending', trackingNumber: 'TN987654322', estimatedDelivery: '2023-10-17' },
        { id: 6, orderId: 'ORD12347', customer: 'Awais Ishaq', status: 'Delivered', trackingNumber: 'TN456789123', estimatedDelivery: '2023-10-10' },
        { id: 7, orderId: 'ORD12344', customer: 'Hafiz Irfan', status: 'Pending', trackingNumber: 'TN321654982', estimatedDelivery: '2023-10-20' },
        { id: 8, orderId: 'ORD12341', customer: 'Muhammad Ali', status: 'In Transit', trackingNumber: 'TN321654984', estimatedDelivery: '2023-10-26' },
        { id: 9, orderId: 'ORD12349', customer: 'Hafiz Irfan', status: 'Pending', trackingNumber: 'TN321654987', estimatedDelivery: '2023-10-23' },
        { id: 9, orderId: 'ORD12349', customer: 'Hafiz Irfan', status: 'Pending', trackingNumber: 'TN321654987', estimatedDelivery: '2023-10-23' },
        { id: 9, orderId: 'ORD12349', customer: 'Hafiz Irfan', status: 'Pending', trackingNumber: 'TN321654987', estimatedDelivery: '2023-10-23' },
        { id: 9, orderId: 'ORD12349', customer: 'Hafiz Irfan', status: 'Pending', trackingNumber: 'TN321654987', estimatedDelivery: '2023-10-23' },
        { id: 9, orderId: 'ORD12349', customer: 'Hafiz Irfan', status: 'Pending', trackingNumber: 'TN321654987', estimatedDelivery: '2023-10-23' },
        { id: 9, orderId: 'ORD12349', customer: 'Hafiz Irfan', status: 'Pending', trackingNumber: 'TN321654987', estimatedDelivery: '2023-10-23' },
        { id: 9, orderId: 'ORD12349', customer: 'Hafiz Irfan', status: 'Pending', trackingNumber: 'TN321654987', estimatedDelivery: '2023-10-23' },
    ];

    // State for search query
    const [searchQuery, setSearchQuery] = useState('');

    // Filter shipping data based on tracking number only
    const filteredShippingData = shippingData.filter((item) =>
        item.trackingNumber.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="h-[92vh] bg-[#002022] overflow-hidden p-5">
                {/* Fixed Search Bar */}
                <div className="sticky top-0 z-10  py-4 shadow-md">
                    <h1 className="text-2xl font-bold text-white mb-4">Shipping Status</h1>
                    <input
                        type="text"
                        placeholder="Search by Tracking Number..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className='w-full p-2 rounded-lg bg-[#003034] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005055]'

                    />
                </div>

                {/* Shipping Status Table */}
                <div className="overflow-y-auto h-[calc(92vh-120px)] mt-4">
                    <table className="min-w-full bg-[#003034] rounded-lg overflow-hidden">
                        <thead className="bg-[#004034] sticky top-0 z-50 ">
                            <tr className=''>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Order ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Customer</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Tracking Number</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Estimated Delivery</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#005055]">
                            {filteredShippingData.length > 0 ? (
                                filteredShippingData.map((item) => (
                                    <tr key={item.id} className="hover:bg-[#004044] transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{item.orderId}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{item.customer}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                                    item.status === 'Shipped'
                                                        ? 'bg-blue-500 text-white'
                                                        : item.status === 'In Transit'
                                                        ? 'bg-yellow-500 text-black'
                                                        : item.status === 'Delivered'
                                                        ? 'bg-green-500 text-white'
                                                        : 'bg-gray-500 text-white'
                                                }`}
                                            >
                                                {item.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{item.trackingNumber}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{item.estimatedDelivery}</td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="5" className="px-6 py-4 text-center text-sm text-white">
                                        No matching records found.
                                    </td>
                                </tr>
                            )}
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    );
}