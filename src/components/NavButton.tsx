import { Button, Typography } from "@mui/material";
import * as React from "react";
import { Link } from "react-router-dom";

export interface INavButtonProps {
    name: string;
    url: string;
    handleCloseNavMenu: (() => void);
}

export default function NavButton(props: INavButtonProps) {
  return (
    <Button
    key={props.url}
    onClick={props.handleCloseNavMenu}
    sx={{ my: 2, color: "white", display: "block" }}
  >
    <Link
      className="white no-underline"
      to={props.url}
    >
      <Typography textAlign="center">{props.name}</Typography>
    </Link>
  </Button>
  );
}
