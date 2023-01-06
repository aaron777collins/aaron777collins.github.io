import { Paper, ThemeProvider, Typography } from '@mui/material';
import * as React from 'react';
import Navbar from '../../components/Navbar';
import { PAPER_THEME } from '../../Themes/Themes';
import './Construction.scss';

export interface IConstructionProps {
    pages: string[];
}

export default function Construction(props: IConstructionProps) {
    return (
        <div className="construction-page">
        <Navbar pageName={"Construction"} pages={props.pages} />
        <div className="construction-header">
          <ThemeProvider theme={PAPER_THEME}>
            <Paper sx={{ padding: "100px 75px" }}>
              <Typography variant="h1">Construction In Progress..</Typography>
            </Paper>
          </ThemeProvider>
        </div>
        <body className="">
          <ThemeProvider theme={PAPER_THEME}>
            <Paper sx={{ padding: "20px 15px" }}>
              <Typography variant="h5">Nothing here..</Typography>
            </Paper>
          </ThemeProvider>
        </body>
      </div>
  );
}
