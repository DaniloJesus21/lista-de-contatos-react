import styled from "styled-components";

type Props = {
  ativo?: boolean;
};

export const Card = styled.div<Props>`
  padding: 8px;
  border: none;
  background-color: #e0e0e0;

  color: #1b1816ff;
  border-radius: 4px;
  cursor: pointer;
  display: flex;
  justify-content: space-around;
  align-items: center;
  opacity: 1;
  transition: all 0.2s ease;

  &:hover {
    opacity: 0.8;
    transform: scale(0.97);
  }

  ${({ ativo }) =>
    ativo &&
    `
      opacity: 0.8;
      transform: scale(0.97);
    `}
`;

export const Contador = styled.span`
  font-weight: 900;
  font-size: 24px;
  display: block;
`;

export const Label = styled.span`
  font-size: 14px;
  text-transform: capitalize;
  font-weight: 600;
`;

export const Icone = styled.i`
  img {
    height: 30px;
  }
`;
