import React from "react";
import { Row, Col } from "antd";
import {
  MailOutlined,
  CalculatorOutlined,
  LockOutlined,
  BulbOutlined,
} from "@ant-design/icons";
import "./style.css";
function SynchronizeEmails() {
  return (
    <div className="mainemail">
      <Row justify="center">
        <Col lg={5} md={10} xs={24}>
          <div className="centeremail">
            <MailOutlined className="icon" />
            <h2 className="mailtext">Synchronize emails</h2>
            <p className="mailtext1">
              Lectus, non ultrices nisi. In varius,
              <br /> leo non gravida tristique, diam nunc
            </p>
          </div>
        </Col>
        <Col lg={5} md={10} xs={24}>
          <div className="centeremail">
            <CalculatorOutlined className="icon" />
            <h2 className="mailtext">Automatic bill payment</h2>
            <p className="mailtext1">
              Lorem ipsum dolor mauris in amet,
              <br /> consectetur adipiscing elit. Maur
              <br /> leo
            </p>
          </div>
        </Col>
        <Col lg={5} md={10} xs={24}>
          <div className="centeremail">
            <LockOutlined className="icon" />
            <h2 className="mailtext">Password storage</h2>
            <p className="mailtext1">
              Amet, consectetur adipiscing elit.
              <br /> Mauris vitae sodales lectus, non
            </p>
          </div>
        </Col>
        <Col lg={5} md={10} xs={24}>
          <div className="centeremail">
            <BulbOutlined className="icon" />
            <h2 className="mailtext">AI Assistant</h2>
            <p className="mailtext1">
              Mauris vitae sodales lectus, non
              <br /> ultrices nisi. In varius, leo non
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SynchronizeEmails;
