import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CardActionArea } from '@mui/material';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Rating from '@mui/material/Rating';

const WineSlideCard = ({
  id,
  image,
  name,
  value,
  content,
  price,
  winery,
  description,
}) => {
  const navigate = useNavigate();

  const goToDetailPage = () => {
    navigate(`/products/${id}`);
  };

  const goItemDetailPage = () => {
    goToDetailPage();
    window.location.reload();
  };

  return (
    <StyledCard sx={{ maxWidth: 345 }} onClick={goItemDetailPage}>
      <CardActionArea>
        <CardUpperInfo>
          <ImageContainer>
            <ImageContainerImage alt="wine bottle" src={image} />
          </ImageContainer>
          <StyledCardContent>
            <h1>{name}</h1>
            <Rating name="read-only" value={value} readOnly />
            <StyledTypography variant="body2" color="text.secondary">
              {content}
            </StyledTypography>
          </StyledCardContent>
        </CardUpperInfo>
        <TextCardContent>
          <h1>{price}</h1>
          <p>Winery : {winery}</p>
          <p>{description}</p>
        </TextCardContent>
      </CardActionArea>
    </StyledCard>
  );
};

export default WineSlideCard;

const StyledCard = styled(Card)`
  box-shadow: 1px 1px 10px 3px rgba(0, 0, 0, 0.3);
  margin: 15px;
`;

const CardUpperInfo = styled.div`
  display: flex;
  justify-content: center;
`;

const ImageContainer = styled.div`
  margin: 20px;

  &:hover img {
    transform: scale(1.1);
  }
`;

const ImageContainerImage = styled.img`
  width: 8vw;
  height: 40vh;
`;

const StyledCardContent = styled(CardContent)`
  display: flex;
  flex-direction: column;
  h1 {
    font-size: 20px;
  }
`;

const StyledTypography = styled(Typography)`
  margin-top: 20px;
`;

const TextCardContent = styled(CardContent)`
  p {
    font-size: 15px;
  }
`;
