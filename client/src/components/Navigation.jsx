import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
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

import { Input } from "antd";
import { Link, useNavigate } from "react-router-dom";

export default function Navigation() {
  const navigate = useNavigate();
  const goToLogin = () => {
    navigate("/login");
  };
  const { Search } = Input;

  const searchOnkeyPress = (value) => {
    // if (e.key === "Enter") {
    //   // 입력한 검색어를 읽어와서 URL을 바꿔준다.
    //   console.log("key press", e.key);

    // }
    navigate(`/?p=${value}`);
  };
  const search = (event) => {
    event.preventDefault();
    console.log("search issue");
  };
  return (
    <>
      {/* <Navbar bg="light" expand="lg">
        <Container fluid>
          <Navbar.Brand href="#">
            <img
              width={50}
              src="https://sesac.seoul.kr/static/common/images/www/temp/thumbnail.png"
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/books">Books</Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link onClick={goToLogin}>
                <FontAwesomeIcon icon={faUser} /> {""} 로그인
              </Nav.Link> */}

      {/* ddddddddddddddddddddddddddddddddddddddddd */}
      {/* <NavDropdown
                title={
                  <span>
                    <FontAwesomeIcon icon={faUser} />
                    {""} 로그인
                  </span>
                }
                id="navbarScrollingDropdown"
              >
                <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action4">
                  Another action
                </NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action5">
                  Something else here
                </NavDropdown.Item>
              </NavDropdown> */}
      {/* </Nav> */}

      {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
      {/* <Search
              placeholder="input search text"
              onSearch={(value) => searchOnkeyPress(value)}
              style={{ width: 200 }}
            />
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <a className="navbar-brand" href="/">
            <h2>LIBRARY</h2>
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
                <a className="nav-link" href="#">
                  Features
                </a>
              </li>
              <li className="nav-item">
                <a class="nav-link" href="#">
                  Pricing
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">
                  About
                </a>
              </li>
            </ul>
            <form
              className="search-box d-flex"
              onSubmit={(event) => search(event)}
            >
              <input
                className="form-control me-sm-2"
                type="search"
                placeholder="제목을 입력하세요"
              />
              <button className="btn btn-secondary my-2 my-sm-0" type="submit">
                Search
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
