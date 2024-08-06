import React from "react";
import ReactDOM from "react-dom/client";
import App from "./app/App.tsx";
import { GlobalStyle } from "./app/styles/styled.ts";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <GlobalStyle />
    <App />
  </React.StrictMode>
);
