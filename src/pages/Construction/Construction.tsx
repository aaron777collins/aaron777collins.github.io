import { Box, Paper, ThemeProvider, Typography } from "@mui/material";
import * as React from "react";
import Navbar from "../../components/Navbar";
import { PAPER_THEME } from "../../Themes/Themes";
import "./Construction.scss";

export interface IConstructionProps {
  pages: string[];
}

export default function Construction(props: IConstructionProps) {
  return (
    <><Box className="mobile" sx={{ display: { xs: "block", lg: "none" } }}>
      <div className="construction-page">
        <Navbar pageName={"Construction"} pages={props.pages} />
        <div className="construction-header">
          <ThemeProvider theme={PAPER_THEME}>
            <Paper sx={{ padding: "20px 15px", height: "100%" }}>
              <Typography variant="h1" fontSize={50}>Construction In Progress..</Typography>
            </Paper>
          </ThemeProvider>
        </div>
        <Box className="">
          <ThemeProvider theme={PAPER_THEME}>
            <Paper sx={{ padding: "20px 15px" }}>
              <Typography variant="h5" align="center">Nothing here..</Typography>
            </Paper>
          </ThemeProvider>
        </Box>
      </div>
    </Box><Box className="regular" sx={{ display: { xs: "none", lg: "block" } }}>
        <div className="construction-page">
          <Navbar pageName={"Construction"} pages={props.pages} />
          <div className="construction-header">
            <ThemeProvider theme={PAPER_THEME}>
              <Paper sx={{ padding: "100px 75px" }}>
                <Typography variant="h1">Construction In Progress..</Typography>
              </Paper>
            </ThemeProvider>
          </div>
          <Box className="">
            <ThemeProvider theme={PAPER_THEME}>
              <Paper sx={{ padding: "20px 15px" }}>
                <Typography variant="h5" align="center">Nothing here..</Typography>
              </Paper>
            </ThemeProvider>
          </Box>
        </div>
      </Box></>
  );
}
