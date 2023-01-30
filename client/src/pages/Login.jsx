import React from "react";
import { useState } from "react";
import { Form, Button, Container } from "react-bootstrap";

export default function Login() {
  const [id, setId] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Container
      style={{
        width: "50%",
        height: "500px",
        // margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="아이디를 입력해주세요" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="비밀번호를 입력해주세요" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
        <Button variant="success" type="submit">
          로그인
        </Button>
        <a href=""> 회원가입</a>
      </Form>
    </Container>
  );
}
