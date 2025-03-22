import RemoveIcon from '@mui/icons-material/Remove';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import HomeIcon from '@mui/icons-material/Home';
import React, { useState } from 'react'
import DescriptionIcon from '@mui/icons-material/Description';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import CategoryIcon from '@mui/icons-material/Category';
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
import AssessmentIcon from '@mui/icons-material/Assessment';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import SupportAgentIcon from '@mui/icons-material/SupportAgent';
import HeadsetMicIcon from '@mui/icons-material/HeadsetMic';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ChatIcon from '@mui/icons-material/Chat';
// image 
import sideBarImg from '../assets/eiffel tower.jpg'
import { Link } from 'react-router-dom';
import HeaderNavbar from './HeaderNavbar';

export default function SideBar() {

    const [toggle, setToggle] = useState(false)
    const [toggle1, setToggle1] = useState(false)
    const [toggle2, setToggle2] = useState(false)
    const [toggle3, setToggle3] = useState(false)
    const [toggle4, setToggle4] = useState(false)
    const [toggle5, setToggle5] = useState(false)
    const [toggle6, setToggle6] = useState(false)
    const [toggle7, setToggle7] = useState(false)
    const [toggle8, setToggle8] = useState(false)
    const [toggle9, setToggle9] = useState(false)

    const handleDropDown = () => {
        setToggle(!toggle)
    }
    const handleDropDown1 = () => {
        setToggle1(!toggle1)
    }
    const handleDropDown2 = () => {
        setToggle2(!toggle2)
    }
    const handleDropDown3 = () => {
        setToggle3(!toggle3)
    }
    const handleDropDown4 = () => {
        setToggle4(!toggle4)
    }
    const handleDropDown5 = () => {
        setToggle5(!toggle5)
    }
    const handleDropDown6 = () => {
        setToggle6(!toggle6)
    }
    const handleDropDown7 = () => {
        setToggle7(!toggle7)
    }
    const handleDropDown8 = () => {
        setToggle8(!toggle8)
    }
    const handleDropDown9 = () => {
        setToggle9(!toggle9)
    }

    return (
        <>
            <div className=' bg-[#002022] h-[92vh]'>
                <aside style={{ backgroundImage: `url(${sideBarImg})`, backgroundPosition: "center", scrollbarWidth: "none" }} className='w-[20%] absolute top-10 text-white h-[92vh] overflow-y-auto  bg-black opacity-85'>
                    <ul className=' opacity-85 bg-black'>
                        <button onClick={handleDropDown} className={`flex items-center cursor-pointer w-[100%] px-2 justify-between py-2  ${toggle ? 'bg-gradient-to-t from-cyan-900 via-black bg-[length:100%_100%]  animate-spin-slow' : ''
                            }`}>
                            <div className='flex capitalize items-end'>
                                <span><HomeIcon /></span>
                                <h1 className='font-bold ml-2'>dashboard</h1>
                            </div>
                            <span className={`transition-transform duration-300 ease-in-out ${toggle ? 'rotate-180' : 'rotate-0'}`}> {toggle ? <ExpandMoreIcon /> : <KeyboardArrowUpIcon />}  </span>
                        </button>
                        <div className='flex justify-end mr-2'>
                            <ul className={`flex flex-col pl-3.5 mt-1 text-xs w-[90%] shadow-[0px_0_10px_rgba(0,255,255,0.1),0px_0_10px_rgba(0,255,255,0.3)] transition-all duration-300 ease-in ${toggle ? 'max-h-[500px] bg-[#071b1f] opacity-95' : 'max-h-0 opacity-0'} overflow-hidden`} >
                                <li className='my-2 list-none'><RemoveIcon sx={{ fontSize: "8px", marginRight: "8px" }} /><Link className='' to="analytics">Analytics</Link></li>
                                <li className='my-2 list-none'><RemoveIcon sx={{ fontSize: "8px", marginRight: "8px" }} /><Link className='' to="sales">sales</Link></li>
                                <li className='my-2 list-none'><RemoveIcon sx={{ fontSize: "8px", marginRight: "8px" }} /><Link className='' to="availbleProduct">Available products</Link></li>
                                {/* <li className='my-2 list-none'><RemoveIcon sx={{ fontSize: "8px", marginRight: "8px" }} /><a className='' href="">Total Products</a></li>
                                <li className='my-2 list-none'><RemoveIcon sx={{ fontSize: "8px", marginRight: "8px" }} /><a className='' href="">Shirts</a></li>
                                <li className='my-2 list-none'><RemoveIcon sx={{ fontSize: "8px", marginRight: "8px" }} /><a className='' href="">Shoes</a></li>
                                <li className='my-2 list-none'><RemoveIcon sx={{ fontSize: "8px", marginRight: "8px" }} /><a className='' href="">Pents</a></li>
                                <li className='my-2 list-none'><RemoveIcon sx={{ fontSize: "8px", marginRight: "8px" }} /><a className='' href="">cultural dress</a></li> */}
                            </ul>
                        </div>

                        <button onClick={handleDropDown1} className={`flex items-center cursor-pointer w-[100%] mt-1 px-2 py-2 justify-between  font-bold border-t  ${toggle1 ? 'bg-gradient-to-t from-cyan-900 via-black bg-[length:100%_100%]  animate-spin-slow' : ''
                            }`}>
                            <div className='flex capitalize items-center'>
                                <span className='text-xs'><InventoryIcon sx={{ fontSize: "18px", marginRight: "8px" }} /></span>
                                <h1 className='bg-blue opacity-95  text- rounded'> <span className='text-sm ml-0.5'>product Management</span> </h1>
                            </div>
                            <span className={`transition-transform duration-300 ease-in-out ${toggle1 ? 'rotate-180' : 'rotate-0'}`}> {toggle ? <ExpandMoreIcon /> : <KeyboardArrowUpIcon />}  </span>
                            {/* <h1 className='font-bold ml-2'>dashboard</h1> */}
                        </button>
                        <div className='flex justify-end mr-2'>
                            <ul className={`flex flex-col pl-3.5 mt-1 text-xs w-[90%] shadow-[0px_0_10px_rgba(0,255,255,0.1),0px_0_10px_rgba(0,255,255,0.3)] transition-all duration-300 ease-in ${toggle1 ? 'max-h-[500px] bg-[#071b1f] opacity-95' : 'max-h-0 opacity-0'} overflow-hidden`}>
                                <li className='flex justify-between items-center  text-slate-400'> <div className=' my-2 '>  <span><ProductionQuantityLimitsIcon sx={{ fontSize: "15px", marginRight: "8px" }} /></span> <Link className='' to="addProduct"  >Add product</Link>  </div> <span><KeyboardArrowRightIcon /></span> </li>
                                <li className='flex justify-between items-center  text-slate-400'> <div className=' my-2 '>  <span><ModeEditOutlineIcon sx={{ fontSize: "15px", marginRight: "8px" }} /></span> <Link className='' to="editProduct">Edit product</Link> </div> <span><KeyboardArrowRightIcon /></span> </li>
                            </ul>
                        </div>

                        <button onClick={handleDropDown2} className={`flex items-center cursor-pointer mt-1 w-[100%] px-2 py-2 justify-between  font-bold border-t  ${toggle2 ? 'bg-gradient-to-t from-cyan-900 via-black bg-[length:100%_100%]  animate-spin-slow' : ''
                            }`}>
                            <div className='flex capitalize items-center'>
                                <span className='text-xs'><AssignmentIcon sx={{ fontSize: "18px", marginRight: "8px" }} /></span>
                                <h1 className=' opacity-95 p-2 text-sm rounded'>Order Management</h1>
                            </div>
                            <span className={`transition-transform duration-300 ease-in-out ${toggle2 ? 'rotate-180' : 'rotate-0'}`}> {toggle2 ? <ExpandMoreIcon /> : <KeyboardArrowUpIcon />}  </span>
                            {/* <h1 className='font-bold ml-2'>dashboard</h1> */}
                        </button>
                        <div className='flex justify-end mr-2'>
                            <ul className={`flex flex-col pl-3.5 mt-1 text-xs w-[90%] shadow-[0px_0_10px_rgba(0,255,255,0.1),0px_0_10px_rgba(0,255,255,0.3)] transition-all duration-300 ease-in ${toggle2 ? 'max-h-[500px] bg-[#071b1f] opacity-95' : 'max-h-0 opacity-0'} overflow-hidden`}>
                                <li className='flex justify-between items-center  text-slate-400 '> <div className=' my-2 '> <span><DescriptionIcon sx={{ fontSize: "15px", marginRight: "8px" }} /></span>  <Link className='text-md' to="vieworder">View orders</Link> </div> <span><KeyboardArrowRightIcon /></span> </li>
                                <li className='flex justify-between items-center  text-slate-400'> <div className=' my-2 '>  <span><ProductionQuantityLimitsIcon sx={{ fontSize: "15px", marginRight: "8px" }} /></span> <Link className='' to="shipping">shipping status</Link>  </div> <span><KeyboardArrowRightIcon /></span> </li>
                                <li className='flex justify-between items-center  text-slate-400'> <div className=' my-2 '>  <span><ModeEditOutlineIcon sx={{ fontSize: "15px", marginRight: "8px" }} /></span> <Link className='text-sm' to="returnRefund">returns & refunds</Link> </div> <span><KeyboardArrowRightIcon /></span> </li>
                            </ul>
                        </div>
                        <button onClick={handleDropDown3} className={`flex items-center cursor-pointer w-[100%] mt-1 px-2 py-2 justify-between  font-bold border-t  ${toggle3 ? 'bg-gradient-to-t from-cyan-900 via-black bg-[length:100%_100%]  animate-spin-slow' : ''
                            }`}>
                            <div className='flex capitalize items-center'>
                                <span className='text-xs'><PeopleIcon sx={{ fontSize: "18px", marginRight: "8px" }} /></span>
                                <h1 className=' opacity-95 p-2 text-sm rounded'>User Managementt</h1>
                            </div>
                            <span className={`transition-transform duration-300 ease-in-out ${toggle3 ? 'rotate-180' : 'rotate-0'}`}> {toggle3 ? <ExpandMoreIcon /> : <KeyboardArrowUpIcon />}  </span>
                            {/* <h1 className='font-bold ml-2'>dashboard</h1> */}
                        </button>
                        <div className='flex justify-end mr-2'>
                            <ul className={`flex flex-col pl-3.5 mt-1 text-xs w-[90%] shadow-[0px_0_10px_rgba(0,255,255,0.1),0px_0_10px_rgba(0,255,255,0.3)] transition-all duration-300 ease-in ${toggle3 ? 'max-h-[500px] bg-[#071b1f] opacity-95' : 'max-h-0 opacity-0'} overflow-hidden`}>
                                <li className='flex justify-between items-center  text-slate-400 '> <div className=' my-2 '> <span><DescriptionIcon sx={{ fontSize: "15px", marginRight: "8px" }} /></span>  <Link className='text-md' to="customerDetail">Customer details</Link> </div> <span><KeyboardArrowRightIcon /></span> </li>
                                <li className='flex justify-between items-center  text-slate-400'> <div className=' my-2 '>  <span><ProductionQuantityLimitsIcon sx={{ fontSize: "15px", marginRight: "8px" }} /></span> <a className='' href="">control</a>  </div> <span><KeyboardArrowRightIcon /></span> </li>
                            </ul>
                        </div>

                        <button onClick={handleDropDown4} className={`flex items-center cursor-pointer w-[100%] mt-1 px-2 py-2 justify-between  font-bold border-t  ${toggle4 ? 'bg-gradient-to-t from-cyan-900 via-black bg-[length:100%_100%]  animate-spin-slow' : ''
                            }`}>
                            <div className='flex capitalize items-center'>
                                <span className='text-xs'><TrendingUpIcon sx={{ fontSize: "18px", marginRight: "8px" }} /></span>
                                <h1 className=' opacity-95 p-2 text-sm rounded'>Sales and Marketing</h1>
                            </div>
                            <span className={`transition-transform duration-300 ease-in-out ${toggle4 ? 'rotate-180' : 'rotate-0'}`}> {toggle4 ? <ExpandMoreIcon /> : <KeyboardArrowUpIcon />}  </span>
                            {/* <h1 className='font-bold ml-2'>dashboard</h1> */}
                        </button>
                        <div className='flex justify-end mr-2'>
                            <ul className={`flex flex-col pl-3.5 mt-1 text-xs w-[90%] shadow-[0px_0_10px_rgba(0,255,255,0.1),0px_0_10px_rgba(0,255,255,0.3)] transition-all duration-300 ease-in ${toggle4 ? 'max-h-[500px] bg-[#071b1f] opacity-95' : 'max-h-0 opacity-0'} overflow-hidden`}>
                                <li className='flex justify-between items-center  text-slate-400 '><div className=' my-2 '> <span><DescriptionIcon sx={{ fontSize: "15px", marginRight: "8px" }} /></span>  <Link className='text-xs' to="discountandcoupns">Discounts and coupons</Link> </div> <span><KeyboardArrowRightIcon /></span> </li>
                                <li className='flex justify-between items-center  text-slate-400'><div className=' my-2 '>  <span><ProductionQuantityLimitsIcon sx={{ fontSize: "15px", marginRight: "8px" }} /></span> <Link className='' to="email">Email and SMS </Link>  </div> <span><KeyboardArrowRightIcon /></span> </li>
                            </ul>
                        </div>

                        <button onClick={handleDropDown5} className={`flex items-center cursor-pointer w-[100%] mt-1 px-2 py-2 justify-between  font-bold border-t  ${toggle5 ? 'bg-gradient-to-t from-cyan-900 via-black bg-[length:100%_100%]  animate-spin-slow' : ''
                            }`}>
                            <div className='flex capitalize items-center'>
                                <span className='text-xs'><PaymentIcon sx={{ fontSize: "18px", marginRight: "8px" }} /></span>
                                <h1 className='opacity-95 text-xs '>Payments & Transactions</h1>
                            </div>
                            <span className={`transition-transform duration-300 ease-in-out ${toggle5 ? 'rotate-180' : 'rotate-0'}`}> {toggle5 ? <ExpandMoreIcon /> : <KeyboardArrowUpIcon />}  </span>
                            {/* <h1 className='font-bold ml-2'>dashboard</h1> */}
                        </button>
                        <div className='flex justify-end mr-2'>
                            <ul className={`flex flex-col pl-3.5 mt-1 text-xs w-[90%] shadow-[0px_0_10px_rgba(0,255,255,0.1),0px_0_10px_rgba(0,255,255,0.3)] transition-all duration-300 ease-in ${toggle5 ? 'max-h-[500px] bg-[#071b1f] opacity-95' : 'max-h-0 opacity-0'} overflow-hidden`}>
                                <li className='flex justify-between items-center  text-slate-400 '><div className=' my-2 '> <span><SettingsApplicationsIcon sx={{ fontSize: "15px", marginRight: "8px" }} /></span>  <a className='text-[9px]' href="">Payment gateway settings</a> </div> <span><KeyboardArrowRightIcon /></span> </li>
                                <li className='flex justify-between items-center  text-slate-400'><div className=' my-2 '>  <span><HistoryIcon sx={{ fontSize: "15px", marginRight: "8px" }} /></span> <a className='' href="">Transaction history </a>  </div> <span><KeyboardArrowRightIcon /></span> </li>
                            </ul>
                        </div>

                        <button onClick={handleDropDown6} className={`flex items-center cursor-pointer w-[100%] mt-1 px-2 py-2 justify-between  font-bold border-t  ${toggle6 ? 'bg-gradient-to-t from-cyan-900 via-black bg-[length:100%_100%]  animate-spin-slow' : ''
                            }`}>
                            <div className='flex capitalize items-center'>
                                <span className='text-xs'><PaymentIcon sx={{ fontSize: "18px", marginRight: "8px" }} /></span>
                                <h1 className='opacity-95 text-xs '>Reviews and Feedback</h1>
                            </div>
                            <span className={`transition-transform duration-300 ease-in-out ${toggle6 ? 'rotate-180' : 'rotate-0'}`}> {toggle6 ? <ExpandMoreIcon /> : <KeyboardArrowUpIcon />}  </span>
                            {/* <h1 className='font-bold ml-2'>dashboard</h1> */}
                        </button>
                        <div className='flex justify-end mr-2'>
                            <ul className={`flex flex-col pl-3.5 mt-1 text-xs w-[90%] shadow-[0px_0_10px_rgba(0,255,255,0.1),0px_0_10px_rgba(0,255,255,0.3)] transition-all duration-300 ease-in ${toggle6 ? 'max-h-[500px] bg-[#071b1f] opacity-95' : 'max-h-0 opacity-0'} overflow-hidden`}>
                                <li className='flex justify-between items-center  text-slate-400 '><div className=' my-2 '> <span><RateReviewIcon sx={{ fontSize: "15px", marginRight: "8px" }} /></span>  <a className='text-md' href="">Customer reviews</a> </div> <span><KeyboardArrowRightIcon /></span> </li>
                                <li className='flex justify-between items-center  text-slate-400'><div className=' my-2 '>  <span><FeedbackIcon sx={{ fontSize: "15px", marginRight: "8px" }} /></span> <a className='text-xs' href="">Ratings and feedback management </a>  </div> <span><KeyboardArrowRightIcon /></span> </li>
                            </ul>
                        </div>

                        <button onClick={handleDropDown7} className={`flex items-center cursor-pointer w-[100%] mt-1 px-2 py-2 justify-between  font-bold border-t  ${toggle7 ? 'bg-gradient-to-t from-cyan-900 via-black bg-[length:100%_100%]  animate-spin-slow' : ''
                            }`}>
                            <div className='flex capitalize items-center'>
                                <span className='text-xs'><SettingsSuggestIcon sx={{ fontSize: "18px", marginRight: "8px" }} /></span>
                                <h1 className='opacity-95 text-lg '>Settings</h1>
                            </div>
                            <span className={`transition-transform duration-300 ease-in-out ${toggle7 ? 'rotate-180' : 'rotate-0'}`}> {toggle7 ? <ExpandMoreIcon /> : <KeyboardArrowUpIcon />}  </span>
                            {/* <h1 className='font-bold ml-2'>dashboard</h1> */}
                        </button>
                        <div className="flex justify-end mr-2">
                            <ul className={`flex flex-col pl-3.5 mt-1 text-xs w-[90%] shadow-[0px_0_10px_rgba(0,255,255,0.1),0px_0_10px_rgba(0,255,255,0.3)] transition-all duration-300 ease-in ${toggle7 ? 'max-h-[500px] bg-[#071b1f] opacity-95' : 'max-h-0 opacity-0'} overflow-hidden`}>
                                <li className='flex justify-between items-center  text-slate-400 '><div className=' my-2 '> <span><HandymanIcon sx={{ fontSize: "15px", marginRight: "8px" }} /></span>  <a className=' ' href="">General settings</a> </div> <span><KeyboardArrowRightIcon /></span> </li>
                                <li className='flex justify-between items-center  text-slate-400'><div className=' my-2 '>  <span><SecurityIcon sx={{ fontSize: "15px", marginRight: "8px" }} /></span> <a className='' href="">Security settings </a>  </div> <span><KeyboardArrowRightIcon /></span> </li>
                            </ul>
                        </div>

                        <button onClick={handleDropDown8} className={`flex items-center cursor-pointer w-[100%] mt-1 px-2 py-2 justify-between  font-bold border-t  ${toggle8 ? 'bg-gradient-to-t from-cyan-900 via-black bg-[length:100%_100%]  animate-spin-slow' : ''
                            }`}>
                            <div className='flex capitalize items-center'>
                                <span className='text-xs'><AssessmentIcon sx={{ fontSize: "18px", marginRight: "8px" }} /></span>
                                <h1 className='opacity-95 text-sm '>Reports and Analytics</h1>
                            </div>
                            <span className={`transition-transform duration-300 ease-in-out ${toggle8 ? 'rotate-180' : 'rotate-0'}`}> {toggle8 ? <ExpandMoreIcon /> : <KeyboardArrowUpIcon />}  </span>
                            {/* <h1 className='font-bold ml-2'>dashboard</h1> */}
                        </button>
                        <div className='flex justify-end mr-2'>
                            <ul className={`flex flex-col pl-3.5 mt-1 text-xs w-[90%] shadow-[0px_0_10px_rgba(0,255,255,0.1),0px_0_10px_rgba(0,255,255,0.3)] transition-all duration-300 ease-in ${toggle8 ? 'max-h-[500px] bg-[#071b1f] opacity-95' : 'max-h-0 opacity-0'} overflow-hidden`}>
                                <li className='flex justify-between items-center  text-slate-400 '><div className=' my-2 '> <span><AttachMoneyIcon /></span>  <a className='text-md' href="">total slaes</a> </div> <span><KeyboardArrowRightIcon /></span> </li>
                                <li className='flex justify-between items-center  text-slate-400'><div className=' my-2 '>  <span><LocalOfferIcon /></span> <a className='' href=""> products sales </a>  </div> <span><KeyboardArrowRightIcon /></span> </li>
                            </ul>
                        </div>

                        <button onClick={handleDropDown9} className={`flex items-center cursor-pointer w-[100%] mt-1 px-2 py-2 justify-between  font-bold border-t  ${toggle9 ? 'bg-gradient-to-t from-cyan-900 via-black bg-[length:100%_100%]  animate-spin-slow' : ''
                            }`}>
                            <div className='flex capitalize items-center'>
                                <span className='text-xs'><SupportAgentIcon and Help Center sx={{ fontSize: "18px", marginRight: "8px" }} /></span>
                                <h1 className='opacity-95 text-xs '>Support and Help Center</h1>
                            </div>
                            <span className={`transition-transform duration-300 ease-in-out ${toggle9 ? 'rotate-180' : 'rotate-0'}`}> {toggle9 ? <ExpandMoreIcon /> : <KeyboardArrowUpIcon />}  </span>
                            {/* <h1 className='font-bold ml-2'>dashboard</h1> */}
                        </button>
                        <div className='flex justify-end mr-2'>
                            <ul className={`flex flex-col pl-3.5 mt-1 text-xs w-[90%] shadow-[0px_0_10px_rgba(0,255,255,0.1),0px_0_10px_rgba(0,255,255,0.3)] transition-all duration-300 ease-in ${toggle9 ? 'max-h-[500px] bg-[#071b1f] opacity-95' : 'max-h-0 opacity-0'} overflow-hidden`}>
                                <li className='flex justify-between items-center  text-slate-400 '><div className=' my-2 '> <span><HeadsetMicIcon sx={{ fontSize: "15px", marginRight: "8px" }} /></span>  <a className='text-md' href="">Customer support tickets</a> </div> <span><KeyboardArrowRightIcon /></span> </li>
                                <li className='flex justify-between items-center  text-slate-400'><div className=' my-2 '>  <span><HelpOutlineIcon sx={{ fontSize: "15px", marginRight: "8px" }} /></span> <a className='' href=""> FAQs management </a>  </div> <span><KeyboardArrowRightIcon /></span> </li>
                                <li className='flex justify-between items-center  text-slate-400'><div className=' my-2 '>  <span><ChatIcon sx={{ fontSize: "15px", marginRight: "8px" }} /></span> <a className='' href=""> Chat support management</a>  </div> <span><KeyboardArrowRightIcon /></span> </li>
                            </ul>
                        </div>
                    </ul>
                </aside>
            </div>

        </>
    )
}