"use client";

import React from "react";
import Image from "next/image";
import { Box, Stack, Typography } from "@mui/material";

import { Colors } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import CtaButton from "@/components/widgets/common/CtaButton";

interface StepCardProps {
  image: any;
  title: string;
  description: string;
  ctaText?: string;
  ctaHref?: string;
  ctaWidth?: string | number | object;
}

const StepCard: React.FC<StepCardProps> = ({
  image,
  title,
  description,
  ctaText,
  ctaHref,
  ctaWidth = { xs: "100%", md: "auto" },
}) => {
  return (
    <Stack spacing={2} sx={{ height: "100%" }}>
      <Box 
        sx={{ 
          position: "relative", 
          width: "100%", 
          height: 262, 
          borderRadius: "32px", 
          overflow: "hidden",
          mb: 1
        }}
      >
        <Image 
          src={image} 
          alt={title} 
          fill 
          style={{ objectFit: "cover" }} 
        />
      </Box>

      <Typography 
        sx={{ 
          fontFamily: poppins.style.fontFamily, 
          fontWeight: 700, 
          fontSize: "22px", 
          color: "#353333",
          lineHeight: 1.3,
          textAlign: { xs: "center", md: "left" }
        }}
      >
        {title}
      </Typography>

      <Typography 
        sx={{ 
          fontFamily: ibmPlexSans.style.fontFamily, 
          fontSize: { xs: "14px", md: "16px" },
          lineHeight: { xs: 1.2, md: 1.4 },
          color: Colors.TEXT_MUTED, 
          flexGrow: 1,
          mb: ctaText ? 2 : 0,
          textAlign: { xs: "center", md: "left" }
        }}
      >
        {description}
      </Typography>

      {ctaText && ctaHref && (
        <Box 
          sx={{ 
            display: "flex", 
            justifyContent: { xs: "center", md: "flex-start" },
            width: "100%"
          }}
        >
          <CtaButton
            text={ctaText}
            href={ctaHref}
            width={ctaWidth}
            fontSize={16} 
            height={60}
          />
        </Box>
      )}
    </Stack>
  );
};

export default StepCard;