import React from "react";
import { bookAction } from "../redux/actions/bookAction";
import { useDispatch } from "react-redux"; //액션을 콜하려면 디스패치가 필요함
import { useEffect } from "react";

export default function LibraryCatalog() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(bookAction.getBooks());
  }, []);
  return <div>도서 목록 페이지</div>;
}
