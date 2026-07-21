"use client";

import React from "react";
import { Box, Typography, Stack } from "@mui/material";
import { Colors } from "@/utils/enum";
import { STYLES } from "@/utils/styles";

interface ISectionTitleProps {
  title: string;
  subtitle?: string;
  align?: "left" | "center" | "right";
  light?: boolean;
}

const SectionTitle: React.FC<ISectionTitleProps> = ({ 
  title, 
  subtitle, 
  align = "center",
  light = false 
}) => {
  return (
    <Stack 
      spacing={2} 
      alignItems={align === "center" ? "center" : align === "right" ? "flex-end" : "flex-start"}
      sx={{ mb: { xs: 5, md: 8 }, textAlign: align }}
    >
      <Typography 
        variant="h2" 
        sx={{ 
          ...STYLES.HEADING, 
          color: light ? Colors.WHITE : Colors.PRIMARY,
          fontSize: { xs: "2rem", md: "3rem" },
          position: "relative",
          display: "inline-block",
          "&::after": {
            content: '""',
            position: "absolute",
            bottom: -8,
            left: align === "center" ? "50%" : align === "right" ? "auto" : 0,
            right: align === "right" ? 0 : "auto",
            transform: align === "center" ? "translateX(-50%)" : "none",
            width: "60px",
            height: "4px",
            backgroundColor: Colors.SECONDARY,
            borderRadius: "2px",
          }
        }}
      >
        {title}
      </Typography>
      {subtitle && (
        <Typography 
          variant="body1" 
          sx={{ 
            ...STYLES.SUBHEADING,
            color: light ? "rgba(255,255,255,0.7)" : Colors.GRAY_DARK,
          }}
        >
          {subtitle}
        </Typography>
      )}
    </Stack>
  );
};

export default SectionTitle;
