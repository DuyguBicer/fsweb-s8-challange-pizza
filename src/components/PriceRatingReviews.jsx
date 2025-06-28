import React from 'react'
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 1rem;
`;

const Price = styled.div`
  font-size: 1.8rem;
  font-weight: bold;
`;

const RatingWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  font-size: 1rem;
  color: #555;
`;


function PriceRatingReviews({ price, rating, reviews }) {


  return (
    <Container>
      <Price>{price.toFixed(2)}₺</Price>
      <RatingWrapper>
        <span>{rating}</span>
        <span>({reviews})</span>
      </RatingWrapper>


    </Container>
  )
}

export default PriceRatingReviews