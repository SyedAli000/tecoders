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
              style={{ width: "7rem", marginTop: "1rem", marginBottom: "2rem" }}
              src="https://cdn-icons-png.flaticon.com/512/6528/6528295.png"
              alt=""
            />
            <h2 className="mailtext">Digital Transformation</h2>
            <p className="mailtext1">
               Top companies provide their customers 
              <br />with a complete digital experience. Our  <br /> ERPs are accessible from mobiles, tablets,
              smartphones, desktops, and laptops.
            </p>
          </div>
        </Col>
        <Col lg={5} md={10} xs={24}>
          <div className="centeremail">
            <img
              style={{ width: "7rem", marginTop: "1rem", marginBottom: "2rem" }}
              src="https://cdn.iconscout.com/icon/free/png-256/business-intelligence-3611761-3018540.png"
              alt=""
            />
            <h2 className="mailtext">Business Intelligence</h2>
            <p className="mailtext1">
            We meet our clients' needs with data warehouses, OLAP cubes, reports, and dashboards  Predicting user behavior helps organizations{" "}
              maximize business growth.
            </p>
          </div>
        </Col>
        <Col lg={5} md={10} xs={24}>
          <div className="centeremail">
            <img
              style={{ width: "7rem", marginTop: "1rem", marginBottom: "2rem" }}
              src="https://static.thenounproject.com/png/1852532-200.png"
              alt=""
            />
            <h2 className="mailtext">User Interface & Design</h2>
            <p className="mailtext1">
            Leading companies provide their customers with a complete digital experience. Our ERPs are accessible from mobiles, tablets, smartphones, desktops, and laptops with intuitive design.
            </p>
          </div>
        </Col>
        <Col lg={5} md={10} xs={24}>
          <div className="centeremail">
            <img
              style={{width: "7rem", marginTop: "1.75rem", marginBottom: "2rem" }}
              src="/images/idea1.png"
              alt=""
            />
            <h2 className="mailtext">Idea Creation</h2>
            <p className="mailtext1">
            We help our clients grow by building strong brands. We find solutions that are global when necessary or as personal as a simple human emotion.
            </p>
          </div>
        </Col>
      </Row>
    </div>
  );
}

export default SynchronizeEmails;
