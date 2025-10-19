import styled, { createGlobalStyle } from "styled-components";

const EstiloGlobal = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
    list-style: none;
  }
`;

export const Container = styled.div`
  display: grid;
  grid-template-columns: 224px auto;
`;

export const Campo = styled.input`
  padding: 8px;
  background-color: #fff;
  border-radius: 4px;
  font-weight: bold;
  color: #000000ff;
  border-color: #000000ff;
  width: 100%;
`;

export default EstiloGlobal;
