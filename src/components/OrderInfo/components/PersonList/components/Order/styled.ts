import styled from 'styled-components/macro';

export const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
  margin-bottom: 10px;
`;

export const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: flex-start;
`;

export const OrderList = styled.div`
  width: 100%;
`;

export const DeliveryCheckbox = styled.input.attrs(() => ({
  type: 'checkbox',
}))``;

export const TotalPrice = styled.div`
  width: 50px;
  display: inline-block;
`;
