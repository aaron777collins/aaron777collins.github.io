import { Box, Paper, ThemeProvider, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import { PAPER_THEME } from "../../Themes/Themes";
import "./NoPage.scss";

export interface INoPageProps {
  pages: string[];
}

function NoPage(props: INoPageProps) {
  return (
    <><Box className="mobile" sx={{ display: { xs: "block", lg: "none" } }}>
    <div className="no-page-page">
      <Navbar pageName={"no-page"} pages={props.pages} />
      <div className="no-page-header">
        <ThemeProvider theme={PAPER_THEME}>
          <Paper sx={{ padding: "20px 15px", height: "100%" }}>
            <Typography variant="h1" fontSize={50}>Page not found!</Typography>
          </Paper>
        </ThemeProvider>
      </div>
      <Box className="">
        <ThemeProvider theme={PAPER_THEME}>
          <Paper sx={{ padding: "0px 0px" }}>
            <Typography variant="h5" align="center">Nothing here..</Typography>
          </Paper>
        </ThemeProvider>
      </Box>
    </div>
  </Box><Box className="regular" sx={{ display: { xs: "none", lg: "block" } }}>
      <div className="no-page-page">
        <Navbar pageName={"no-page"} pages={props.pages} />
        <div className="no-page-header">
          <ThemeProvider theme={PAPER_THEME}>
            <Paper sx={{ padding: "100px 75px" }}>
              <Typography variant="h1">Page not found!</Typography>
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
export default NoPage;
