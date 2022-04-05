import Icon from '@mui/material/Icon/Icon';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React from 'react';
import './App.scss';

function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Aaron Collins</h1>
        <ArrowForwardIosIcon className = "big-downward-arrow" style={{ transform: 'rotate(90deg)', width: 60, height: 60}}/>
      </header>
      <body className="App-body">
          <p>Paras stufffs</p>
      </body>
    </div>
  );
}

export default App;

