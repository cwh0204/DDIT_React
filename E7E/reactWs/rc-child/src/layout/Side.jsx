import React from 'react'
import Sung from '../pages/Sung'
import Sumin from '../pages/Sumin';
import Hung from '../pages/Hung';
import Jiwon from '../pages/Jiwon';

function Side({ setPage }) {
    function handleClick(Sname) {

        setPage(Sname);
    }
    return (
        <div className='side'>
            <ul>
                <li onClick={() => { handleClick(<Sumin />) }}>수민</li>
                <li onClick={() => { handleClick(<Jiwon />) }}>지원</li>
                <li onClick={() => { handleClick(<Hung />) }}>형수</li>
                <li onClick={() => { handleClick(<Sung />) }}>승희</li>
            </ul>
        </div>
    )
}

export default Side