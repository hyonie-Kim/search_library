import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";
import axios from "axios";
import server from "../redux/server";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

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
      <Form
        name="normal_signup"
        className="signup-form"
        initialValues={{
          remember: true,
        }}
        onFinish={onFinish}
      >
        <div style={{ textAlign: "center" }}>
          <img
            width={130}
            src="https://sesac.seoul.kr/static/common/images/www/temp/thumbnail.png"
            alt=""
          />
        </div>
        <Form.Item
          name="username"
          rules={[
            {
              required: true,
              message: "Please input your Username!",
            },
          ]}
        >
          <Input
            onChange={nameHandler}
            value={name}
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
          />
        </Form.Item>
        <Form.Item
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your email!",
            },
          ]}
        >
          <Input
            value={email}
            onChange={emailHandler}
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="email"
            placeholder="email"
          />
        </Form.Item>
        <Form.Item
          name="password"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
            value={password}
            onChange={passwordHandler}
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            // style={{
            //   backgroundColor: "green",
            // }}
            type="primary"
            htmlType="submit"
            className="login-form-button"
            onClick={() => signup()}
          >
            register now!
          </Button>
          Or <a href="/login">Log in</a>
        </Form.Item>
      </Form>
    </div>
  );
}
