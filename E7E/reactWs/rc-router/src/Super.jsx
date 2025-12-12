import React from 'react'
import { Outlet } from 'react-router'

function Super() {
    return (
        <div>
            <h1>난 슈퍼맨이야</h1>
            <div style={{ border: "1px soled red" }}>
                <Outlet />
            </div>
        </div>
    )
}

export default Super