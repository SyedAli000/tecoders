import React from "react";
import "./style.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
const handleDragStart = (e) => e.preventDefault();
const responsive = {
  0: {
    items: 1,
  },
  528: {
    items: 2,
    itemsFit: "contain",
  },
  1024: {
    items: 5,
    itemsFit: "contain",
  },
};
const items = [
  <div className="centerstciker">
    <img
      onDragStart={handleDragStart}
      className="stickerimg"
      src="https://jevelin.shufflehound.com/startup-clean/wp-content/uploads/sites/34/2019/03/Partners2.png"
      alt=""
    />
  </div>,
  <div className="centerstciker">
    <img
      onDragStart={handleDragStart}
      className="stickerimg"
      src="https://jevelin.shufflehound.com/startup-clean/wp-content/uploads/sites/34/2019/03/Partners6.png"
      alt=""
    />
  </div>,
  <div className="centerstciker">
    <img
      onDragStart={handleDragStart}
      className="stickerimg"
      src="https://jevelin.shufflehound.com/startup-clean/wp-content/uploads/sites/34/2019/03/Partners5.png"
      alt=""
    />
  </div>,
  <div className="centerstciker">
    <img
      onDragStart={handleDragStart}
      className="stickerimg"
      src="https://jevelin.shufflehound.com/startup-clean/wp-content/uploads/sites/34/2019/03/Partners3.png"
      alt=""
    />
  </div>,
  <div className="centerstciker">
    <img
      onDragStart={handleDragStart}
      className="stickerimg"
      src="https://jevelin.shufflehound.com/startup-clean/wp-content/uploads/sites/34/2019/03/Partners1.png"
      alt=""
    />
  </div>,
  <div className="centerstciker">
    <img
      onDragStart={handleDragStart}
      className="stickerimg"
      src="https://jevelin.shufflehound.com/startup-clean/wp-content/uploads/sites/34/2019/03/Partners4.png"
      alt=""
    />
  </div>,
];
function Sticker() {
  return (
    <div className="mainsticker">
      <div className="padding">
        <AliceCarousel
          disableButtonsControls
          mouseTracking
          items={items}
          responsive={responsive}
          disableDotsControls
          autoPlay="true"
          autoPlayInterval={1000}
        />
      </div>
    </div>
  );
}

export default Sticker;
