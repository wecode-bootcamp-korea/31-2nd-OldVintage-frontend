import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const ImageSlide = () => {
  const settings = {
    fade: true,
    infinite: true,
    speed: 2500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
  };

  return (
    <ImageSlideContainer>
      <Slider {...settings}>
        <div>
          <Image>
            <img alt="wine" src="/images/main/main-bottom-image1.jpg" />
          </Image>
        </div>
        <div>
          <Image>
            <img alt="wine" src="/images/main/main-bottom-image2.jpg" />
          </Image>
        </div>
        <div>
          <Image>
            <img alt="wine" src="/images/main/main-bottom-image3.jpg" />
          </Image>
        </div>
        <div>
          <Image>
            <img alt="wine" src="/images/main/main-bottom-image4.jpg" />
          </Image>
        </div>
        <div>
          <Image>
            <img alt="wine" src="/images/main/main-bottom-image5.jpg" />
          </Image>
        </div>
      </Slider>
      <h1>Discover the Right Wine</h1>
    </ImageSlideContainer>
  );
};

export default ImageSlide;

const ImageSlideContainer = styled.div`
  position: relative;

  h1 {
    position: absolute;
    font-size: 60px;
    z-index: 999;
    top: 33%;
    left: 33%;
    color: white;
  }
`;

const Image = styled.div`
  position: relative;
  height: 300px;
  width: 100%;
  img {
    object-fit: cover;
  }
`;
