import React from 'react'
import SideBar from './SideBar'
import { Outlet } from 'react-router';

function RootLayout() {
    console.log("체크 root");
    return (
        <div>
            <div className='header'>
                <h1>402호 천재들</h1>
            </div>
            <div className='main'>
                <SideBar />
                <div className='content'>
                    <Outlet />
                </div>
            </div>
        </div>
    )
}

export default RootLayout