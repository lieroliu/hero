import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import styled from "@mui/system/styled";

export const ContainerStyled = styled(Paper)(() => ({
  display: "inline-flex",
  minWidth: "656px",
  padding: "12px",
}));

export const AdjustPointWrapperStyled = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
}));

export const RightWrapperStyled = styled(Box)(() => ({
  display: "flex",
  justifyContent: "flex-end",
  flexGrow: 1,
}));

export const SubmitWrapperStyled = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  justifyContent: "flex-end",
  width: "160px",
}));
