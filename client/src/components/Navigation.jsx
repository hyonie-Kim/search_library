import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import { GiSpellBook } from "react-icons/gi";
import { BsSearch } from "react-icons/bs";
import {
  Navbar,
  Container,
  Form,
  form,
  Button,
  Nav,
  NavDropdown,
  FormControl,
  input,
} from "react-bootstrap";

import { Link, useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bookAction } from "../redux/actions/bookAction";

export default function Navigation() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { bookSearch } = useSelector((state) => state.book);
  const { keyword } = useParams();
  const [text, setText] = useState("");

  const goToLogin = () => {
    navigate("/login");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(bookAction.getBooks(keyword));
    navigate(`/search/${text}`);
  };

  useEffect(() => {
    setText(keyword || "");
  }, [keyword]);

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-primary"
        style={{ marginBottom: "10px" }}
      >
        <div className="container">
          <a className="navbar-brand" href="/">
            <h2>
              <GiSpellBook />
              {""}LIBRARY
            </h2>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarColor01"
            aria-controls="navbarColor01"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor01">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <a className="nav-link active" href="/">
                  Home
                  <span className="visually-hidden">(current)</span>
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/">
                  books
                </a>
              </li>
              {/* <li className="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li> */}
            </ul>
            {/* search기능 */}
            <form className="search-box d-flex" onSubmit={handleSubmit}>
              {/* <input
                className="form-control me-sm-2"
                type="search"
                placeholder="제목을 입력하세요"
              />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
              </button> */}
              <input
                type="text"
                placeholder="Search.."
                value={text}
                onChange={(e) => setText(e.target.value)}
                style={{ outline: "none", border: "none" }}
              />
              <button type="submit" style={{ border: "none" }}>
                <BsSearch />
              </button>
            </form>
            <ul className="navbar-nav ml-auto">
              <li className="nav-item" onClick={goToLogin}>
                <a className="nav-link" href="#">
                  <FontAwesomeIcon icon={faUser} />
                  {""} login
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
