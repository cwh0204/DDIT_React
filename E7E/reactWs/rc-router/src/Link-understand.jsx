import React from 'react'
//내부 url 이동에만, 실제 네트워크 요청이 가지 않아서 서버 부하를 줄이고 있음
function Link({ to, children }) {

    const handleClick = (e) => {
        // 이해만 하면 됨, 
        e.preventDefault();
        history.pushState(null, null, to);

        //다른 곳에서 알수 있도록 강제 이벤트 발생
        const naviEvent = new PopStateEvent("navi");
        window.dispatchEvent(naviEvent);

    }

    return (
        <>
            <a href={to} onClick={handleClick}>{children}</a>
        </>
    )
}

export default Link