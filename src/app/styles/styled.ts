import styled, { createGlobalStyle } from "styled-components";

const PADDING = 32;
const MAX_WIDTH = 1360;

export const GlobalStyle = createGlobalStyle`
 body {
  background-color: #f7f7f8;
  font-family: Arial, sans-serif;
  box-sizing: border-box;
 }
`;
export const Main = styled.main`
  max-width: ${MAX_WIDTH}px;
  margin: 0 auto;
  padding: 0 ${PADDING}px;
  @media (max-width: 768px) {
    padding: 0 16px;
  }
`;

export const Container = styled.section`
  padding: ${PADDING}px 0;

  @media (max-width: 768px) {
    padding: 16px 0;
  }
`;
