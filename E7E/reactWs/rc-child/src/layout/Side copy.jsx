import React from 'react'
import Sung from '../pages/Sung'
import Sumin from '../pages/Sumin';
import Hung from '../pages/Hung';
import Jiwon from '../pages/Jiwon';

function Side({ setPage }) {
    const handleClick = (e) => {
        const sid = e.target.id;
        switch (sid) {
            case "sumin": {
                setPage(<Sumin />)
                return;
            }
            case "jowon": {
                setPage(<Jiwon />)
                return;
            }
            case "sung": {
                setPage(<Sung />)
                return;
            }
            case "hung": {
                setPage(<Hung />)
                return;
            }
        }
    }
    return (
        <div className='side'>
            <ul>
                <li id="sumin" onClick={handleClick}>수민</li>
                <li id="jiwon" onClick={handleClick}>지원</li>
                <li id="hung" onClick={handleClick}>형수</li>
                <li id="sung" onClick={handleClick}>승희</li>
            </ul>
        </div>
    )
}

export default Side