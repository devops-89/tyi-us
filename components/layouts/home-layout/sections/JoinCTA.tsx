"use client";

import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import AppButton from "@/components/widgets/Button";
import Image from "next/image";
import { ASSETS } from "@/utils/assets";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";

const JoinCTA = () => {
  return (
    <Box
      sx={{
        pt: { xs: 8, sm: 10, md: 18 },
        pb: { xs: 2, md: 10 },
        backgroundColor: COLORS.WHITE,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          right: 0,
          bottom: { md: 30 },
          width: { md: 180 },
          height: { md: 120 },
          display: { xs: "none", md: "block" },
          zIndex: 0,
        }}
      >
        <Image
          src={ASSETS.IMAGES.ICON_DOTS}
          alt=""
          fill
          style={{ objectFit: "contain", objectPosition: "bottom right" }}
        />
      </Box>

      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          position: "relative",
          zIndex: 1,
          px: { xs: 0.5, sm: 0.5, md: 4, lg: 20 },
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 2, sm: 14, md: 10 }}
          alignItems="center"
        >
          {/* Image Section */}
          <Box
            sx={{
              flex: 1,
             order: { xs: 1, md: 1 },
              position: "relative",
              width: "100%",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: {
                  xs: "72vw",
                  sm: "410px",
                  md: "430px",
                  lg: "518px",
                },
                maxWidth: "518px",
                aspectRatio: "518 / 572",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: "100%",
                  borderRadius: { xs: "24px", md: "35px" },
                  overflow: "hidden",
                }}
              >
                <Image
                  src={ASSETS.IMAGES.IMAGE_WHAT_WAITING}
                  alt="Students collaborating on innovation"
                  fill
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </Box>

              {/* Top Right Circle */}
              <Box
                sx={{
                  position: "absolute",
                  width: {
                    xs: "34%",
                    sm: "40%",
                    md: "42%",
                    lg: "46%",
                  },
                  aspectRatio: "1 / 1",
                  top: {
                    xs: "-15%",
                    sm: "-16%",
                    md: "-18%",
                    lg: "-20%",
                  },
                  right: {
                    xs: "-10%",
                    sm: "-12%",
                    md: "-12%",
                    lg: "-15%",
                  },
                  borderRadius: "50%",
                  border: "0.5px solid #101010",
                  backgroundColor: "transparent",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  zIndex: 3,
                }}
              >
                <Box
                  sx={{
                    width: "65%",
                    aspectRatio: "1 / 1",
                    backgroundColor: "#FFEDF1",
                    borderRadius: "50%",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    p: { xs: 0.5, sm: 0.8, md: 1.3 },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: { xs: 13, sm: 18, md: 22, lg: 26 },
                      height: { xs: 13, sm: 18, md: 22, lg: 26 },
                      mb: { xs: 0.3, md: 1 },
                    }}
                  >
                    <Image
                      src={ASSETS.IMAGES.ICON_CERTIFICATE}
                      alt=""
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </Box>

                  <Typography
                    sx={{
                      fontFamily: ibmPlexSans.style.fontFamily,
                      fontSize: {
                        xs: "4.5px",
                        sm: "6px",
                        md: "7px",
                        lg: "8px",
                      },
                      fontWeight: 500,
                      color: COLORS.SECONDARY,
                      lineHeight: 1.35,
                    }}
                  >
                    Prestigious Title of
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: ibmPlexSans.style.fontFamily,
                      fontSize: {
                        xs: "5.5px",
                        sm: "7px",
                        md: "9px",
                        lg: "10px",
                      },
                      fontWeight: 700,
                      color: COLORS.SECONDARY,
                      lineHeight: 1.2,
                      mt: 0.3,
                    }}
                  >
                    America&apos;s Top
                    <br />
                    Young Innovator
                  </Typography>
                </Box>
              </Box>

              {/* Smaller Bottom Left Badge */}
              <Box
                sx={{
                  position: "absolute",
                 width: {
  xs: "32%",
  sm: "34%",
  md: "28%",
  lg: "30%",
  xl: "32%",
},

maxWidth: {
  md: "150px",
  lg: "170px",
},
                 
                  aspectRatio: "364 / 267",
                  left: {
  xs: "-8%",
  sm: "-10%",
  md: "-8%",
  lg: "-10%",
},

bottom: {
  xs: "-4%",
  sm: "-3%",
  md: "3%",
  lg: "4%",
},
                  backgroundColor: COLORS.WHITE,
                  borderRadius: "200px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  boxShadow: "0 8px 24px rgba(0,0,0,0.12)",
                  zIndex: 3,
                }}
              >
                <Box
                  sx={{
                    width: "80%",
height: "72%",
                    borderRadius: "200px",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    justifyContent: "center",
                    textAlign: "center",
                    px: { xs: 0.2, md: 0.4 },
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                     width: { xs: 10, sm: 12, md: 14, lg: 16 },
height: { xs: 10, sm: 12, md: 14, lg: 16 },
                      mb: { xs: 0.15, md: 0.3 },
                    }}
                  >
                    <Image
                      src={ASSETS.IMAGES.ICON_GLOBE_HANDS}
                      alt=""
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </Box>

                  <Typography
                    sx={{
                      fontFamily: ibmPlexSans.style.fontFamily,
                      fontSize: {
  xs: "4px",
  sm: "5px",
  md: "7px",
  lg: "8px",
},
                      fontWeight: 600,
                      color: COLORS.SECONDARY,
                      lineHeight: 1.15,
                    }}
                  >
                    Showcase your Innovation
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: ibmPlexSans.style.fontFamily,
                      fontSize: {
  xs: "3.5px",
  sm: "4.5px",
  md: "6px",
  lg: "7px",
},
                      fontWeight: 500,
                      color: COLORS.SECONDARY,
                      lineHeight: 1.2,
                      mt: 0.2,
                    }}
                  >
                    To The World
                  </Typography>
                </Box>
              </Box>
            </Box>
          </Box>

          {/* Text Section */}
          <Box
            sx={{
              flex: 1,
              order: { xs: 2, md: 2 },
              position: "relative",
              width: "100%",
              textAlign: { xs: "center", md: "left" },
              mb: { xs: 8, sm: 6, md: 0 },
              
            }}
          >
            <Box sx={{ mb: 2 ,mt:4 }}>
              <SparkleLabel
                text="Join Us"
                sparklePosition="both"
                type="diamond"
                color={COLORS.PRIMARY}
                fontSize={18}
              />
            </Box>

            <Typography
              variant="h2"
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 400,
                fontSize: { xs: "24px", md: "28px" },
                color: COLORS.BLACK,
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              What are you waiting for?
            </Typography>

            <Typography
              sx={{
                fontFamily: ibmPlexSans.style.fontFamily,
                fontSize: { xs: "16px", md: "20px" },
                color: COLORS.TEXT_MUTED,
                mb: { xs: 4.5, md: 3.5 },
                maxWidth: { xs: "100%", md: "480px" },
                lineHeight: { xs: "28px", md: "26px" },
                mx: { xs: "auto", md: 0 },
              }}
            >
              Use your creativity to tackle major world issues and share your
              idea on an international platform.
            </Typography>

            <AppButton
              pill
              sx={{
                backgroundColor: COLORS.SECONDARY,
                color: COLORS.WHITE,
                px: { xs: 3, md: 4 },
                py: 1.2,
                fontSize: { xs: "16px", md: "18px" },
                fontWeight: 600,
                alignItems: "center",
                display: "inline-flex",
                gap: 1,
                mb: { xs: 6, sm: 4, md: 0 },
                "&:hover": {
                  backgroundColor: COLORS.PRIMARY,
                  boxShadow: "0 8px 24px rgba(214,14,52,0.25)",
                },
              }}
            >
              Participate Now
            </AppButton>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default JoinCTA;