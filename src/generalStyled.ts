import styled from 'styled-components/macro';

export const Button = styled.button<{ color?: string }>`
  background: ${({ color }) => color || '#df8585'};
  box-shadow: 0 5px 6px 1px rgba(0, 0, 0, 0.25),
    inset 0px -4px 4px rgba(0, 0, 0, 0.25),
    inset 0px 4px 4px rgba(255, 254, 254, 0.55);
  border-radius: 21px;
  border: none;
  //font-family: 'Montserrat', sans-serif;

  padding: 5px 10px;
  font-style: normal;
  font-weight: bold;
  font-size: 0.8rem;
  line-height: 0.8rem;
  display: flex;
  align-items: center;
  text-align: center;
  text-transform: uppercase;
  outline: none;
  cursor: pointer;

  color: #ffffff;
`;
