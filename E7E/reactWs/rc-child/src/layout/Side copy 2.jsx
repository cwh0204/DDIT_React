import React from 'react'
import Sung from '../pages/Sung'
import Sumin from '../pages/Sumin';
import Hung from '../pages/Hung';
import Jiwon from '../pages/Jiwon';

function Side({ setPage }) {
    function handleClick(sid) {
        switch (sid) {
            case "sumin": {
                setPage(<Sumin />)
                return;
            }
            case "jiwon": {
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
                <li id="sumin" onClick={() => { handleClick("sumin") }}>수민</li>
                <li id="sumin" onClick={() => { handleClick("jiwon") }}>지원</li>
                <li id="sumin" onClick={() => { handleClick("hung") }}>형수</li>
                <li id="sumin" onClick={() => { handleClick("sung") }}>승희</li>
            </ul>
        </div>
    )
}

export default Side