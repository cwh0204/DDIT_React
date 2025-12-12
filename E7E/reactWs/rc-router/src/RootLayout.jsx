import React from 'react'
import { Link, NavLink, Outlet, useNavigate } from 'react-router'
function RootLayout() {
    //동적 이동 navigate vs 정적링크 Link

    const navigate = useNavigate();
    const moveBy = (path) => {
        navigate(path);
    };

    const actStyle = ({ isActive }) => (isActive ? { color: "red" } : null);

    return (
        <div>
            <header>
                <nav>
                    {/* style or classname에 현재 active 인지 콜백으로 넘겨줌*/}
                    <NavLink style={actStyle} to="/">홈</NavLink>
                    <br />
                    <NavLink to="/batman">배트맨</NavLink>
                    <br />
                    <NavLink to="/super">슈퍼맨</NavLink>
                    <br />
                    <button onClick={() => moveBy("/super/aa")}>AA</button>
                    <button onClick={() => moveBy("/super/bb")}>BB</button>
                    <button onClick={() => moveBy("/super/cc")}>CC</button>
                </nav>
            </header>
            { /* 자식이 나올 자리를 꼭 지정을 해주어야 함 */}
            <Outlet />
        </div>
    )
}

export default RootLayout