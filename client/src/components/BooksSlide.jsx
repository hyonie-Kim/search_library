import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import BookCard from "./BookCard";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 6,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 3,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

export default function BooksSlide({ book }) {
  console.log("슬라이드 아이템!", book);
  return (
    <div>
      <Carousel responsive={responsive}>
        {book.item.map((result, index) => (
          <BookCard result={result} key={index} />
        ))}

        {/* <BookCard />
        <BookCard />
        <BookCard />
        <BookCard />
        <BookCard /> */}
        {/* <div>Item 2</div>
        <div>Item 3</div>
        <div>Item 4</div> */}
      </Carousel>
    </div>
  );
}