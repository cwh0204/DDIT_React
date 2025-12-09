import React from 'react'

function Dan({ sdan }) {

    const onToNine = Array.from({ length: 9 }, (_, i) => i + 1);

    const selDan = onToNine.map((num) => {
        return <div key={sdan * num}> {sdan} * {num} = {sdan * num}</div>
    })

    return (
        <div>
            <h1>{sdan}단 출력 </h1>
            {
                selDan
            }
        </div>
    )
}

export default Dan