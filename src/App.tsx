import Icon from '@mui/material/Icon/Icon';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import React from 'react';
import './App.scss';
import BottomNav from './BottomNav';
function App() {

  return (
    <div className="App">
      <header className="App-header">
        <h1>Aaron Collins</h1>
        <ArrowForwardIosIcon className = "big-downward-arrow" style={{ transform: 'rotate(90deg)', width: 60, height: 60}}/>
      </header>
      <body className="App-body">
          <p className='align-center'>Paras stufffs</p>
          <div>
            
            {/* <nav>
                <ul id="navigation">
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>
            </nav> */}
        </div>
      </body>
    </div>
  );
}

export default App;

