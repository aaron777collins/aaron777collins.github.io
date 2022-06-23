import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes } from 'react-router-dom';
import NoPage from './pages/NoPage/NoPage';
import { Helmet } from 'react-helmet';
import { createTheme } from "@mui/material/styles";
import { ThemeProvider } from "@emotion/react";

const darkTheme = createTheme({
  palette: {
    mode: "dark",
  },
});

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>Aaron Collins - Portfolio</title>
      <meta name="description" content="A small portfolio showcasing Aaron Collins" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#282c34" />
    </Helmet>
    <ThemeProvider theme={darkTheme}>
    <HashRouter>
      <Routes>
          <Route path="/" element={<App pageName="Home"/>}/>
          <Route path="/home" element={<App pageName="Home"/>}/>
          <Route path="*" element={<NoPage/>}/>
          <Route/>
      </Routes>
    </HashRouter>
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
