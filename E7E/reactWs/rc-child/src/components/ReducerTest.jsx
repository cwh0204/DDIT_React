import React, { useReducer } from 'react'

const myHero = {
    name: "지원",
    age: 26,
    alias: "화이팅"
}

function heroReducer(hero, action) {
    switch (action.type) {
        case 'nameChg': {
            return { ...hero, name: action.payLoad }
        }
        case 'ageChg': {
            return { ...hero, age: action.payLoad }
        }
        case 'aliasChg': {
            return { ...hero, alias: action.payLoad }
        }
        case 'allChg': {
            return { ...hero, alias: action.payLoad }
        }
        default:
            break;
    }
}

function ReducerTest() {
    // 예정 useState 썻던걸 useReducer만 써보자
    const [hero, heroDispatch] = useReducer(heroReducer, myHero);

    const handleSubmit = (caseName) => {
        e.preventDefult();
        console.log("최종 hero", hero);
    }

    const handleChg = (caseName, e) => {

        heroDispatch({
            type: caseName,
            payLoad: e.target.value
        }); // 이거 처리, 케이스별 명령어 지정 필요, nameChg, ageChg, aliasChg
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                이름 <input type="text" name={"name"} value={hero.name} onChange={(e) => handleChg("nameChg", e)} /><br />
                나이 <input type="text" name={"age"} value={hero.age} onChange={(e) => handleChg("ageChg", e)} /><br />
                별명 <input type="text" name={"alias"} value={hero.alias} onChange={(e) => handleChg("aliasChg", e)} /><br />
                <button>전송</button>
            </form>
        </div>
    )
}

export default ReducerTest