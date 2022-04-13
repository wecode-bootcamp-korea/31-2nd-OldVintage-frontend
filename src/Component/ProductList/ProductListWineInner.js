import React from 'react';
import styled from 'styled-components';
import { Rating } from '@mui/material';
import WineTasteSlider from './WineTasteSlider';

const WineInner = styled.div`
  display: flex;
  padding: 1vh 0.7vw 1vh 0.7vw;
`;

const WineLeftInner = styled.div`
  width: 20%;
`;

const WineCenterInner = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
`;

const WineRightInner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 30%;
`;

const WineBottleImage = styled.img``;

const WineNameString = styled.span`
  padding: 0 0 2vh 0;
  font-size: 30px;
`;

const WineReigionString = styled.span`
  margin: 0 0 1.5vh 0;
  font-size: 20px;
`;

const WineRatingArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 5vh 0 3vh 2vw;
`;

const WineRatingNumber = styled.span`
  font-size: 30px;
`;

const WineRatingStar = styled(Rating)`
  color: ${({ theme }) => theme.colors.vintageRed};
`;

const WineRatingPeopleNumber = styled.span`
  margin: 2vh 0 0 0;
`;

const WinePrice = styled.span`
  margin: 7vh 0 0 0;
  font-size: 25px;
`;

const ProductListWineInner = ({
  name,
  price,
  country,
  winery,
  imgUrl,
  score,
  reviewerNumber,
  bold,
  tannic,
  sweet,
  acidic,
}) => {
  return (
    <WineInner>
      <WineLeftInner>
        <WineBottleImage src={imgUrl} />
      </WineLeftInner>

      <WineCenterInner>
        <WineNameString>{name}</WineNameString>
        <WineReigionString>{`${country}, ${winery}`}</WineReigionString>
        <WineTasteSlider
          bold={bold}
          tannic={tannic}
          sweet={sweet}
          acidic={acidic}
        />
      </WineCenterInner>

      <WineRightInner>
        <WineRatingArea>
          <WineRatingNumber>{score}</WineRatingNumber>
          <WineRatingStar value={score} precision={0.1} readOnly />
          <WineRatingPeopleNumber>{`${reviewerNumber} ratings`}</WineRatingPeopleNumber>
          <WinePrice>₩{`${Math.ceil(price)}`}</WinePrice>
        </WineRatingArea>
      </WineRightInner>
    </WineInner>
  );
};

export default ProductListWineInner;
