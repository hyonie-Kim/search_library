import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { bookAction } from "../redux/actions/bookAction";
import BeatLoader from "react-spinners/BeatLoader";
import BooksSlide from "../components/BooksSlide";

export default function Books() {
  const { bookSearch, loading } = useSelector((state) => state.book);
  const { keyword } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(bookAction.getBooks(keyword));
  }, [keyword]);

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

  console.log("검색한 책", bookSearch);
  return (
    <div style={{ marginTop: "20px" }}>
      {/* Books{keyword ? `${keyword}` : ""} */}
      <BooksSlide book={bookSearch} />
    </div>
  );
}
