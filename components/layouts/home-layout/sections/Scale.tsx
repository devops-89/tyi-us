"use client";

import React from "react";
import { Box, Container, Typography, Stack, Grid } from "@mui/material";
import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import AppButton from "@/components/widgets/Button";
import Image from "next/image";
import { ASSETS } from "@/utils/assets";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
const ScaleSection = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: COLORS.WHITE }}>
      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH }}>
        {/* Top Label - Reusable Component */}
        <Box sx={{ mb: 2 }}>
          <SparkleLabel 
            text="The Scale of the Challenge" 
            fontSize={18} 
            sparklePosition="both" 
            type="diamond" 
            color={COLORS.PRIMARY} 
          />
        </Box>

        <Grid container spacing={8} alignItems="center">
          {/* Left Side - Hero Image */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                position: "relative",
                height: { xs: "350px", md: "520px" },
                width: "100%",
                display: "flex",
                justifyContent: "flex-start",
              }}
            >
              <Image
                src={ASSETS.IMAGES.HERO4}
                alt="Big Genius Lightbulb"
                fill
                style={{ objectFit: "contain", objectPosition: "left" }}
              />
            </Box>
          </Grid>

          {/* Right Side - Content */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ pl: { md: 10 } }}>
              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 600,
                  fontSize: "45px",
                  color: COLORS.BLACK,
                  lineHeight: 1.2,
                  mb: 2,
                }}
              >
                Are You Ready to Be the World&apos;s Next
                <br />
                <Box
                  component="span"
                  sx={{
                    display: "inline-block",
                    backgroundColor: "#F3F4F6",
                    px: 2,
                    py: 0.5,
                    borderRadius: "10px",
                    mt: 1,
                  }}
                >
                  Young Genius ?
                </Box>
              </Typography>

              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontSize: "20px",
                  fontWeight: 400,
                  color: COLORS.TEXT_MUTED,
                  mb: 1,
                  maxWidth: "840px",
                  lineHeight: 1.55,
                }}
              >
                Unlock your creativity and join the world&apos;s most exciting STEM challenge for students an opportunity to explore your passion for science, build groundbreaking ideas, and gain recognition for your innovation.
              </Typography>

              <Stack direction={{ xs: "column", sm: "row" }} spacing={2} sx={{ mb: 3 }}>
                <AppButton
                  pill
                  sx={{
                    backgroundColor: COLORS.SECONDARY,
                    fontSize: "18px",
                    py: 1.8,
                    px: 4,
                    "&:hover": { backgroundColor: COLORS.PRIMARY },
                  }}
                >
                  Join the 2025 Challenge
                </AppButton>
                <AppButton
                  pill
                  sx={{
                    backgroundColor: "rgba(227, 24, 55, 0.08)",
                    color: COLORS.SECONDARY,
                    border: `1px solid ${COLORS.SECONDARY}`,
                    fontSize: "18px",
                    py: 1.8,
                    px: 4,
                    "&:hover": { backgroundColor: "rgba(227, 24, 55, 0.15)" },
                  }}
                >
                  Know the Rules
                </AppButton>
              </Stack>

              <Stack direction="row" spacing={{ xs: 3, md: 6 }} flexWrap="wrap">
                {[
                  { value: "80+", label: "Countries" },
                  { value: "100k+", label: "Participates" },
                  { value: "10-22", label: "Age Group" },
                ].map((item) => (
                  <Box key={item.label}>
                    <Typography
                      sx={{
                        fontFamily: poppins.style.fontFamily,
                        fontSize: { xs: "32px", md: "42px" },
                        fontWeight: 700,
                        color: COLORS.BLACK,
                        lineHeight: 1.1,
                      }}
                    >
                      {item.value}
                    </Typography>
                    <Typography
                      sx={{
                        fontFamily: ibmPlexSans.style.fontFamily,
                        fontSize: "18px",
                        color: COLORS.TEXT_MUTED,
                      }}
                    >
                      {item.label}
                    </Typography>
                  </Box>
                ))}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ScaleSection;
