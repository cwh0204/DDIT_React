import React from 'react'
import { Link } from 'react-router'

function NotFound() {
    return (
        <div style={{ color: "red" }}>
            <h1>그런건 없는데요</h1>
            <Link to={"/"}>돌아가기</Link>
        </div>
    )
}

export default NotFound