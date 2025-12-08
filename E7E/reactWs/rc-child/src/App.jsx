import React, { useEffect, useRef, useState } from 'react'

/* 
  비동기와 상태변수가 만나면, 추가동작이 발생 이걸 부작용(side Effect)이라 부름
  가끔 설명의 기준이 달라서, 같은 내용인데 다른식으로 느껴지는 경우가 있으니 주의
  Side Effect를 필요한 추가작업으로 해석하는 경우도 있음
  Side Effect의 제어가 필요 => useEffect() 훅 등장!
  이거슨 필수 Hook => React Query(지금은 Tanstack Query)란 걸 사용하면 거의 안쓸수도 있음
 */

const jsonMembers = "http://localhost:9999/members";
function App() {
  const [shPosts, setShPosts] = useState([]);
  const [myMembers, setmyMembers] = useState([]);
  const [toggle, setToggle] = useState(true);

  const getPosts = async () => {
    const response = await fetch(jsonMembers);
    const posts = await response.json();
    setmyMembers(posts);
  }

  useEffect(() => {
    console.log("실행");
    getPosts();
    // fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json()).then(posts => {
    //   // console.log("결과 체크", posts) //결과 체크
    //   setShPosts(posts); // 상태변화
    // });
  }, [toggle])

  //두번째 변수가 아예 없을 때 매번 실행됨 => 이건 쓸모가 없음
  //두번째 변수가 [] 일때 , 딱 한번만 실행됨
  //두번째 변수를 dependencies 라 부름

  // fetch("https://jsonplaceholder.typicode.com/posts").then((response) => response.json()).then(posts => {
  //   // console.log("결과 체크", posts) //결과 체크
  //   setShPosts(posts); // 상태변화
  // });

  const handleBtn = () => {
    setToggle(!toggle);
  }

  return (
    <>
      <h1>useEffect Hook</h1>
      <button onClick={handleBtn}>useEffect 체크</button>
      {
        myMembers.length == 0 ? <h1>로딩중</h1> :
          myMembers.map(post => {
            return <h5 key={post.id}>{post.id}{post.name}</h5>
          })
      }
    </>
  )
}

export default App
