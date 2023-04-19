import { Button, CardActions, Typography } from "@mui/material";
import * as React from "react";
import { PaddedCard } from "../../../components/PaddedCard";

export interface IContactProps {}

export default function Contact(props: IContactProps) {
  return (
    <PaddedCard>
      <Typography variant="h3" sx={{ padding: "10px 0" }}>
        Contact:
      </Typography>
      <Typography variant="body1">
        I'm always looking to expand my network and explore different
        opportunities.
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
        <Button
          color="secondary"
          variant="contained"
          href="https://www.instagram.com/aaron.collins7/"
        >
          Instagram
        </Button>
      </CardActions>
    </PaddedCard>
  );
}
