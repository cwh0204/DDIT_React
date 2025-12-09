import React, { useEffect, useRef, useState } from "react";
import { useLocation } from 'react-router-dom';

function App() {

  const [dan, setDan] = useState(2);

  const handleDan = (e) => {
    setDan(e.target.value);
  }

  const onToNine = Array.from({ length: 9 }, (_, i) => i + 1);

  const selDan = onToNine.map((num) => {
    return <div key={dan * num}> {dan} * {num} = {dan * num}</div>
  })

  return (
    <>
      <select value={dan} multiple={true} onChange={handleDan}>
        {
          onToNine.map((num) => {
            return <option key={num} value={num}>{num}</option>; // key와 내용을 추가
          })
        }
      </select>
      <h1>{dan}단 출력 </h1>
      {
        selDan
      }
    </>
  );
}

export default App;