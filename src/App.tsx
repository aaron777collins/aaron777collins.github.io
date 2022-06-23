import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";
import "./App.scss";
import { Link } from "react-router-dom";

import Navbar from "./components/Navbar";

interface AppProps {
  pageName: string;
}

function App(props: AppProps) {
  return (
    <div className="App">
      <Navbar pageName={props.pageName} />
      <header className="App-header">
        <h1>Aaron Collins</h1>
        <ArrowForwardIosIcon
          className="big-downward-arrow"
          style={{ transform: "rotate(90deg)", width: 60, height: 60 }}
        />
      </header>
      <body className="App-body">
        <p className="align-center">
          More content coming soon..
          <br />
          For now, here's a link to <Link to="/nowhere">nowhere</Link>
        </p>
      </body>
    </div>
  );
}

export default App;
