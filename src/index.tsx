import React from "react";
import ReactDOM from "react-dom";
import "./index.scss";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { HashRouter, Route, Routes } from "react-router-dom";
import NoPage from "./pages/NoPage/NoPage";
import { Helmet } from "react-helmet";
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";
import About from "./pages/About/About";
import Construction from "./pages/Construction/Construction";
import { red } from "@mui/material/colors";
import { DEFAULT_THEME } from "./Themes/Themes";
import Redirect from "./components/Redirect";

let PAGES_ARR = ["Home", "About", "Resume", "Projects", "Contact"];

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>Aaron Collins - Portfolio</title>
      <meta
        name="description"
        content="A small portfolio showcasing Aaron Collins"
      />
      <meta
        name="theme-color"
        media="(prefers-color-scheme: dark)"
        content="#282c34"
      />
    </Helmet>
    <ThemeProvider theme={DEFAULT_THEME}>
      <HashRouter>
        <Routes>
          <Route path="/" element={<App pageName="Home" pages={PAGES_ARR} />} />
          <Route
            path={`/home`}
            element={<App pageName="Home" pages={PAGES_ARR} />}
          />
          ;
          <Route path={`/about`} element={<About pages={PAGES_ARR} />} />;
          <Route
            path={`/resume`}
            element={
              <Redirect url="https://docs.google.com/document/d/1op2BEdfIQhRNANStFQqwkfgy3Gb24to1nuZ4nRLFEW8/edit?usp=sharing" />
            }
          />
          ;
          <Route
            path={`/projects`}
            element={
              <Redirect url="https://github.com/aaron777collins?tab=repositories" />
            }
          />
          ;
          <Route
            path={`/contact`}
            element={
              <Redirect url="https://www.linkedin.com/in/aaron-collins-ab70511b7/" />
            }
          />
          ;
          <Route path="*" element={<NoPage pages={PAGES_ARR} />} />
          <Route />
        </Routes>
      </HashRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
