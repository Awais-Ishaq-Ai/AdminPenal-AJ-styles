import React, { useState } from 'react';

export default function EmailandSms() {
    // Sample data for email and SMS templates
    const [templates, setTemplates] = useState([
        {
            id: 1,
            type: 'Email',
            name: 'Welcome Email',
            subject: 'Welcome to Our Store!',
            content: 'Hi {customer}, welcome to our store. Enjoy your shopping!',
            status: 'Active',
        },
        {
            id: 2,
            type: 'SMS',
            name: 'Order Confirmation',
            content: 'Hi {customer}, your order #{orderId} has been confirmed.',
            status: 'Active',
        },
        {
            id: 3,
            type: 'Email',
            name: 'Promotional Offer',
            subject: 'Exclusive Discount for You!',
            content: 'Hi {customer}, get 20% off on your next purchase. Use code: WELCOME20.',
            status: 'Inactive',
        },
    ]);

    // State for search query
    const [searchQuery, setSearchQuery] = useState('');

    // State for new template form
    const [newTemplate, setNewTemplate] = useState({
        type: 'Email',
        name: '',
        subject: '',
        content: '',
        status: 'Active',
    });

    // Filter templates based on search query
    const filteredTemplates = templates.filter((template) =>
        template.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    // Function to add a new template
    const addTemplate = () => {
        if (newTemplate.name && newTemplate.content) {
            setTemplates((prevTemplates) => [
                ...prevTemplates,
                { ...newTemplate, id: prevTemplates.length + 1 },
            ]);
            setNewTemplate({
                type: 'Email',
                name: '',
                subject: '',
                content: '',
                status: 'Active',
            });
        } else {
            alert('Please fill all required fields.');
        }
    };

    // Function to delete a template
    const deleteTemplate = (id) => {
        setTemplates((prevTemplates) =>
            prevTemplates.filter((template) => template.id !== id)
        );
    };

    return (
        <>
            <div className="h-[92vh] bg-[#002022] overflow-auto p-5">
                <h1 className="text-2xl font-bold text-white mb-6">Email and SMS Management</h1>

                {/* Search Bar */}
                <div className="mb-6">
                    <input
                        type="text"
                        placeholder="Search by Template Name..."
                        value={searchQuery}
                        onChange={(e) => setSearchQuery(e.target.value)}
                        className="w-full p-2 rounded-lg bg-[#003034] text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#005055]"
                    />
                </div>

                {/* Add New Template Form */}
                <div className="mb-6 bg-[#003034] p-6 rounded-lg">
                    <h2 className="text-xl font-bold text-white mb-4">Add New Template</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                            <label className="block text-sm font-medium text-white">Type</label>
                            <select
                                value={newTemplate.type}
                                onChange={(e) =>
                                    setNewTemplate({ ...newTemplate, type: e.target.value })
                                }
                                className="mt-1 block w-full p-2 bg-[#004044] text-white rounded-lg"
                            >
                                <option value="Email">Email</option>
                                <option value="SMS">SMS</option>
                            </select>
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white">Name</label>
                            <input
                                type="text"
                                value={newTemplate.name}
                                onChange={(e) =>
                                    setNewTemplate({ ...newTemplate, name: e.target.value })
                                }
                                className="mt-1 block w-full p-2 bg-[#004044] text-white rounded-lg"
                                placeholder="e.g., Welcome Email"
                            />
                        </div>
                        {newTemplate.type === 'Email' && (
                            <div>
                                <label className="block text-sm font-medium text-white">Subject</label>
                                <input
                                    type="text"
                                    value={newTemplate.subject}
                                    onChange={(e) =>
                                        setNewTemplate({ ...newTemplate, subject: e.target.value })
                                    }
                                    className="mt-1 block w-full p-2 bg-[#004044] text-white rounded-lg"
                                    placeholder="e.g., Welcome to Our Store!"
                                />
                            </div>
                        )}
                        <div>
                            <label className="block text-sm font-medium text-white">Content</label>
                            <textarea
                                value={newTemplate.content}
                                onChange={(e) =>
                                    setNewTemplate({ ...newTemplate, content: e.target.value })
                                }
                                className="mt-1 block w-full p-2 bg-[#004044] text-white rounded-lg"
                                placeholder="e.g., Hi {customer}, welcome to our store!"
                                rows={3}
                            />
                        </div>
                        <div>
                            <label className="block text-sm font-medium text-white">Status</label>
                            <select
                                value={newTemplate.status}
                                onChange={(e) =>
                                    setNewTemplate({ ...newTemplate, status: e.target.value })
                                }
                                className="mt-1 block w-full p-2 bg-[#004044] text-white rounded-lg"
                            >
                                <option value="Active">Active</option>
                                <option value="Inactive">Inactive</option>
                            </select>
                        </div>
                    </div>
                    <button
                        onClick={addTemplate}
                        className="mt-4 bg-blue-600 text-white px-4 py-2 rounded-lg"
                    >
                        Add Template
                    </button>
                </div>

                {/* Templates Table */}
                <div className="overflow-x-auto">
                    <table className="min-w-full bg-[#003034] rounded-lg overflow-hidden">
                        <thead className="bg-[#004044]">
                            <tr>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Type</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Name</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Subject</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Content</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Status</th>
                                <th className="px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider">Actions</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-[#005055]">
                            {filteredTemplates.length > 0 ? (
                                filteredTemplates.map((template) => (
                                    <tr key={template.id} className="hover:bg-[#004044] transition-colors">
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{template.type}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{template.name}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{template.subject || '-'}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">{template.content}</td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                            <span
                                                className={`px-2 py-1 rounded-full text-xs font-semibold ${
                                                    template.status === 'Active'
                                                        ? 'bg-green-500 text-white'
                                                        : 'bg-red-500 text-white'
                                                }`}
                                            >
                                                {template.status}
                                            </span>
                                        </td>
                                        <td className="px-6 py-4 whitespace-nowrap text-sm text-white">
                                            <button
                                                onClick={() => deleteTemplate(template.id)}
                                                className="text-red-600 hover:text-red-900"
                                            >
                                                Delete
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