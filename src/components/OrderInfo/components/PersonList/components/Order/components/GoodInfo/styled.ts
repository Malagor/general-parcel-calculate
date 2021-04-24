import styled from 'styled-components/macro';

export const GoodInfoWrapper = styled.div`
  display: flex;
  align-items: flex-start;
  gap: 20px;
  &:nth-child(odd) {
    background: #f1f1f1;
  }
`;

export const GoodTitle = styled.div`
  width: 40%;
  word-break: break-word;
`;

export const GoodLink = styled.a`
  text-decoration: none;
  width: 40%;
  word-break: break-word;
`;

export const GoodPrice = styled.div`
  width: 10%;
  text-align: center;
`;

export const GoodCount = styled.div`
  width: 10%;
  text-align: center;
`;
