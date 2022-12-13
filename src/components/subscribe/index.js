import React from "react";
import { Input } from "antd";
import Button from "@mui/material/Button";
import "./style.css";
function Subscribe() {
  return (
    <div className="mainsubscribe">
      <div>
        <h1 className="subtext">
          Subscribe to be up to date with our
          <br /> latest news and stories
        </h1>
        <div className="centerho">
          <Input
            className="inputsubs"
            placeholder="Please Enter your Email here.."
          />
          <Button className="explorebuttonsubs">Subscribe</Button>
        </div>
        <p className="subtext1">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris vitae
          sodales
        </p>
      </div>
    </div>
  );
}

export default Subscribe;
