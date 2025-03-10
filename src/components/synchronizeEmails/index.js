import React from "react";
import { Row, Col } from "antd";
import "./style.css";
function SynchronizeEmails() {
  return (
    <div className="mainemail">
      <h1 className="mailtext44">Why TeCoders ?</h1>
      <Row justify="center">
        <Col lg={5} md={10} xs={24}>
          <div className="centeremail">
            <img
              style={{ width: "5rem", marginTop: "1rem", marginBottom: "2rem" }}
              src="https://cdn-icons-png.flaticon.com/512/6528/6528295.png"
              alt=""
            />
            <h2 className="mailtext">Digital Transformation</h2>
            <p className="mailtext1">
              Good companies provide their customers
              <br /> with a 360 degree experience. Our ERPs <br /> can be
              accessed from Mobile, Tablets, <br /> Smart Phones, Desktops and
              Laptops.
            </p>
          </div>
        </Col>
        <Col lg={5} md={10} xs={24}>
          <div className="centeremail">
            <img
              style={{ width: "5rem", marginTop: "1rem", marginBottom: "2rem" }}
              src="https://cdn.iconscout.com/icon/free/png-256/business-intelligence-3611761-3018540.png"
              alt=""
            />
            <h2 className="mailtext">Business Intelligence</h2>
            <p className="mailtext1">
              We cover our clients needs with data <br /> warehouses, OLAP
              cubes, reports and <br /> dashboards. Predicting user behavior{" "}
              <br />
              enables organization’s to maximize business
            </p>
          </div>
        </Col>
        <Col lg={5} md={10} xs={24}>
          <div className="centeremail">
            <img
              style={{ width: "5rem", marginTop: "1rem", marginBottom: "2rem" }}
              src="https://static.thenounproject.com/png/1852532-200.png"
              alt=""
            />
            <h2 className="mailtext">User Interface & Design</h2>
            <p className="mailtext1">
              Good companies provide their customers
              <br /> with a 360 degree experience. Our ERPs <br /> can be
              accessed from Mobile, Tablets, <br /> Smart Phones, Desktops and
              Laptops.
            </p>
          </div>
        </Col>
        <Col lg={5} md={10} xs={24}>
          <div className="centeremail">
            <img
              style={{ width: "5rem", marginTop: "1.75rem", marginBottom: "2rem" }}
              src="/images/idea1.png"
              alt=""
            />
            <h2 className="mailtext">Idea Creation</h2>
            <p className="mailtext1">
              We grow our clients’ business by building <br /> brands. Finding
              solutions that are global <br /> when needed, or as singular as a
              simple <br /> human emotion.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SynchronizeEmails;
