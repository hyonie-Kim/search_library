const express = require("express");
const path = require("path");
const axios = require("axios");
const dotenv = require("dotenv");
dotenv.config();
const port = process.env.PORT;
const cors = require("cors");

const app = express();

// 미들웨어 : HTML, CSS, JS, IMG 파일들이 담긴 곳 명시
// express.static을 쓰면 특정 폴더안의 파일들을 static 파일로 클라이언트에게 잘보내줄수있다.
// 그럼 build폴더 안의 css js img 파일들도 잘 사용할 수 있다.
// app.use(express.static(path.join(__dirname, "public")));

// express bodyParsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// cors 허용
app.use(cors());
// app.use(cors({ origin: true, credentials: true }));
let corsOptions = {
  origin: "http://localhost:3000",
  credentials: true,
};
app.use(cors(corsOptions));

// app.get("/", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/index.html"));
//   // res.send("Server Response Success");
// });
// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "./public/index.html"));
// });

// let id = 2;
// const todoList = [{ id: 1, text: "할일1", done: false }];
// // app.get("/", (req, res) => {
// //   res.send("안녕!!");
// // });
// app.get("/", (req, res) => {
//   res.json(todoList);
// });

// app.post("/", (req, res) => {
//   const { text, done } = req.body;
//   todoList.push({
//     id: id++,
//     text,
//     done,
//   });
//   return res.send("성공");
// });

// 방법1
app.get("/api", async (req, res) => {
  res.send("연결");
});

app.get("/kk", async (req, res) => {
  let url = `http://www.aladin.co.kr/ttb/api/ItemLookUp.aspx?ttbkey=${API_KEY}&itemIdType=ISBN&ItemId=${itemId}&output=js&Version=20131101`;
  await fetch(url);
  let data = await res.json();
  console.log(data);
  res.send("dddddddddddd");
});

app.get("/kkk", async (req, res) => {
  res.send("보냇ㅇㅇㅇ");
});
// 방법2
// app.get("/", (req, res) => {
//   res.json(corsOptions);
// });

app.listen(port, () => {
  console.log(`백엔드 서버 작동중: http://localhost:${port}`);
});
