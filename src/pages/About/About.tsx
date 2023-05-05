import {
  Box,
  Button,
  Card,
  CardActionArea,
  CardActions,
  Container,
  createTheme,
  Grid,
  Link,
  Paper,
  styled,
  ThemeProvider,
  Typography,
} from "@mui/material";
import * as React from "react";
import Navbar from "../../components/Navbar";
import { PaddedCard } from "../../components/PaddedCard";
import { PAPER_THEME } from "../../Themes/Themes";
import "./About.scss";
import Contact from "./Contact/Contact";
import Interests from "./Interests/Interests";
import Roles from "./Roles/Roles";

export interface IAboutProps {
  pages: string[];
}

export default function About(props: IAboutProps) {
  return (
    <div className="about-page">
      <Navbar pageName={"About"} pages={props.pages} />
      <Box className="mobile" sx={{ display: { xs: "none", lg: "block" } }}>
        <Box className="about-header">
          <Typography
            className="black"
            variant="h1"
            sx={{ padding: "20px 0px 0px 0px" }}
          >
            About
          </Typography>
        </Box>
        <Box className="about-body">
          {/* <div className="round-container"> */}
          <div className="round-container">
            <ThemeProvider theme={PAPER_THEME}>
              {/* create grid layout using mui cards */}
              <Grid container spacing={3}>
                {/* left column */}
                <Grid container item xs={7} spacing={3}>
                  <Grid item xs={12}>
                    <Roles />
                  </Grid>
                  <Grid item xs={12}>
                    <Interests />
                  </Grid>
                </Grid>
                <Grid container item xs={5} spacing={3}>
                  <Grid item xs={12}>
                    <Contact />
                  </Grid>
                </Grid>
              </Grid>
            </ThemeProvider>
          </div>
        </Box>
      </Box>
      <Box className="regular" sx={{ display: { xs: "block", lg: "none" } }}>
        <Box className="about-header">
          <Typography
            className="black"
            variant="h1"
            sx={{ padding: "20px 0px 0px 0px" }}
          >
            About
          </Typography>
        </Box>
        <Box className="about-body" style={{ padding: "0px" }}>
          {/* <div className="round-container"> */}
          <div className="round-container">
            <ThemeProvider theme={PAPER_THEME}>
              {/* create grid layout using mui cards */}
              <Grid container spacing={3}>
                <Grid item xs={12}>
                  <Contact />
                </Grid>
                <Grid item xs={12}>
                  <Roles />
                </Grid>
                <Grid item xs={12}>
                  <Interests />
                </Grid>
              </Grid>
            </ThemeProvider>
          </div>
        </Box>
      </Box>
    </div>
  );
}
