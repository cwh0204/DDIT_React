import React, { createContext, useReducer, useState } from 'react'
/* 
    강요는 아닌데 보통 이렇게 Provider 패턴으로 만들어서 많이 사용
*/

const memReducer = (member, action) => {
    switch (action.type) {
        case "getList": {
            return action.payload;
        }
        case "insMember": {
            return [action.payload, ...member];
        }
        case "updMember": {
            const newList = member.map((mem) => {
                if (mem.id == action.payload.id) return action.payload
                else return mem;
            });
            return newList;
        }
        case "delMember": {
            const newList = member.filter((mem) => {
                return mem.id !== action.payload.id;
            });
            return newList;
        }
        default:
            break;
    }
}

export const MemberContext = createContext();
function MemContextProvider({ children }) {
    // const [member, setMember] = useState([]);
    const [member, memDispatch] = useReducer(memReducer, []);
    return (
        <MemberContext value={{ member, memDispatch }}>
            {children}
        </MemberContext>
    )
}

export default MemContextProvider