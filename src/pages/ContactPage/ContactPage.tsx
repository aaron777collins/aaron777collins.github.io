import { Box, Typography, IconButton, Divider, Grid } from "@mui/material";
import * as React from "react";
import Navbar from "../../components/Navbar";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";

import "./ContactPage.scss";
import { PaddedCard } from "../../components/PaddedCard";

export interface IContactPageProps {
  pages: string[];
}

export default function ContactPage(props: IContactPageProps) {
  return (
    <>
      <Navbar pages={props.pages} pageName={"Contact"} />
      <Box className="centerItems">
        <PaddedCard sx={{ maxWidth: "50%", minWidth: "400px" }}>
          <Box sx={{ width: "100%" }}>
            <Grid
              container
              spacing={4}
              alignItems="center"
              justifyContent="center"
            >
              <Grid
                item
                xs={12}
                sm={5}
                sx={{ display: "flex", justifyContent: "center" }}
              >
                <img
                  src="PhotoOfMeSquare.jpg"
                  className="contactImage"
                  alt="Aaron Collins"
                />
              </Grid>
              <Grid item xs={12} sm={7}>
                <Box sx={{ display: "flex", flexDirection: "column" }}>
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginBottom: "20px",
                    }}
                  >
                    <IconButton
                      color="secondary"
                      href="mailto:aaron777collins@gmail.com"
                    >
                      <EmailIcon />
                    </IconButton>
                    <Typography
                      variant="h6"
                      sx={{ marginLeft: "10px" }}
                      className="breakWordWrap"
                    >
                      aaron777collins@gmail.com
                    </Typography>
                  </Box>
                  <Divider />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    <IconButton
                      color="secondary"
                      href="https://www.linkedin.com/in/aaron-collins-ab70511b7/"
                    >
                      <LinkedInIcon />
                    </IconButton>
                    <Typography
                      variant="h6"
                      sx={{ marginLeft: "10px" }}
                      className="breakWordWrap"
                    >
                      aaron-collins-ab70511b7
                    </Typography>
                  </Box>
                  <Divider />
                  <Box
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      marginTop: "20px",
                      marginBottom: "20px",
                    }}
                  >
                    <IconButton
                      color="secondary"
                      href="https://www.instagram.com/aaron.collins7/"
                    >
                      <InstagramIcon />
                    </IconButton>
                    <Typography
                      variant="h6"
                      sx={{ marginLeft: "10px" }}
                      className="breakWordWrap"
                    >
                      aaron.collins7
                    </Typography>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Box>
        </PaddedCard>
      </Box>
    </>
  );
}
