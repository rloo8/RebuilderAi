import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styled from "styled-components";

const SlideImg = styled.img`
  width: 100%;
  height: 200%;
  padding: 10px;
`;

function SlideComponent() {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize(); // 초기 렌더링 시 실행
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  var settings = {
    infinite: true,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: false,
    speed: 1500,
  };
  return (
    <div className="slider-container">
      <Slider {...settings}>
        <div>
          <SlideImg src="https://rloo8.github.io/RebuilderAi/image/slide1.png" />
        </div>
        <div>
          <SlideImg src="https://rloo8.github.io/RebuilderAi/image/slide2.png" />
        </div>
        <div>
          <SlideImg src="https://rloo8.github.io/RebuilderAi/image/slide3.png" />
        </div>
        <div>
          <SlideImg src="https://rloo8.github.io/RebuilderAi/image/slide4.png" />
        </div>
        <div>
          <SlideImg src="https://rloo8.github.io/RebuilderAi/image/slide1.png" />
        </div>
        <div>
          <SlideImg src="https://rloo8.github.io/RebuilderAi/image/slide2.png" />
        </div>
        <div>
          <SlideImg src="https://rloo8.github.io/RebuilderAi/image/slide3.png" />
        </div>
        <div>
          <SlideImg src="https://rloo8.github.io/RebuilderAi/image/slide4.png" />
        </div>
      </Slider>
    </div>
  );
}

export default SlideComponent;
