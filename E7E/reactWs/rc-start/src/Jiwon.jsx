//여기서 생각!!, 스크립트 안에 html을 쓸 수 있다
//실제 자바스크립트에서는 쓸 수 없음
//return은 꼭 1개 여야만 함
//jsx => Javascript Syntax extension 자바스크립트 문법 확장
//babel.js에 의해서 react가 DOM을 생성하는데 필요한 문자열로 변환되고
//React.createElement에 의해서 실제 DOM이 만들어짐
//return 뒤에 나오는 html 태그는 다 가짜임
//React에서 실제 html 태그와 유사하게 다 미리 만들어 놓았음
//왜 이렇게 하냐면 개발자들이 html 문자열 더하기 하느라 고생이 많았음
//return 내용이 화면에 보여야 할 내용이라면 확장자를 .jsx를 쓴다.
//함수 컴포넌트 => function Component 라고 부름
function Jiwon() {
  return <h1>흠치뿡</h1>;
}
export default Jiwon;
