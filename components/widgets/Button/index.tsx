"use client";

import { Button as MuiButton, ButtonProps, styled } from "@mui/material";
import { Colors } from "@/utils/enum";
import { ArrowUpRight } from "lucide-react";
import { ibmPlexSans } from "@/utils/fonts";

interface IAppButtonProps extends ButtonProps {
  variant?: "contained" | "outlined" | "text";
  pill?: boolean;
  showIcon?: boolean;
}

const StyledButton = styled(MuiButton, {
  shouldForwardProp: (prop) => prop !== "pill",
})<IAppButtonProps>(({ theme, variant, pill }) => ({
  borderRadius: pill ? "100px" : "8px",
  padding: pill ? "12px 32px" : "10px 24px",
  fontSize: "0.95rem",
  fontWeight: 600,
  textTransform: "none",
  fontFamily: ibmPlexSans.style.fontFamily,
  transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",

  
  [theme.breakpoints.down("md")]: {
    padding: pill ? "8px 20px" : "6px 16px",
    fontSize: "0.85rem",
  },

  ...(variant === "contained" && {
    backgroundColor: Colors.SECONDARY,
    color: Colors.WHITE,
    "&:hover": {
      backgroundColor: Colors.PRIMARY,
      transform: "translateY(-1px)",
      boxShadow: "0 8px 24px rgba(52, 96, 183, 0.25)",
    },
  }),

  ...(variant === "outlined" && {
    borderColor: Colors.SECONDARY,
    color: Colors.SECONDARY,
    "&:hover": {
      borderColor: Colors.PRIMARY,
      color: Colors.PRIMARY,
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