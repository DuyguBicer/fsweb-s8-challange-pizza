import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  gap: 2rem;
  align-items: center;
  justify-content: center;
  margin-top: 2rem;
  flex-wrap: wrap;
`;

const QuantityBox = styled.div`
  display: flex;
  align-items: center;
  background-color: #FDC913;
  border-radius: 0.5rem;
  overflow: hidden;
`;

const QuantityButton = styled.button`
  padding: 0.8rem 1.2rem;
  background-color: #FDC913;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const QuantityDisplay = styled.div`
  background-color: white;
  padding: 0.8rem 1.5rem;
  font-weight: bold;
  font-size: 1.2rem;
`;

const SummaryCard = styled.div`
  border: 1px solid #ddd;
  border-radius: 1rem;
  padding: 1rem 2rem;
  min-width: 220px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SummaryTitle = styled.h4`
  font-size: 1.2rem;
  margin-bottom: 1rem;
`;

const SummaryRow = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin: 0.5rem 0;
  font-size: 1rem;
`;

const TotalRow = styled(SummaryRow)`
  color: red;
  font-weight: bold;
`;

const OrderButton = styled.button`
  background-color: #FDC913;
  color: black;
  font-weight: bold;
  font-size: 1rem;
  border: none;
  border-radius: 0 0 1rem 1rem;
  width: 100%;
  padding: 1rem;
  margin-top: 1rem;
  cursor: pointer;

  &:hover {
    background-color: #eab308;
  }
    
  &:disabled {
    background-color: #ccc;
    cursor: not-allowed;
  }
`;

function OrderSummary({ quantity, setQuantity, total, extraPrice, onOrder, isFormValid }) {
  const handleIncrease = () => {
    setQuantity((prev) => prev + 1);
  };

  const handleDecrease = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <Container>
      <QuantityBox>
        <QuantityButton onClick={handleDecrease}>-</QuantityButton>
        <QuantityDisplay>{quantity}</QuantityDisplay>
        <QuantityButton onClick={handleIncrease}>+</QuantityButton>
      </QuantityBox>

      <SummaryCard>
        <SummaryTitle>Sipariş Toplamı</SummaryTitle>
        <SummaryRow>
          <span>Seçimler</span>
          <span>{extraPrice.toFixed(2)}₺</span>
        </SummaryRow>
        <TotalRow>
          <span>Toplam</span>
          <span>{total.toFixed(2)}₺</span>
        </TotalRow>
        <OrderButton onClick={onOrder} disabled={!isFormValid}>SİPARİŞ VER</OrderButton>
      </SummaryCard>
    </Container>
  );
}

export default OrderSummary;