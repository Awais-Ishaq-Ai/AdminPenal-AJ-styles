import React from 'react';
import { LineChart, Line, BarChart, Bar, PieChart, Pie, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, AreaChart, Area } from 'recharts';

const lineData = [
    { month: 'Awais', sales: 400 },
    { month: 'Feb', sales: 700 },
    { month: 'Mar', sales: 500 },
    { month: 'Apr', sales: 900 },
    { month: 'May', sales: 650 },
];

const barData = [
    { day: 'Mon', views: 1200 },
    { day: 'Tue', views: 1800 },
    { day: 'Wed', views: 1500 },
    { day: 'Thu', views: 2000 },
    { day: 'Fri', views: 1700 },
];

const pieData = [
    { name: 'Profit', value: 92 },
    { name: 'Expenses', value: 8 },
];

const data = [
    {
        "name": "January",
        "uv": 4000,
        "pv": 2400,
        "amt": 2400
    },
    {
        "name": " February ",
        "uv": 3000,
        "pv": 1398,
        "amt": 2210
    },
    {
        "name": "March",
        "uv": 2000,
        "pv": 9800,
        "amt": 2290
    },
    {
        "name": "April",
        "uv": 2780,
        "pv": 3908,
        "amt": 2000
    },
    {
        "name": "May",
        "uv": 1890,
        "pv": 4800,
        "amt": 2181
    },
    {
        "name": "June",
        "uv": 2390,
        "pv": 3800,
        "amt": 200
    },
    {
        "name": "July",
        "uv": 3490,
        "pv": 4300,
        "amt": 2100
    }
]

const COLORS = ['#00C49F', '#FF8042'];

const DashboardCharts = () => {
    return (
        <div className="bg-gray-900 text-white min-h-screen p-8 grid grid-cols-2 gap-6">
            {/* Line Chart */}
            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl mb-4">Sales Statistics</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <LineChart data={lineData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                        <XAxis dataKey="month" stroke="#ddd" />
                        <YAxis stroke="#ddd" />
                        <Tooltip contentStyle={{ backgroundColor: '#333', color: '#fff' }} />
                        <Legend />
                        <Line type="monotone" dataKey="sales" stroke="#00C49F" strokeWidth={2} />
                    </LineChart>
                </ResponsiveContainer>
            </div>

            {/* Bar Chart */}
            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg">
                <h3 className="text-xl mb-4">Website Traffic</h3>
                <ResponsiveContainer width="100%" height={300}>
                    <BarChart data={barData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="#444" />
                        <XAxis dataKey="day" stroke="#ddd" />
                        <YAxis stroke="#ddd" />
                        <Tooltip contentStyle={{ backgroundColor: '#333', color: '#fff' }} />
                        <Legend />
                        <Bar dataKey="views" fill="#82ca9d" />
                    </BarChart>
                </ResponsiveContainer>
            </div>

            {/* Pie Chart */}
            <div className="bg-gray-800 p-6 rounded-2xl shadow-lg col-span-2">
                <h3 className="text-xl mb-4">Profit Analysis</h3>
                <ResponsiveContainer width="50%" height={300}>
                    <PieChart>
                        <Pie data={pieData} dataKey="value" outerRadius={100} fill="#8884d8">
                            {pieData.map((entry, index) => (
                                <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>


                <div className="bg-gray-800 p-6 w-[70%] rounded-2xl shadow-lg text-white">
                    <h3 className="text-xl mb-4">Sales Statistics</h3>
                    <ResponsiveContainer width="100%" height={300}>
                        <AreaChart data={data} margin={{ top: 10, right: 100, left: 0, bottom: 0 }}>
                            <defs>
                                <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#a83232" stopOpacity={0.4} />
                                    <stop offset="50%" stopColor="#a83232" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorPv1" x1="2" y1="0" x2="0" y2="2">
                                    <stop offset="5%" stopColor="#82ca4d" stopOpacity={0.6} />
                                    <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                                </linearGradient>
                                <linearGradient id="colorPv2" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="#4da17b" stopOpacity={0.7} />
                                    <stop offset="95%" stopColor="#4da17b" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="name" />
                            <YAxis />
                            <CartesianGrid strokeDasharray="3 3" />
                            <Tooltip />
                            <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                            <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv1)" />
                            <Area type="monotone" dataKey="amt" stroke="#FF6B6B" fillOpacity={1} fill="url(#colorPv2)" />
                        </AreaChart>
                    </ResponsiveContainer>

                </div>
            </div>
        </div >
    );
};

export default DashboardCharts;
