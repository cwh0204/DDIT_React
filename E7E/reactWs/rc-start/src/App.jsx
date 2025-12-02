import React,{useState,useEffect} from "react";
import IdolList from "./IdolList";

function App() {
  //props를 이용해서 자식에게 부모의 함수를 넘겨 줌

  const[postData, setPostData] = useState("로딩 중...");
  const[userId, setUserId] = useState(1);

  let timer = () => {
      setTimeout(() => {
        setPostData(`사용자 ${userId}의 최신 포스트 정보입니다. (시간: ${new Date().toLocaleTimeString()})`);
      }, 1000);
  }

  useEffect(() => {
    setPostData("불러오는중..");
    timer();
    return clearTimeout(timer);
  },[userId]);

  const test = () => {
    setUserId(userId + 1);
  }

  return (
    <> 
      <button onClick={test}>버튼 클릭 + 1</button>
      {postData}
      {/* <React.Fragment> */}
      {/* 실제 이렇게 처리하는 것은 좋은 방법이 아님, 이것은 하드코딩!
      <Idol name={"지원"} song={"Null 지원할게"}/>
      <Idol name={"수민"} song={"Null 포인터 Exception"}/> */}
    </>
  );
}

export default App;
