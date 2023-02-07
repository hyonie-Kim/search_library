import React from "react";
// import { LockOutlined, UserOutlined } from "@ant-design/icons";
// import { Button, Form, Input } from "antd";
import axios from "axios";
import server from "../redux/server";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container, input } from "react-bootstrap";

export default function SignUp({ setAuthenticate }) {
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const nameHandler = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const emailHandler = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };

  const passwordHandler = (e) => {
    e.preventDefault();
    setPassword(e.target.value);
  };

  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  function signup() {
    console.log(email);
    console.log(password);
    let body = {
      name: name,
      email: email,
      password: password,
    };

    server
      .post("signup", body)
      .then((res) => {
        console.log(res);

        return res.data;
      })
      .then(() => {
        setAuthenticate(true);
        navigate("/");
      });
  }
  // function login(onFinish) {
  //   server.post("signup", { a: 1 }).then((res) => {
  //     console.log(res);
  //     return res.data;
  //   });
  // }

  return (
    <div id="components-form-demo-normal-register">
      <Container>
        <form className="signup-form" name="normal_signup">
          <fieldset>
            <legend>회원가입</legend>
            <div class="form-group">
              <fieldset>
                <label
                  class="form-label mt-4"
                  for="readOnlyInput"
                  name="username"
                >
                  이름
                </label>
                <input
                  class="form-control"
                  id="readOnlyInput"
                  name="username"
                  onChange={nameHandler}
                  value={name}
                  type="text"
                  placeholder="name"
                />
              </fieldset>
              <label
                for="exampleInputEmail1"
                class="form-label mt-4"
                name="email"
              >
                이메일
              </label>
              <input
                type="email"
                value={email}
                onChange={emailHandler}
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
              <label
                for="exampleInputPassword1"
                class="form-label mt-4"
                name="password"
              >
                비밀번호
              </label>
              <input
                value={password}
                onChange={passwordHandler}
                type="password"
                class="form-control"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <br />
            <button
              type="submit"
              class="btn btn-primary"
              onClick={() => signup()}
            >
              회원가입
            </button>
            {""} <a href="/login">로그인하러 가기</a>
          </fieldset>
        </form>
      </Container>
    </div>
  );
}
