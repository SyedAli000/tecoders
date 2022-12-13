import React from "react";
import { Col, Row } from "antd";
import "./style.css";
function SmartAssistant() {
  return (
    <div className="mainSmartAssistant">
      <Row justify="center">
        <Col lg={10} md={20} xs={24}>
          <div className="centersmart">
            <div>
              <img
                className="img-fluid"
                src="https://jevelin.shufflehound.com/startup-clean/wp-content/uploads/sites/34/2019/03/undraw_destinations_fpv7.png"
                alt=""
              />
            </div>
          </div>
        </Col>
        <Col lg={10} md={20} xs={24}>
          <div className="centersmart22">
            <div>
              <h2 className="smarttext">Smart assistant</h2>
              <h2 className="planttext">
                Let our unique AI Assistant
                <br /> plan months ahead
              </h2>
              <p className="planttext1">
                Ut et nisi ac dui pulvinar consequat. Curabitur aliquam, felis
                ut <br /> ultricies porta, ante dolor iaculis ante, ante dolor
                iaculis anteet <br /> fringilla ligula tortor eget nisi.
              </p>
            </div>
          </div>
        </Col>
      </Row>
      <br />
      <br />
      <br />
      <br />
      <Row justify="center" className="rowmargin">
        <Col lg={10} md={20} xs={24}>
          <div className="centersmart22">
            <div>
              <h2 className="smarttext">One for all</h2>
              <h2 className="planttext">
                Synhronize your social life, <br /> email and contacts
              </h2>
              <p className="planttext1">
                Donec et augue pharetra, rutrum leo at, laoreet nulla. Nullam
                mattis
                <br /> sed justo quis sollicitudin. Maecenas lobortis fermentum
                fringilla. <br /> Vivamus in diam erat.
              </p>
            </div>
          </div>
        </Col>
        <Col lg={10} md={20} xs={24}>
          <div className="centersmart">
            <div>
              <img
                className="img-fluid"
                src="https://jevelin.shufflehound.com/startup-clean/wp-content/uploads/sites/34/2019/03/undraw_social_notifications_ro8o.png"
                alt=""
              />
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SmartAssistant;
