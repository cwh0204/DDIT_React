import Test from "./Test";

function App() {
  const testClick = () => {
    console.log("테스트");
  }
  return (
    <>
      <Test name = {"테스트"} age={23} alias={"취미"} fuct = {testClick}/>
      <Test/>
      <Test/>
    </>
  )
}

export default App
