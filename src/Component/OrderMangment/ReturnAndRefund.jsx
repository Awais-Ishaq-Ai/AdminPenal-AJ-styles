import React, { useState } from 'react';

export default function ReturnAndRefund() {
    // Sample data for return requests
    const [returnRequests, setReturnRequests] = useState([
        {
            id: 1,
            orderId: 'ORD12345',
            customer: 'John Doe',
            product: 'Product A',
            reason: 'Defective',
            status: 'Pending',
            refundAmount: 50.0,
        },
        {
            id: 2,
            orderId: 'ORD12346',
            customer: 'Jane Smith',
            product: 'Product B',
            reason: 'Wrong Size',
            status: 'Approved',
            refundAmount: 30.0,
        },
        {
            id: 3,
            orderId: 'ORD12347',
            customer: 'Awais Ishaq',
            product: 'Product C',
            reason: 'Changed Mind',
            status: 'Rejected',
            refundAmount: 0.0,
        },
    ]);

    // State for search query
    const [searchQuery, setSearchQuery] = useState('');

    // Filter return requests based on orderID only
    const filteredRequests = returnRequests.filter((request) =>
        request.orderId.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Function to approve a return request
    const approveRequest = (id) => {
        setReturnRequests((prevRequests) =>
            prevRequests.map((request) =>
                request.id === id ? { ...request, status: 'Approved' } : request
            )
        );
    };

    // Function to reject a return request
    const rejectRequest = (id) => {
        setReturnRequests((prevRequests) =>
            prevRequests.map((request) =>
                request.id === id ? { ...request, status: 'Rejected' } : request
            )
        );
    };

    // Function to mark a return request as pending
    const markAsPending = (id) => {
        setReturnRequests((prevRequests) =>
            prevRequests.map((request) =>
                request.id === id ? { ...request, status: 'Pending' } : request
            )
        );
    };

    // Function to process a refund
    const processRefund = (id) => {
        const request = returnRequests.find((request) => request.id === id);
        if (request && request.status === 'Approved') {
            alert(`Refund of $${request.refundAmount} processed for Order ID: ${request.orderId}`);
        } else {
            alert('Cannot process refund. Request is not approved.');
        }
    };

    return (
        <>
            <div className="h-[92vh] bg-[#002022] overflow-hidden p-5">
                <h1 className="text-2xl font-bold text-white mb-6">Returns and Refunds</h1>

                {/* Search Bar */}
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Search by Order ID..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-2 rounded-lg bg-[#003034] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005055]"
                    />
                </div>

                {/* Return Requests Table */}
                <div className="overflow-y-auto h-[calc(92vh-180px)]">
                    <table className="min-w-full bg-[#003034] rounded-lg overflow-hidden">
                        <thead className="bg-[#004044] sticky top-0 z-10">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Order ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Customer</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Product</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Reason</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#005055]">
                            {filteredRequests.length > 0 ? (
                                filteredRequests.map((request) => (
                                    <tr key={request.id} className="hover:bg-[#004044] transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{request.orderId}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{request.customer}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{request.product}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{request.reason}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                                    request.status === 'Approved'
                                                        ? 'bg-green-500 text-white'
                                                        : request.status === 'Rejected'
                                                        ? 'bg-red-500 text-white'
                                                        : 'bg-yellow-500 text-black'
                                                }`}
                                            >
                                                {request.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                            <button
                                                onClick={() => approveRequest(request.id)}
                                                className="text-green-600 hover:text-green-900 mr-2"
                                            >
                                                Approve
                                            </button>
                                            <button
                                                onClick={() => rejectRequest(request.id)}
                                                className="text-red-600 hover:text-red-900 mr-2"
                                            >
                                                Reject
                                            </button>
                                            <button
                                                onClick={() => markAsPending(request.id)}
                                                className="text-yellow-600 hover:text-yellow-900 mr-2"
                                            >
                                                Pending
                                            </button>
                                            <button
                                                onClick={() => processRefund(request.id)}
                                                className="text-blue-600 hover:text-blue-900"
                                            >
                                                Refund
                                            </button>
                                        </td>
                                    </tr>
                                ))
                            ) : (
                                <tr>
                                    <td colSpan="6" className="px-6 py-4 text-center text-sm text-white">
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