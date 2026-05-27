"use client";

import React from "react";
import { Box, Container, Typography, Stack, Grid } from "@mui/material";
import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import AppButton from "@/components/widgets/Button";
import Image from "next/image";
import { ASSETS } from "@/utils/assets";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";

const ChallengeSection = () => {
  return (
    <Box sx={{ pt: 10, pb: 10, backgroundColor: COLORS.WHITE }}>
      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH }}>
        <Grid container spacing={6} alignItems="stretch">
          {/* Left Side Content */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ pr: { md: 10 }, flex: 1 }}>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 400,
                  fontSize: "28px",
                  color: COLORS.BLACK,
                  mb: 2,
                  lineHeight: 1.1,
                }}
              >
                The Ultimate Innovation Challenge for Young Creators
              </Typography>
              <Typography
                sx={{
                  fontFamily: ibmPlexSans.style.fontFamily,
                  fontSize: "20px",
                  color: COLORS.TEXT_MUTED,
                  lineHeight: 1.8,
                  mb: 4,
                  maxWidth: "600px",
                  textAlign: "justify",
                }}
              >
                Top Young Innovators brings an exciting innovation competition "America's Top Young Innovator" to hunt the most innovative and creative young minds.
              </Typography>
              <AppButton pill sx={{ mb: 8, fontSize: "18px" }}>
                Explore the Competition
              </AppButton>
            </Box>

              <Box
                sx={{
                  borderRadius: "32px",
                  overflow: "hidden",
                  position: "relative",
                  height: { xs: "350px", md: "520px" },
                  mt: "auto",
                  border: "1px solid #EAEAEA",
                }}
              >
              <Image
                src={ASSETS.IMAGES.HERO2}
                alt="Students innovating"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Grid>

          {/* Right Side Content */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ display: "flex", flexDirection: "column" }}>
            <Box sx={{ flex: 1, pt: { md: 24 }, ml: { md: "auto" }, maxWidth: { md: "520px" } }}>
              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 400,
                  fontSize: "28px",
                  color: COLORS.BLACK,
                  mb: 2,
                  lineHeight: 1.25,
                }}
              >
                Got a Big Idea? Show It to the World!
                
              </Typography>

              <Typography
                sx={{
                  fontFamily: ibmPlexSans.style.fontFamily,
                  fontSize: "20px",
                  color: COLORS.TEXT_MUTED,
                  lineHeight: 1.6,
                  mb: 4,
                  maxWidth: "520px",
                  textAlign: "justify",
                }}
              >
                If you are aged between 10 to 22 years and have an idea that you think has the power to change the world, participate in “America’s Top Young Innovator”, win the title, and get global recognition.
              </Typography>
            </Box>

            <Box
              sx={{
                borderRadius: "32px",
                overflow: "hidden",
                position: "relative",
                height: { xs: "350px", md: "460px" },
                mt: { xs: 4, md: 0 },
                border: "1px solid #EAEAEA",
              }}
            >
              <Image
                src={ASSETS.IMAGES.HERO3}
                alt="Eco Globe"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ChallengeSection;
