import { Paper, ThemeProvider, Typography } from "@mui/material";
import Navbar from "../../components/Navbar";
import { PAPER_THEME } from "../../Themes/Themes";
import "./NoPage.scss";

export interface INoPageProps {
  pages: string[];
}

function NoPage(props: INoPageProps) {
  return (
    <div className="no-page">
      <Navbar pageName={"No Page"} pages={props.pages} />
      <div className="no-page-header">
        <ThemeProvider theme={PAPER_THEME}>
          <Paper sx={{ padding: "100px 75px" }}>
            <Typography variant="h1">Page Not Found!</Typography>
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
export default NoPage;
