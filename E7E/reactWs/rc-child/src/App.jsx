import React, { useEffect, useRef, useState } from 'react'
import Member from './Member';
import { v4 as uuid } from "uuid";
/* 
  비동기와 상태변수가 만나면, 추가동작이 발생 이걸 부작용(side Effect)이라 부름
  가끔 설명의 기준이 달라서, 같은 내용인데 다른식으로 느껴지는 경우가 있으니 주의
  Side Effect를 필요한 추가작업으로 해석하는 경우도 있음
  Side Effect의 제어가 필요 => useEffect() 훅 등장!
  이거슨 필수 Hook => React Query(지금은 Tanstack Query)란 걸 사용하면 거의 안쓸수도 있음
 */

const jsonMembers = "http://localhost:9999/members";
function App() {

  const [myMembers, setmyMembers] = useState([]);
  const [again, setAgain] = useState(true);
  //uncontrolled 방식을 사용할 때는 useRef
  const formRef = useRef();
  const ageRef = useRef();

  const getPosts = async () => {
    const response = await fetch(jsonMembers);
    const posts = await response.json();
    setmyMembers(posts.reverse());
  }

  useEffect(() => {
    console.log("실행");
    getPosts();
    // fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json()).then(posts => {
    //   // console.log("결과 체크", posts) //결과 체크
    //   setShPosts(posts); // 상태변화
    // });
  }, [again])

  //두번째 변수가 아예 없을 때 매번 실행됨 => 이건 쓸모가 없음
  //두번째 변수가 [] 일때 , 딱 한번만 실행됨
  //두번째 변수를 dependencies 라 부름

  // fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json()).then(posts => {
  //   // console.log("결과 체크", posts) //결과 체크
  //   setShPosts(posts); // 상태변화
  // });
  const handleMod = () => {
    const id = formRef.current.id.value;
    const newMembers = JSON.stringify({
      name: formRef.current.name.value,
      age: formRef.current.age.value,
    });
    fetch(jsonMembers + `/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: newMembers,
    }).then((resp) => {
      if (resp.ok) {
        setAgain(!again);
      }
    });
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("name", formRef.current.name.value);
    console.log("age", formRef.current.age.value);
    console.log("id", formRef.current.id.value);

    const newMembers = JSON.stringify({
      name: formRef.current.name.value,
      age: formRef.current.age.value,
      id: uuid(),
    });

    fetch(jsonMembers, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: newMembers,
    }).then((resp) => {
      if (resp.ok) {
        setAgain(!again);
      }
    });
  }

  return (
    <>
      <h1>useEffect Hook</h1>
      <button>useEffect 체크</button>
      <form ref={formRef} onSubmit={handleSubmit}>
        ID <input type="text" name="id" required /> <br />
        이름 <input type="text" name="name" required /> <br />
        나이 <input type="text" name="age" required /> <br />
        <button>등록</button>
        <button type='button' onClick={handleMod}>수정</button>
      </form>
      {
        myMembers.length == 0 ? <h1>로딩중</h1> :
          myMembers.map(post => {
            return <Member key={post.id} {...post} />
          })
      }
    </>
  )
}

export default App
