import React from 'react';
import styled from 'styled-components';
import BottomCard from './BottomCard';
import ImageSlide from './ImageSlide';
import WineSlide from './WineSlide';

const Main = () => {
  return (
    <MainContainer>
      <WineSlide />
      <ImageSlide />
      <MainBottomContainer>
        <MainBottom>
          {MAIN_BOTTOM_INFO.map(list => (
            <BottomCard
              key={list.key}
              title={list.title}
              content={list.content}
              image={list.image}
            />
          ))}
        </MainBottom>
      </MainBottomContainer>
    </MainContainer>
  );
};

export default Main;

const MAIN_BOTTOM_INFO = [
  {
    key: 1,
    title: 'Our History',
    content:
      'Please read these terms of use carefully before using the services offered by Vivino. These terms of use set forth the legally binding terms and conditions for your use of our websites and app. VIVINO ApS is an international online platform facilitator (hereinafter “Vivino”, “we” or us”), providing a platform that enables users (hereinafter singular “User” and plural “Users”) to browse, buy.',
    image: 'bottom-image1.jpg',
  },
  {
    key: 2,
    title: 'About Us',
    content:
      'Wine is about so much more than just a great label; it’s about an experience and community and, of course, what’s in the bottle. That’s where Vivino comes in. As the world’s largest online wine marketplace and most downloaded wine app, the Vivino community is made up of millions of wine drinkers from around the world, coming together to make buying the right wine simple, straightforward, and fun.',
    image: 'bottom-image2.jpg',
  },
  {
    key: 3,
    title: 'Careers',
    content:
      'We’re Vivino, the people on a mission to democratize wine. Our market-leading app guides millions of users through a journey of discovery of new vineyards and vintages. We’re on a journey too – to keep innovating, expanding and sharing our passion with the world. Vivino’s future is overflowing with potential. We’d love you to be a part of it. Explore the opportunities to come and grow with us.',
    image: 'bottom-image3.jpg',
  },
];

const MainBottomContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px;
`;

const MainBottom = styled.div`
  width: 70%;
  display: flex;
  justify-content: space-around;
  padding: 50px 0;
`;
const MainContainer = styled.main``;
