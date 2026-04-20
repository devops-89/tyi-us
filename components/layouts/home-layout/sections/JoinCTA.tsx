"use client";

import React from "react";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Tv, Globe2 } from "lucide-react";
import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import AppButton from "@/components/widgets/Button";
import Image from "next/image";
import { ASSETS } from "@/utils/assets";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
import { ArrowUpRight } from "lucide-react";
const JoinCTA = () => {
  return (
    <Box sx={{ pt: { xs: 12, md: 18 }, pb: { xs: 8, md: 10 }, backgroundColor: COLORS.WHITE, position: "relative", overflow: "hidden" }}>
      <Box sx={{ position: "absolute", right: 0, bottom: { xs: 20, md: 30 }, width: { xs: 100, md: 180 }, height: { xs: 60, md: 120 }, display: { xs: "none", md: "block" }, zIndex: 0 }}>
        <Image src={ASSETS.IMAGES.ICON_DOTS} alt="" fill style={{ objectFit: "contain", objectPosition: "bottom right" }} />
      </Box>
      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH, position: "relative", zIndex: 1 }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 6, md: 10 }}
          alignItems="center"
        >
          <Box sx={{ flex: 1, position: "relative", minHeight: { xs: 300, md: 420 } }}>

            {/* Main rounded image */}
            <Box
              sx={{
                position: "relative",
                height: { xs: "300px", md: "420px" },
                width: "90%",
                mx: "auto",
                borderRadius: "28px",
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

            {/* Top-right floating circle badge */}
            <Box
              sx={{
                position: "absolute",
                top: -80,
                right: 10,
                width: 150,
                height: 150,
                backgroundColor: "transparent",
                borderRadius: "50%",
                border: "1px solid  #000",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                p: 2,
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
                <Box sx={{ position: "relative", width: 26, height: 26, mb: 1 }}>
                  <Image src={ASSETS.IMAGES.ICON_CERTIFICATE} alt="" fill style={{ objectFit: "contain" }} />
                </Box>
                <Typography
                  sx={{
                    fontFamily: ibmPlexSans.style.fontFamily,
                    fontSize: "8px",
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
                    fontSize: "10px",
                    fontWeight: 700,
                    color: COLORS.SECONDARY,
                    lineHeight: 1.2,
                    mt: 0.4,
                  }}
                >
                  America&apos;s Top<br />Young Innovator
                </Typography>
              </Box>
            </Box>
            <Box
              sx={{
                position: "absolute",
                bottom: 36,
                left: -24,
                width: 150,
                backgroundColor: COLORS.WHITE,
                borderRadius: "100px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                py: 2,
                px: 2.5,
                boxShadow: "0 12px 40px rgba(0,0,0,0.12)",
                zIndex: 3,
              }}
            >
              <Box sx={{ position: "relative", width: 20, height: 20, mb: 0.8 }}>
                <Image src={ASSETS.IMAGES.ICON_GLOBE_HANDS} alt="" fill style={{ objectFit: "contain" }} />
              </Box>
              <Typography
                sx={{
                  fontFamily: ibmPlexSans.style.fontFamily,
                  fontSize: "10px",
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
                  fontSize: "8px",
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

          {/* ── Right: Text content ── */}
          <Box sx={{ flex: 1, position: "relative" }}>
            {/* Sparkle label */}
            <Box sx={{ mb: 2 }}>
              <SparkleLabel text="Join Us" sparklePosition="both" type="diamond" color={COLORS.PRIMARY} fontSize={18} />
            </Box>

            {/* Heading */}
            <Typography
              variant="h2"
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 400,
                fontSize: "28px",
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
                fontSize: { xs: "15px", md: "20px" },
                color: COLORS.TEXT_MUTED,
                mb: 3.5,
                maxWidth: "480px",
                lineHeight: "26px",
              }}
            >
              Use your creativity to tackle major world issues and share your idea on
              an international platform.
            </Typography>
            <AppButton
              pill
              sx={{
                backgroundColor: COLORS.SECONDARY,
                color: COLORS.WHITE,
                px: 4,
                py: 1.2,
                fontSize: "18px",
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
