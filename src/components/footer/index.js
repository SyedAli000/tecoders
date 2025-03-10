import React from "react";
import { Row, Col } from "antd";
import {
  FacebookFilled,
  LinkedinFilled,
  InstagramFilled,
} from "@ant-design/icons";
import "./style.css";
function Footer() {
  return (
    <>
      <div className="mainfooter">
        <div>
          <Row justify="center">
            <Col lg={8} md={10} xs={24}>
              <div className="centerfooter">
                <div>
                  <img
                    className="footerimg"
                    src="/images/logo2.png"
                    alt=""
                  />
                  <p className="textfollow">
                    Follow our latest achievements and
                    <br /> information on social networks
                  </p>
                  <div>
                    <FacebookFilled className="iconantddd" />
                    <a href="https://www.linkedin.com/company/tecodersinfo/">
                    <LinkedinFilled className="iconantddd" />
                    </a>
                    <a href="https://www.instagram.com/tecoders?igsh=OTEydDhuN2E3MXhs">
                    <InstagramFilled className="iconantddd" />
                    </a>
                  </div>
                </div>
              </div>
            </Col>
            <Col lg={5} md={10} xs={24}>
              <div className="centerfooter">
                <div>
                  <h2 className="textexpo">Explore</h2>
                  <p className="textexpo1">Privacy </p>
                  <p className="textexpo1"> About us </p>
                  <p className="textexpo1"> Testimonials</p>
                </div>
              </div>
            </Col>
            <Col lg={5} md={10} xs={24}>
              <div className="centerfooter">
                <div>
                  <h2 className="textexpo">Teamwork</h2>
                  <p className="textexpo1">Partners</p>
                  <p className="textexpo1">Licenses</p>
                  <p className="textexpo1"> Reviews</p>
                </div>
              </div>
            </Col>
            <Col lg={5} md={10} xs={24}>
              <div className="centerfooter">
                <div>
                  <h2 className="textexpo">Marketing</h2>
                  <p className="textexpo1">Strategy</p>
                  <p className="textexpo1">Advertisments</p>
                  <p className="textexpo1"> Referrals</p>
                </div>
              </div>
            </Col>
          </Row>
        </div>
      </div>
      <dv className="footerbottom">
        <p>Copyright 2024 TeCoders. All rights reserved.</p>
      </dv>
    </>
  );
}

export default Footer;
