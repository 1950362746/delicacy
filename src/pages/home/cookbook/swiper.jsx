import React, { Component } from "react";
import { Carousel } from "antd-mobile";
import swiper01 from "assets/img/swiper-1.png";
import swiper02 from "assets/img/swiper-2.jpeg";
import swiper03 from "assets/img/swiper-3.jpeg";
import { SwiperWrap } from "./styledCookbook";

export default class Swiper extends Component {
  render() {
    return (
      <SwiperWrap>
        <Carousel
          autoplay={false}
          infinite
          beforeChange={(from, to) =>
            console.log(`slide from ${from} to ${to}`)
          }
          afterChange={(index) => console.log("slide to", index)}
        >
          <img src={swiper01} />
          <img src={swiper02} />
          <img src={swiper03} />
        </Carousel>
      </SwiperWrap>
    );
  }
}
