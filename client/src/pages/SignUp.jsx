import React from "react";
import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Form, Input } from "antd";

export default function SignUp() {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <div id="components-form-demo-normal-register">
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
          name="email"
          rules={[
            {
              required: true,
              message: "Please input your Password!",
            },
          ]}
        >
          <Input
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
          >
            register now!
          </Button>
          Or <a href="/login">Log in</a>
        </Form.Item>
      </Form>
    </div>
  );
}
