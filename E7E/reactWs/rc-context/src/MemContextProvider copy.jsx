import React, { createContext, useState } from 'react'
/* 
    강요는 아닌데 보통 이렇게 Provider 패턴으로 만들어서 많이 사용
*/
export const MemberContext = createContext();
function MemContextProvider({ children }) {
    const [member, setMember] = useState([]);

    return (
        <MemberContext value={[member, setMember]}>
            {children}
        </MemberContext>
    )
}

export default MemContextProvider