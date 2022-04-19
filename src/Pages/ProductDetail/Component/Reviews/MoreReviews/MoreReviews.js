import React from 'react';
import styled from 'styled-components';
import StarIcon from '@mui/icons-material/Star';

const MoreReviews = ({ review }) => {
  const { user, rating, content, created_at, image_url } = review;
  return (
    <ReviewWrapper>
      <FlexRow>
        <FlexRow>
          <StarWrapper>
            <BurgundyStar />
            {rating}
          </StarWrapper>
          <h2>{user}</h2>
        </FlexRow>
        <div>{created_at}</div>
      </FlexRow>
      <span>{content}</span>
      <ReviewImageWrapper>
        {image_url.map((image, idx) => (
          <li key={idx}>
            <ReviewImage alt="리뷰이미지" src={image} />
          </li>
        ))}
      </ReviewImageWrapper>
    </ReviewWrapper>
  );
};

export default MoreReviews;

const ReviewWrapper = styled.div`
  margin: 10px;
  padding: 10px;
  border: 1px solid gray;
  border-radius: 10px;
`;

const FlexRow = styled.div`
  ${({ theme }) => theme.flexSet('row', 'space-between', 'center')}
`;

const StarWrapper = styled.div`
  ${({ theme }) => theme.flexSet('row', 'center', 'center')}
  width: 40px;
  margin-right: 10px;
  background-color: lightgray;
  border-radius: 10px; ;
`;

const BurgundyStar = styled(StarIcon)`
  color: ${({ theme }) => theme.colors.vintageRed};
`;

const ReviewImageWrapper = styled.ul`
  ${({ theme }) => theme.flexSet('row', '', 'center')}
`;

const ReviewImage = styled.img`
  width: 100px;
  height: 100px;
`;
