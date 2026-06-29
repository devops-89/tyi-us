
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
    <Box sx={{ py: { xs: 4, sm: 6, md: 12 }, backgroundColor: COLORS.WHITE }}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box sx={{ mb: { xs: 3, md: 2 } }}>
          <SparkleLabel
            text="The Scale of the Challenge"
            fontSize={18}
            sparklePosition="both"
            type="diamond"
            color={COLORS.PRIMARY}
          />
        </Box>

        {/* Stretches columns to equal heights on tablet/desktop */}
        <Grid 
          container 
          spacing={{ xs: 5, sm: 3, md: 5, lg: 8 }} // 5 spacing on 1024px (md), 8 on 1440px (lg)
          alignItems={{ xs: "center", sm: "stretch" }}
        >
          {/* Left Grid: Lightbulb Graphic (stretches to 100% height of content) */}
          <Grid size={{ xs: 12, sm: 4, md: 5 }}>
            <Box
              sx={{
                position: "relative",
                height: { xs: "260px", sm: "100%" }, // Stretches to match the right content height
                width: "100%",
                mx: "auto",
                borderRadius: "20px",
                overflow: "hidden",
              }}
            >
              <Image
                src={ASSETS.IMAGES.HERO4}
                alt="Big Genius Lightbulb"
                fill
                style={{
                  objectFit: "cover", // Covers the card area, keeping the cap/bulb centered
                  objectPosition: "center",
                }}
              />
            </Box>
          </Grid>

          {/* Right Grid: Text Content */}
          <Grid size={{ xs: 12, sm: 8, md: 7 }}>
            <Box sx={{ pl: { xs: 0, sm: 2, md: 5, lg: 10 } }}> {/* 5 padding on 1024px (md), 10 on 1440px (lg) */}
              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 600,
                  fontSize: { xs: "24px", sm: "28px", md: "36px", lg: "45px" }, // Decreased on 1024px (md)
                  color: COLORS.BLACK,
                  lineHeight: { xs: 1.25, md: 1.2 },
                  mb: 2,
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                  Got What It Takes to Be the Next
                <br />
                <Box
                  component="span"
                  sx={{
                    display: "inline-block",
                    backgroundColor: "#F3F4F6",
                    px: { xs: 1.5, md: 2 },
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
                  fontSize: { xs: "16px", sm: "15px", md: "17px", lg: "20px" }, // Decreased on 1024px (md)
                  fontWeight: 400,
                  color: COLORS.TEXT_MUTED,
                  mb: 3,
                  maxWidth: "840px",
                  lineHeight: { xs: 1.6, md: 1.55 },
                  textAlign: { xs: "center", sm: "left" },
                }}
              >
                 Unlock your creativity and join the world&apos;s  most exciting challenge for students. Explore your passion for science, build groundbreaking ideas, and gain recognition for your innovation.

               
              </Typography>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={2}
                sx={{
                  mb: { xs: 4, sm: 3, md: 3 },
                  alignItems: "center",
                  justifyContent: { xs: "center", sm: "flex-start" },
                  flexWrap: "wrap",
                }}
              >
                <AppButton
                  pill
                  sx={{
                    backgroundColor: COLORS.SECONDARY,
                    fontSize: { xs: "13px", sm: "14px", md: "16px", lg: "18px" }, // Decreased on 1024px (md)
                    py: { xs: 1, sm: 1.2, md: 1.5, lg: 1.8 }, // Decreased padding on 1024px (md)
                    px: { xs: 2.5, sm: 2.5, md: 3.5, lg: 4 }, // Decreased padding on 1024px (md)
                    width: { xs: "200px", sm: "auto" },
                    whiteSpace: "nowrap",
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
                    fontSize: { xs: "13px", sm: "14px", md: "16px", lg: "18px" }, // Decreased on 1024px (md)
                    py: { xs: 1, sm: 1.2, md: 1.5, lg: 1.8 }, // Decreased padding on 1024px (md)
                    px: { xs: 2.5, sm: 2.5, md: 3.5, lg: 4 }, // Decreased padding on 1024px (md)
                    width: { xs: "200px", sm: "auto" },
                    whiteSpace: "nowrap",
                    "&:hover": {
                      backgroundColor: "rgba(227, 24, 55, 0.15)",
                    },
                  }}
                >
                  Know the Rules
                </AppButton>
              </Stack>

              <Stack
                direction={{ xs: "column", sm: "row" }}
                spacing={{ xs: 3, sm: 4, md: 4, lg: 6 }} // Decreased spacing on 1024px (md)
                alignItems={{ xs: "center", sm: "flex-start" }}
              >
                {[
                  { value: "80+", label: "Countries" },
                  { value: "100k+", label: "Participates" },
                  { value: "10-22", label: "Age Group" },
                ].map((item) => (
                  <Box
                    key={item.label}
                    sx={{ textAlign: { xs: "center", sm: "left" } }}
                  >
                    <Typography
                      sx={{
                        fontFamily: poppins.style.fontFamily,
                        fontSize: { xs: "30px", sm: "32px", md: "36px", lg: "42px" }, // Decreased on 1024px (md)
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
                        fontSize: { xs: "15px", sm: "15px", md: "16px", lg: "18px" }, // Decreased on 1024px (md)
                        color: COLORS.TEXT_MUTED,
                        mt: { xs: 0.5, sm: 1 },
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