import React from "react";
import { Navigate } from "react-router-dom";
import BookDetail from "../components/BookDetail";

export default function PrivateRoute({ authenticate }) {
  return authenticate === true ? <BookDetail /> : <Navigate to="/login" />;
}
