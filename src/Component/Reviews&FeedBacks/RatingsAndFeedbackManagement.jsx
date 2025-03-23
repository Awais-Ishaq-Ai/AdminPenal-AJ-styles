import React, { useState } from 'react';

export default function RatingsAndFeedbackManagement() {
    const [reviews, setReviews] = useState([
        {
            id: 1,
            customerName: 'Fiaz Hussain',
            rating: 5,
            review: 'Excellent service! The product was delivered on time and in perfect condition.',
            date: '2023-10-01',
            status: 'Approved', // Status of the review
        },
        {
            id: 2,
            customerName: 'Siraj Ahmad',
            rating: 4,
            review: 'Good product, but the delivery was a bit delayed.',
            date: '2023-10-02',
            status: 'Pending',
        },
        {
            id: 3,
            customerName: 'Awais Ishaq',
            rating: 3,
            review: 'The product quality is average. Expected better for the price.',
            date: '2023-10-03',
            status: 'Rejected',
        },
    ]);

    // Function to update review status
    const updateReviewStatus = (id, status) => {
        setReviews((prevReviews) =>
            prevReviews.map((review) =>
                review.id === id ? { ...review, status } : review
            )
        );
    };

    return (
        <div className="h-[92vh] bg-[#002022] overflow-auto p-5">
            <h1 className="text-2xl font-bold text-white mb-6">Ratings and Feedback Management</h1>

            {/* Reviews Table */}
            <div className="bg-[#003034] rounded-lg overflow-hidden">
                <table className="min-w-full">
                    <thead className="bg-[#004044]">
                        <tr>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Customer</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Rating</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Review</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Date</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Status</th>
                            <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Action</th>
                        </tr>
                    </thead>
                    <tbody className="divide-y divide-[#005055]">
                        {reviews.map((review) => (
                            <tr key={review.id} className="hover:bg-[#004044] transition-colors">
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{review.customerName}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                    <div className="flex items-center space-x-1">
                                        {[...Array(5)].map((_, index) => (
                                            <span
                                                key={index}
                                                className={`text-xl ${index < review.rating ? 'text-yellow-400' : 'text-gray-500'}`}
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm text-white">{review.review}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{review.date}</td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                    <span
                                        className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                            review.status === 'Approved'
                                                ? 'bg-green-500 text-white'
                                                : review.status === 'Pending'
                                                ? 'bg-yellow-500 text-white'
                                                : 'bg-red-500 text-white'
                                        }`}
                                    >
                                        {review.status}
                                    </span>
                                </td>
                                <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                    <button
                                        onClick={() => updateReviewStatus(review.id, 'Approved')}
                                        className="bg-green-500 text-white px-3 py-1 rounded-md hover:bg-green-600 transition-colors mr-2"
                                    >
                                        Approve
                                    </button>
                                    <button
                                        onClick={() => updateReviewStatus(review.id, 'Rejected')}
                                        className="bg-red-500 text-white px-3 py-1 rounded-md hover:bg-red-600 transition-colors"
                                    >
                                        Reject
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}