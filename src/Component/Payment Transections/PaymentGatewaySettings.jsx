import React, { useState } from 'react';

export default function PaymentGatewaySettings() {
    const [paymentGateways, setPaymentGateways] = useState([
        { id: 1, name: 'JazzCash', description: 'Enable or disable Stripe as a payment method.', status: true, apiKey: 'sk_test_1234567890abcdef', },
        { id: 2, name: 'EasyPaisa', description: 'Enable or disable PayPal as a payment method.', status: false, apiKey: '', },
        { id: 3, name: 'NayaPay', description: 'Enable or disable Razorpay as a payment method.', status: true, apiKey: 'rzp_test_1234567890abcdef', },
        { id: 4, name: 'SadaPay', description: 'Enable or disable Razorpay as a payment method.', status: true, apiKey: 'rzp_test_1234567890abcdef', },
    ]);

    const [editingGateway, setEditingGateway] = useState(null);
    const [apiKeyInput, setApiKeyInput] = useState('');

    const toggleGateway = (id) => {
        setPaymentGateways((prevGateways) =>
            prevGateways.map((gateway) =>
                gateway.id === id ? { ...gateway, status: !gateway.status } : gateway
            )
        );
    };

    const editApiKey = (id) => {
        const gateway = paymentGateways.find((gateway) => gateway.id === id);
        setEditingGateway(id);
        setApiKeyInput(gateway.apiKey);
    };

    const saveApiKey = (id) => {
        setPaymentGateways((prevGateways) =>
            prevGateways.map((gateway) =>
                gateway.id === id ? { ...gateway, apiKey: apiKeyInput } : gateway
            )
        );
        setEditingGateway(null);
        setApiKeyInput('');
    };

    return (
        <>
            <div style={{scrollbarWidth:"none"}} className="h-[92vh] bg-[#002022] overflow-auto p-5">
                <h1 className="text-2xl font-bold text-white mb-6">Payment Gateway Settings</h1>

                <div className="space-y-4">
                    {paymentGateways.map((gateway) => (
                        <div key={gateway.id} className="bg-[#003034] p-6 rounded-lg">
                            <div className="flex justify-between items-center mb-4">
                                <div>
                                    <h2 className="text-lg font-semibold text-white">{gateway.name}</h2>
                                    <p className="text-sm text-gray-400">{gateway.description}</p>
                                </div>
                                <button onClick={() => toggleGateway(gateway.id)} className={`px-4 py-2 rounded-full text-sm font-semibold ${gateway.status ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                                    {gateway.status ? 'Enabled' : 'Disabled'}
                                </button>
                            </div>
                            <div className="mt-4">
                                <label className="block text-sm font-medium text-white">API Key</label>
                                {editingGateway === gateway.id ? (
                                    <div className="flex items-center gap-2">
                                        <input
                                            type="text"
                                            value={apiKeyInput}
                                            onChange={(e) => setApiKeyInput(e.target.value)}
                                            className="mt-1 block w-full p-2 bg-[#004044] text-white rounded-lg"
                                            placeholder="Enter API Key"
                                        />
                                        <button onClick={() => saveApiKey(gateway.id)} className="bg-blue-600 text-white px-4 py-2 rounded-lg">
                                            Save
                                        </button>
                                    </div>
                                ) : (
                                    <div className="flex items-center gap-2">
                                        <input type="text" value={gateway.apiKey || 'Not configured'} readOnly className="mt-1 block w-full p-2 bg-[#004044] text-white rounded-lg" />
                                        <button onClick={() => editApiKey(gateway.id)} className="bg-yellow-600 text-white px-4 py-2 rounded-lg">
                                            Edit
                                        </button>
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>
            </div >
        </>
    );
}