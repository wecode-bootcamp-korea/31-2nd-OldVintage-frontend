import React, { useRef, useEffect } from 'react';
import styled from 'styled-components';

const WineryInfo = ({ winery }) => {
  const {
    name,
    address,
    latitude,
    longitude,
    description,
    rating,
    quantity,
    country,
  } = winery;

  const mapRef = useRef();

  useEffect(() => {
    new window.google.maps.Map(mapRef.current, {
      center: { lat: Number(latitude), lng: Number(longitude) },
      zoom: 8,
    });
  }, [latitude, longitude]);

  return (
    <WineryWrapper>
      <h1>About {name} winery</h1>
      <Wrapper>
        <WinerySummary>
          <span>
            they manufacture {quantity} wines. people loves their wines then,
            rated {rating} scores.{description}
          </span>
          <span>Country : {country}</span>
          <span>Contact us : {address}</span>
        </WinerySummary>
        <div style={{ width: '500px', height: '500px' }} ref={mapRef} />
      </Wrapper>
    </WineryWrapper>
  );
};
export default WineryInfo;

const WineryWrapper = styled.section``;
const Wrapper = styled.div`
  ${({ theme }) => theme.flexSet('row', '', '')}

  @media(min-width:1680px) {
    ${({ theme }) => theme.flexSet('column', '', '')}
  }
`;
const WinerySummary = styled.div`
  ${({ theme }) => theme.flexSet('column', '', '')}
  width:50vw;
  padding: 10px;
`;
