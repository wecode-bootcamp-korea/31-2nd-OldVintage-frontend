import React from 'react';
import styled from 'styled-components';

const Parings = ({ pairings, image }) => {
  return (
    <div>
      <ParingsWrapper>
        <ParingDefinition>
          <h1>Food that goes well with this wine</h1>
          <span>
            Our wine experts think this Southern Italy Primitivo wine would be a
            match made in heaven with these dishes. Bon appétit!
          </span>
        </ParingDefinition>
        <WineBottle src={image} />
        <Foods>
          {pairings.map((pairing, idx) => (
            <Food key={idx}>
              <img
                src={Object.values(pairing).toString()}
                alt="음식종류이미지"
              />
              <span>{Object.keys(pairing).toString()}</span>
            </Food>
          ))}
        </Foods>
      </ParingsWrapper>
    </div>
  );
};

export default Parings;

const ParingsWrapper = styled.section`
  ${({ theme }) => theme.flexSet('row', 'center', 'center')}

  @media (max-width: 480px) {
    ${({ theme }) => theme.flexSet('column', 'center', 'center')}
  }
`;

const ParingDefinition = styled.div`
  ${({ theme }) => theme.flexSet('column', '', '')}
  width:30vw;
`;

const WineBottle = styled.img`
  margin: 3vw;
  width: 6vw;

  @media (max-width: 768px) {
    display: none;
  }
`;

const Foods = styled.div`
  ${({ theme }) => theme.flexSet('row', 'center', '')}
  flex-wrap: wrap;
  width: 50vw;
  @media (max-width: 1024px) {
    width: 30vw;
  }
`;

const Food = styled.div`
  ${({ theme }) => theme.flexSet('column', '', 'center')}

  img {
    margin: 2vw;
    width: 100px;
    height: auto;
  }
`;
