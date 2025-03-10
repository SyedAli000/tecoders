import React from "react";
import { Col, Row } from "antd";
import "./style.css";
function SmartAssistant() {
  return (
    <div className="mainSmartAssistant">
      <h1 className="planttext44">Our Services</h1>
      <Row justify="center" className="rowmargin">
        <Col lg={10} md={10} xs={24}>
          <div className="centersmart22">
            <div>
              <h2 className="planttext">Website Design</h2>
              <p className="planttext1">
                TeCoders Company is a leading provider of exceptional
                web design services. With a dedicated team of skilled designers
                and developers, we craft stunning and functional websites that
                cater to our clients' specific goals and target audience. From
                responsive layouts to seamless navigation, our focus on quality
                and innovation ensures our clients' online success.
              </p>
            </div>
          </div>
        </Col>
        <Col lg={10} md={10} xs={24}>
          <div className="centersmart">
            <div>
              <img
                className="img-fluid logosmart"
                src="https://uploads-ssl.webflow.com/615af81f65d1ab72d2969269/62d513ab00f6516899fd3a0c_web%20design%20vs%20development.png"
                alt=""
              />
            </div>
          </div>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <Row justify="center">
        <Col lg={10} md={10} xs={24}>
          <div className="centersmart">
            <img
              className="img-fluid logosmart"
              src="https://engistack.com/img/mobile-app-development.png"
              alt=""
            />
          </div>
        </Col>
        <Col lg={10} md={10} xs={24}>
          <div className="centersmart22">
            <div>
              <h2 className="planttext">Mobile App Development</h2>
              <p className="planttext1">
                TeCoders specialize in delivering cutting-edge mobile
                app development services. With a team of skilled developers and
                designers, we craft intuitive and feature-rich applications
                tailored to meet our clients' unique needs. Whether it's iOS,
                Android, or cross-platform solutions, we are committed to
                transforming ideas into engaging and user-friendly mobile
                experiences.
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <Row justify="center" className="rowmargin">
        <Col lg={10} md={10} xs={24}>
          <div className="centersmart22">
            <div>
              <h2 className="planttext">Search Engine Automization  </h2>
              <p className="planttext1">
              TeCoders Company provides cutting-edge SEO services to enhance online visibility. Our team implements strategic optimizations, keyword research, and data-driven tactics to improve rankings. From technical SEO to content strategies, we ensure higher traffic and better engagement. With expertise in on-page, off-page, and local SEO, our goal is to drive sustained growth and digital success for businesses.
              </p>
            </div>
          </div>
        </Col>
        <Col lg={10} md={10} xs={24}>
          <div className="centersmart">
            <div>
              <img
              style={{width:350}}
                className="img-fluid logosmart1"
                src="/images/SEO.png"
                alt=""
              />
            </div>
          </div>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <Row justify="center">
        <Col lg={10} md={10} xs={24}>
          <div className="centersmart">
            <div>
              <img
                className="img-fluid logosmart"
                src="https://cdn1.iconfinder.com/data/icons/characters-and-objects/512/web_development_character_builder___webpage_website_setup_build_dashboard_teamwork_team_work.png"
                alt=""
              />
            </div>
          </div>
        </Col>
        <Col lg={10} md={10} xs={24}>
          <div className="centersmart22">
            <div>
              <h2 className="planttext">Web App Development</h2>
              <p className="planttext1">
                TeCoders Company excels in web app development services,
                delivering custom solutions that empower businesses to thrive in
                the digital realm. With a focus on cutting-edge technologies and
                user-centric design, we create scalable and high-performing web
                applications to meet our clients' diverse needs.
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row justify="center" className="rowmargin">
        <Col lg={10} md={10} xs={24}>
          <div className="centersmart22">
            <div>
              <h2 className="planttext">Ecommerce Devlopment</h2>
              <p className="planttext1">
                TeCoders Company is a trusted provider of Ecommerce
                development services, offering tailored solutions to enhance
                online retail experiences. Our team leverages the latest
                Ecommerce technologies and best practices to create secure,
                user-friendly, and visually appealing platforms that drive sales
                and maximize business growth.
              </p>
            </div>
          </div>
        </Col>
        <Col lg={10} md={10} xs={24}>
          <div className="centersmart">
            <div>
              <img
                className="img-fluid logosmart1"
                src="/images/ecommerce.png"
                alt=""
              />
            </div>
          </div>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <Row justify="center">
        <Col lg={10} md={10} xs={24}>
          <div className="centersmart">
            <div>
              <img
                className="img-fluid logosmart"
                src="/images/game.jpeg"
                alt=""
              />
            </div>
          </div>
        </Col>
        <Col lg={10} md={10} xs={24}>
          <div className="centersmart22">
            <div>
              <h2 className="planttext">Game Development</h2>
              <p className="planttext1">
              TeCoders Company excels in crafting immersive and engaging games. Our expert developers specialize in building dynamic, interactive experiences across multiple platforms. From concept to deployment, we ensure seamless performance, captivating visuals, and smooth mechanics. Whether casual or complex, our innovative approach ensures high-quality gaming solutions tailored to clients' needs for maximum user engagement.
              </p>
            </div>
          </div>
        </Col>
      </Row>

      
    </div>
  );
}

export default SmartAssistant;
