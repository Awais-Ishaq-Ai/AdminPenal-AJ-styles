import React from 'react';
export default function CustomerReview() {
    // Sample customer reviews data
    const reviews = [
        { id: 1, customerName: 'Fiaz Hussain', rating: 5, review: 'Excellent service! The product was delivered on time and in perfect condition.', date: '2023-10-01', img: 'https://via.placeholder.com/150', },
        { id: 2, customerName: 'Siraj Ahmad', rating: 4, review: 'Good product, but the delivery was a bit delayed.', date: '2023-10-02', img: 'https://via.placeholder.com/150', },
        { id: 3, customerName: 'Awais Ishaq', rating: 3, review: 'The product quality is average. Expected better for the price.', date: '2023-10-03', img: 'https://via.placeholder.com/150', },
        { id: 4, customerName: 'Ali Khan', rating: 5, review: 'Amazing experience! Highly recommended.', date: '2023-10-04', img: 'https://via.placeholder.com/150', },
    ];

    return (
        <>
            <div className="h-[92vh] bg-[#002022] overflow-auto p-5">
                <h1 className="text-2xl font-bold text-white mb-6">Customer Reviews</h1>
                <div className="space-y-4">
                    {reviews.map((review) => (
                        <div key={review.id} className="bg-[#003034] p-4 rounded-lg">
                            <div className="flex items-center space-x-4">
                                <img src={review.img} alt={review.customerName} className="w-12 h-12 rounded-full" />
                                <div>
                                    <h3 className="text-lg font-semibold text-white">{review.customerName}</h3>
                                    <div className="flex items-center space-x-1">
                                        {[...Array(5)].map((_, index) => (<span key={index} className={`text-xl ${index < review.rating ? 'text-yellow-400' : 'text-gray-500'}`}>★</span>))}
                                    </div>
                                </div>
                            </div>
                            <p className="text-white mt-3">{review.review}</p>
                            <p className="text-sm text-gray-400 mt-2">Reviewed on: {review.date}</p>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}