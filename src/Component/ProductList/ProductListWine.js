import React, { useState, useEffect } from 'react';
import ProductListWineInner from './ProductListWineInner';
import styled from 'styled-components';

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
`;

const ProductListWine = () => {
  const [wineCardData, setWineCardData] = useState([]);

  const getWineCardData = () => {
    fetch('http://localhost:3000/data/tempmock.json', {
      method: 'GET',
    })
      .then(res => res.json())
      .then(res => setWineCardData(res));
  };

  useEffect(() => {
    getWineCardData();
  }, []);

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
              name={name}
              price={price}
              country={country}
              winery={winery}
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
