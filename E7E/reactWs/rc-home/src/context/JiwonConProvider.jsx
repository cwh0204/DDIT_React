import { useState } from "react";
import { JiwonContext } from "./JiwonContext"

const initMembers = [
    { mid: 1, name: "수민", feature: "어림예쁨" },
    { mid: 2, name: "지원", feature: "초귀요미" },
    { mid: 3, name: "형수", feature: "형수베어" },
    { mid: 4, name: "승희", feature: "승희님" },
    { mid: 5, name: "선회", feature: "오늘피곤" },
    { mid: 6, name: "현규", feature: "은폐" },
    { mid: 7, name: "종창", feature: "시끌시끌" },
    { mid: 8, name: "원효", feature: "닌자다움" },
    { mid: 9, name: "상철", feature: "외강내유" },
    { mid: 10, name: "현식", feature: "완전닌자" },
];

function JiwonConProvider({ children }) {
    const [members, setMembers] = useState(initMembers);
    return (
        <JiwonContext value={[members, setMembers]}>{children}</JiwonContext>
    )
}

export default JiwonConProvider