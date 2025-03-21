import React from 'react'
// import { Input } from '@mui/material'
import { InputBase } from '@mui/material';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import SettingsIcon from '@mui/icons-material/Settings';
export default function HeaderNavbar() {
    return (
        <>
            <header className='flex bg-[#1E1E2F] w-[100%]  pb-1.5 text-slate-400 justify px-3 justify-between items-center'>
                <h1 className='uppercase font-bold'>WearHub</h1>
                <div className='flex justify-between items-center w-[22%]'>
                    <InputBase placeholder="search" sx={{ color: "white", borderBottom: "2px dotted gray", fontSize: "16px" }} />
                    <span className=''><NotificationsNoneIcon sx={{ color: "gray", fontSize: "20px" }} /></span>
                    <span className=''><SettingsIcon sx={{ color: "gray", fontSize: "20px" }} /></span>
                </div>
            </header>
        </>
    )
}
