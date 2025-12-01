import React from "react";

//관례적으로 매개변수 덩어리로 넘어오는 것을 props 라고 한다

function Friend({ age = 26, name = "지원", alias = "부자", merong}) {
  console.log("체크"); // {name:, age:, alias:}

  return (
    <div style={{ border: "3px solid black" }} onClick={merong}>
      <h1>이름 : {age}</h1>
      <h1>나이 : {name}</h1>
      <h1>별명 : {alias}</h1>
    </div>
  );
}

export default Friend;
