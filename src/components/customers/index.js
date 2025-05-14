import React from "react";
import { Col, Row } from "antd";
import "./style.css";
import AliceCarousel22 from "../carousel";
function HappyCustomers() {
  return (
    <div className="happymain">
      <Row justify="center">
        <Col lg={10} md={20} xs={24}>
          <div className="centerhappy">
            <div>
              <h2 className="texthappy">Happy Customers!</h2>
              <h1 className="texthappy1">
              At Tecoders, we work hard to keep you happy!
              </h1>
              <p className="texthappy2">
              We make sure our services are smooth and reliable. Whether it's support, features, or updates, we focus on giving you the best experience possible.
              </p>
            </div>
          </div>
        </Col>
        <Col lg={10} md={20} xs={24}>
          <div className="bgcolor">
            <div>
              <AliceCarousel22 />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default HappyCustomers;
