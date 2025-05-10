import React from "react";
import "./style.css";
import { Row, Col } from "antd";
import { Slide } from "react-awesome-reveal";
import Button from "@mui/material/Button";
import FloatingWhatsAppButton from "../whatsapp";

function HeroSection() {
  return (
    <div>
      <div className="maindivofherosection">
        <Row justify="center">
          <Col lg={12} sm={20} xs={20} md={12}>
            <div className="textcontainer">
              <div>
                <p className="slogan">Quality Over Quantity</p>
                <p className="slogandescription">
                Innovate and automate your 
                  <br /> Business with our full-service 
                  <br /> Software Development company today
                </p>
                <p className="detailsdescription">
                We empower businesses with AI, web, and app solutions,
                  <br /> delivering data-driven insights, automation, and innovation.
                  <br /> By analyzing user behavior, we help organizations  
                  <br />
                  drive growth and enhance efficiency
                </p>
                <Button className="explorebutton">Explore the product</Button>
              </div>
            </div>
          </Col>
          <Col lg={12} sm={20} xs={20} md={12}>
            <Slide direction="left" triggerOnce={true}>
              <img
                src="https://jevelin.shufflehound.com/startup-clean/wp-content/uploads/sites/34/2019/03/Vector-Smart-Object21-copy-2.png"
                alt="trisagecalender"
                className="calenderimg"
              />
            </Slide>
            <Slide direction="right" triggerOnce={true}>
              <img
                src="https://jevelin.shufflehound.com/startup-clean/wp-content/uploads/sites/34/2019/03/Vector-Smart-Object11-copy.png"
                alt="trisage desk"
                className="deskimage"
              />
            </Slide>
            <Slide direction="left" triggerOnce={true}>
              <img
                src="https://jevelin.shufflehound.com/startup-clean/wp-content/uploads/sites/34/2019/03/Vector-Smart-Object112-copy-2.png"
                alt="trisageavatar"
                className="girlimage"
              />
            </Slide>
            <Slide direction="left" triggerOnce={true}>
              <img
                src="https://jevelin.shufflehound.com/startup-clean/wp-content/uploads/sites/34/2019/03/Vector-Smart-Object111-copy-3.png"
                alt="trisageavatar"
                className="flowerimage"
              />
            </Slide>
          </Col>
        </Row>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
        <path
          fill="#030637"
          fill-opacity="1"
          d="M0,288L60,272C120,256,240,224,360,192C480,160,600,128,720,101.3C840,75,960,53,1080,90.7C1200,128,1320,224,1380,272L1440,320L1440,0L1380,0C1320,0,1200,0,1080,0C960,0,840,0,720,0C600,0,480,0,360,0C240,0,120,0,60,0L0,0Z"
        ></path>
      </svg>
      <FloatingWhatsAppButton/>
    </div>
  );
}

export default HeroSection;
