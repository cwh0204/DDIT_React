import React, { useState } from 'react'
import Hero from './Hero'

const initHeros = [
    {hid:"h1",name:"수민",power:"무덤덤",weapon:"메롱"},
    {hid:"h2",name:"지원",power:"성실함",weapon:"안경"},
    {hid:"h3",name:"형수",power:"예의",weapon:"인사"},
    {hid:"h4",name:"승희",power:"강박",weapon:"오타"}
]


function HeroList() {
    const [open,setOpen] = useState(false);
    const [name, setName] = useState("");
    const [power, setPower] = useState("");
    const [weapon, setWeapon] = useState("");
    const [hid, setHid] = useState("");
    //배열도 상태 변수로 등록을 해줘야 React가 추적하는 상태 변수가 됨
    const[heros, setHeros] = useState(initHeros);
    const handleOpen = () => {
        //버튼 누르면 토글 되도록 해봅니다.
        setOpen(!open);
    }
    const nameChg = (e) =>{
        console.log(e.target.value);
        setName(e.target.value);
    }
    const powerChg = (e) =>{
        setPower(e.target.value);
    }
    const weaponChg = (e) =>{
        setWeapon(e.target.value);
    }
    const hidChg = (e) =>{
        setHid(e.target.value);
    }
    const addHero = (e) => {
        const newHero = {
            hid,
            name,
            power,
            weapon
        }
        // 현재 맨 아래 추가되는데 이걸 위에 추가되도록 하시오

        // const newArr = [newHero, ...heros];
        const newArr = [...heros , newHero].reverse();
        setHeros(newArr); // 추가
        //기억 객체인 경우 이전과 같은 객체가 오면 React가 내용이 바뀌었어도 같은 걸로 인식
        //곧 바뀌지 않은 걸로 인식, 이걸 모르고 쓰면 오작동이 발생하게 됨!
    }
    const modHero = () =>{

        //이걸 활용하면
        // const updHero = {
        //     hid,
        //     name,
        //     power,
        //     weapon
        // }

        const newArr = heros.map((hero) => {
            if(hero.hid === hid){
                return {...hero,name,power,weapon}
                // return updHero;

            }
            return hero; // 해당 안되는건 그냥 원래 값 그대로
        });
        setHeros(newArr);
    }

    const scrHero = () =>{
        const newArr = heros.filter((hero)=>{
            // if(hero.hid === hid)return true;
            // return false;
            if(hero.name === name)return true;
            return false;
        })

        setHeros(newArr);
    }

    const sortHero = () => {
        // sort는 새 배열을 return 하지 않음
        const sortedGeros = [...heros];
        sortedGeros.sort((a,b) => {
            if(a.name > b.name) return 1;
            else return -1;
        });
        setHeros(sortedGeros);
    }
    const delHero = (hid) => {
        setHeros(heros.filter(hero => hero.hid !== hid)); // hid가 일치하지 않는 것만 담은 새배열
    }
  return (
    <div>
        <div style={{display:open?"block" : "none", border:"2px solid blue" ,marginBottom:"10px"}}>
            id <input type="text" value={hid} onChange={hidChg}/><br/>
            이름 <input type="text" value={name} onChange={nameChg}/><br/>
            파워 <input type="text" value={power} onChange={powerChg}/><br/>
            무기 <input type="text" value={weapon} onChange={weaponChg}/><br/>
            <button onClick={addHero}>새 히어로 등록</button>
            <button onClick={modHero}>히어로 수정</button>
            <button onClick={scrHero}>히어로 검색</button>
            <button onClick={delHero}>히어로 삭제</button>
            <button onClick={sortHero}>히어로 이름순 정렬</button>
        </div>
        <button onClick={handleOpen}>관리보드</button>
        <h3>나의 히어로스</h3>
        {
            heros.map((hero,idx) => {
                return <Hero 
                    key={hero.hid}
                    {...hero}
                    delHero = {delHero}
                />
            })
        }
    </div>
    )
    
}


export default HeroList