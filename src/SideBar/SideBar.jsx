import RemoveIcon from '@mui/icons-material/Remove';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import React, { useState } from 'react';
import DescriptionIcon from '@mui/icons-material/Description';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import InventoryIcon from '@mui/icons-material/Inventory';
import AssignmentIcon from '@mui/icons-material/Assignment';
import PeopleIcon from '@mui/icons-material/People';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import PaymentIcon from '@mui/icons-material/Payment';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import HistoryIcon from '@mui/icons-material/History';
import RateReviewIcon from '@mui/icons-material/RateReview';
import FeedbackIcon from '@mui/icons-material/Feedback';
import SettingsSuggestIcon from '@mui/icons-material/SettingsSuggest';
import HandymanIcon from '@mui/icons-material/Handyman';
import SecurityIcon from '@mui/icons-material/Security';
import ChatIcon from '@mui/icons-material/Chat';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import { Link } from 'react-router-dom';
import sideBarImg from '../assets/eiffel tower.jpg';

export default function SideBar() {
    // Complete sidebar content structure
    const sidebarSections = [
        {
            title: 'dashboard',
            icon: <HomeIcon />,
            subItems: [
                { title: 'Analytics', to: 'analytics', icon: <RemoveIcon sx={{ fontSize: "8px", marginRight: "8px" }} /> },
                { title: 'sales', to: 'sales', icon: <RemoveIcon sx={{ fontSize: "8px", marginRight: "8px" }} /> },
                { title: 'Available products', to: 'availbleProduct', icon: <RemoveIcon sx={{ fontSize: "8px", marginRight: "8px" }} /> }
            ],
            fontSize: 'text-base'
        },
        {
            title: 'product Management',
            icon: <InventoryIcon sx={{ fontSize: "18px", marginRight: "8px" }} />,
            subItems: [
                { title: 'Add product', to: 'addProduct', icon: <ProductionQuantityLimitsIcon sx={{ fontSize: "15px", marginRight: "8px" }} /> },], fontSize: 'text-sm'
        },
        {
            title: 'Order Management',
            icon: <AssignmentIcon sx={{ fontSize: "18px", marginRight: "8px" }} />,
            subItems: [
                { title: 'View orders', to: 'vieworder', icon: <DescriptionIcon sx={{ fontSize: "15px", marginRight: "8px" }} /> },
                { title: 'shipping status', to: 'shipping', icon: <ProductionQuantityLimitsIcon sx={{ fontSize: "15px", marginRight: "8px" }} /> },
                { title: 'returns & refunds', to: 'returnRefund', icon: <ModeEditOutlineIcon sx={{ fontSize: "15px", marginRight: "8px" }} /> }
            ],
            fontSize: 'text-sm'
        },
        {
            title: 'User Management',
            icon: <PeopleIcon sx={{ fontSize: "18px", marginRight: "8px" }} />,
            subItems: [
                { title: 'Customer details', to: 'customerDetail', icon: <DescriptionIcon sx={{ fontSize: "15px", marginRight: "8px" }} /> },
                { title: 'Control', to: 'controls', icon: <ProductionQuantityLimitsIcon sx={{ fontSize: "15px", marginRight: "8px" }} /> }
            ],
            fontSize: 'text-sm'
        },
        {
            title: 'Sales and Marketing',
            icon: <TrendingUpIcon sx={{ fontSize: "18px", marginRight: "8px" }} />,
            subItems: [
                { title: 'Discounts and coupons', to: 'discountandcoupns', icon: <DescriptionIcon sx={{ fontSize: "15px", marginRight: "8px" }} /> },
                { title: 'Email and SMS', to: 'email', icon: <ProductionQuantityLimitsIcon sx={{ fontSize: "15px", marginRight: "8px" }} /> }
            ],
            fontSize: 'text-xs'
        },
        {
            title: 'Payments & Transactions',
            icon: <PaymentIcon sx={{ fontSize: "18px", marginRight: "8px" }} />,
            subItems: [
                { title: 'Payment gateway settings', to: 'paymentsetting', icon: <SettingsApplicationsIcon sx={{ fontSize: "15px", marginRight: "8px" }} /> },
                { title: 'Transaction history', to: 'transactionhistory', icon: <HistoryIcon sx={{ fontSize: "15px", marginRight: "8px" }} /> }
            ],
            fontSize: 'text-xs'
        },
        {
            title: 'Reviews and Feedback',
            icon: <PaymentIcon sx={{ fontSize: "18px", marginRight: "8px" }} />,
            subItems: [
                { title: 'Customer reviews', to: 'customerReviews', icon: <RateReviewIcon sx={{ fontSize: "15px", marginRight: "8px" }} /> },
                { title: 'Ratings and feedback', to: 'rating', icon: <FeedbackIcon sx={{ fontSize: "15px", marginRight: "8px" }} /> }
            ],
            fontSize: 'text-xs'
        },
        {
            title: 'Settings',
            icon: <SettingsSuggestIcon sx={{ fontSize: "18px", marginRight: "8px" }} />,
            subItems: [
                { title: 'General settings', to: 'setting', icon: <HandymanIcon sx={{ fontSize: "15px", marginRight: "8px" }} /> },
                { title: 'Security settings', to: 'securitySetting', icon: <SecurityIcon sx={{ fontSize: "15px", marginRight: "8px" }} /> }
            ],
            fontSize: 'text-lg'
        },
        {
            title: 'Support and Help Center',
            icon: <SupportAgentIcon sx={{ fontSize: "18px", marginRight: "8px" }} />,
            subItems: [
                { title: 'Chat support', to: 'chat', icon: <ChatIcon sx={{ fontSize: "15px", marginRight: "8px" }} /> }
            ],
            fontSize: 'text-xs'
        }
    ];

    // State management for dropdowns
    const [expandedSections, setExpandedSections] = useState({});
    const toggleSection = (sectionTitle) => {
        setExpandedSections(prev => ({
            ...prev,
            [sectionTitle]: !prev[sectionTitle]
        }));
    };

    return (
        <div className='bg-[#002022] h-[92vh]'>
            <aside
                style={{
                    backgroundImage: `url(${sideBarImg})`,
                    backgroundPosition: "center",
                    scrollbarWidth: "none"
                }}
                className='w-full md:w-[20%] absolute top-10 text-white h-[92vh] overflow-y-auto bg-black opacity-85'
            >
                <ul className='opacity-85 bg-black'>
                    {sidebarSections.map((section, index) => (
                        <React.Fragment key={index}>
                            <button
                                onClick={() => toggleSection(section.title)}
                                className={`flex items-center cursor-pointer w-full px-2 justify-between py-4 border-b-2 border-white ${expandedSections[section.title]
                                        ? 'bg-gradient-to-t from-cyan-900 via-black bg-[length:100%_100%] animate-spin-slow'
                                        : ''
                                    }`}
                            >
                                <div className='flex capitalize items-center'>
                                    <span>{section.icon}</span>
                                    <h1 className={`font-bold ml-2 ${section.fontSize}`}>
                                        {section.title}
                                    </h1>
                                </div>
                                <span className={`transition-transform duration-300 ease-in-out ${expandedSections[section.title]
                                        ? 'rotate-360'
                                        : 'rotate-0'
                                    }`}>
                                    {expandedSections[section.title]
                                        ? <KeyboardArrowUpIcon />
                                        : <ExpandMoreIcon />}
                                </span>
                            </button>

                            <div className='flex justify-end mr-2'>
                                <ul className={`flex flex-col pl-3.5 mt-1 text-xs w-[90%] shadow-[0px_0_10px_rgba(0,255,255,0.1),0px_0_10px_rgba(0,255,255,0.3)] transition-all duration-300 ease-in ${expandedSections[section.title]
                                        ? 'max-h-[500px] bg-[#071b1f] opacity-95'
                                        : 'max-h-0 opacity-0'
                                    } overflow-hidden`}>
                                    {section.subItems.map((item, i) => (
                                        <li key={i} className='flex justify-between items-center text-slate-400 my-2 py-1'>
                                            <div className='flex items-center'>
                                                <span>{item.icon}</span><Link to={item.to} className='ml-1'>{item.title}</Link></div>
                                            <span><KeyboardArrowRightIcon sx={{ fontSize: "14px" }} /></span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </React.Fragment>
                    ))}
                </ul>
            </aside>
        </div>
    );
}