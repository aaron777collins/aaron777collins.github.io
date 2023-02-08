import { Box, Typography } from "@mui/material";
import * as React from "react";
import Navbar from "../../components/Navbar";
import Contact from "../About/Contact/Contact";
import "./ContactPage.scss";

export interface IContactPageProps {
  pages: string[];
}

export default function ContactPage(props: IContactPageProps) {
  return (
    <>
      <Navbar pages={props.pages} pageName={"Contact"} />
      <Box className="centerItems">
        <Box sx={{ width: "600px"}}>
          <Typography variant="h1" sx={{paddingTop: "10px", paddingBottom: "20px", textAlign: "center"}}>Contact</Typography>
          <Contact />
        </Box>
      </Box>
    </>
  );
}
