import React from "react";
import axios from "axios";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
import { useNavigate } from "react-router-dom";
import { Container, input } from "react-bootstrap";

export default function Login({ setAuthenticate }) {
  const navigate = useNavigate();

  const onFinish = (values) => {
    console.log("Received values of form: ", values);

    setAuthenticate(true);
    navigate("/");
  };

  return (
    // <div id="components-form-demo-normal-login">
    //   <Form
    //     name="normal_login"
    //     className="login-form"
    //     initialValues={{
    //       remember: true,
    //     }}
    //     onFinish={onFinish}
    //   >
    //     <div style={{ textAlign: "center" }}>
    //       <img
    //         width={130}
    //         src="https://sesac.seoul.kr/static/common/images/www/temp/thumbnail.png"
    //         alt=""
    //       />
    //     </div>

    //     <Form.Item
    //       name="email"
    //       rules={[
    //         {
    //           required: true,
    //           message: "Please input your Username!",
    //         },
    //       ]}
    //     >
    //       <Input
    //         prefix={<UserOutlined className="site-form-item-icon" />}
    //         type="email"
    //         placeholder="email"
    //       />
    //     </Form.Item>
    //     <Form.Item
    //       name="password"
    //       rules={[
    //         {
    //           required: true,
    //           message: "Please input your Password!",
    //         },
    //       ]}
    //     >
    //       <Input
    //         prefix={<LockOutlined className="site-form-item-icon" />}
    //         type="password"
    //         placeholder="Password"
    //       />
    //     </Form.Item>
    //     <Form.Item>
    //       <Form.Item name="remember" valuePropName="checked" noStyle>
    //         <Checkbox>Remember me</Checkbox>
    //       </Form.Item>

    //       <a className="login-form-forgot" href="">
    //         Forgot password
    //       </a>
    //     </Form.Item>

    //     <Form.Item>
    //       <Button
    //         type="primary"
    //         htmlType="submit"
    //         className="login-form-button"
    //       >
    //         Log in
    //       </Button>
    //       Or <a href="/register">register now!</a>
    //     </Form.Item>
    //   </Form>
    // </div>
    <Container>
      <form className="loginForm">
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
