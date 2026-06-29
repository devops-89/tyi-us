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
        pt: { xs: 0, md: 12 },
        pb: { xs: 3, md: 8 },
        backgroundColor: Colors.WHITE,
        position: "relative",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        {/* HERO SECTION */}
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 6 }}
          alignItems="flex-start"
        >
          {/* LEFT CONTENT */}
          <Box sx={{ flex: 1, pt: { xs: 1, md: 4 }, width: "100%" }}>
            <Box sx={{ mb: 2 }}>
              <SparkleLabel
                text={hero.sparkle}
                fontSize={18}
                sparklePosition="right"
                customIcon={
                  <Box sx={{ width: 18, height: 18, position: "relative" }}>
                    <Image
                      src={ASSETS.IMAGES.ICON_RED_STAR}
                      alt="red star"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                }
              />
            </Box>

            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 700,
                fontSize: { xs: "16px", md: "20px" },
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
                  fontSize: { xs: "28px", sm: "36px", md: "36px", lg: "45px" }, // Compacted on 1024px (md)
                  backgroundColor: Colors.BLACK,
                  color: Colors.WHITE,
                  display: "inline-block",
                  px: { xs: 2, md: 3 },
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
                  fontSize: { xs: "28px", sm: "36px", md: "36px", lg: "45px" }, // Compacted on 1024px (md)
                  backgroundColor: Colors.BLACK,
                  color: Colors.WHITE,
                  display: "inline-block",
                  px: { xs: 2, md: 3 },
                  py: 1,
                  borderRadius: "0 50px 50px 15px",
                  lineHeight: 1.1,
                }}
              >
                {hero.title}
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{
                fontFamily: ibmPlexSans.style.fontFamily,
                fontSize: { xs: "16px", md: "18px", lg: "20px" }, // Compacted on 1024px (md)
                color: Colors.TEXT_MUTED,
                maxWidth: "600px",
                lineHeight: 1.6,
                mb: 4,
                textAlign: "left",
              }}
            >
              {hero.description}
            </Typography>

            <Button
              component={Link}
              href={hero.cta1Href}
              variant="contained"
              endIcon={<ArrowUpRight size={18} />}
              sx={{
                height: 48,
                borderRadius: "50px",
                px: { xs: 3, md: 3, lg: 4 }, // Compacted padding on 1024px (md)
                backgroundColor: Colors.SECONDARY,
                color: Colors.WHITE,
                fontFamily: poppins.style.fontFamily,
                fontWeight: 600,
                fontSize: { xs: "16px", md: "16px", lg: "18px" }, // Compacted font size on 1024px (md)
                textTransform: "none",
                boxShadow: "none",
                display: { xs: "flex", sm: "inline-flex" }, // Centered on mobile, inline-flex on sm+
                mx: { xs: "auto", sm: 0 }, // Centered on mobile, left-aligned on sm+
                width: { xs: "230px", sm: "fit-content" }, // Symmetrical sizing on mobile
                "&:hover": {
                  backgroundColor: "#c61530",
                  boxShadow: "none",
                },
              }}
            >
              {hero.cta1Text}
            </Button>
          </Box>

          {/* RIGHT IMAGE / VIDEO COLUMN */}
          <Box
            sx={{
              flex: { xs: "none", md: 1.2 },
              position: "relative",
              width: "100%",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
              height: { xs: "260px", sm: "340px", md: "380px", lg: "460px" }, // Compacted height on 1024px (md)
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

            {/* PLAY BUTTON */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: { xs: "50%", md: "40%" },
                transform: "translate(-50%, -50%)",
                display: "flex",
                alignItems: "center",
                gap: { xs: 1, md: 2 },
                cursor: "pointer",
                padding: { xs: "8px 12px", md: "8px 16px" },
                borderRadius: "50px",
                zIndex: 3,
              }}
            >
              <Box
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  border: `2px solid ${Colors.WHITE}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  backdropFilter: "blur(4px)",
                  flexShrink: 0,
                }}
              >
                <Box
                  sx={{
                    width: 0,
                    height: 0,
                    borderTop: "8px solid transparent",
                    borderBottom: "8px solid transparent",
                    borderLeft: `12px solid ${Colors.WHITE}`,
                    ml: "3px",
                  }}
                />
              </Box>

              <Box sx={{ display: { xs: "none", sm: "block" } }}>
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

            {/* IMAGE LABEL */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                backgroundColor: Colors.WHITE,
                p: { xs: "10px 16px", md: "14px 28px" },
                borderBottom: `4px solid ${Colors.SECONDARY}`,
                width: { xs: "90%", md: "75%" },
                borderRadius: "4px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: ibmPlexSans.style.fontFamily,
                  fontWeight: 700,
                  fontSize: { xs: "12px", md: "14px" },
                  color: Colors.BLACK,
                }}
              >
                {hero.imageLabel}
              </Typography>
            </Box>
          </Box>
        </Stack>

        {/* ABOUT SECTION */}
        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={{ xs: 2, lg: 8 }}
          alignItems={{ xs: "stretch", lg: "center" }}
          justifyContent="space-between"
          sx={{
            mt: { xs: 3, md: 12 },
            width: "100%",
          }}
        >
          {/* DESCRIPTION */}
          <Typography
            dangerouslySetInnerHTML={{ __html: hero.description2 }}
            sx={{
              fontFamily: ibmPlexSans.style.fontFamily,
              fontSize: { xs: "16px", md: "20px" },
              color: Colors.BLACK,
              lineHeight: 1.6,
              textAlign: { xs: "left", lg: "justify" },
              maxWidth: { lg: "950px" },
              order: { xs: 1, lg: 2 },
              flex: 1,
              whiteSpace: "pre-line",
              "& span": {
                color: Colors.SECONDARY,
                fontWeight: 700,
              },
            }}
          />

          {/* ABOUT BUTTON */}
          <Button
            component={Link}
            href={hero.cta2Href}
            variant="outlined"
            endIcon={<ArrowUpRight size={18} />}
            sx={{
              height: 48,
              borderRadius: "50px",
              px: { xs: 3, md: 3, lg: 4 }, // Compacted padding on 1024px (md)
              border: `1px solid ${Colors.SECONDARY}`,
              color: Colors.SECONDARY,
              fontFamily: poppins.style.fontFamily,
              fontWeight: 600,
              fontSize: { xs: "16px", md: "16px", lg: "18px" }, // Compacted font size on 1024px (md)
              textTransform: "none",
              backgroundColor: "transparent",
              width: {
                xs: "230px", // Identical to Button 1
                sm: "fit-content",
              },
              display: { xs: "flex", sm: "inline-flex" }, // Centered on mobile, inline-flex on sm+
              mx: { xs: "auto", sm: 0 }, // Centered on mobile, left-aligned on sm+
              alignSelf: {
                xs: "center", // Centered on mobile, flex-start on sm+
                sm: "flex-start",
              },
              order: { xs: 2, lg: 1 },
              mt: {
                xs: 4,
                md: 0,
              },
              "&:hover": {
                backgroundColor: "rgba(227, 24, 55, 0.05)",
                borderColor: Colors.SECONDARY,
              },
            }}
          >
            {hero.cta2Text}
          </Button>
        </Stack>

        {/* BOTTOM LINE */}
        <Box
          sx={{
            mt: { xs: 5, md: 8 },
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