"use client";

import React from "react";
import { Box, Typography, Stack, Paper } from "@mui/material";
import { COLORS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import * as LucideIcons from "lucide-react";

interface IServiceCardProps {
  title: string;
  description: string;
  iconName: string;
}

const ServiceCard: React.FC<IServiceCardProps> = ({ title, description, iconName }) => {
  
  const Icon = (LucideIcons[iconName as keyof typeof LucideIcons] || LucideIcons.HelpCircle) as React.ElementType;

  return (
    <Paper
      elevation={0}
      sx={{
        p: 4,
        height: "100%",
        borderRadius: "20px",
        border: `1px solid ${COLORS.BORDER}`,
        transition: "all 0.3s ease",
        "&:hover": {
          transform: "translateY(-10px)",
          boxShadow: "0 20px 40px rgba(0,0,0,0.05)",
          borderColor: COLORS.SECONDARY,
          "& .icon-box": {
            backgroundColor: COLORS.SECONDARY,
            color: COLORS.WHITE,
          }
        },
      }}
    >
      <Stack spacing={3}>
        <Box 
          className="icon-box"
          sx={{ 
            width: 60, 
            height: 60, 
            borderRadius: "12px", 
            backgroundColor: "#F8F8F8", 
            display: "flex", 
            alignItems: "center", 
            justifyContent: "center",
            color: COLORS.PRIMARY,
            transition: "all 0.3s ease",
          }}
        >
          <Icon size={32} />
        </Box>
        <Typography 
          variant="h5" 
          sx={{ 
            fontFamily: poppins.style.fontFamily, 
            fontWeight: 700,
            fontSize: "1.25rem",
            color: COLORS.PRIMARY
          }}
        >
          {title}
        </Typography>
        <Typography 
          variant="body2" 
          sx={{ 
            fontFamily: ibmPlexSans.style.fontFamily,
            color: COLORS.GRAY_DARK,
            lineHeight: 1.6,
            fontSize: "0.95rem"
          }}
        >
          {description}
        </Typography>
      </Stack>
    </Paper>
  );
};

export default ServiceCard;
