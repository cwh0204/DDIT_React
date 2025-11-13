//몰라도 됨 여러분은 스프링 배우므로, 그거에 해당하는 js계의 mvc 프레임워크
// type commonjs는 node에서만 사용하는 방식 require를 사용, module로 지정
import express from 'express';
import serveIndex from 'serve-index';
 
const serverPort = 8272;
 
const app = express();
 
// 미들웨어라고 부름, 잘 몰라도 됨  localhost:8272/aaa.html => ./sumin/aaa.html
// serve-index는 디렉토리의 모든 파일을 리스트(멋진말로 indexing) 해주는 라이브러리()
app.use('/',express.static("./sumin"),serveIndex('./sumin',{icons:true}));

app.listen(serverPort,()=>{
    console.log(`수민이 달린다 on ${serverPort}`);
});