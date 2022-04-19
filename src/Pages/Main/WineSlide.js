import React from 'react';
import styled from 'styled-components';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import WineSlideCard from './WineSlideCard';

const WineSlide = () => {
  const settings = {
    infinite: true,
    slidesToShow: 4,
    slideToScroll: 2,
    autoplay: true,
    autoplaySpeed: 2500,
    pauseOnHover: true,
  };

  return (
    <WineSlideContainer>
      <TitleBox>
        <h1>All Time Loved Wines</h1>
        <h2>Best For Everyone</h2>
      </TitleBox>
      <StyledSlider {...settings}>
        {BEST_WINE_DATA.map(list => (
          <WineSlideCard
            key={list.key}
            image={list.image}
            name={list.name}
            value={list.value}
            content={list.content}
            price={list.price}
            winery={list.winery}
            description={list.description}
          />
        ))}
      </StyledSlider>
    </WineSlideContainer>
  );
};

export default WineSlide;

const BEST_WINE_DATA = [
  {
    key: 1,
    image: 'https://i.ibb.co/pr3CGw4/1-Aglion.png',
    name: 'Aglion',
    value: 4,
    content:
      'Selecting our overall best wine was no easy task but this 2016 Malbec is sure to be a winner no matter who’s pouring it.',
    price: '₩63,756',
    winery: 'Hereseibe',
    description: 'Grape : Malbec / Type : Red',
  },
  {
    key: 2,
    image: 'https://i.ibb.co/yyLJPZs/2-Doirpase.png',
    name: 'Doirpase',
    value: 5,
    content:
      'An extremely highly-rated wine, Sine Qua Non proved its expertise again with its 2006 Syrah. This is one of the most premium wines produced in California and comes with the price tag to match.',
    price: '₩38,327',
    winery: 'Kennolith',
    description: 'Grape : CabernetSauvignon / Type : Red',
  },
  {
    key: 3,
    image: 'https://i.ibb.co/nnH8MBQ/3-Lorenthe.png',
    name: 'Lorenthe',
    value: 5,
    content:
      'Fresh and balanced, Grgich Hills produces distinctive wines and its 2016 Chardonnay is just that at an accessible price.',
    price: '₩95,236',
    winery: 'Meraufroid',
    description: 'Grape : Montepulciano / Type : Red',
  },
  {
    key: 4,
    image: 'https://i.ibb.co/3s1yF7G/4-Rinias.png',
    name: 'Rinias',
    value: 3,
    content:
      'Screaming Eagle is a name you’ll hear again and again when talking about high quality wine and takes the top spot for producing premium quality Cabernet Sauvignon.',
    price: '₩136,458',
    winery: 'Oaytheldan',
    description: 'Grape : Chardonnay / Type : Red',
  },
  {
    key: 5,
    image: 'https://i.ibb.co/sJ2qp54/5-Agmunrad.png',
    name: 'Agmunrad',
    value: 4,
    content:
      'Martha’s Vineyard is known for its unique microclimate and 2014 was an especially strong year for its grapes.',
    price: '₩20,580',
    winery: 'Pradwinus',
    description: 'Grape : Malbec / Type : Red',
  },
  {
    key: 6,
    image: 'https://i.ibb.co/d2YcgGh/6-Eloths.png',
    name: 'Eloths',
    value: 5,
    content:
      'Think of a good Merlot and Masseto should come to mind. If it doesn’t, then it probably will once you’ve sampled the brand.',
    price: '₩52,024',
    winery: 'Dongtan',
    description: 'Grape : CabernetSauvignon / Type : Red',
  },
  {
    key: 7,
    image: 'https://i.ibb.co/NT7LDNT/7-Lunguara.png',
    name: 'Lunguara',
    value: 2,
    content:
      'A good Pinot Noir is typically light to medium-bodied and fruit-forward and Wayfarer’s 2014 Golden Mean offers exactly that.',
    price: '₩89,115',
    winery: 'Hereseibe',
    description: 'Grape : Montepulciano / Type : Red',
  },
  {
    key: 8,
    image: 'https://i.ibb.co/YLRMm2x/8-Sippele.png',
    name: 'Sippele',
    value: 3,
    content:
      'The 2016 Rochioli Vineyard Chardonnay is a favourite wine for many; beautifully crafted with a wide range of dancing flavours and aromas.',
    price: '₩143,273',
    winery: 'Kennolith',
    description: 'Grape : Chardonnay / Type : Red',
  },
  {
    key: 9,
    image: 'https://i.ibb.co/YZhPmSW/9-Areton.png',
    name: 'Areton',
    value: 4,
    content:
      'Cloudy Bay has made a name for its fresh and intense wines and a favourite among lovers of the brand is its 2019 Sauvignon Blanc.',
    price: '₩106,396',
    winery: 'Meraufroid',
    description: 'Grape : CabernetSauvignon / Type : Red',
  },
  {
    key: 10,
    image: 'https://i.ibb.co/rFx68S1/10-Endabad.png',
    name: 'Endabad',
    value: 4,
    content:
      'The Friuli Colli Orientali region in Northeastern Italy is famed for its extraordinary wines and one of its unmissable bottles is Terlato Family Vineyards’ 2018 Friuli Pinot Grigio.',
    price: '₩67,740',
    winery: 'Meraufroid',
    description: 'Grape : Montepulciano / Type : Red',
  },
];

const WineSlideContainer = styled.div`
  padding: 90px 200px 70px 200px;
`;

const TitleBox = styled.div`
  margin-bottom: 50px;
  h1 {
    font-size: 60px;
  }
  h2 {
    font-size: 30px;
  }
`;

const StyledSlider = styled(Slider)``;
