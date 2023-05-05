import {
  Box,
  Divider,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import * as React from "react";
import { PaddedCard } from "../../../components/PaddedCard";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";
import PhoneIcon from "@mui/icons-material/Phone";
import './Contact.scss'

export interface IContactProps {}

export default function Contact(props: IContactProps) {
  return (
    <PaddedCard sx={{ paddingBottom: "20px" }}>
      <Typography variant="h2" sx={{ padding: "10px 0", fontSize: "3em", textAlign: "center"}}>
        Contact
      </Typography>
      <Grid container spacing={4} alignItems="center" justifyContent="center">
        <Grid
          item
          xs={12}
          sx={{ display: "flex", justifyContent: "center" }}
        >
          <img
            className="contactImage"
            src="PhotoOfMeSquare.jpg"
            alt="Aaron Collins"
          />
        </Grid>
        <Grid item xs={12}>
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
            <Divider />
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                marginTop: "20px",
              }}
            >
              <IconButton color="secondary" href="tel:+15175150233">
                <PhoneIcon />
              </IconButton>
              <Typography
                variant="h6"
                sx={{ marginLeft: "10px" }}
                className="breakWordWrap"
              >
                +1 (517) 515-0233
              </Typography>
            </Box>
          </Box>
        </Grid>
      </Grid>
    </PaddedCard>
  );
}
