import { useState } from 'react';
export default function SecuritySettings() {
    const [settings, setSettings] = useState({
        enable2FA: false,
        passwordComplexity: 'medium',
        sessionTimeout: 30,
        loginAttempts: 5,
        enableAutoLogout: true,
    });
    const handleInputChange = (e) => {
        const { name, value, type, checked } = e.target;
        setSettings((prevSettings) => ({
            ...prevSettings,
            [name]: type === 'checkbox' ? checked : value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
        alert('Security settings saved successfully!');
        console.log('Updated Security Settings:', settings);
    };
    return (
        <div className="h-[92vh] bg-[#002022] overflow-auto p-5">
            <h1 className="text-2xl font-bold text-white mb-6">Security Settings</h1>
            <form onSubmit={handleSubmit} className="bg-[#003034] p-6 rounded-lg">
                <div className="mb-4">
                    <label className="flex items-center space-x-2">
                        <input type="checkbox" name="enable2FA" checked={settings.enable2FA} onChange={handleInputChange} className="form-checkbox h-5 w-5 text-blue-500" />
                        <span className="text-sm text-white">Enable Two-Factor Authentication (2FA)</span>
                    </label>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-white mb-2">Password Complexity</label>
                    <select name="passwordComplexity" value={settings.passwordComplexity} onChange={handleInputChange} className="w-full px-3 py-2 bg-[#004044] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <option value="low">Low</option>
                        <option value="medium">Medium</option>
                        <option value="high">High</option>
                    </select>
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-white mb-2">Session Timeout (Minutes)</label>
                    <input
                        type="number"
                        name="sessionTimeout"
                        value={settings.sessionTimeout}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-[#004044] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        min="1"
                    />
                </div>
                <div className="mb-4">
                    <label className="block text-sm font-medium text-white mb-2">Maximum Login Attempts</label>
                    <input
                        type="number"
                        name="loginAttempts"
                        value={settings.loginAttempts}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-[#004044] text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                        min="1"
                    />
                </div>
                <div className="mb-6">
                    <label className="flex items-center space-x-2">
                        <input
                            type="checkbox"
                            name="enableAutoLogout"
                            checked={settings.enableAutoLogout}
                            onChange={handleInputChange}
                            className="form-checkbox h-5 w-5 text-blue-500"
                        />
                        <span className="text-sm text-white">Enable Auto-Logout After Inactivity</span>
                    </label>
                </div>
                <button
                    type="submit"
                    className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
                >
                    Save Security Settings
                </button>
            </form>
        </div>
    );
}