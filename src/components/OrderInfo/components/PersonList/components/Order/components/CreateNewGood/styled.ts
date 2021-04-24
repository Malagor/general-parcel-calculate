import styled from 'styled-components/macro';

export const NewGoodWrapper = styled.div`
  display: flex;
  gap: 20px;
  width: 100%;
`;

export const TitleInput = styled.input.attrs(() => ({
  type: 'text',
}))`
  width: 40%;
`;

export const LinkInput = styled.input.attrs(() => ({
  type: 'text',
}))`
  width: 40%;
`;

export const PriceInput = styled.input.attrs(() => ({
  type: 'text',
}))`
  width: 10%;
`;

export const CountInput = styled.input.attrs(() => ({
  type: 'text',
}))`
  width: 10%;
`;
