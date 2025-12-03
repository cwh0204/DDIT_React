import React, { Children } from 'react'

const avaURL = "https://api.dicebear.com/9.x/adventurer/svg?seed=";

function Hero({name,power,weapon,hid}) {
  
  return (
    <div style={{border:"3px groove gold"}}>
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
    </div>
  )
}

export default Hero