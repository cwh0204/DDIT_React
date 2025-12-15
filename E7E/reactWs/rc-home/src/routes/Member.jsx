import React, { useContext } from 'react'
import { useLocation, useParams, useSearchParams } from 'react-router'
import { JiwonContext } from '../context/JiwonContext';

function Member() {
    const { mid, ban } = useParams();
    const [searchParams, setSearchParams] = useSearchParams(); // useState 와 사용법이 똑같은데, queryString에 대응

    // navigate 함수 두번째 매개변수({state} 형식)로 보낸 데이터 꺼내기

    const location = useLocation();

    const state = location.state;

    console.log("state", location.state);

    console.log(searchParams.get("hero"));
    console.log(searchParams.get("weapon"));

    const hero = searchParams.get("hero");
    const weapon = searchParams.get("weapon");

    const [members] = useContext(JiwonContext);
    // const schMembers = members.filter((mamber) => mamber.mid == mid)[0];
    //fulter는 기본적으로 여러개 찾을 때 사용, 일반적으로 1개 찾을 때 써도 문제 없음
    //정말 배열 사이즈가 크고 1개만 찾으면 되는 상황에서 find find는 찾으면 loop를 멈춤(break);

    const jiwonSleepy = () => {
        setSearchParams({
            hero: "지원",
            weapon: "졸음",
        });
    };

    const schMembers = members.find((mamber) => mamber.mid == mid);
    return (
        <div style={{ display: "flex", justifyContent: "center", alignItems: "center", flexDirection: "column", height: "100%" }}>
            <h1>{ban}호 {mid}번</h1>
            <h1>{schMembers.name}</h1>
            <h1>{schMembers.feature}</h1>
            {
                !hero ? null : <h1>{hero}</h1>
            }
            {
                !weapon ? null : <h1>{weapon}</h1>
            }
            {
                state?.myEnemy
            }
            <button onClick={jiwonSleepy}>체크</button>
        </div>
    )
}

export default Member