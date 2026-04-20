"use client";

import React from "react";
import { Box } from "@mui/material";
import { Colors } from "@/utils/enum";

interface SparkleProps {
  color?: string;
  size?: number | string;
  sx?: any;
}

const Sparkle: React.FC<SparkleProps> = ({ 
  color = Colors.SECONDARY, 
  size = "20px",
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
        {/* Sleek 4-pointed star with concave curves */}
        <path
          d="M12 2C12 8.5 15.5 12 22 12C15.5 12 12 15.5 12 22C12 15.5 8.5 12 2 12C8.5 12 12 8.5 12 2Z"
          stroke="currentColor"
          strokeWidth="1.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Box>
  );
};

export default Sparkle;
