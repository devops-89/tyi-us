"use client";

import React from "react";
import Link from "next/link";
import { Stack, Button } from "@mui/material";
import { ArrowUpRight } from "lucide-react";

import { COLORS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";


interface CtaButtonProps {
  text: string;
  href: string;
  variant?: "contained" | "outlined";
  width?: string | number | object;
  height?: string | number | object; 
  fontSize?: string | number | object; 
  showIcon?: boolean;
  sx?: object;
}

export const CtaButton: React.FC<CtaButtonProps> = ({
  text,
  href,
  variant = "contained",
  width = "auto",
  height = { xs: 40, md: 60 }, 
  fontSize = { xs: 14, md: 18 }, 
  showIcon = true,
  sx = {},
}) => {
  return (
    <Button
      component={Link}
      href={href}
      variant={variant}
      endIcon={showIcon ? <ArrowUpRight size={22} /> : null}
      target="_blank"
      rel="noopener noreferrer"
      sx={{
        height: height,
        px: { xs: 2.5, md: 5 }, 
        width: width,
        borderRadius: "50px",
        backgroundColor: variant === "contained" ? COLORS.SUBMIT_ACCENT : COLORS.SUBMIT_ACCENT_BG,
        borderColor: variant === "outlined" ? COLORS.SUBMIT_ACCENT : "transparent",
        color: variant === "contained" ? COLORS.WHITE : COLORS.SUBMIT_ACCENT,
        fontFamily: poppins.style.fontFamily,
        fontWeight: 600,
        fontSize: fontSize,
        textTransform: "none",
        boxShadow: variant === "contained" ? "0px 10px 30px rgba(220, 29, 64, 0.15)" : "none",
        "& .MuiButton-endIcon svg": { 
          width: { xs: 18, md: 22 },
          height: { xs: 18, md: 22 }
        },
        "&:hover": { 
          backgroundColor: variant === "contained" ? COLORS.PRIMARY : "#f9dfe6",
          borderColor: variant === "outlined" ? COLORS.SUBMIT_ACCENT : "transparent",
          boxShadow: variant === "contained" ? "0px 15px 40px rgba(220, 29, 64, 0.2)" : "none",
        },
        ...sx,
      }}
    >
      {text}
    </Button>
  );
};


interface DualCtaProps {
  primaryText: string;
  primaryHref: string;
  secondaryText: string;
  secondaryHref: string;
  showIcon?: boolean;
}

export const DualCta: React.FC<DualCtaProps> = ({
  primaryText,
  primaryHref,
  secondaryText,
  secondaryHref,
  showIcon = true,
}) => {
  return (
    <Stack 
      direction={{ xs: "column", sm: "row" }} 
      spacing={{ xs: 2.5, sm: 3 }} 
      alignItems="center"
    >
      <CtaButton
        text={primaryText}
        href={primaryHref}
        variant="contained"
        width={{ xs: "100%", sm: 237 }}
        showIcon={showIcon}
      />

      <CtaButton
        text={secondaryText}
        href={secondaryHref}
        variant="outlined"
        width={{ xs: "100%", sm: 216 }}
        showIcon={showIcon}
      />
    </Stack>
  );
};

export default CtaButton;