import { Card, styled } from "@mui/material";

export const PaddedCard = styled(Card)(({ theme }) => ({
    padding: theme.spacing(4),
    justifyContent: "center",
    alignItems: "center",
  }));
