import React, { useState } from 'react';

export default function CustomerDetails() {
    // Sample data for customers
    const [customers, setCustomers] = useState([
        {
            id: 1,
            name: 'John Doe',
            email: 'john.doe@example.com',
            phone: '+1234567890',
            address: '123 Main St, New York, NY',
            orders: 5,
            totalSpent: 500.0,
            status: 'Active',
        },
        {
            id: 2,
            name: 'Jane Smith',
            email: 'jane.smith@example.com',
            phone: '+0987654321',
            address: '456 Elm St, Los Angeles, CA',
            orders: 3,
            totalSpent: 300.0,
            status: 'Inactive',
        },
        {
            id: 3,
            name: 'Awais Ishaq',
            email: 'awais.ishaq@example.com',
            phone: '+1122334455',
            address: '789 Oak St, Chicago, IL',
            orders: 10,
            totalSpent: 1200.0,
            status: 'Active',
        },
    ]);

    // State for search query
    const [searchQuery, setSearchQuery] = useState('');

    // Filter customers based on search query
    const filteredCustomers = customers.filter((customer) =>
        customer.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        customer.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
        customer.phone.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
            <div className="h-[92vh] bg-[#002022] overflow-auto p-5">
                <h1 className="text-2xl font-bold text-white mb-6">Customer Details</h1>

                {/* Search Bar */}
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Search by Name, Email, or Phone..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-2 rounded-lg bg-[#003034] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005055]"
                    />
                </div>

                {/* Customers Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-[#003034] rounded-lg overflow-hidden">
                        <thead className="bg-[#004044]">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Email</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Phone</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Address</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Orders</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Total Spent</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#005055]">
                            {filteredCustomers.length > 0 ? (
                                filteredCustomers.map((customer) => (
                                    <tr key={customer.id} className="hover:bg-[#004044] transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{customer.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{customer.email}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{customer.phone}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{customer.address}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{customer.orders}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">${customer.totalSpent.toFixed(2)}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                                    customer.status === 'Active'
                                                        ? 'bg-green-500 text-white'
                                                        : 'bg-red-500 text-white'
                                                }`}
                                            >
                                                {customer.status}
                                            </span>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="7" className="px-6 py-4 text-center text-sm text-white">
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