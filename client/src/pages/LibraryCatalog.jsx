import React from "react";
import { bookAction } from "../redux/actions/bookAction";
import { useDispatch, useSelector } from "react-redux"; //액션을 콜하려면 디스패치가 필요함
import { useEffect } from "react";
import BookCard from "../components/BookCard";
import { Col, Container, Row } from "react-bootstrap";
import BooksSlide from "../components/BooksSlide";
import BeatLoader from "react-spinners/BeatLoader";
import { css } from "@emotion/react";
import { BsFillBookmarkFill } from "react-icons/bs";

const override = css`
  display: block;
`;

export default function LibraryCatalog() {
  const dispatch = useDispatch();
  const { itemList, itemNewSpecial, bestSeller, loading } = useSelector(
    (state) => state.book
  );
  // console.log("Home", itemList);

  useEffect(() => {
    dispatch(bookAction.getBooks());
  }, []);
  // 로딩이 true이면 스피너를 보여주고
  // 로딩이 false이면 데이터를 보여준다
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
          css={override}
          aria-label="Loading Spinner"
        />
      </div>
    );
  }
  return (
    <div>
      <Container>
        {/* {itemList.item && <BookCard book={itemList.item[0]} />} */}

        {/* <h1>신간 리스트</h1>
      <BooksSlide book={itemList} /> */}
        <Row style={{ marginBottom: "50px" }}>
          <h2 className="catalogTitle">
            <BsFillBookmarkFill />
            베스트 셀러
          </h2>
          <BooksSlide book={itemNewSpecial} />
        </Row>
        <Row>
          <h2 className="catalogTitle">
            <BsFillBookmarkFill />
            주목할 만한 리스트
          </h2>
          <BooksSlide book={bestSeller} />
        </Row>
      </Container>
    </div>
  );
}
