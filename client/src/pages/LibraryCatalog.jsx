import React from "react";
import { bookAction } from "../redux/actions/bookAction";
import { useDispatch, useSelector } from "react-redux"; //액션을 콜하려면 디스패치가 필요함
import { useEffect } from "react";
import BookCard from "./BookCard";
import { Col, Container, Row } from "react-bootstrap";

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
      {/* <Container>
        <Row>
          <Col lg={3}>
            <BookCard />
          </Col>
          <Col lg={3}>
            <BookCard />
          </Col>
          <Col lg={3}>
            <BookCard />
          </Col>
          <Col lg={3}>
            <BookCard />
          </Col>
        </Row>
      </Container> */}
    </div>
  );
}
