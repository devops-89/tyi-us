"use client";

import React from "react";
import { Box } from "@mui/material";

interface FlowerSparkleProps {
  color?: string;
  size?: number | string;
  sx?: any;
}

const FlowerSparkle: React.FC<FlowerSparkleProps> = ({ 
  color = "#1C4282", 
  size = "24px",
  sx = {}
}) => {
  return (
    <Box 
      component="span" 
      sx={{ 
        color, 
        width: size,
        height: size,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        ...sx 
      }}
    >
      <svg
        width="100%"
        height="100%"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M12 2C12 8 13.5 10.5 16 13.5M12 2C12 8 10.5 10.5 8 13.5M12 22C12 16 13.5 13.5 16 10.5M12 22C12 16 10.5 13.5 8 10.5M2 12C8 12 10.5 13.5 13.5 16M2 12C8 12 10.5 10.5 13.5 8M22 12C16 12 13.5 13.5 10.5 16M22 12C16 12 13.5 10.5 10.5 8"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
};

export default FlowerSparkle;
