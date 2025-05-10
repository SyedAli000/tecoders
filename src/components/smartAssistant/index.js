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
              TeCoders is a top custom web design company, offering exceptional website design services. With skilled designers and developers, we create stunning websites tailored to our clients' goals and target audience. From responsive layouts to seamless navigation, we ensure online success.
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
              TeCoders specialize in delivering top mobile app development services. With a skilled team, we craft intuitive, feature-rich apps tailored to meet our clients' needs. Whether iOS, Android, or cross-platform, we transform ideas into engaging mobile experiences.
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
              TeCoders offers cutting-edge SEO and AI automation solutions to enhance online visibility. Our team implements strategic optimizations, keyword research, and data-driven tactics to improve rankings. From technical SEO to content strategies, we drive higher traffic and engagement.              </p>
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
              TeCoders excels in custom web app development services, delivering solutions that empower businesses to thrive digitally. With cutting-edge technologies and user-centric design, we create scalable and high-performing web applications tailored to clients' needs.
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <Row justify="center" className="rowmargin">
        <Col lg={10} md={10} xs={24}>
          <div className="centersmart22">
            <div>
              <h2 className="planttext">Ecommerce Development</h2>
              <p className="planttext1">
              TeCoders is a trusted provider of custom ecommerce development services, offering tailored solutions to enhance online retail experiences. Our team uses the latest ecommerce technologies to create secure, user-friendly, and visually appealing platforms that drive sales and growth.
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
              TeCoders excels in custom game development, crafting immersive and engaging experiences across multiple platforms. Our expert developers specialize in building dynamic, interactive games with seamless performance, captivating visuals, and smooth mechanics.              </p>
            </div>
          </div>
        </Col>
      </Row>

      
    </div>
  );
}

export default SmartAssistant;
