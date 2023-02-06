import React from "react";
import { useEffect } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { useDispatch, useSelector } from "react-redux";
import { bookAction } from "../redux/actions/bookAction";
import BookCard from "./BookCard";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 10,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1300 }, // 3000 1024
    items: 7,
  },
  tablet: {
    breakpoint: { max: 1300, min: 800 }, //1024 464
    items: 5,
  },
  mobile: {
    breakpoint: { max: 800, min: 0 }, //464 0
    items: 1,
  },
};

export default function BooksSlide({ book }) {
  // const dispatch = useDispatch();
  // const { bookSearch } = useSelector((state) => state.book);
  // // console.log("슬라이드 아이템!", book);

  // useEffect(() => {
  //   bookAction.getBooks();
  // }, []);

  return (
    <div className="slideContainer">
      {/* <Carousel responsive={responsive}> */}
      {book.item.map((result, index) => (
        <BookCard result={result} key={index} />
      ))}
    </div>
  );
}
