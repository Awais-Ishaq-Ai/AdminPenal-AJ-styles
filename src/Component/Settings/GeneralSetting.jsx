import React, { useState } from 'react';

export default function GeneralSetting() {
    // State to manage form inputs
    const [settings, setSettings] = useState({
        appName: 'My Application',
        appLogo: 'https://via.placeholder.com/150',
        theme: 'light',
        emailNotifications: true,
        maintenanceMode: false,
    });

    // Function to handle input changes
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSettings((prevSettings) => ({
            ...prevSettings,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };

    // Function to handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Settings saved successfully!');
        console.log('Updated Settings:', settings);
    };

    return (
        <div className="h-[92vh] bg-[#002022] overflow-auto p-5">
            <h1 className="text-2xl font-bold text-white mb-6">General Settings</h1>

            {/* Settings Form */}
            <form onSubmit={handleSubmit} className="bg-[#003034] p-6 rounded-lg">
                {/* Application Name */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-white mb-2">Application Name</label>
                    <input
                        type="text"
                        name="appName"
                        value={settings.appName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-[#004044] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                </div>

                {/* Application Logo */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-white mb-2">Application Logo URL</label>
                    <input
                        type="text"
                        name="appLogo"
                        value={settings.appLogo}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-[#004044] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    />
                    <div className="mt-2">
                        <img
                            src={settings.appLogo}
                            alt="Application Logo"
                            className="w-20 h-20 rounded-md"
                        />
                    </div>
                </div>

                {/* Theme Selection */}
                <div className="mb-4">
                    <label className="block text-sm font-medium text-white mb-2">Theme</label>
                    <select
                        name="theme"
                        value={settings.theme}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-[#004044] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    >
                        <option value="light">Light</option>
                        <option value="dark">Dark</option>
                    </select>
                </div>

                {/* Email Notifications */}
                <div className="mb-4">
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="emailNotifications"
                            checked={settings.emailNotifications}
                            onChange={handleInputChange}
                            className="form-checkbox h-5 w-5 text-blue-500"
                        />
                        <span className="text-sm text-white">Enable Email Notifications</span>
                    </label>
                </div>

                {/* Maintenance Mode */}
                <div className="mb-6">
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="maintenanceMode"
                            checked={settings.maintenanceMode}
                            onChange={handleInputChange}
                            className="form-checkbox h-5 w-5 text-blue-500"
                        />
                        <span className="text-sm text-white">Enable Maintenance Mode</span>
                    </label>
                </div>

                {/* Save Button */}
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                    Save Settings
                </button>
            </form>
        </div>
    );
}