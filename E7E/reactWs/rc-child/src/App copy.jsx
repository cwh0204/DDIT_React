import React, { useRef } from 'react'
import Counter from './components/Counter';
import ReducerTest from './components/ReducerTest';
// useRef => 필수 Hook (보통 DOM 참조에 많이 사용됨)
// state 변수를 value에 연결시키면 controlled 컴포넌트
// 연결시키지 안으면 uncontrolled 컴포넌트라고 부름, 서로 장단점이 있음
//useRef로 돌려받은 값은 객체로 오직 current 속성을 가진다.
function App() {
  // const nameRef = useRef(null); // Re-Randering 과 관계없음, 그저 참조
  // const ageRef = useRef(null);
  // const aliasRef = useRef(null);
  // const formRef = useRef(null);

  // const myInfo = useRef({ name: "원효", alias: "대사" }); // re-rendering 관계없음을 기억

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   console.log("date", nameRef.current.value);
  //   console.log("date", ageRef.current.value);
  //   console.log("date", aliasRef.current.value);

  // }
  // const handleSubmit2 = (e) => {
  //   e.preventDefault();
  //   console.log("date2", formRef.current.name.value);
  //   console.log("date2", formRef.current.age.value);
  //   console.log("date2", formRef.current.alias.value);

  //   myInfo.current.alias = "흠치";
  //   console.log(myInfo.current);

  // }
  return (
    <>
      <h1>상태관리 useReducer</h1>
      <ReducerTest />
      <Counter />
      {
        /* <form>
          이름 <input type="text" ref={nameRef} defaultValue={""} /> <br />
          나이 <input type="text" ref={ageRef} defaultValue={""} /> <br />
          별명 <input type="text" ref={aliasRef} defaultValue={""} /> <br />
          <button onClick={handleSubmit}>전송</button>
        </form>
        <hr />
        <form ref={formRef}>
          이름 <input type="text" name='name' ref={nameRef} defaultValue={""} /> <br />
          나이 <input type="text" name='age' ref={ageRef} defaultValue={""} /> <br />
          별명 <input type="text" name='alias' ref={aliasRef} defaultValue={""} /> <br />
          <button onClick={handleSubmit2}>전송</button>
        </form> */
      }
    </>
  )
}

export default App
