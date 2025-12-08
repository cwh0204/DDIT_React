import { format, differenceInDays } from 'date-fns';
// 날짜 관리에 쓰면 유용한 date=fns
import React, { useState } from 'react'

const intit = new Date();
function EventDay() {
    const [subir, setSubir] = useState(format(intit, "yyyy-mm-dd"));
    const [today, setToday] = useState(format(intit, "yyyy-mm-dd"));

    console.log("체크", subir);
    console.log("체크", today);

    // 날짜 계산 함수도 거의 다 들어있음
    const dayDiff = differenceInDays(subir, today);// 날짜 차이 계산

    const handleSu = (e) => {
        setSubir(e.target.value);
    }

    const handleTo = (e) => {
        setToday(e.target.value);
    }

    return (
        <div>
            <div>
                <label htmlFor='suBir'>수민생일</label>
                <input type='date' id="suBir" value={subir} onChange={handleSu}></input>
            </div>
            <div>
                <label htmlFor='suBir'>오늘</label>
                <input type='date' id="today" value={today} onChange={handleTo}></input>
            </div>
            {
                <h1>D - Day <span style={{ fontWeight: "bolder" }}>{dayDiff} 일</span></h1>
            }
        </div>
    )
}

export default EventDay