import { useContext } from "react"
import { JiwonContext } from "../context/JiwonContext"
import { Link, NavLink, useNavigate } from "react-router";

function SideBar() {
    const [members, setMembers] = useContext(JiwonContext);

    const navigate = useNavigate();
    const handleClick = () => {
        // 동적 uri이동
        // navigate 함수는 두번째 매개변수 {state} 를 이용하여 추가적으로 필요한 내용들을
        // 쉽게 전달할 수 있다. 아걸 사용할 지 안할지는 선택!
        navigate("/403/10?hero=수민&weapon=내공", { state: { myEnemy: "종창", weakPoint: "유식" } });
    };

    return (
        <div className="sidebar">
            <ul>
                {
                    members.map((member) => <li key={member.mid}><NavLink
                        style={({ isActive }) => ({
                            color: isActive ? "blue" : "black",
                            fontWeight: isActive ? "bolder" : "normal"
                        })}
                        to={`/402/${member.mid}`}
                    >{member.name}</NavLink></li>)
                }
                <li>
                    <button onClick={handleClick}>지원버튼</button>
                </li>
            </ul>
        </div >
    )
}

export default SideBar