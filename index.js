
const express = require('express');
//import express from "express"
// express 모듈을 불러와 express 변수에 담습니다.

const app = express();
// express 모듈을 호출(실행)하여 app 객체 생성.

const PORT = 3000;
// 사용할 포트 번호.

// const home = (req, res) => {
//     res.send(`Welcome to my Home!`);
// }
// 핸들러 함수 home 정의

// const profile = (req, res) => {
//     res.send(`Hello, my name is Summer`);
// }
// 핸들러 함수 profile 정의

//app.get('/', home);
// 서버의 루트 경로 접속 시 'GET' 방식으로 서버 요청 처리.
// home 핸들러 함수가 실행되면서 'Welcome to my Home!' 텍스트 응답.

// app.get('/profile', profile);
// localhost:3000/profile 접속 시 profile 핸들러 함수 실행.
// 'Hello, my name is Summer' 응답.
// 요청 처리 방식은 'GET'

//app.use('/Portfolio', express.static(__dirname + '/heekyung/Portfolio'));
//app.use(express.static(path.join(__dirname,'public')));
app.use('/public', express.static(__dirname + '/public'));

//Portfolio 폴더 내 index.html 파일 호출하기
app.get('/', function (req, res) {
    //res.send('Hello World!');
    res.sendFile(__dirname + '/Portfolio/index.html');
 });

//  app.get('/project01', function (req, res) {
//     res.sendFile(__dirname + '/Portfolio/project01.html');
//  });


const Listening = () => {
    console.log(`Listening on: 
    http://localhost:${PORT}`);
}
// 서버 연결 시 실행되는 콜백함수.
// 서버가 연결되면 콘솔창에 위 메세지가 뜹니다.

app.listen(PORT, Listening);



