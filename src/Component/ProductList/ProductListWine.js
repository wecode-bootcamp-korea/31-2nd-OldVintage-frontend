import React from 'react';
import ProductListWineInner from './ProductListWineInner';
import styled from 'styled-components';

const ProductListWine = ({ wineCardData }) => {
  return (
    <WineCardList>
      {wineCardData.map(
        ({
          id,
          name,
          price,
          country,
          winery,
          image_url,
          review,
          bold,
          tannic,
          sweet,
          acidic,
        }) => (
          <WineCard key={id}>
            <ProductListWineInner
              key={id}
              id={id}
              name={name}
              price={price}
              country={country.name}
              winery={winery.name}
              imgUrl={image_url}
              score={review.rating_score}
              reviewerNumber={review.rating_count}
              bold={bold}
              tannic={tannic}
              sweet={sweet}
              acidic={acidic}
            />
          </WineCard>
        )
      )}
    </WineCardList>
  );
};

export default ProductListWine;

const WineCardList = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const WineCard = styled.div`
  margin: 0 0 5vh 0;
  border: 1px solid rgb(188, 188, 188, 0.7);
  border-radius: 20px;
  background-color: white;

  &:hover {
    cursor: pointer;
  }
`;
