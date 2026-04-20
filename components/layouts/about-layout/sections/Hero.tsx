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
    <Box sx={{ backgroundColor: Colors.WHITE, pt: { xs: 8, md: 12 }, pb: { xs: 8, md: 10 } }}>
      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH }}>
        <Box sx={{ mb: 3 }}>
          <SparkleLabel text={hero.sparkle} />
        </Box>

        <Grid container spacing={6} alignItems="flex-start">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 700,
                fontSize: { xs: 30, md: 40 },
                color: Colors.BLACK,
                mb: 2,
              }}
            >
              {hero.title}
            </Typography>
            <Typography
              sx={{
                fontFamily: ibmPlexSans.style.fontFamily,
                fontSize: 18,
                color: Colors.TEXT_MUTED,
                lineHeight: "35px",
                whiteSpace: "pre-line",
              }}
            >
              {hero.description}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: "relative", height: { xs: 260, md: 473 }, mb: 3 }}>
              <Box
                sx={{
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: { xs: "60%", md: 427 },
                  height: "100%",
                  borderRadius: 2,
                  overflow: "hidden",
                }}
              >
                <Image src={hero.image1} alt="Students" fill style={{ objectFit: "cover" }} />
              </Box>
              <Box
                sx={{
                  position: "absolute",
                  bottom: -8,
                  left: "12%",
                  width: { xs: "65%", md: 481 },
                  height: 516,
                  borderRadius: 3,
                  overflow: "hidden",
                  bgcolor: Colors.WHITE,
                  boxShadow: "0 20px 40px rgba(0,0,0,0.12)",
                  display: { xs: "none", md: "block" },
                }}
              >
                <Image
                  src={hero.image2}
                  alt="Young students"
                  fill
                  style={{ objectFit: "cover", borderRadius: 24, marginTop: 8 }}
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

