"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Container, Stack, Typography, Button } from "@mui/material";
import { ArrowUpRight } from "lucide-react";
import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";
import { ASSETS } from "@/utils/assets";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";

const HomeHeroSection = () => {
  const { hero } = WEBSITE_DATA.home;

  return (
    <Box
      sx={{
        pt: { xs: 9, md: 12 },
        pb: { xs: 7, md: 8 },
        backgroundColor: Colors.WHITE,
        position: "relative",
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 6 }}
          alignItems="flex-start"
        >
          {/* Left Content */}
          <Box sx={{ flex: 1, pt: 4 }}>
            <Box sx={{ mb: 2 }}>
              <SparkleLabel 
                text={hero.sparkle} 
                fontSize={18} 
                sparklePosition="right" 
                customIcon={
                  <Box sx={{ width: 18, height: 18, position: "relative" }}>
                    <Image src={ASSETS.IMAGES.ICON_RED_STAR} alt="red star" fill style={{ objectFit: "contain" }} />
                  </Box>
                }
              />
            </Box>

            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 700,
                fontSize: "20px",
                color: Colors.BLACK,
                mb: 1,
              }}
            >
              {hero.secondaryTitle}
            </Typography>

            <Box sx={{ mb: 0, mt: 1 }}>
              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 600,
                  fontSize: { xs: "32px", md: "45px" },
                  backgroundColor: Colors.BLACK,
                  color: Colors.WHITE,
                  display: "inline-block",
                  px: 3,
                  py: 1,
                  borderRadius: "15px 50px 50px 0",
                  lineHeight: 1.1,
                }}
              >
                {hero.tertiaryTitle}
              </Typography>
            </Box>

            <Box sx={{ mb: 3, mt: 0 }}>
              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 600,
                  fontSize: { xs: "32px", md: "45px" },
                  backgroundColor: Colors.BLACK,
                  color: Colors.WHITE,
                  display: "inline-block",
                  px: 3,
                  py: 1,
                  borderRadius: "0 50px 50px 15px",
                  lineHeight: 1.1,
                }}
              >
                {hero.title}
              </Typography>
            </Box>

            <Typography
              sx={{
                fontFamily: ibmPlexSans.style.fontFamily,
                fontWeight: 600,
                fontSize: "28px",
                color: Colors.BLACK,
                mb: 2,
                lineHeight: 1,
              }}
            >
              {hero.subtitle}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontFamily: ibmPlexSans.style.fontFamily,
                fontSize: "20px",
                color: Colors.TEXT_MUTED,
                maxWidth: "600px",
                lineHeight: 1.6,
                mb: 4,
              }}
            >
              {hero.description}
            </Typography>

            <Stack direction="column" spacing={5} alignItems="flex-start">
              {/* Submit Button Row */}
              <Button
                component={Link}
                href={hero.cta1Href}
                variant="contained"
                endIcon={<ArrowUpRight size={18} />}
                sx={{
                  height: 48,
                  borderRadius: "50px",
                  px: 4,
                  backgroundColor: Colors.SECONDARY,
                  color: Colors.WHITE,
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 600,
                  fontSize: "18px",
                  textTransform: "none",
                  boxShadow: "none",
                  "&:hover": {
                    backgroundColor: "#c61530",
                    boxShadow: "none"
                  },
                }}
              >
                {hero.cta1Text}
              </Button>
            </Stack>
          </Box>

          {/* Right Image */}
          <Box
            sx={{
              flex: 1.2,
              position: "relative",
              width: "100%",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
              height: { xs: "300px", md: "460px" },
              maxWidth: "840px",
            }}
          >
            <Image
              src={hero.image}
              alt="America's Top Young Innovators"
              fill
              style={{ objectFit: "cover" }}
              priority
            />

            {/* Play Button Overlay (Watch) */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "40%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                alignItems: "center",
                gap: 2,
                cursor: "pointer",
                padding: "8px 16px",
                borderRadius: "50px",
                "&:hover": {
                  "& .play-icon": { scale: "1.1" }
                }
              }}
            >
              <Box
                className="play-icon"
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  border: `2px solid ${Colors.WHITE}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(4px)"
                }}
              >
                <Box
                  sx={{
                    width: 0,
                    height: 0,
                    borderTop: "8px solid transparent",
                    borderBottom: "8px solid transparent",
                    borderLeft: `12px solid ${Colors.WHITE}`,
                    ml: "3px"
                  }}
                />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontFamily: ibmPlexSans.style.fontFamily,
                    color: Colors.WHITE,
                    fontWeight: 700,
                    fontSize: "12px",
                    lineHeight: 1,
                  }}
                >
                  {hero.watchLabel}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: ibmPlexSans.style.fontFamily,
                    color: Colors.WHITE,
                    fontSize: "10px",
                    lineHeight: 1.5,
                  }}
                >
                  {hero.watchDescription}
                </Typography>
              </Box>
            </Box>

            {/* Bottom Label Overlay */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                backgroundColor: Colors.WHITE,
                p: "14px 28px",
                borderBottom: `4px solid ${Colors.SECONDARY}`,
                display: "inline-block",
                width: "75% ",
                margin: "0",
                borderRadius: "4px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: ibmPlexSans.style.fontFamily,
                  fontWeight: 700,
                  fontSize: "14px",
                  color: Colors.BLACK,
                }}
              >
                {hero.imageLabel}
              </Typography>
            </Box>
          </Box>
        </Stack>

        {/* About Button + Description Row - Moved below for better width */}
        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={21} 
          alignItems={{ xs: "flex-start", lg: "center" }}
          sx={{ mt: 12 }}
        >
          <Button
            component={Link}
            href={hero.cta2Href}
            variant="outlined"
            endIcon={<ArrowUpRight size={18} />}
            sx={{
              height: 48,
              borderRadius: "50px",
              px: 4,
              border: `1px solid ${Colors.SECONDARY}`,
              color: Colors.SECONDARY,
              fontFamily: poppins.style.fontFamily,
              fontWeight: 600,
              fontSize: "18px",
              textTransform: "none",
              backgroundColor: "transparent",
              minWidth: "110px",
              "&:hover": {
                backgroundColor: "rgba(227, 24, 55, 0.05)",
                borderColor: Colors.SECONDARY
              },
            }}
          >
            {hero.cta2Text}
          </Button>

          <Typography
            sx={{
              fontFamily: ibmPlexSans.style.fontFamily,
              fontSize: "20px",
              color: Colors.BLACK,
              lineHeight: 1.6,
              maxWidth: "1000px",
              textAlign: "justify",
              "& span": { color: Colors.SECONDARY, fontWeight: 700 }
            }}
          >
            <span>Top Young Innovators</span> {hero.description2.replace("Top Young Innovators ", "")}
          </Typography>
        </Stack>

        <Box
          sx={{
            mt: 8,
            width: "100%",
            height: "1.5px",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
          }}
        />
      </Container>
    </Box>
  );
};

export default HomeHeroSection;
