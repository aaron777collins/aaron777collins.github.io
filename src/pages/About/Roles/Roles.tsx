import { Typography } from "@mui/material";
import * as React from "react";
import { PaddedCard } from "../../../components/PaddedCard";
import "./Roles.scss";

export interface IRolesProps {}

export default function Roles(props: IRolesProps) {
  return (
    <PaddedCard>
      <Typography variant="h2" sx={{fontSize: "3em", textAlign: "center"}}>Roles</Typography>
      <ul className="roles-list">
        <li>Manager</li>
        <li>Researcher</li>
        <li>Teaching Assistant</li>
        <li>Full-Stack Software Developer</li>
      </ul>
    </PaddedCard>
  );
}
