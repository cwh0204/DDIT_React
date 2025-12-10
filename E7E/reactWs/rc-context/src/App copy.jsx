//쉬운데 초기세팅이 필요함!
//컴포넌트 구조가 깊어지면(단계가 많이지면) Props Drilling으로 전달하는 것은 또다른 문제를
//일으켜서 상태관리를 편하게 하도록 만들어진 API=>Context API => Redux (프로젝트 규모가 아주 커지면 사용)
//context는 필요한 수 만큼 만들어도 상관없음
//.Provider 쓰는 패턴은 18버젼까지, 19에서 개선되서. Provider를 생략해도 됨!
import { createContext } from 'react'
import Parent from './Parent';

export const SmContext = createContext(); // 생성시 초기값 주는 건 큰 의미가 없음
export const ShContext = createContext();
function App() {

  return (
    <>
      <h1>Context API</h1>
      <ShContext value={["수민", "지원", "선회", "현규"]}>
        <SmContext value={{ name: "수민", cond: "컨디션" }}>
          <Parent />
        </SmContext>
      </ShContext>
    </>
  )
}

export default App
