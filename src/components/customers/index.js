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
                We give our best to make
                <br /> you happy!
              </h1>
              <p className="texthappy2">
                Ut et nisi ac dui pulvinar consequat. Curabitur aliquam, felis
                ut
                <br /> ultricies porta, ante dolor iaculis ante, ante dolor
                iaculis anteet <br /> fringilla ligula tortor eget nisi.
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
