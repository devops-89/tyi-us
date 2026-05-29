"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";
import { Play } from "lucide-react";

import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";

const NurturingYoungInventorsSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: COLORS.WHITE,
        py: { xs: 6, md: 8 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box sx={{ mb: 1.5 }}>
          <SparkleLabel
            text="Nurturing"
            fontSize={14}
            sparklePosition="both"
            color={COLORS.PRIMARY}
          />
        </Box>

        <Typography
          sx={{
            fontFamily: poppins.style.fontFamily,
            fontWeight: 500,
            fontSize: { xs: "26px", md: "32px" },
            color: COLORS.BLACK,
            lineHeight: 1.2,
            mb: { xs: 3, md: 4 },
          }}
        >
          Nurturing Young Inventors
        </Typography>

        <Box
          component="ul"
          sx={{
            pl: { xs: 2.5, md: 3 },
            mb: { xs: 4, md: 6 },
            maxWidth: 980,
          }}
        >
          {[
            <>
              The <b>Only Organization</b> In The World That Nurtures Young
              Minds To Convert Vague Ideas Into Patentable Inventions
            </>,
            <>
              <b>330+</b> Students With Successful Patent Granted In 5 Years.
            </>,
            <>
              Nurturing <b>1 Inventor Every 6 Days!</b>
            </>,
            <>
              Team Of Elite <b>Innovation Mentors</b>, Technology Experts And
              US Patent Attorneys
            </>,
            <>
              Trusted By Parents, Recognized By The Media And Awarded By The{" "}
              <b>US Government</b>
            </>,
            <>
              Partnership With <b>DiscoverSTEM</b> – Leading Innovation,
              Research & Entrepreneurship Organization
            </>,
          ].map((item, index) => (
            <Typography
              key={index}
              component="li"
              sx={{
                fontFamily: ibmPlexSans.style.fontFamily,
                fontSize: { xs: "14px", md: "16px" },
                color: COLORS.TEXT_MUTED,
                lineHeight: 1.7,
                mb: 0.4,
                "& b": {
                  color: COLORS.BLACK,
                  fontWeight: 700,
                },
              }}
            >
              {item}
            </Typography>
          ))}
        </Box>

        <Box
          sx={{
            width: "100%",
            maxWidth: 1050,
            height: { xs: 240, sm: 360, md: 560 },
            backgroundColor: COLORS.BLACK,
            borderRadius: { xs: "16px", md: "20px" },
            mx: "auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              width: { xs: 52, md: 62 },
              height: { xs: 36, md: 44 },
              borderRadius: "10px",
              backgroundColor: "#FF0000",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: COLORS.WHITE,
            }}
          >
            <Play size={24} fill="white" />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default NurturingYoungInventorsSection;