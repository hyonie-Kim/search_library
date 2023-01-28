const express = require("express");
const path = require("path");
const app = express();
const port = 5000;

// 미들웨어 : HTML, CSS, JS, IMG 파일들이 담긴 곳 명시
// express.static을 쓰면 특정 폴더안의 파일들을 static 파일로 클라이언트에게 잘보내줄수있다.
// 그럼 build폴더 안의 css js img 파일들도 잘 사용할 수 있다.
app.use(express.static(path.join(__dirname, "public")));
app.use(express.json());
var cors = require("cors");
app.use(cors());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
  // res.send("Server Response Success");
});
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "./public/index.html"));
});

app.listen(port, () => {
  console.log(`Server On : http://localhost:${port}`);
});
