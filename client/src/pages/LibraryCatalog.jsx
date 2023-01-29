import React from "react";
import { bookAction } from "../redux/actions/bookAction";
import { useDispatch, useSelector } from "react-redux"; //액션을 콜하려면 디스패치가 필요함
import { useEffect } from "react";
import BookCard from "./BookCard";
import { Col, Container, Row } from "react-bootstrap";
import BooksSlide from "./BooksSlide";

export default function LibraryCatalog() {
  const dispatch = useDispatch();
  const { itemList, itemNewSpecial, bestSeller } = useSelector(
    (state) => state.book
  );
  // console.log("Home", itemList);

  useEffect(() => {
    dispatch(bookAction.getBooks());
  }, []);
  return (
    <div>
      {/* {itemList.item && <BookCard book={itemList.item[0]} />} */}

      <h1>신간 리스트</h1>
      {itemList && <BooksSlide book={itemList} />}
      <h1>베스트 셀러</h1>
      {/* <BooksSlide /> */}
      <h1>주목할 만한 리스트</h1>
      {/* <BooksSlide /> */}
    </div>
  );
}
