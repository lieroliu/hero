import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import styled from "@mui/system/styled";

export const ContainerStyled = styled(Box)(() => ({
  display: "flex",
  position: "absolute",
  flexDirection: "column",
  alignItems: "center",
  gap: "12px",
  height: "100vh",
  width: "100vw",
  left: 0,
  top: 0,
}));

export const NavigationContainerStyled = styled(Paper)(() => ({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "12px",
  width: "100%",
  padding: "12px",
  maxWidth: "648px",
  marginTop: "12px",
}));

export const OutletContainerStyled = styled(Paper)(() => ({
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  maxWidth: "648px",
}));

export const ItemWrapperStyled = styled(Box)<{ $isActive: boolean }>(
  ({ $isActive }) => ({
    position: "relative",
    borderRadius: "4px",
    minWidth: "140px",

    // 半透明遮罩
    ...(!$isActive && {
      "&::before": {
        content: '""',
        position: "absolute",
        borderRadius: "4px",
        top: 0,
        left: 0,
        width: "100%",
        minWidth: "140px",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1,
      },
    }),
  })
);
