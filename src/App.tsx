import React from "react";
import "./App.css";
import Page from "./components/Page";
import { createGlobalStyle } from "styled-components";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  useParams,
} from "react-router-dom";

import "@fontsource/manrope/400.css";
import "@fontsource/manrope/600.css";
import "@fontsource/manrope/800.css";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'Manrope', sans-serif;
  }
`;

export type ThemeProps = {
  themeId?: string;
};

export const Theme: React.FC<ThemeProps> = ({ themeId = "1" }) => {
  return <div>Selected theme: {themeId}</div>;
};

function App() {
  return (
    <Router>
      <GlobalStyle />
      <Routes>
        <Route path="/theme/:themeId" element={<Page />} />
        <Route index path="/" element={<Page />} />
      </Routes>
    </Router>
  );
}

export default App;
