import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import styled from "@mui/system/styled";

export const AdjustPointContainerStyled = styled(Box)(() => ({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "12px",
  width: "100%",
}));

export const LabelStyled = styled(Typography)(() => ({
  width: "64px",
  marginRight: "12px",
}));

export const ValueStyled = styled(Typography)(() => ({
  width: "60px",
  textAlign: "center",
}));
