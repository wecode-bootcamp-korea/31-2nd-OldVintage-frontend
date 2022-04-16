import React, { useState, useEffect } from 'react';
import MoreReviews from './MoreReviews/MoreReviews';
import styled from 'styled-components';
import API from '../../../../config';
import Rating from '@mui/material/Rating';
import StarIcon from '@mui/icons-material/Star';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import WriteReview from './WriteReview/WriteReview';

const Reviews = ({ rating, ratingCounts, scores, params }) => {
  const [reviews, setReviews] = useState([]);
  const [myReview, setMyReview] = useState({
    'MuiRating-visuallyHidden': null,
    content: '',
    images: [],
  });
  const [myReviewImages, setMyReviewImages] = useState([]);
  const [reviewQuery, setReviewQuery] = useState('/reviews?offset=0&limit=10');

  const loadReviews = () => {
    fetch(API.product + params + reviewQuery)
      .then(response => response.json())
      .then(data => {
        setReviews(data.result.review);
      });
  };

  const updateReview = e => {
    setMyReview(() => ({ ...myReview, [e.target.className]: e.target.value }));
  };
  const updateReviewImages = e => {
    setMyReviewImages(e.target.files);
  };
  const uploadReview = e => {
    e.preventDefault();
    const formdata = new FormData();

    for (let i of myReviewImages) {
      formdata.append('images', i);
    }

    formdata.append('product_id', params);
    formdata.append('rating', myReview['MuiRating-visuallyHidden']);
    formdata.append('content', myReview.content);

    fetch(API.reviews, {
      method: 'POST',
      headers: {
        Authorization:
          'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MX0.hc30U7BHMoFXG2VbBlvLMvwy-Bok_CQScr44KWCVEj8',
      },
      body: formdata,
    })
      .then(response => {
        if (response.ok) {
          alert('리뷰 작성이 완료되었습니다.');
        } else {
          throw new Error('Unexpected Error');
        }
      })
      .catch(error => {
        alert(error.message);
      });
  };

  useEffect(() => {
    loadReviews();
  }, [reviewQuery]);

  return (
    <ReviewSection>
      <WriteReviewWrapper>
        <h1>Community review</h1>
        <WriteReview
          updateReview={updateReview}
          updateReviewImages={updateReviewImages}
          uploadReview={uploadReview}
        />
      </WriteReviewWrapper>
      <FlexRow>
        <ReviewsWrapper>
          {reviews.id !== '' &&
            reviews.map(review => (
              <MoreReviews key={review.id} review={review} />
            ))}
        </ReviewsWrapper>
        <ReviewSummary>
          <span>{rating}</span>
          <Rating value={rating} precision={0.1} readOnly />
          <span>{ratingCounts}</span>
          <ul>
            <RankList>
              <BurgundyStar />
              <BurgundyStar />
              <BurgundyStar />
              <BurgundyStar />
              <BurgundyStar />
              {scores.five}
            </RankList>
            <RankList>
              <BurgundyStar />
              <BurgundyStar />
              <BurgundyStar />
              <BurgundyStar />
              <StarBorderIcon />
              {scores.four}
            </RankList>
            <RankList>
              <BurgundyStar />
              <BurgundyStar />
              <BurgundyStar />
              <StarBorderIcon />
              <StarBorderIcon />
              {scores.three}
            </RankList>
            <RankList>
              <BurgundyStar />
              <BurgundyStar />
              <StarBorderIcon />
              <StarBorderIcon />
              <StarBorderIcon />
              {scores.two}
            </RankList>
            <RankList>
              <BurgundyStar />
              <StarBorderIcon />
              <StarBorderIcon />
              <StarBorderIcon />
              <StarBorderIcon />
              {scores.one}
            </RankList>
          </ul>
        </ReviewSummary>
      </FlexRow>
    </ReviewSection>
  );
};

export default Reviews;

const ReviewSection = styled.section``;

const WriteReviewWrapper = styled.div`
  ${({ theme }) => theme.flexSet('column', '', 'center')}
`;
const FlexRow = styled.div`
  ${({ theme }) => theme.flexSet('row', 'center', 'top')}
`;
const ReviewsWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  width: 75vw;
`;
const ReviewSummary = styled.div`
  ${({ theme }) => theme.flexSet('column', '', 'center')}
  margin-left:10px
`;

const RankList = styled.li`
  ${({ theme }) => theme.flexSet('row', '', 'center')}
`;

const BurgundyStar = styled(StarIcon)`
  color: ${({ theme }) => theme.colors.vintageRed};
`;
