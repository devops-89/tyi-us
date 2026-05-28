"use client";

import React from "react";
import Image from "next/image";
import { Box, Container, Grid, Typography } from "@mui/material";

import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";

const { hero } = WEBSITE_DATA.about;

const AboutHeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: Colors.WHITE,
        pt: { xs: 6, md: 12 },
        pb: { xs: 6, md: 10 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            mb: 3,
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <SparkleLabel text={hero.sparkle} />
        </Box>

        <Grid container spacing={{ xs: 5, md: 6 }} alignItems="flex-start">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 700,
                fontSize: { xs: 30, md: 40 },
                color: Colors.BLACK,
                mb: 2,
                lineHeight: { xs: 1.25, md: "normal" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {hero.title}
            </Typography>

            <Typography
              sx={{
                fontFamily: ibmPlexSans.style.fontFamily,
                fontSize: { xs: 16, md: 18 },
                color: Colors.TEXT_MUTED,
                lineHeight: { xs: "30px", md: "35px" },
                whiteSpace: "pre-line",
                textAlign: "left",
              }}
            >
              {hero.description}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            {/* Mobile: only front image */}
            <Box
              sx={{
                display: { xs: "block", md: "none" },
                position: "relative",
                width: "100%",
                height: { xs: 320, sm: 420 },
                borderRadius: 3,
                overflow: "hidden",
                boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
              }}
            >
              <Image
                src={hero.image2}
                alt="Young students"
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </Box>

            {/* Desktop / md: both images */}
            <Box
              sx={{
                display: { xs: "none", md: "block" },
                position: "relative",
                height: { md: 520, lg: 473 },
                mb: 3,
              }}
            >
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: 427,
                  height: "100%",
                  borderRadius: 2,
                  overflow: "hidden",
                  zIndex: 1,
                }}
              >
                <Image
                  src={hero.image1}
                  alt="Students"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  bottom: -8,
                  left: "12%",
                  width: 481,
                  height: 516,
                  borderRadius: 3,
                  overflow: "hidden",
                  bgcolor: Colors.WHITE,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                  zIndex: 2,
                }}
              >
                <Image
                  src={hero.image2}
                  alt="Young students"
                  fill
                  style={{
                    objectFit: "cover",
                    borderRadius: 24,
                  }}
                />
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutHeroSection;