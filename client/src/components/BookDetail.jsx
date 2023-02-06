import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookAction } from "../redux/actions/bookAction";
import { useParams } from "react-router-dom"; //url 숫자읽음
import { useSearchParams } from "react-router-dom"; //params를 읽어올것임
import server from "../redux/server";
import axios from "axios";
import Title from "antd/es/skeleton/Title";
import ClipLoader from "react-spinners/ClipLoader";
import BeatLoader from "react-spinners/BeatLoader";
import { Container } from "react-bootstrap";

export default function BookDetail() {
  const dispatch = useDispatch();
  const { itemDetail, loading } = useSelector((state) => state.book);

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
  useEffect(() => {
    dispatch(bookAction.getBooks(isbn));
    // getDetail();
  }, []);
  if (loading) {
    return (
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
        }}
      >
        <BeatLoader
          color="green"
          loading={loading}
          size={15}
          margin={2}
          aria-label="Loading Spinner"
        />
      </div>
    );
  }
  console.log("ddddddddddddd", itemDetail);

  return (
    <div>
      <Container style={{ width: "60%" }}>
        <div className="detailHeader">
          <h1>{itemDetail !== undefined && itemDetail[0].title}</h1>
        </div>
        <div className="detailWrap">
          <div className="detailSidemenu">
            <img src={itemDetail !== undefined && itemDetail[0].cover} />
          </div>
          <div className="detailContent">
            <div> {itemDetail !== undefined && itemDetail[0].categoryName}</div>
            <br />
            <div>저자: {itemDetail !== undefined && itemDetail[0].author}</div>
            <div>
              발행일: {itemDetail !== undefined && itemDetail[0].pubDate}
            </div>
            <div>
              정가: {itemDetail !== undefined && itemDetail[0].priceStandard}원
            </div>
          </div>
        </div>

        <div className="detailFooter">
          {" "}
          <p>{itemDetail !== undefined && itemDetail[0].description}</p>
        </div>
      </Container>
    </div>
  );
}
