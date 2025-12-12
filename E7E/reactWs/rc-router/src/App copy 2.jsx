/*
  Router 쓰는 스타일이 크게 2가지 인데
*/

import { BrowserRouter, Link, Route, Routes } from "react-router";
import Genius from "./Genius";
import NotFound from "./NotFound";
import Sumin from "./Sumin";

function App() {

  return (
    <>
      <h1>React Router 필수</h1>
      <h1>모르면 프로젝트 못함</h1>
      <BrowserRouter>
        <Link to={"/sumin"}>수민</Link> <br />
        <Link to={"/wonhyo"}>원효</Link> <br />
        <Link to={"/sunhe"}>선회</Link> <br />
        <hr />
        <Routes>
          <Route path="/" element={<Genius name={"홈"} special={"그냥"} />} />
          <Route path="/sumin/*" element={<Sumin />} />
          <Route path="/sumin" element={<Genius name={"수민"} special={"무뚝"} />} />
          <Route path="/wonhyo" element={<Genius name={"원효"} special={"자바"} />} />
          <Route path="/sunhe" element={<Genius name={"선회"} special={"선해"} />} />
          <Route path="*" element={<NotFound></NotFound>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App
