//쉬운데 초기세팅이 필요함!
//컴포넌트 구조가 깊어지면(단계가 많이지면) Props Drilling으로 전달하는 것은 또다른 문제를
//일으켜서 상태관리를 편하게 하도록 만들어진 API=>Context API => Redux (프로젝트 규모가 아주 커지면 사용)
//context는 필요한 수 만큼 만들어도 상관없음
//.Provider 쓰는 패턴은 18버젼까지, 19에서 개선되서. Provider를 생략해도 됨!
import { createContext } from 'react'
import Parent from './Parent';
import MemContextProvider from './MemContextProvider';

function App() {

  return (
    <>
      <h1>Context API 사용</h1>
      <MemContextProvider>
        <Parent />
      </MemContextProvider>
    </>
  )
}

export default App
