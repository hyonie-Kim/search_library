import React from "react";
import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { bookAction } from "../redux/actions/bookAction";
import BookCard from "./BookCard";

export default function BooksSlide({ book }) {
  // const dispatch = useDispatch();
  // const { bookSearch } = useSelector((state) => state.book);
  // // console.log("슬라이드 아이템!", book);

  // useEffect(() => {
  //   bookAction.getBooks();
  // }, []);

  return (
    <div className="slideContainer">
      {book.item &&
        book.item.map((result, index) => (
          <BookCard result={result} key={index} />
        ))}
    </div>
  );
}
