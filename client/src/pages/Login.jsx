import React from "react";

import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input } from "antd";
// import { Container } from "react-bootstrap";

export default function Login() {
  // const [id, setId] = useState("");
  // const [password, setPassword] = useState("");
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };

  return (
    // <Container
    //   style={{
    //     width: "50%",
    //     height: "500px",
    //     // margin: "0 auto",
    //     display: "flex",
    //     flexDirection: "column",
    //     alignItems: "center",
    //     justifyContent: "center",
    //   }}
    // >
    //   <Form>
    //     <Form.Group className="mb-3" controlId="formBasicEmail">
    //       <Form.Label>Email address</Form.Label>
    //       <Form.Control type="email" placeholder="아이디를 입력해주세요" />
    //       <Form.Text className="text-muted">
    //         We'll never share your email with anyone else.
    //       </Form.Text>
    //     </Form.Group>

    //     <Form.Group className="mb-3" controlId="formBasicPassword">
    //       <Form.Label>Password</Form.Label>
    //       <Form.Control type="password" placeholder="비밀번호를 입력해주세요" />
    //     </Form.Group>
    //     <Form.Group className="mb-3" controlId="formBasicCheckbox">
    //       <Form.Check type="checkbox" label="Check me out" />
    //     </Form.Group>
    //     <Button variant="success" type="submit">
    //       로그인
    //     </Button>
    //     <a href=""> 회원가입</a>
    //   </Form>
    // </Container>
    <div id="components-form-demo-normal-login">
      <Form
        name="normal_login"
        className="login-form"
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
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
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
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>
        <Form.Item>
          <Form.Item name="remember" valuePropName="checked" noStyle>
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <a className="login-form-forgot" href="">
            Forgot password
          </a>
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Log in
          </Button>
          Or <a href="/register">register now!</a>
        </Form.Item>
      </Form>
    </div>
  );
}
