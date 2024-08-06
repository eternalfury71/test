import styled, { createGlobalStyle } from "styled-components";

const PADDING = 32;

export const GlobalStyle = createGlobalStyle`
 body {
  background-color: #f7f7f8;
 }
`;
export const Main = styled.main`
  max-width: 1360px;
  margin-left: auto;
  margin-right: auto;
  padding-left: ${PADDING}px;
  padding-right: ${PADDING}px;
`;

export const Container = styled.section`
  padding-top: ${PADDING}px;
  padding-bottom: ${PADDING}px;
`;
