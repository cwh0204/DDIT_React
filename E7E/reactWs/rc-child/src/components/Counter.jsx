import React, { useReducer } from 'react'
//상태 관리에서 경우의 수(case) 가 없을 때, useReducer를 사용
//사실 useState만으로도 가능하지만, 고급 라이브러리들 중에서 useReducer

//형태를 꽤 많이 사용하고 있어서, 사용형태를 필수적으로 알아둘 필요가 있음
//리듀서는 직접 만들어 줘야 함, 실제 경우의 수를 처리하는 함수로 생각하면 됨!
function countReducer(count, action) {  //매개변수 순서, 앞 상태변수, 뒤 action
    console.log("체크 action", action.type);
    // 관례적 switch문
    switch (action.type) {
        case 'inc1': {
            return count + 1; // return 값이 상태변수 count에 다음 rendering에 반영됨
        }
        case 'dec1': {
            return count - 1;
        }
        case 'inc3': {
            return count + 3;
        }
        case 'dec3': {
            return count - 3;
        }
        default:
            throw new Error("해당 케이스 없잖아");
            break;
    }
}
function Counter() {
    // 어렵다 보다 사용법이 낯설수 있음. 그저 몇번 연습하면 익숙해짐!
    // 연습 안하면 바로 잊어버림!

    const [count, countDispatch] = useReducer(countReducer, 0);

    const handleClick = (cmd) => {
        console.log("체크", cmd);
        countDispatch({ type: cmd }); // 리듀서를 불러줌
    }



    return (
        <div>
            <h1>카운터 {count}</h1>
            <button onClick={() => handleClick("inc1")}>증가</button>
            <button onClick={() => handleClick("dec1")}>감소</button>
            <button onClick={() => handleClick("inc3")}>증가(+3)</button>
            <button onClick={() => handleClick("dec3")}>감소(-3)</button>
        </div>
    )
}

export default Counter