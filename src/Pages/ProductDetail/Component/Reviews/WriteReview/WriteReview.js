import React from 'react';
import { Rating } from '@mui/material';
import styled from 'styled-components';

const WriteReview = ({ updateReview, uploadReview }) => {
  return (
    <Wrapper>
      <Blank>
        <Rating precision={1} onChange={updateReview} />
        <input className="content" type="text" onChange={updateReview} />
        <input
          className="images"
          type="file"
          accept="img/*"
          onChange={updateReview}
          multiple
        />
      </Blank>
      <button onClick={uploadReview}>Submit</button>
    </Wrapper>
  );
};

export default WriteReview;

const Wrapper = styled.form`
  ${({ theme }) => theme.flexSet('row', 'center', '')}
  padding: 10px;
  border: 1px solid gray;
  border-radius: 10px;
`;

const Blank = styled.div`
  ${({ theme }) => theme.flexSet('column', 'center', 'center')}

  .content {
    width: 80vw;
    border: 1px solid gray;
    height: 30px;
  }
  input {
    width: 100%;
    margin: 0 5px 5px 0;
  }
`;
