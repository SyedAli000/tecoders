import React from "react";
import { Col, Row } from "antd";
import Button from "@mui/material/Button";
import "./style.css";

function Pricing() {
  return (
    <div className="mainpricing">
      <div>
        <h2 className="textpricing">Pricing</h2>
        <h1 className="textpricing1">Select your plan!</h1>
      </div>
      <Row justify="center">
        <Col lg={6} md={6} xs={24}>
          <div className="centerpricing">
            <p className="basictext">Basic</p>
            <h1 className="basictext1">$19</h1>
            <p className="basictext2">
              Lorem ipsum dolor sit amet, consectetur.
              <br /> Mauris vitae sodales lectus, non ultrices nisi. In <br />
              varius, leo non gravida tristique
            </p>
            <div>
              <Button className="explorebutton22">Choose pricing</Button>
            </div>
          </div>
        </Col>
        <Col lg={6} md={6} xs={24}>
          <div className="centerpricing22">
            <p className="basictext">Pro</p>
            <h1 className="basictext1">$29</h1>
            <p className="basictext2">
              Lorem ipsum dolor sit amet, consectetur.
              <br /> Mauris vitae sodales lectus, non ultrices nisi. In <br />
              varius, leo non gravida tristique
            </p>
            <div>
              <Button className="explorebutton2244">Choose pricing</Button>
            </div>
          </div>
        </Col>
        <Col lg={6} md={6} xs={24}>
          <div className="centerpricing">
            <p className="basictext">Business?</p>
            <h1 className="basictext1">Custom</h1>
            <p className="basictext2">
              Lorem ipsum dolor sit amet, consectetur.
              <br /> Mauris vitae sodales lectus, non ultrices nisi. In <br />
              varius, leo non gravida tristique
            </p>
            <div>
              <Button className="explorebutton22">Contact us</Button>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default Pricing;
