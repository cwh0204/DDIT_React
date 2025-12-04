import React,{useRef,useEffect,useState} from "react";
import IdolList from "./IdolList";
import HeroList from "./HeroList";

function App() {

  const initVal = {name:"", age:"",alias:""}
  const[inputs, setInputs] = useState(initVal);

  const handeChg = (e) => {
    console.log("체크",e.target);
    setInputs({...inputs,[e.target.id]:e.target.value});
  }

  const hendleSubmit = (e) => {
    e.preventDefault();
    console.log("데이터",inputs);
  }
  return (
    <> 
      <form>
        이름 <input type="text" value={inputs.name} id="name" onChange={handeChg}/><br/>
        나이 <input type="text" value={inputs.age} id="age" onChange={handeChg}/><br/>
        별명 <input type="text" value={inputs.alias} id="alias" onChange={handeChg}/><br/>
        <button>전송</button>
      </form>
    </>
  );
}

export default App;