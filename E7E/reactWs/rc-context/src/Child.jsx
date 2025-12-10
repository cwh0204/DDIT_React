import { useContext } from "react"
import { MemberContext } from "./MemContextProvider";


function Child() {
    const [member, setMember] = useContext(MemberContext);
    return (
        <div>
            <h1>수민 만세</h1>
            {
                member.map((item) => {
                    return <h1 key={item}>{item}</h1>
                })
            }
        </div>
    )
}

export default Child