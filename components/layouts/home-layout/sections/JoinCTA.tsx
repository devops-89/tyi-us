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
        pt: { xs: 4, md: 18 },
        pb: { xs: 4, md: 10 },
        backgroundColor: COLORS.WHITE,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          right: 0,
          bottom: { xs: 20, md: 30 },
          width: { xs: 100, md: 180 },
          height: { xs: 60, md: 120 },
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
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 5, md: 10 }}
          alignItems="center"
        >
          <Box
            sx={{
              flex: 1,
              position: "relative",
              minHeight: { xs: 320, sm: 380, md: 420 },
              width: "100%",
            }}
          >
            <Box
              sx={{
                position: "relative",
                height: { xs: "300px", sm: "360px", md: "420px" },
                width: { xs: "100%", md: "90%" },
                mx: "auto",
                borderRadius: { xs: "22px", md: "28px" },
                overflow: "hidden",
                boxShadow: "0 20px 60px rgba(0,0,0,0.12)",
              }}
            >
              <Image
                src={ASSETS.IMAGES.IMAGE_WHAT_WAITING}
                alt="Students collaborating on innovation"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>

            <Box
              sx={{
                position: "absolute",
                top: { xs: -45, md: -80 },
                right: { xs: 6, md: 10 },
                width: { xs: 110, md: 150 },
                height: { xs: 110, md: 150 },
                backgroundColor: "transparent",
                borderRadius: "50%",
                border: "1px solid #000",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                p: { xs: 1.2, md: 2 },
                zIndex: 3,
              }}
            >
              <Box
                sx={{
                  backgroundColor: "#FFEAF0",
                  borderRadius: "50%",
                  width: "100%",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: { xs: 20, md: 26 },
                    height: { xs: 20, md: 26 },
                    mb: 1,
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
                    fontSize: { xs: "7px", md: "8px" },
                    fontWeight: 500,
                    color: COLORS.SECONDARY,
                    lineHeight: 1.4,
                  }}
                >
                  Prestigious Title of
                </Typography>

                <Typography
                  sx={{
                    fontFamily: ibmPlexSans.style.fontFamily,
                    fontSize: { xs: "8px", md: "10px" },
                    fontWeight: 700,
                    color: COLORS.SECONDARY,
                    lineHeight: 1.2,
                    mt: 0.4,
                  }}
                >
                  America&apos;s Top
                  <br />
                  Young Innovator
                </Typography>
              </Box>
            </Box>

            <Box
              sx={{
                position: "absolute",
                bottom: { xs: 18, md: 36 },
                left: { xs: 6, md: -24 },
                width: { xs: 125, md: 150 },
                backgroundColor: COLORS.WHITE,
                borderRadius: "100px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                py: { xs: 1.4, md: 2 },
                px: { xs: 1.8, md: 2.5 },
                boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                zIndex: 3,
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: { xs: 18, md: 20 },
                  height: { xs: 18, md: 20 },
                  mb: 0.8,
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
                  fontSize: { xs: "8px", md: "10px" },
                  fontWeight: 600,
                  color: COLORS.SECONDARY,
                  lineHeight: 1.25,
                }}
              >
                Showcase your Innovation
              </Typography>

              <Typography
                sx={{
                  fontFamily: ibmPlexSans.style.fontFamily,
                  fontSize: { xs: "7px", md: "8px" },
                  fontWeight: 500,
                  color: COLORS.SECONDARY,
                  lineHeight: 1.3,
                  mt: 0.5,
                }}
              >
                To The World
              </Typography>
            </Box>
          </Box>

          <Box
            sx={{
              flex: 1,
              position: "relative",
              width: "100%",
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Box sx={{ mb: 2 }}>
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
                mb: 3.5,
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