"use client";

import React from "react";
import Link from "next/link";
import { Stack, Button } from "@mui/material";
import { ArrowUpRight } from "lucide-react";

import { Colors } from "@/utils/enum";
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
        
        // --- ONLY COLORS CHANGED ---
        backgroundColor: variant === "contained" ? Colors.SECONDARY : "transparent",
        borderColor: variant === "outlined" ? Colors.SECONDARY : "transparent",
        color: variant === "contained" ? Colors.WHITE : Colors.SECONDARY,
        
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
          // --- ONLY COLORS CHANGED ---
          backgroundColor: variant === "contained" ? "#c61530" : "rgba(214, 20, 48, 0.04)",
          borderColor: variant === "outlined" ? "#c61530" : "transparent",
          color: variant === "contained" ? Colors.WHITE : "#c61530",
          
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
      {/* Primary Button (Contained) */}
      <Button
        component={Link}
        href={primaryHref}
        variant="contained"
        endIcon={showIcon ? <ArrowUpRight size={18} /> : null}
        sx={{
          height: { xs: 40, md: 48 },
          borderRadius: "50px",
          px: { xs: 2.5, md: 4 },
          backgroundColor: Colors.SECONDARY,
          color: Colors.WHITE,
          fontFamily: poppins.style.fontFamily,
          fontWeight: 600,
          fontSize: { xs: "14px", md: "16px" },
          textTransform: "none",
          boxShadow: "none",
          width: { xs: "100%", sm: 237 },
          "&:hover": {
            backgroundColor: "#c61530",
            boxShadow: "none",
          },
        }}
      >
        {primaryText}
      </Button>
      {/* Secondary Button (Outlined) */}
      <Button
        component={Link}
        href={secondaryHref}
        variant="outlined"
        endIcon={showIcon ? <ArrowUpRight size={18} /> : null}
        sx={{
          height: { xs: 40, md: 48 },
          borderRadius: "50px",
          px: { xs: 2.5, md: 4 },
          borderColor: Colors.SECONDARY,
          color: Colors.SECONDARY,
          backgroundColor: "transparent",
          fontFamily: poppins.style.fontFamily,
          fontWeight: 600,
          fontSize: { xs: "14px", md: "16px" },
          textTransform: "none",
          boxShadow: "none",
          width: { xs: "100%", sm: 216 },
          "&:hover": {
            borderColor: "#c61530",
            color: "#c61530",
            backgroundColor: "rgba(214, 20, 48, 0.04)",
            boxShadow: "none",
          },
        }}
      >
        {secondaryText}
      </Button>
    </Stack>
  );
};

export default CtaButton;