import React from "react";
import axios from "axios";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { Container, input } from "react-bootstrap";

export default function Login({ setAuthenticate }) {
  const navigate = useNavigate();

  const onFinish = (event) => {
    console.log("Received values of form: ", event);

    setAuthenticate(true);
    navigate("/");
  };

  return (
    <Container>
      <form className="loginForm" onSubmit={(event) => onFinish(event)}>
        <fieldset>
          <legend>로그인</legend>
          <div class="form-group">
            <label for="exampleInputEmail1" class="form-label mt-4">
              이메일
            </label>
            <input
              type="email"
              class="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              placeholder="Enter email"
            />
            <small id="emailHelp" class="form-text text-muted">
              We'll never share your email with anyone else.
            </small>
          </div>
          <div class="form-group">
            <label for="exampleInputPassword1" class="form-label mt-4">
              비밀번호
            </label>
            <input
              type="password"
              class="form-control"
              id="exampleInputPassword1"
              placeholder="Password"
            />
          </div>
          <br />
          <button type="submit" class="btn btn-primary">
            로그인
          </button>
          <br />
          <br />
          아직회원이 아니신가요?
          {""} <a href="/register">회원가입</a>
        </fieldset>
      </form>
    </Container>
  );
}
