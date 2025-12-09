import { Drill, HardHat, UserRoundX } from 'lucide-react'
import React, { useState } from 'react'

function Member({ id, name, age }) {
    const jsonMembers = "http://localhost:9999/members";
    const [again, setAgain] = useState(true);
    const handleX = () => {
        fetch(jsonMembers + `/${id}`, {
            method: "DELETE"
        }).then((data) => {
            setAgain(!again);
        })
    }

    return (
        <div style={{ border: "1px solid blue" }}>
            <h3>{name}</h3>
            <h5>{age < 30 ? <Drill color='red' /> : "음.."}<HardHat /> {age}</h5>
            <h5>{id}</h5>
            <button onClick={handleX}><UserRoundX color='red' size={50} />날 지우기</button>
        </div>
    )
}

export default Member