"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";

import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";

const patentServiceSteps = [
  {
    number: "1",
    title: "Discovery & NDA",
    desc: "We begin with your area of interest or idea. A Non-Disclosure Agreement (NDA) is signed to protect your intellectual property right from the start.",
  },
  {
    number: "2",
    title: "Idea Evaluation & Patentability Assessment",
    desc: "Our IP experts and US patent attorneys evaluate the idea for:\n• Novelty\n• Non-obviousness\n• Utility\nWe also conduct prior art search.",
  },
  {
    number: "3",
    title: "Idea Development & Innovation Coaching",
    desc: "Work 1-on-1 with:\n• Technology & Innovation Experts\n• US-based IP Team\n• DiscoverSTEM Mentors\nWe shape, refine, and strengthen your idea for the highest patent success probability.",
  },
  {
    number: "4",
    title: "Patent Drafting & Innovation",
    desc: "We begin with your area of interest or idea. A Non-Disclosure Agreement (NDA) is signed to protect your intellectual property right from the start.",
  },
];

const PatentServiceSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.WHITE,
        py: { xs: 6, md: 9 },
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box sx={{ mb: { xs: 4, md: 5 } }}>
          <SparkleLabel
            text="Helping You Get Patent"
            fontSize={14}
            sparklePosition="both"
            color={COLORS.PRIMARY}
          />

          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 500,
              fontSize: { xs: "28px", md: "34px" },
              color: COLORS.BLACK,
              lineHeight: 1.2,
              mt: 1,
            }}
          >
            Our End-To-End Patent Service
          </Typography>
        </Box>

        <Box
  sx={{
    display: "grid",
    gridTemplateColumns: {
      xs: "1fr",              
       sm: "repeat(2, 1fr)",               
      md: "repeat(2, 1fr)",   
      lg: "repeat(4, 1fr)",   
    },
    gap: { xs: 2, md: 2.5 },
  }}
>
          {patentServiceSteps.map((step) => (
            <Box
              key={step.number}
              sx={{
                position: "relative",
                width: "100%",
                minHeight: { xs: 240, md: 270 },
                backgroundColor: COLORS.WHITE,
                border: "1px solid #E8E8E8",
                borderRadius: "10px",
                p: { xs: 2.5, md: 3 },
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 72,
                  height: 72,
                  backgroundColor: COLORS.PRIMARY,
                  borderBottomLeftRadius: "60px",
                }}
              />

              <Box
                sx={{
                  width: 34,
                  height: 34,
                  borderRadius: "10px",
                  backgroundColor: "#FDECEF",
                  color: COLORS.SECONDARY,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 700,
                  fontSize: "15px",
                  mb: { xs: 4, md: 5 },
                }}
              >
                {step.number}
              </Box>

              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 700,
                  fontSize: { xs: "15px", md: "16px" },
                  color: COLORS.SECONDARY,
                  lineHeight: 1.3,
                  mb: 2,
                  maxWidth: "85%",
                }}
              >
                {step.title}
              </Typography>

              <Typography
                sx={{
                  fontFamily: ibmPlexSans.style.fontFamily,
                  fontSize: { xs: "13px", md: "14px" },
                  color: COLORS.TEXT_MUTED,
                  lineHeight: 1.55,
                  whiteSpace: "pre-line",
                }}
              >
                {step.desc}
              </Typography>
            </Box>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default PatentServiceSection;