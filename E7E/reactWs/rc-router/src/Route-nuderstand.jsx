import React, { useEffect, useState } from 'react'

function Route({ path, element }) {
    const [curPath, setPath] = useState(location.pathname);
    console.log("현재 path", curPath);

    const chgPath = () => {
        setPath(location.pathname);
    }
    useEffect(() => {
        window.addEventListener("navi", chgPath);
    }, []);
    return (
        <div>
            {
                curPath === path ? element : null
            }
        </div>
    )
}

export default Route