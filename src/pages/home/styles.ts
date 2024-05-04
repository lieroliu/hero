import Box from "@mui/material/Box";
import styled from "@mui/system/styled";

export const ContainerStyled = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
}));

export const NavigationContainerStyled = styled(Box)(() => ({
  display: "inline-flex",
  justifyContent: "center",
  alignItems: "center",
  padding: "12px",
  gap: "12px",
}));

export const OutletContainerStyled = styled(Box)(() => ({
  flexGrow: 1,
  justifyContent: "center",
  alignItems: "center",
}));

export const ItemWrapperStyled = styled(Box)<{ $isActive: boolean }>(
  ({ $isActive }) => ({
    position: "relative",
    borderRadius: "4px",

    // 半透明遮罩
    ...(!$isActive && {
      "&::before": {
        content: '""',
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)",
        zIndex: 1,
      },
    }),
  })
);
