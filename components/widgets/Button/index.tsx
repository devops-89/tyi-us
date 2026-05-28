"use client";

import { Button as MuiButton, ButtonProps, styled } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { ArrowUpRight } from "lucide-react";
import { ibmPlexSans } from "@/utils/fonts";

interface IAppButtonProps extends ButtonProps {
  variant?: "contained" | "outlined" | "text";
  pill?: boolean;
  showIcon?: boolean;
}

const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== "pill",
})<IAppButtonProps>(({ variant, pill }) => ({
  borderRadius: pill ? "100px" : "8px",
  padding: pill ? "12px 32px" : "10px 24px",
  fontSize: "0.95rem",
  fontWeight: 600,
  textTransform: "none",
  fontFamily: ibmPlexSans.style.fontFamily,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",

  ...(variant === "contained" && {
    backgroundColor: COLORS.SECONDARY,
    color: COLORS.WHITE,
    "&:hover": {
      backgroundColor: COLORS.PRIMARY,
      transform: "translateY(-1px)",
      boxShadow: "0 8px 20px rgba(227, 24, 55, 0.25)",
    },
  }),

  ...(variant === "outlined" && {
    borderColor: COLORS.SECONDARY,
    color: COLORS.SECONDARY,
    "&:hover": {
      borderColor: COLORS.PRIMARY,
      color: COLORS.PRIMARY,
      backgroundColor: "transparent",
      transform: "translateY(-1px)",
    },
  }),
}));

const AppButton: React.FC<IAppButtonProps> = ({
  children,
  pill = true,
  showIcon = true,
  ...props
}) => {
  return (
    <StyledButton
      variant="contained"
      disableElevation
      pill={pill}
      endIcon={showIcon ? <ArrowUpRight size={18} /> : null}
      {...props}
    >
      {children}
    </StyledButton>
  );
};

export default AppButton;