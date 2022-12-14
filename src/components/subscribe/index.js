import React from "react";
import { Col, Form, Input, Row } from "antd";
import Button from "@mui/material/Button";
import "./style.css";
const { TextArea } = Input;
function Subscribe() {
  const onFinish = (values) => {
    console.log("Success:", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };
  return (
    <div className=" ">
      <h1 className="subtext">Get In Touch</h1>
      {/* <div className="centerho">
          <Input
            className="inputsubs"
            placeholder="Please Enter your Email here.."
          />
          <Button className="explorebuttonsubs">Subscribe</Button>
        </div> */}
      <Row justify="center">
        <Col lg={10}>
          <div className="btnsend">
            <img
              className="imglogwidth"
              src="https://trisage-solution.vercel.app/images/get-in-touch-img.png"
              alt=""
            />
          </div>
        </Col>
        <Col lg={10}>
          <div className="centerform">
            <Form
              name="basic"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
              onFinishFailed={onFinishFailed}
              autoComplete="off"
            >
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input className="inputsubs" placeholder="Enter your Name" />
              </Form.Item>

              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please input your username!",
                  },
                ]}
              >
                <Input className="inputsubs" placeholder="Enter your Email" />
              </Form.Item>
              <Form.Item
                rules={[
                  {
                    required: true,
                    message: "Please input your password!",
                  },
                ]}
              >
                <Input className="inputsubs" placeholder="Enter your Phone" />
              </Form.Item>
              <Form.Item>
                <TextArea
                  rows={4}
                  className="inputsubs"
                  placeholder="Message"
                />
              </Form.Item>
            </Form>
          </div>
          <div className="btnsend">
            <Button className="explorebuttonsubs12">Send Message</Button>
          </div>
        </Col>
      </Row>
      <p className="subtext1">
        Send Us a Message and we'll <br />
        respond as soon as possible
      </p>
    </div>
  );
}

export default Subscribe;
