//마지막으로 map 한번더

const testArr = ["수민", "지원", "선회"];

const abc = Array.from({ length: testArr.length }, (_, inx) => {
    console.log(inx);
    inx = testArr[inx]
    console.log(inx);
    return inx;
})

console.log(abc);