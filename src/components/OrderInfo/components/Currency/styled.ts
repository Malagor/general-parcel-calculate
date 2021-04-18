import styled from 'styled-components/macro';

export const CurrencyWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const CurrencyInput = styled.input`
  width: 50px;
  margin: 0 20px;
`;

export const CurrencyRate = styled.div`
  display: inline-block;
  margin: 0 20px;
`;

export const CurrencyError = styled.div`
  color: red;
  width: 100%;
  flex-basis: 100%;
`;

export const ButtonBlock = styled.div`
  display: flex;
  gap: 20px;
`;
