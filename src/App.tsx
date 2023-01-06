import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import React from "react";
import "./App.scss";
import { Link } from "react-router-dom";

import Navbar from "./components/Navbar";
import {
  Box,
  Button,
  Card,
  CardActions,
  styled,
  Typography,
} from "@mui/material";

interface AppProps {
  pageName: string;
  pages: string[];
}

function App(props: AppProps) {
  const PurpleButton = styled(Button)(({ theme }) => ({
    fontSize: "40px",
    margin: "2em 1em 0 1em",
  }));

  return (
    <div className="">
      <Navbar pageName={props.pageName} pages={props.pages} />
      <div className="app-body">
        <div className="gradient"></div>

        <Box sx={{ color: "white"}}>
          <Box>
            <Typography variant="h1" sx={{textAlign: "center"}}>Aaron Collins</Typography>
          </Box>
          <Box>
          <PurpleButton color="secondary" variant="contained">
                <Link
                  style={{ color: "inherit", textDecoration: "None" }}
                  to="/about"
                >
                  About
                </Link>
              </PurpleButton>
              <PurpleButton color="secondary" variant="contained">
                <Link
                  style={{ color: "inherit", textDecoration: "None" }}
                  to="/resume"
                >
                  Resume
                </Link>
              </PurpleButton>
          </Box>
        </Box>
        {/* <div className="App-header">
          <Card sx={{ padding: "150px 120px 150px 120px" }}>
            <Typography
              variant="h1"
              fontSize={150}
              fontFamily="sans-serif"
              fontStyle="unset"
            >
              Aaron Collins
            </Typography>
            <CardActions
              sx={{
                width: "100%",
                alignItems: "center",
                alignContent: "center",
                justifyItems: "center",
                justifyContent: "center",
              }}
            >
              <PurpleButton color="secondary" variant="contained">
                <Link
                  style={{ color: "inherit", textDecoration: "None" }}
                  to="/about"
                >
                  About
                </Link>
              </PurpleButton>
              <PurpleButton color="secondary" variant="contained">
                <Link
                  style={{ color: "inherit", textDecoration: "None" }}
                  to="/resume"
                >
                  Resume
                </Link>
              </PurpleButton>
            </CardActions>
          </Card>
        </div> */}
      </div>
    </div>
  );
}

export default App;
