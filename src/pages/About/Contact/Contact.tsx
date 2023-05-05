import {
  Button,
  CardActions,
  Typography,
} from "@mui/material";
import * as React from "react";
import { PaddedCard } from "../../../components/PaddedCard";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InstagramIcon from "@mui/icons-material/Instagram";

export interface IContactProps {}

export default function Contact(props: IContactProps) {
  return (
    <PaddedCard sx={{ paddingBottom: "20px" }}>
      <Typography variant="h3" sx={{ padding: "10px 0" }}>
        Contact:
      </Typography>
      <Typography variant="body1">
        I'm always looking to expand my network and explore different
        opportunities.
      </Typography>
      <CardActions>
        <Button
          size="small"
          color="secondary"
          variant="contained"
          href="mailto:aaron777collins@gmail.com"
          startIcon={<EmailIcon />}
        >
          <Typography color="secondary.contrast">Email</Typography>
        </Button>
        <Button
          size="small"
          color="secondary"
          variant="contained"
          href="https://www.linkedin.com/in/aaron-collins-ab70511b7/"
          startIcon={<LinkedInIcon />}
        >
          LinkedIn
        </Button>
        <Button
          size="small"
          color="secondary"
          variant="contained"
          href="https://www.instagram.com/aaron.collins7/"
          startIcon={<InstagramIcon />}
        >
          Instagram
        </Button>
      </CardActions>
    </PaddedCard>
  );
}
