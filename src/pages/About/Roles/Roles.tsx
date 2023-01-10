import { Typography } from "@mui/material";
import * as React from "react";
import { PaddedCard } from "../../../components/PaddedCard";

export interface IRolesProps {}

export default function Roles(props: IRolesProps) {
  return (
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
  );
}
