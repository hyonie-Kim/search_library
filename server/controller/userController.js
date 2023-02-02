const { User } = require("../models");

exports.connection = async (req, res) => {
  res.send("연결");
};

// 회원가입
exports.signup = async (req, res) => {
  console.log(req.body);

  let data = {
    name: req.body.name,
    id: req.body.email,
    pw: req.body.password,
  };

  let result = await User.create(data);
  res.send(String(result.id));
};

// 로그인

// router.get("/api", async (req, res) => {
//   res.send("연결");
// });

// router.post("/signup", async (req, res) => {
//   console.log(req.body);
// });
