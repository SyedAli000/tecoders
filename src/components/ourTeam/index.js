import { Row, Col } from "antd";
import React from "react";
import ourTeam from "../../hepler/team.json";
import { Card } from "antd";
import { RightOutlined } from "@ant-design/icons";
import "./style.css";
const { Meta } = Card;
function OurTeam() {
  return (
    <div>
      <div>
        <h1 className="our-team-text">Our Team</h1>
        <h1 className="our-team-text1">The People Behind All The Magic</h1>

        <Row justify="center">
          {ourTeam.map((user) => (
            <Col lg={8} md={8}>
              <div className="center-col-team">
                <Card
                  hoverable
                  className="card-width"
                  cover={<img alt="example" src={user.image} />}
                >
                  <h3 className="name-team">{user.name}</h3>
                  <h2 className="detail-team">{user.detail}</h2>
                </Card>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </div>
  );
}

export default OurTeam;
