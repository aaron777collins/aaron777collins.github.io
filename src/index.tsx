import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HashRouter, Route, Routes } from 'react-router-dom';
import NoPage from './NoPage/NoPage';
import { Helmet } from 'react-helmet';

ReactDOM.render(
  <React.StrictMode>
    <Helmet>
      <title>Aaron Collins - Portfolio</title>
      <meta name="description" content="A small portfolio showcasing Aaron Collins" />
      <meta name="theme-color" media="(prefers-color-scheme: dark)" content="#282c34" />
    </Helmet>
    <HashRouter>
      <Routes>
          <Route path="/" element={<App/>}/>
          <Route path="/home" element={<App/>}/>
          <Route path="*" element={<NoPage/>}/>
          <Route/>
      </Routes>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
