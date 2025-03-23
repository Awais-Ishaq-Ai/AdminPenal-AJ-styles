import React, { useState } from 'react';

export default function DiscountAndCoupon() {
    // Sample data for discounts and coupons
    const [discounts, setDiscounts] = useState([
        {
            id: 1,
            code: 'SUMMER25',
            type: 'Percentage',
            value: 25,
            startDate: '2023-10-01',
            endDate: '2023-10-31',
            status: 'Active',
        },
        {
            id: 2,
            code: 'WELCOME10',
            type: 'Fixed',
            value: 10,
            startDate: '2023-09-15',
            endDate: '2023-12-31',
            status: 'Active',
        },
        {
            id: 3,
            code: 'FREESHIP',
            type: 'Free Shipping',
            value: 0,
            startDate: '2023-10-01',
            endDate: '2023-10-15',
            status: 'Expired',
        },
    ]);

    // State for search query
    const [searchQuery, setSearchQuery] = useState('');

    // State for new discount/coupon form
    const [newDiscount, setNewDiscount] = useState({
        code: '',
        type: 'Percentage',
        value: 0,
        startDate: '',
        endDate: '',
        status: 'Active',
    });

    // Filter discounts and coupons based on search query
    const filteredDiscounts = discounts.filter((discount) =>
        discount.code.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Function to add a new discount/coupon
    const addDiscount = () => {
        if (
            newDiscount.code &&
            newDiscount.type &&
            newDiscount.value >= 0 &&
            newDiscount.startDate &&
            newDiscount.endDate
        ) {
            setDiscounts((prevDiscounts) => [
                ...prevDiscounts,
                { ...newDiscount, id: prevDiscounts.length + 1 },
            ]);
            setNewDiscount({
                code: '',
                type: 'Percentage',
                value: 0,
                startDate: '',
                endDate: '',
                status: 'Active',
            });
        } else {
            alert('Please fill all fields correctly.');
        }
    };

    // Function to delete a discount/coupon
    const deleteDiscount = (id) => {
        setDiscounts((prevDiscounts) =>
            prevDiscounts.filter((discount) => discount.id !== id)
        );
    };

    return (
        <>
            <div style={{scrollbarWidth:"none"}} className="h-[92vh] bg-[#002022] overflow-auto p-5">
                <h1 className="text-2xl font-bold text-white mb-6">Discounts and Coupons</h1>

                {/* Search Bar */}
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Search by Coupon Code..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-2 rounded-lg bg-[#003034] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005055]"
                    />
                </div>

                {/* Add New Discount/Coupon Form */}
                <div className="mb-6 bg-[#003034] p-6 rounded-lg">
                    <h2 className="text-xl font-bold text-white mb-4">Add New Discount/Coupon</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-white">Coupon Code</label>
                            <input
                                type="text"
                                value={newDiscount.code}
                                onChange={(e) =>
                                    setNewDiscount({ ...newDiscount, code: e.target.value })
                                }
                                className="mt-1 block w-full p-2 bg-[#004044] text-white rounded-lg"
                                placeholder="e.g., SUMMER25"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white">Type</label>
                            <select
                                value={newDiscount.type}
                                onChange={(e) =>
                                    setNewDiscount({ ...newDiscount, type: e.target.value })
                                }
                                className="mt-1 block w-full p-2 bg-[#004044] text-white rounded-lg"
                            >
                                <option value="Percentage">Percentage</option>
                                <option value="Fixed">Fixed Amount</option>
                                <option value="Free Shipping">Free Shipping</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white">Value</label>
                            <input
                                type="number"
                                value={newDiscount.value}
                                onChange={(e) =>
                                    setNewDiscount({ ...newDiscount, value: parseFloat(e.target.value) })
                                }
                                className="mt-1 block w-full p-2 bg-[#004044] text-white rounded-lg"
                                placeholder="e.g., 25"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white">Start Date</label>
                            <input
                                type="date"
                                value={newDiscount.startDate}
                                onChange={(e) =>
                                    setNewDiscount({ ...newDiscount, startDate: e.target.value })
                                }
                                className="mt-1 block w-full p-2 bg-[#004044] text-white rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white">End Date</label>
                            <input
                                type="date"
                                value={newDiscount.endDate}
                                onChange={(e) =>
                                    setNewDiscount({ ...newDiscount, endDate: e.target.value })
                                }
                                className="mt-1 block w-full p-2 bg-[#004044] text-white rounded-lg"
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white">Status</label>
                            <select
                                value={newDiscount.status}
                                onChange={(e) =>
                                    setNewDiscount({ ...newDiscount, status: e.target.value })
                                }
                                className="mt-1 block w-full p-2 bg-[#004044] text-white rounded-lg"
                            >
                                <option value="Active">Active</option>
                                <option value="Expired">Expired</option>
                            </select>
                        </div>
                    </div>
                    <button
                        onClick={addDiscount}
                        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
                    >
                        Add Discount/Coupon
                    </button>
                </div>

                {/* Discounts and Coupons Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-[#003034] rounded-lg overflow-hidden">
                        <thead className="bg-[#004044]">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Coupon Code</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Type</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Value</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Start Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">End Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#005055]">
                            {filteredDiscounts.length > 0 ? (
                                filteredDiscounts.map((discount) => (
                                    <tr key={discount.id} className="hover:bg-[#004044] transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{discount.code}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{discount.type}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                            {discount.type === 'Percentage'
                                                ? `${discount.value}%`
                                                : discount.type === 'Fixed'
                                                ? `$${discount.value}`
                                                : 'Free Shipping'}
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{discount.startDate}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{discount.endDate}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                                    discount.status === 'Active'
                                                        ? 'bg-green-500 text-white'
                                                        : 'bg-red-500 text-white'
                                                }`}
                                            >
                                                {discount.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                            <button
                                                onClick={() => deleteDiscount(discount.id)}
                                                className="text-red-600 hover:text-red-900"
                                            >
                                                Delete
                                            </button>
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