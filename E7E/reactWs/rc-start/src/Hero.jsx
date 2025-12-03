import React, { useState } from 'react'

const avaURL = "https://api.dicebear.com/9.x/adventurer/svg?seed=";

function Hero({name,power,weapon,hid,delHero}) {
  const[open, setOpen] = useState(true);
  
  const handleClick = () => {
    //부모로 부터 heros에서 날 지우는 함수를 넘겨 받아서 그걸 실행해야 함
    //어제 Counter에서 sum을 처리한 방식과 같음
    //React 처럼 컴포넌트 기반 프로그램에선 이런 일을 잘 처리해야 함!
    //자식이 부모에게서 넘겨받은 함수 => 곧 이것도 콜백한수가 됨, 부모쪽에 작업 요청 , 참조!!
    delHero(hid);
    // setOpen(!open);
  }
  return (
    <div style={{border:"3px groove gold",display:open?"block" : "none"}}>
        <div style={{display : "inline-block",width: "150px",height:"100px"}}>
          <img src={`${avaURL}${name}`} alt="" />
        </div>
        <div style={{display : "inline-block"}}>
          <h1>이름 : {name}</h1>
          <h2>능력 : {power}</h2>
          <h2>무기 : {weapon}</h2>
          <h1>고유코드 : {hid}</h1>
        </div>
        {/* {Children} */}
        <div style={{display : "inline-block"}}>
          <button style={{fontSize:"1.5em",color:"red", marginLeft:"30px"}} onClick={handleClick}>날 지워줘(x)</button>
        </div>
    </div>
  )
}

export default Hero