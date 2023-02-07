const { User } = require("../models");
const axios = require("axios");

exports.connection = async (req, res) => {
  res.send("연결");
};

const api = axios.create({
  baseURL: "http://www.aladin.co.kr/ttb/api",
  // baseURL: "/api",
  // baseURL: process.env.REACT_APP_ALADIN_HOST,
  //   timeout: 1000,
  headers: { "Content-type": "application/json" },
});
const API_KEY = process.env.REACT_APP_API_KEY;
exports.get_aladin = async (req, res) => {
  const itemListApi = api.get(
    `ItemList.aspx?ttbkey=${API_KEY}&QueryType=ItemNewAll&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101`
  );

  const itemNewSpecialApi = api.get(
    `ItemList.aspx?ttbkey=${API_KEY}&QueryType=ItemNewSpecial&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101`
  );

  const bestSellerApi = api.get(
    `ItemList.aspx?ttbkey=${API_KEY}&QueryType=Bestseller&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101`
  );
  const itemDetailApi = api.get(
    `ItemLookUp.aspx?ttbkey=${API_KEY}&itemIdType=ISBN&Cover=Big&ItemId=${req.query.isbn}&output=js&Version=20131101`
  );
  const bookSearchApi = api.get(
    `ItemSearch.aspx?ttbkey=${API_KEY}&Query=${req.query.isbn}&QueryType=Title&MaxResults=10&start=1&SearchTarget=Book&output=js&Version=20131101&OptResult=Toc,Story,fulldescription`
  );

  const [itemList, itemNewSpecial, bestSeller, itemDetail, bookSearch] =
    await Promise.all([
      itemListApi,
      itemNewSpecialApi,
      bestSellerApi,
      itemDetailApi,
      bookSearchApi,
    ]);
  const result = {
    itemList: itemList.data,
    itemNewSpecial: itemNewSpecial.data,
    bestSeller: bestSeller.data,
    itemDetail: itemDetail.data.item,
    bookSearch: bookSearch.data,
  };
  res.send(result);
  // res.send();
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
