import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookAction } from "../redux/actions/bookAction";
import { useParams } from "react-router-dom"; //url 숫자읽음
import { useSearchParams } from "react-router-dom"; //params를 읽어올것임
import server from "../redux/server";
import axios from "axios";
import Title from "antd/es/skeleton/Title";

export default function BookDetail() {
  const dispatch = useDispatch();
  const { itemDetail } = useSelector((state) => state.book);

  // const [query, setQuery] = useSearchParams();
  // let itemId = query.get("itemId");

  let { isbn } = useParams();

  // const getDetail = (itemId) => {
  //   // server.post("kkk").then((res) => {
  //   //   res.data("dddd", itemId);
  //   // });
  //   server.get(`/kkk?id=${itemId}`);
  //   axios.then((res) => {
  //     console.log(res);
  //   });
  // };
  // const getBooksDetail = async () => {
  //   let url = `http://www.aladin.co.kr/ttb/api/ItemLookUp.aspx?ttbkey=ttblovely2012530900001&itemIdType=ISBN&ItemId=${itemId}&output=js&Version=20131101&
  //   OptResult=reviewList,Story,Toc,categoryIdList,fulldescription`
  //   let response = await fetch(url);
  //   let data = await response.json();
  //   console.log(data);
  // };

  console.log("ddddddddddddd", itemDetail);

  useEffect(() => {
    dispatch(bookAction.getBooks(isbn));
    // getDetail();
  }, []);
  return (
    <div>
      {isbn}

      <h1>{itemDetail[0].title}</h1>
    </div>
  );
}
