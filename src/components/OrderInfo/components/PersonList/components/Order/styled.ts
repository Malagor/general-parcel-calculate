import styled from 'styled-components/macro';

export const OrderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: #f0f0f0;
  border-radius: 10px;
  margin-bottom: 30px;
`;

export const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: flex-start;
  background-color: #e6ffd1;
  padding: 20px;
  border-top-right-radius: 10px;
  border-top-left-radius: 10px;
  box-shadow: 0 0 10px #ddd;
`;

export const OrderList = styled.div`
  width: calc(100% - 40px);
  padding: 20px;
`;
export const OrderPersonName = styled.div`
  font-size: 1.2rem;
  font-weight: bold;
`;

export const DeliveryCheckbox = styled.input.attrs(() => ({
  type: 'checkbox',
}))``;

export const TotalPrice = styled.div`
  //width: 50px;
  display: inline-block;
`;
