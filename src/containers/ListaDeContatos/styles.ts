import styled from "styled-components";

export const Main = styled.main`
  color: #ccc;
  background-color: #30374f;
  padding: 16px 64px;
  height: 100dvh;
  overflow-y: scroll;
`;

export const Conteudo = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 1rem;
  height: 84dvh;
  overflow-y: scroll;
  margin-top: 24px;

  &::-webkit-scrollbar {
    display: none;
  }
`;

export const Titulo = styled.h2`
  display: block;
  margin-top: 40px;
  margin-bottom: 40px;
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;
