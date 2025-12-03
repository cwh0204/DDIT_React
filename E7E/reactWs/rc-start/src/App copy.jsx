import React,{useRef,useEffect,useState} from "react";
import IdolList from "./IdolList";

function App() {

  const ref = useRef(null);

  const [count, setCount] = useState(0);

  useEffect(() => {
    ref.current.focus();
    console.log(ref.current);
  },[]);

  useEffect(() => {
    const test = document.querySelector("#test");
    test.innerHTML = count;
  },[count]);

  const handleClick = () => {
    setCount(count + 1);
  };

  return (
    <> 
      <button onClick={handleClick}>버튼 클릭 + 1</button>
      <input type="text" ref={ref}/>
      <div id = "test"></div>
      {/* <React.Fragment> */}
      {/* 실제 이렇게 처리하는 것은 좋은 방법이 아님, 이것은 하드코딩!
      <Idol name={"지원"} song={"Null 지원할게"}/>
      <Idol name={"수민"} song={"Null 포인터 Exception"}/> */}
    </>
  );
}

export default App;
