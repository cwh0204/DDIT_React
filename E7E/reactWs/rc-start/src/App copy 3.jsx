import React, { useEffect, useRef } from "react";
import { useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  const params = new URLSearchParams(location.search);

  const start = useRef(params.get('start') == "" || params.get('start') == null ? "2" : params.get('start'));
  const end = useRef(params.get('end') == "" || params.get('start') == null ? "9" : params.get('end'));

  console.log(start.current);
  console.log(end.current);

  const dans = Array.from({ length: end.current - start.current + 1 }, (_, i) => {
    const numericStart = Number(start.current);
    return numericStart + i;
  });
  console.log(dans);
  const numbers = Array.from({ length: 9 }, (_, i) => i + 1);

  return (
    <>
      <form>
        <input type="number" name="start" min={1} max={9}></input>
        <input type="number" name="end" min={1} max={9}></input>
        <button>=</button> <br />
        <table className="gugudan-table">
          <tbody>
            {dans.map(dan => (
              <tr key={dan}>
                <th>{dan}단</th>
                {numbers.map(num => (
                  <td key={`${dan}-${num}`}>
                    {dan}*{num}={dan * num}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </form >
    </>
  );
}

export default App;