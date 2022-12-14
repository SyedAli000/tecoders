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
    <a href="https://modest-tereshkova-3f6498.netlify.app/" target="_blank">
      <Card
        hoverable
        //   style={{
        //     width: 300,
        //   }}
        className="cardwidth"
        cover={
          <img
            alt="example"
            src="https://trisage-solution.vercel.app/images/coin.png"
          />
        }
        actions={[<p>Read more</p>, <RightOutlined />]}
      >
        <Meta
          title="Clock 360 (NFT Marketing)"
          description="A wonderful serenity has taken possession of my entire soul, 
        like these sweet mornings of spring which I enjoy with my whole heart. 
        I am alone, and feel the charm of existence in this spot, which was created 
        for the bliss of souls like mine....  "
        />
      </Card>
    </a>
  </div>,
  <div className="centercard " onDragStart={handleDragStart}>
    <a href="http://www.kitabank.com/" target="_blank">
      <Card
        hoverable
        //   style={{
        //     width: 300,
        //   }}
        className="cardwidth"
        cover={
          <img
            alt="example"
            src="https://trisage-solution.vercel.app/images/book.png"
          />
        }
        actions={[<p>Read more</p>, <RightOutlined />]}
      >
        <Meta
          title="KitaBank"
          description="A wonderful serenity has taken possession of my entire soul, 
        like these sweet mornings of spring which I enjoy with my whole heart. 
        I am alone, and feel the charm of existence in this spot, which was created 
        for the bliss of souls like mine....  "
        />
      </Card>
    </a>
  </div>,
  <div className="centercard " onDragStart={handleDragStart}>
    <a href="https://newdigital.vercel.app/" target="_blank">
      <Card
        hoverable
        //   style={{
        //     width: 300,
        //   }}
        className="cardwidth"
        cover={
          <img
            alt="example"
            src="https://trisage-solution.vercel.app/images/crypto.png"
          />
        }
        actions={[<p>Read more</p>, <RightOutlined />]}
      >
        <Meta
          title="Digital Block Exchange"
          description="A wonderful serenity has taken possession of my entire soul, 
        like these sweet mornings of spring which I enjoy with my whole heart. 
        I am alone, and feel the charm of existence in this spot, which was created 
        for the bliss of souls like mine....  "
        />
      </Card>
    </a>
  </div>,
  <div className="centercard " onDragStart={handleDragStart}>
    <a href="https://tender-lewin-90de3c.netlify.app/" target="_blank">
      <Card
        hoverable
        //   style={{
        //     width: 300,
        //   }}
        className="cardwidth"
        cover={
          <img
            alt="example"
            src="https://trisage-solution.vercel.app/images/cozy.png"
          />
        }
        actions={[<p>Read more</p>, <RightOutlined />]}
      >
        <Meta
          title="NFT Marketing"
          description="A wonderful serenity has taken possession of my entire soul, 
        like these sweet mornings of spring which I enjoy with my whole heart. 
        I am alone, and feel the charm of existence in this spot, which was created 
        for the bliss of souls like mine....  "
        />
      </Card>
    </a>
  </div>,
  <div className="centercard " onDragStart={handleDragStart}>
    <a href="https://suspicious-goldwasser-8b7439.netlify.app/" target="_blank">
      <Card
        hoverable
        //   style={{
        //     width: 300,
        //   }}
        className="cardwidth"
        cover={
          <img
            alt="example"
            src="https://trisage-solution.vercel.app/images/draz.png"
          />
        }
        actions={[<p>Read more</p>, <RightOutlined />]}
      >
        <Meta
          title="Trisage E-Commerce"
          description="A wonderful serenity has taken possession of my entire soul, 
        like these sweet mornings of spring which I enjoy with my whole heart. 
        I am alone, and feel the charm of existence in this spot, which was created 
        for the bliss of souls like mine....  "
        />
      </Card>
    </a>
  </div>,
  <div className="centercard " onDragStart={handleDragStart}>
    <a href="https://sikayetbox-fe-v2.vercel.app" target="_blank">
      <Card
        hoverable
        //   style={{
        //     width: 300,
        //   }}
        className="cardwidth"
        cover={
          <img
            alt="example"
            src="https://trisage-solution.vercel.app/images/socail.png"
          />
        }
        actions={[<p>Read more</p>, <RightOutlined />]}
      >
        <Meta
          title="SikayetBox"
          description="A wonderful serenity has taken possession of my entire soul, 
        like these sweet mornings of spring which I enjoy with my whole heart. 
        I am alone, and feel the charm of existence in this spot, which was created 
        for the bliss of souls like mine....  "
        />
      </Card>
    </a>
  </div>,
  <div className="centercard " onDragStart={handleDragStart}>
    <a href="https://the-wall-neon.vercel.app/home" target="_blank">
      <Card
        hoverable
        //   style={{
        //     width: 300,
        //   }}
        className="cardwidth"
        cover={
          <img
            alt="example"
            src="https://trisage-solution.vercel.app/images/cylce.png"
          />
        }
        actions={[<p>Read more</p>, <RightOutlined />]}
      >
        <Meta
          title="SOCIAL DONATING APP"
          description="A wonderful serenity has taken possession of my entire soul, 
        like these sweet mornings of spring which I enjoy with my whole heart. 
        I am alone, and feel the charm of existence in this spot, which was created 
        for the bliss of souls like mine....  "
        />
      </Card>
    </a>
  </div>,
  <div className="centercard " onDragStart={handleDragStart}>
    <a href="https://alt-deck-new-ui-two.vercel.app/" target="_blank">
      <Card
        hoverable
        //   style={{
        //     width: 300,
        //   }}
        className="cardwidth"
        cover={
          <img
            alt="example"
            src="https://trisage-solution.vercel.app/images/market.png"
          />
        }
        actions={[<p>Read more</p>, <RightOutlined />]}
      >
        <Meta
          title="ALT DECK"
          description="A wonderful serenity has taken possession of my entire soul, 
        like these sweet mornings of spring which I enjoy with my whole heart. 
        I am alone, and feel the charm of existence in this spot, which was created 
        for the bliss of souls like mine....  "
        />
      </Card>
    </a>
  </div>,
  <div className="centercard " onDragStart={handleDragStart}>
    <a href="https://mars-market.vercel.app/products" target="_blank">
      <Card
        hoverable
        //   style={{
        //     width: 300,
        //   }}
        className="cardwidth"
        cover={
          <img
            alt="example"
            src="https://trisage-solution.vercel.app/images/store.png"
          />
        }
        actions={[<p>Read more</p>, <RightOutlined />]}
      >
        <Meta
          title="MARS MARKET"
          description="A wonderful serenity has taken possession of my entire soul, 
        like these sweet mornings of spring which I enjoy with my whole heart. 
        I am alone, and feel the charm of existence in this spot, which was created 
        for the bliss of souls like mine....  "
        />
      </Card>
    </a>
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
