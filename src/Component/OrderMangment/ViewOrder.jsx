import React, { useState } from 'react';

export default function ViewOrder() {
    const orders = [
        { id: 1, customer: 'Awais Ishaq', date: '2023-5-01', total: 120.0, status: 'Completed', items: ['Product D'] },
        { id: 2, customer: 'John Doe', date: '2023-2-01', total: 120.0, status: 'Completed', items: ['Product A'] },
        { id: 3, customer: 'John Doe', date: '2023-2-01', total: 120.0, status: 'Completed', items: ['Product A'] },
        { id: 4, customer: 'John Doe', date: '2023-2-01', total: 120.0, status: 'Completed', items: ['Product A'] },
        { id: 5, customer: 'John Doe', date: '2023-2-01', total: 120.0, status: 'Completed', items: ['Product A'] },
        { id: 6, customer: 'John Doe', date: '2023-2-01', total: 120.0, status: 'Completed', items: ['Product A'] },
        { id: 7, customer: 'John Doe', date: '2023-2-01', total: 120.0, status: 'Completed', items: ['Product A'] },
        { id: 8, customer: 'Jane Smith', date: '2023-7-02', total: 90.5, status: 'Pending', items: ['Product C'] },
        { id: 9, customer: 'John Doe', date: '2023-2-01', total: 120.0, status: 'Completed', items: ['Product A'] },
        { id: 10, customer: 'Hafiz Irfan', date: '2023-11-03', total: 200.0, status: 'Shipped', items: ['Product F'] },
        { id: 11, customer: 'Sufyan Cheetta', date: '2023-12-01', total: 120.0, status: 'Completed', items: ['Product G'] },
        { id: 12, customer: 'Jane Smith', date: '2023-7-02', total: 90.5, status: 'Pending', items: ['Product I'] },
        { id: 13, customer: 'Muhammad Sanwal', date: '2023-8-01', total: 120.0, status: 'Completed', items: ['Product J'] },
    ];

    const [searchQuery, setSearchQuery] = useState('');

    const filteredOrders = orders.filter((order) =>
        order.customer.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <div style={{scrollbarWidth:"none"}} className='bg-[#002022] overflow-hidden h-[92vh]  p-4 sm:p-6'>
            <h1 className='text-2xl font-bold text-white mb-4 sm:mb-6'>View Orders</h1>

            {/* Fixed Search Bar */}
            <div className=' bg-[#002022] py-4'>
                <input
                    type='text'
                    placeholder='Search by customer name...'
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className='w-full p-2 rounded-lg bg-[#003034] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005055]'
                />
            </div>

            {/* Orders Table */}
            <div className='overflow-y-auto h-[calc(92vh-120px)] mt-4'>
                <table className='min-w-full bg-[#003034] rounded-lg overflow-hidden'>
                    <thead className='bg-[#004044]'>
                        <tr>
                            <th className='px-4 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-white uppercase tracking-wider'>Order ID</th>
                            <th className='px-4 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-white uppercase tracking-wider'>Customer</th>
                            <th className='px-4 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-white uppercase tracking-wider'>Date</th>
                            <th className='px-4 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-white uppercase tracking-wider'>Total</th>
                            <th className='px-4 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-white uppercase tracking-wider'>Status</th>
                            <th className='px-4 py-2 sm:px-6 sm:py-3 text-left text-xs sm:text-sm font-medium text-white uppercase tracking-wider'>Items Ordered</th>
                        </tr>
                    </thead>
                    <tbody className='divide-y divide-[#005055]'>
                        {filteredOrders.length > 0 ? (
                            filteredOrders.map((order) => (
                                <tr key={order.id} className='hover:bg-[#004044] transition-colors'>
                                    <td className='px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-white'>{order.id}</td>
                                    <td className='px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-white'>{order.customer}</td>
                                    <td className='px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-white'>{order.date}</td>
                                    <td className='px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-white'>${order.total.toFixed(2)}</td>
                                    <td className='px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-white'>
                                        <span
                                            className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                                order.status === 'Completed'
                                                    ? 'bg-green-500 text-white'
                                                    : order.status === 'Pending'
                                                    ? 'bg-yellow-500 text-black'
                                                    : 'bg-blue-500 text-white'
                                            }`}
                                        >
                                            {order.status}
                                        </span>
                                    </td>
                                    <td className='px-4 py-2 sm:px-6 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-white'>
                                        <ul className='list-disc list-inside'>
                                            {order.items.map((item, index) => (
                                                <li key={index}>{item}</li>
                                            ))}
                                        </ul>
                                    </td>
                                </tr>
                            ))
                        ) : (
                            <tr>
                                <td colSpan='6' className='px-4 py-2 sm:px-6 sm:py-4 text-center text-xs sm:text-sm text-white'>No orders found.</td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
}