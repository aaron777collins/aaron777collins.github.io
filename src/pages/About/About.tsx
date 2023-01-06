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
import { PAPER_THEME } from "../../Themes/Themes";
import "./About.scss";

export interface IAboutProps {
  pages: string[];
}

export default function About(props: IAboutProps) {
  const PaddedCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(5),
  }));

  return (
    <div className="about-page">
      <Navbar pageName={"About"} pages={props.pages} />
      <header className="about-header">
        <Typography
          className="black"
          variant="h1"
          sx={{ padding: "0px 0px" }}
        >
          About
        </Typography>
      </header>
      <body className="about-body">
        {/* <div className="round-container"> */}
        <div
          className="round-container"
        >
          <ThemeProvider theme={PAPER_THEME}>
            {/* create grid layout using mui cards */}
            <Grid container spacing={3}>
              {/* left column */}
              <Grid container item xs={3} spacing={3}>
                <Grid item xs={12}>
                  <PaddedCard>
                    <Typography variant="h2"> Roles:</Typography>
                    <ul>
                      {/* Manager, Researcher, Teaching Assistant, Student, Full-Stack Software Developer*/}
                      <li>Manager</li>
                      <li>Researcher</li>
                      <li>Teaching Assistant</li>
                      <li>Student</li>
                      <li>Full-Stack Software Developer</li>
                    </ul>
                  </PaddedCard>
                </Grid>
                <Grid item xs={12}>
                  <PaddedCard>
                    <Typography variant="h3" sx={{ padding: "10px 0" }}>
                      Contact:
                    </Typography>
                    <Typography>
                      I'm always looking to expand my network and explore
                      different opportunities.
                    </Typography>
                    <CardActions>


                      <Button
                        color="secondary"
                        variant="contained"
                        href="mailto:aaron777collins@gmail.com"
                      >
                        <Typography color="secondary.contrast">Email</Typography>
                      </Button>
                      <Button
                        color="secondary"
                        variant="contained"
                        href="https://www.linkedin.com/in/aaron-collins-ab70511b7/"
                      >
                        LinkedIn
                      </Button>
                    </CardActions>
                  </PaddedCard>
                </Grid>
              </Grid>
              <Grid item xs={9}>
                <PaddedCard>
                  <Typography variant="h3" sx={{ padding: "20px 0" }}>
                    Interests:
                  </Typography>
                  <Typography>
                    I have worked in many roles and explored industries ranging
                    from health foods to <b>web development</b> and{" "}
                    <b>machine learning</b>. However, here are some small
                    snippets about me:
                  </Typography>
                  <ul>
                    <li>
                      Making games and innovative tools have always interested
                      me. I'm quite creative and excel in leadership and
                      productivity. My father introduced me to programming when
                      I was 10 and I was hooked ever since.
                    </li>
                    <li>
                      While growing up, I used to play many sports including
                      travel hockey. Before hanging up the skates, I also
                      coached a bantam house league team to give back to the
                      community.
                    </li>
                  </ul>
                  <Typography>
                    Currently, I am an undergraduate student at the University
                    of Windsor, looking to become a full-stack developer at a
                    big tech company.
                    <br />
                    <br />
                    While at the university, I am researching
                    connected/autonomous driving using machine learning at the
                    University of Windsor. Additionally, I'm currently a
                    teaching assistant for an introductory python course.
                  </Typography>
                </PaddedCard>
              </Grid>
            </Grid>
          </ThemeProvider>
        </div>
      </body>
    </div>
  );
}
