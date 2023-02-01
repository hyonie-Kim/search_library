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
  return (
    <>
      {/* <div>
        <FontAwesomeIcon icon={faUser} />
        <div>로그인</div>
      </div> */}
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
              <Link to="/" className="nav-item">
                Home
              </Link>
              <Link to="/books" className="nav-item">
                Books
              </Link>

              <Nav.Link href="/login" className="justify-content-end">
                <FontAwesomeIcon icon={faUser} />
                로그인
              </Nav.Link>
            </Nav>
            <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
          </Navbar.Collapse>
        </Container>
      </Navbar> */}
      <Navbar bg="light" expand="lg">
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
              </Nav.Link>
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
            </Nav>
            {/* <Form className="d-flex">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form> */}
            <Search
              placeholder="input search text"
              onSearch={(value) => searchOnkeyPress(value)}
              style={{ width: 200 }}
            />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}
