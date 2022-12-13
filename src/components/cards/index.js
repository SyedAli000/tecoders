import React from "react";
import "./style.css";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";
import { RightOutlined } from "@ant-design/icons";
import { Card } from "antd";
const { Meta } = Card;
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
    items: 3,
    itemsFit: "contain",
  },
};
const items = [
  <div className="centercard" onDragStart={handleDragStart}>
    <Card
      hoverable
      //   style={{
      //     width: 300,
      //   }}
      className="cardwidth"
      cover={
        <img
          alt="example"
          src="https://jevelin.shufflehound.com/startup-clean/wp-content/uploads/sites/34/2019/03/101_0001_alexandru-acea-bbokzTQjB9o-unsplash2-1024x777.jpg"
        />
      }
      actions={[<p>Read more</p>, <RightOutlined />]}
    >
      <Meta
        title="All dates set for a year"
        description="A wonderful serenity has taken possession of my entire soul, 
        like these sweet mornings of spring which I enjoy with my whole heart. 
        I am alone, and feel the charm of existence in this spot, which was created 
        for the bliss of souls like mine....  "
      />
    </Card>
  </div>,
  <div className="centercard " onDragStart={handleDragStart}>
    <Card
      hoverable
      //   style={{
      //     width: 300,
      //   }}
      className="cardwidth"
      cover={
        <img
          alt="example"
          src="https://jevelin.shufflehound.com/startup-clean/wp-content/uploads/sites/34/2019/03/101_0001_alexandru-acea-bbokzTQjB9o-unsplash5-1024x777.jpg"
        />
      }
      actions={[<p>Read more</p>, <RightOutlined />]}
    >
      <Meta
        title="Newest technology"
        description="A wonderful serenity has taken possession of my entire soul, 
        like these sweet mornings of spring which I enjoy with my whole heart. 
        I am alone, and feel the charm of existence in this spot, which was created 
        for the bliss of souls like mine....  "
      />
    </Card>
  </div>,
  <div className="centercard " onDragStart={handleDragStart}>
    <Card
      hoverable
      //   style={{
      //     width: 300,
      //   }}
      className="cardwidth"
      cover={
        <img
          alt="example"
          src="https://jevelin.shufflehound.com/startup-clean/wp-content/uploads/sites/34/2019/03/101_0001_alexandru-acea-bbokzTQjB9o-unsplas4h-1024x777.jpg"
        />
      }
      actions={[<p>Read more</p>, <RightOutlined />]}
    >
      <Meta
        title="New age technology"
        description="A wonderful serenity has taken possession of my entire soul, 
        like these sweet mornings of spring which I enjoy with my whole heart. 
        I am alone, and feel the charm of existence in this spot, which was created 
        for the bliss of souls like mine....  "
      />
    </Card>
  </div>,
  <div className="centercard " onDragStart={handleDragStart}>
    <Card
      hoverable
      //   style={{
      //     width: 300,
      //   }}
      className="cardwidth"
      cover={
        <img
          alt="example"
          src="https://jevelin.shufflehound.com/startup-clean/wp-content/uploads/sites/34/2019/03/101_0001_alexandru-acea-bbokzTQjB9o-unsplas3h-1024x777.jpg"
        />
      }
      actions={[<p>Read more</p>, <RightOutlined />]}
    >
      <Meta
        title="Colors this year"
        description="A wonderful serenity has taken possession of my entire soul, 
        like these sweet mornings of spring which I enjoy with my whole heart. 
        I am alone, and feel the charm of existence in this spot, which was created 
        for the bliss of souls like mine....  "
      />
    </Card>
  </div>,
  <div className="centercard " onDragStart={handleDragStart}>
    <Card
      hoverable
      //   style={{
      //     width: 300,
      //   }}
      className="cardwidth"
      cover={
        <img
          alt="example"
          src="https://jevelin.shufflehound.com/startup-clean/wp-content/uploads/sites/34/2019/03/101_0001_alexandru-acea-bbokzTQjB9o-unsplash8-1024x777.jpg"
        />
      }
      actions={[<p>Read more</p>, <RightOutlined />]}
    >
      <Meta
        title="Design Stories"
        description="A wonderful serenity has taken possession of my entire soul, 
        like these sweet mornings of spring which I enjoy with my whole heart. 
        I am alone, and feel the charm of existence in this spot, which was created 
        for the bliss of souls like mine....  "
      />
    </Card>
  </div>,
  <div className="centercard " onDragStart={handleDragStart}>
    <Card
      hoverable
      //   style={{
      //     width: 300,
      //   }}
      className="cardwidth"
      cover={
        <img
          alt="example"
          src="https://jevelin.shufflehound.com/startup-clean/wp-content/uploads/sites/34/2019/03/101_0001_alexandru-acea-bbokzTQjB9o-unsplash1-1024x777.jpg"
        />
      }
      actions={[<p>Read more</p>, <RightOutlined />]}
    >
      <Meta
        title="Looking for colors"
        description="A wonderful serenity has taken possession of my entire soul, 
        like these sweet mornings of spring which I enjoy with my whole heart. 
        I am alone, and feel the charm of existence in this spot, which was created 
        for the bliss of souls like mine....  "
      />
    </Card>
  </div>,
];
function Cards22() {
  return (
    <div>
      <div>
        <AliceCarousel
          disableButtonsControls
          mouseTracking
          items={items}
          responsive={responsive}
          autoPlay="true"
          autoPlayInterval={2000}
        />
      </div>
    </div>
  );
}

export default Cards22;
