import React, { useEffect, useState } from 'react';

export default function TransactionHistory() {
    const [transactions, setTransactions] = useState([]);


    const transectionProduct = [
        { id: 1, transactionId: 'TXN12345', customer: 'Fiaz Hussain', type: 'Payment', amount: 100.0, date: '2023-10-01', status: 'Completed', },
        { id: 2, transactionId: 'TXN12346', customer: 'Siraj Ahmad', type: 'Refund', amount: 50.0, date: '2023-10-02', status: 'Processed', },
        { id: 3, transactionId: 'TXN12347', customer: 'Awais Ishaq', type: 'Payment', amount: 200.0, date: '2023-10-03', status: 'Failed', },
        { id: 4, transactionId: 'TXN12347', customer: 'Awais Ishaq', type: 'Payment', amount: 200.0, date: '2023-10-03', status: 'Completed', },
        { id: 5, transactionId: 'TXN12347', customer: 'Awais Ishaq', type: 'Payment', amount: 200.0, date: '2023-10-03', status: 'Processed', },
        { id: 6, transactionId: 'TXN12347', customer: 'Awais Ishaq', type: 'Payment', amount: 200.0, date: '2023-10-03', status: 'Failed', },
        { id: 7, transactionId: 'TXN12347', customer: 'Awais Ishaq', type: 'Payment', amount: 200.0, date: '2023-10-03', status: 'Processed', },
        { id: 8, transactionId: 'TXN12347', customer: 'Awais Ishaq', type: 'Payment', amount: 200.0, date: '2023-10-03', status: 'Completed', },
        { id: 9, transactionId: 'TXN12347', customer: 'Awais Ishaq', type: 'Payment', amount: 200.0, date: '2023-10-03', status: 'Failed', },
        { id: 10, transactionId: 'TXN12347', customer: 'Awais Ishaq', type: 'Payment', amount: 200.0, date: '2023-10-03', status: 'Completed', },
    ]

    useEffect(() => {
      setTransactions(transectionProduct)
    },[])
    return (
        <>
            <div style={{scrollbarWidth:"none"}} className="h-[92vh] overflow-auto bg-[#002022]  p-5">
                <h1 className="text-2xl font-bold text-white mb-6">Transaction History</h1>

                {/* Transactions Table */}
                <div className=" ">
                    <table className="min-w-full bg-[#003034] rounded-lg overflow-hidden">
                        <thead className="bg-[#004044]">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Transaction ID</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Customer</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Type</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Amount</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Date</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Status</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#005055]">
                            {transactions.map((transaction) => (
                                <tr key={transaction.id} className="hover:bg-[#004044] transition-colors">
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{transaction.transactionId}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{transaction.customer}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{transaction.type}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">${transaction.amount.toFixed(2)}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{transaction.date}</td>
                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                        <span className={`px-2 py-1 rounded-full text-xs font-semibold ${transaction.status === 'Completed' ? 'bg-green-500 text-white' : transaction.status === 'Processed' ? 'bg-blue-500 text-white' : 'bg-red-500 text-white'}`}>{transaction.status}
                                        </span>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            </div >
        </>
    );
}