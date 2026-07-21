"use client";

import React from "react";
import { Typography, Stack } from "@mui/material";
import { poppins } from "@/utils/fonts";
import { Colors } from "@/utils/enum";

interface IMetricsCardProps {
  label: string;
  value: string;
  color: keyof typeof Colors;
}

const MetricsCard: React.FC<IMetricsCardProps> = ({ label, value, color }) => {
  return (
    <Stack 
      alignItems="center" 
      sx={{ 
        p: 3, 
        textAlign: "center",
        border: `1px solid ${Colors.DIVIDER}`,
        borderRadius: "16px",
        height: "100%",
        transition: "all 0.3s ease",
        "&:hover": {
          backgroundColor: Colors.GRAY_LIGHT,
          transform: "scale(1.02)",
        }
      }}
    >
      <Typography 
        variant="h3" 
        sx={{ 
          fontFamily: poppins.style.fontFamily, 
          fontWeight: 800, 
          color: Colors[color],
          fontSize: { xs: "2rem", md: "2.5rem" },
          mb: 1
        }}
      >
        {value}
      </Typography>
      <Typography 
        variant="body2" 
        sx={{ 
          fontFamily: poppins.style.fontFamily, 
          fontWeight: 600, 
          color: Colors.TEXT_MUTED,
          textTransform: "uppercase",
          letterSpacing: "1px"
        }}
      >
        {label}
      </Typography>
    </Stack>
  );
};

export default MetricsCard;
