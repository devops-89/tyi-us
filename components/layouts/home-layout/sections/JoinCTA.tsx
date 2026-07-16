"use client";

import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { ArrowUpRight } from "lucide-react";

import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import AppButton from "@/components/widgets/Button";
import Image from "next/image";
import { ASSETS } from "@/utils/assets";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
import Link from "next/link";

const JoinCTA = () => {
  return (
    <Box
      sx={{
        pt: { xs: 0, sm: 2, md: 8, lg: 32 }, 
        pb: { xs: 2, md: 10 },
        backgroundColor: COLORS.WHITE,
        position: "relative",
        zIndex: 10, 
        overflow: "visible", 
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
          {}
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
                  sm: "336px", 
                  md: "336px", 
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
                  priority 
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw" 
                  style={{
                    objectFit: "cover",
                    objectPosition: "center",
                  }}
                />
              </Box>

              {}
              <Box
                sx={{
                  position: "absolute",
                  width: {
                    xs: "100px", 
                    sm: "180px", 
                    md: "150px", 
                    lg: "277px", 
                  },
                  height: {
                    xs: "100px", 
                    sm: "180px", 
                    md: "150px", 
                    lg: "277px", 
                  },
                  top: {
                    xs: "-48px", 
                    sm: "-100px", 
                    md: "-74px", 
                    lg: "-154px", 
                  },
                  right: {
                    xs: "-28px", 
                    sm: "-72px", 
                    md: "-46px", 
                    lg: "-111px", 
                  },
                  borderRadius: "50%",
                  border: "0.5px solid #101010",
                  backgroundColor: COLORS.WHITE, 
                  zIndex: 3,
                }}
              >
                {}
                <Box
                  sx={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    margin: "auto",
                    width: {
                      xs: "78%", 
                      sm: "117px", 
                      md: "98px", 
                      lg: "180px", 
                    },
                    height: {
                      xs: "78%", 
                      sm: "117px",
                      md: "98px", 
                      lg: "180px",
                    },
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
                      width: { 
                        xs: 18, 
                        sm: 28, 
                        md: 20, 
                        lg: 43.76 
                      },
                      height: { 
                        xs: 18, 
                        sm: 28, 
                        md: 20, 
                        lg: 43.76 
                      },
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
                        xs: "7.5px", 
                        sm: "6.5px", 
                        md: "6.5px", 
                        lg: "10px", 
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
                        xs: "9px", 
                        sm: "9px", 
                        md: "9px", 
                        lg: "14px", 
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

              {}
              <Box
                sx={{
                  position: "absolute",
                  width: {
                    xs: "32%", 
                    sm: "140px", 
                    md: "150px", 
                    lg: "264px", 
                  },
                  height: {
                    xs: "40px", 
                    sm: "90px", 
                    md: "90px", 
                    lg: "140px", 
                  },
                  left: {
                    xs: "-40px", 
                    sm: "-70px", 
                    md: "-70px", 
                    lg: "-130px", 
                  },
                  bottom: {
                    xs: "15px", 
                    sm: "30px", 
                    md: "30px",
                    lg: "45px",
                  },
                  backgroundColor: COLORS.WHITE,
                  borderRadius: "200px",
                  boxShadow: "0px 30px 80px rgba(47, 65, 88, 0.2)", 
                  zIndex: 3,
                  display: "grid",
                  placeItems: "center",
                }}
              >
                {}
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
                      width: { 
                        xs: 10, 
                        sm: 48, 
                        md: 36, 
                        lg: 74.58 
                      },
                      height: { 
                        xs: 10, 
                        sm: 48, 
                        md: 36, 
                        lg: 74.58 
                      },
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
                        sm: "9px", 
                        md: "8px", 
                        lg: "14px", 
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
                        sm: "6.5px", 
                        md: "6px", 
                        lg: "10px", 
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

          {}
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
            <Box sx={{ mb: 2, mt: 4 }}>
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
                fontSize: { xs: "14px", md: "16px" },
                color: COLORS.TEXT_MUTED,
                mb: { xs: 4.5, md: 3.5 },
                maxWidth: { xs: "100%", md: "480px" },
                lineHeight: { xs: "28px", md: "26px" },
                mx: { xs: "auto", md: 0 },
              }}
            >
              Solve the World’s Biggest Problems & showcase Your Idea Globally
            </Typography>

            <AppButton
              pill
                component={Link}
  href="/submit" 
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
                  backgroundColor: COLORS.SECONDARY,
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