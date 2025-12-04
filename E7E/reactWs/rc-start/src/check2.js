//배열식 접근법(연관배열) => 속성명 동적 할당 가능 => 꼭 알아야 함
//모르면 코드가 길어지고, 길어지면 보기 어렵고 => 보기 어려우면 유지/보수 어렵고 ...혼란!!
//말과 글은 항상 오해의 소지가 있어, 양쪽 사람이 비슷한 공감대가 없으면
//외우는 건 소용없음 => 실제 코드를 가지고 놀아봐야 자기것이 됨! => 연습

const merong = "name";

const testObj = {
    merong: "종창",
    age: 100
}

const testObj2 = {
    [merong]: "수민",
    ["age"]: 20
}

console.log("체크1", testObj);
console.log("체크1", testObj2);
console.log("체크1", testObj2[merong]);
console.log("체크1", testObj.merong);
