import { useState } from 'react'
import { ToastContainer, toast, Bounce } from 'react-toastify'
import Link from './Link-understand';
import Route from './Route-nuderstand';

function App() {

  const handleCheck = () => {
    //이동 없이 url만 바꾸기
    //실제 서버에 요청없이 url만 바꾸는 사기
    console.log("현재 주소:", location.href);
    console.log("현재 path", location.pathname);

    // 이해만 하면 됨, 보통 이런 종유의 라이브러리를 만드는 회사에 가지 않는 이상
    // 거의 직접 쓸 일은 없음
    history.pushState(null, null, "sumin"); // 눈 속임, 실제 네트워크 요청은 없음!
  };

  const jcCheck = (e) => {
    //실제 네트워크 요청이 발생하면 안됨! 낭비, SPA 의미가 없어져 버림
    e.preventDefault();
    history.pushState(null, null, "jongchang");
  }

  return (
    <>
      <h1>React Router</h1>
      <Link to={"sumin"}>수민</Link><br />
      <Link to={"hungsu"}>형수</Link><br />
      <Link to={"sunghee"}>승희</Link><br />
      <a href='/jongchang' onClick={jcCheck}>종창</a>
      <br />
      <button onClick={handleCheck}>체크</button>
      <Route path={"/sumin"} element={<h1>난 수민</h1>}></Route>
      <Route path={"/hungsu"} element={<h1>난 형수</h1>}></Route>
      <Route path={"/sunghee"} element={<h1>난 승희</h1>}></Route>
    </>
  )
}

export default App
