import React from "react";
import Friend from "./Friend";

function App() {

  //props를 이용해서 자식에게 부모의 함수를 넘겨 줌
  const testClick = () => {
    alert("나 눌렀니");
  };

  return (
    <> 
      {/* <React.Fragment> */}
      <h1>이제 시작이야</h1>
      <Friend name={"형수"} age={30} alias={"예의바름"} merong={testClick}/>
      <Friend name={"종창"} age={100} alias={"안친하고싶음"} />
      <Friend />
    </>
  );
}

export default App;
