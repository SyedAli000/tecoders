import React from "react";
import "./style.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import Sub from "../../assetes/profile-pic.png";
const handleDragStart = (e) => e.preventDefault();

const items = [
  <div className="imgdiv">
    <div onDragStart={handleDragStart}>
      <img className="imglogo" src={Sub} />
      <p className="textphoto">
        We take photos to capture moments and
        <br /> people that we love. We are happy when
        <br /> there are more and more people who like
        <br /> what we do.
      </p>
      <h3 className="teacher">Manager assistant</h3>
    </div>
  </div>,
  <div className="imgdiv">
    <div onDragStart={handleDragStart}>
      <img
        className="imglogo"
        src="https://jevelin.shufflehound.com/startup-clean/wp-content/uploads/sites/34/2019/03/kal-visuals-emxAxutgt-A-unsplash3.jpg"
        alt=""
      />
      <p className="textphoto">
        We take photos to capture moments and
        <br /> people that we love. We are happy when
        <br /> there are more and more people who like
        <br /> what we do.
      </p>
      <h3 className="teacher">Manager assistant</h3>
    </div>
  </div>,
  <div className="imgdiv">
    <div onDragStart={handleDragStart}>
      <img
        className="imglogo"
        src="https://jevelin.shufflehound.com/startup-clean/wp-content/uploads/sites/34/2019/03/kal-visuals-emxAxutgt-A-unsplash2.jpg"
        alt=""
      />
      <p className="textphoto">
        We take photos to capture moments and
        <br /> people that we love. We are happy when
        <br /> there are more and more people who like
        <br /> what we do.
      </p>
      <h3 className="teacher">Developer</h3>
    </div>
  </div>,
];
export default function AliceCarousel22() {
  return (
    <div>
      <AliceCarousel disableButtonsControls mouseTracking items={items} />
    </div>
  );
}
