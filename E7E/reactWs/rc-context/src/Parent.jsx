import React, { useContext, useEffect, useRef } from 'react'
import Child from './Child'
import { MemberContext } from './MemContextProvider'
import axios from 'axios';

const memberURL = "http://localhost:9999/members";

function Parent() {
    const { member, memDispatch } = useContext(MemberContext);
    const formRef = useRef(null);

    // Side Effect(부 작용) 제어
    useEffect(() => {
        axios.get(memberURL).then(resp => {
            memDispatch({ type: "getList", payload: resp.data });
        })
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault();
        const formData = new FormData(formRef.current);
        // FormData는 매개변수 form객체를 넘겨주면, 알아서 입력태그 값들을 담아버림
        const nweMember = {
            id: (Math.ceil(Math.random() * 999999) + 10) + "",
            name: formData.get("name"),
            age: formData.get("age"),
        };

        console.log("눈으로 확인", nweMember);

        axios.post(memberURL, nweMember).then((resp) => {
            console.log(resp.data);
            memDispatch({ type: "insMember", payload: resp.data });
        });

        formRef.current.id.value = "";
        formRef.current.name.value = "";
        formRef.current.age.value = "";
    };

    const handleUpdate = () => {
        const formData = new FormData(formRef.current);
        // FormData는 매개변수 form객체를 넘겨주면, 알아서 입력태그 값들을 담아버림
        const mId = formData.get("id"); // URL에 따로 추가해주려고
        const updMember = {
            name: formData.get("name"),
            age: formData.get("age"),
        };

        axios.put(`${memberURL}/${mId}`, updMember).then((resp) => {
            memDispatch({ type: "updMember", payload: resp.data });
        });
    }
    const handleDelete = () => {
        const formData = new FormData(formRef.current);
        // FormData는 매개변수 form객체를 넘겨주면, 알아서 입력태그 값들을 담아버림
        const mId = formData.get("id"); // URL에 따로 추가해주려고
        axios.delete(`${memberURL}/${mId}`).then((resp) => {

            memDispatch({ type: "delMember", payload: resp.data });
        });
    }
    return (
        <div><h1>지금 하는 방식이 가장 많이 나타나는 패턴</h1>
            <div>
                <form ref={formRef} onSubmit={handleSubmit}>
                    아이디 <input type="text" name="id" defaultValue={""} /><br />
                    이름 <input type="text" name="name" defaultValue={""} /><br />
                    나이 <input type="text" name="age" defaultValue={""} /><br />
                    <button>등록</button>
                    <button type='button' onClick={handleUpdate}>수정</button>
                    <button type='button' onClick={handleDelete}>삭제</button>
                </form>
            </div>
            {/*             <button onClick={chk}>체크</button> */}
            {
                member.map((item) => {
                    console.log(item);
                    return <div key={item.id} style={{ display: "inline-block", width: 200, textAlign: "center", border: "1px solid red" }}>
                        <h3>{item.name}</h3>
                        <h3>{item.age}</h3>
                        <h3>{item.id}</h3>
                    </div>
                })
            }
        </div>
    )
}

export default Parent