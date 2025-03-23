import React, { useState } from 'react';

export default function Controls() {
    // Sample data for system controls
    const [controls, setControls] = useState([
        {
            id: 1,
            name: 'User Registration',
            description: 'Enable or disable new user registration.',
            status: true, // true = enabled, false = disabled
        },
        {
            id: 2,
            name: 'Email Notifications',
            description: 'Enable or disable email notifications for users.',
            status: false,
        },
        {
            id: 3,
            name: 'Two-Factor Authentication',
            description: 'Enable or disable two-factor authentication for admin accounts.',
            status: true,
        },
        {
            id: 4,
            name: 'Maintenance Mode',
            description: 'Put the website in maintenance mode.',
            status: false,
        },
    ]);

    // Function to toggle control status
    const toggleControl = (id) => {
        setControls((prevControls) =>
            prevControls.map((control) =>
                control.id === id ? { ...control, status: !control.status } : control
            )
        );
    };

    return (
        <>
            <div style={{scrollbarWidth:"none"}} className="h-[92vh] bg-[#002022] overflow-auto p-5">
                <h1 className="text-2xl font-bold text-white mb-6">System Controls</h1>

                {/* Controls List */}
                <div className="space-y-4">
                    {controls.map((control) => (
                        <div key={control.id} className="bg-[#003034] p-6 rounded-lg">
                            <div className="flex justify-between items-center">
                                <div>
                                    <h2 className="text-lg font-semibold text-white">{control.name}</h2>
                                    <p className="text-sm text-gray-400">{control.description}</p>
                                </div>
                                <button
                                    onClick={() => toggleControl(control.id)}
                                    className={`px-4 py-2 rounded-full text-sm font-semibold ${
                                        control.status
                                            ? 'bg-green-500 text-white'
                                            : 'bg-red-500 text-white'
                                    }`}
                                >
                                    {control.status ? 'Enabled' : 'Disabled'}
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}