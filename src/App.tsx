import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React from 'react';
import './App.scss';
import { Link } from 'react-router-dom';
import DynamicSideNav from './DynamicSideNav/DynamicSideNav';
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <DynamicSideNav></DynamicSideNav>
        <h1>Aaron Collins</h1>
        <ArrowForwardIosIcon className = "big-downward-arrow" style={{ transform: 'rotate(90deg)', width: 60, height: 60}}/>
      </header>
      <body className="App-body">
          <p className='align-center'>More content coming soon..<br/>For now, here's a link to <Link to="/nowhere">nowhere</Link></p>
      </body>
    </div>
  );
}

export default App;

