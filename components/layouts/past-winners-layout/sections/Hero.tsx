"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Container, Stack, Typography, Button } from "@mui/material";
import { ArrowUpRight } from "lucide-react";

import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";

const PastWinnersHeroSection = () => {
  const { hero } = WEBSITE_DATA.pastWinners;
  return (
    <Box
      sx={{
        pt: { xs: 0,sm:6, md: 10 },
        pb: { xs: 4,sm:6, md: 10 },
        backgroundColor: Colors.WHITE,
        position: "relative",
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="flex-start"
        >
          {/* Left Content */}
          <Box sx={{ flex: 1, pt: 1 }}>
            <Box sx={{ mb: 2 }}>
              <SparkleLabel text={hero.sparkle} />
            </Box>

            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 700,
                fontSize: { xs: "28px", md: "48px" },
                color: Colors.BLACK,
                lineHeight: 1.1,
                mb: 3,
              }}
            >
              {hero.title}
            </Typography>

            <Typography
              sx={{
                fontFamily: ibmPlexSans.style.fontFamily,
                fontWeight: 600,
                fontSize: "18px",
                color: Colors.BLACK,
                mb: 4,
              }}
            >
              {hero.subtitle}
            </Typography>

            <Stack direction="column" spacing={2} alignItems="flex-start">
              {/* Recaps Button */}
              <Button
                component={Link}
                href="/recap"
                variant="outlined"
                endIcon={<ArrowUpRight size={18} />}
                sx={{
                  height: 48,
                  borderRadius: "50px",
                  px: 3,
                  borderColor: "rgba(227, 24, 55, 0.2)",
                  backgroundColor: "rgba(227, 24, 55, 0.05)",
                  color: Colors.SECONDARY,
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 600,
                  fontSize: "14px",
                  textTransform: "none",
                  "&:hover": { 
                    borderColor: Colors.SECONDARY, 
                    backgroundColor: "rgba(227, 24, 55, 0.1)" 
                  },
                }}
              >
                {hero.cta1Text}
              </Button>

              {/* Moments Button */}
              <Button
                component={Link}
                href="/moments"
                startIcon={<Box sx={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: Colors.SECONDARY, mr: 0.5 }} />}
                sx={{
                  height: 48,
                  borderRadius: "50px",
                  px: 3,
                  border: `1px solid ${Colors.BORDER}`,
                  color: Colors.BLACK,
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 600,
                  fontSize: "14px",
                  textTransform: "none",
                  backgroundColor: Colors.WHITE,
                  "&:hover": { 
                    backgroundColor: Colors.GRAY_LIGHT,
                    borderColor: Colors.BLACK 
                  },
                }}
              >
                {hero.cta2Text}
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
              height: { xs: "300px", md: "520px" },
            }}
          >
            <Image
              src={hero.image}
              alt="Past Winners"
              fill
              style={{ objectFit: "cover" }}
              priority
            />

            {/* Overlays */}
            <Box
              sx={{
                position: "absolute",
                top: 20,
                right: 20,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                p: "10px 20px",
                borderRadius: "10px",
                backdropFilter: "blur(4px)",
                border: `1px solid ${Colors.BORDER}`,
              }}
            >
              <Typography sx={{ fontFamily: ibmPlexSans.style.fontFamily, fontWeight: 700, fontSize: "12px", color: Colors.BLACK }}>
                {hero.overlayText1}
              </Typography>
            </Box>

            <Box
              sx={{
                position: "absolute",
                bottom: 20,
                left: 20,
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                p: "10px 20px",
                borderRadius: "10px",
                backdropFilter: "blur(4px)",
                border: `1px solid ${Colors.BORDER}`,
              }}
            >
              <Typography sx={{ fontFamily: ibmPlexSans.style.fontFamily, fontWeight: 700, fontSize: "12px", color: Colors.BLACK }}>
                {hero.overlayText2}
              </Typography>
            </Box>
          </Box>
        </Stack>

        <Box
          sx={{ mt: {sx:4, sm:6, md:10}, width: "100%", height: "1px", backgroundColor: Colors.DIVIDER }}
        />
      </Container>
    </Box>
  );
};

export default PastWinnersHeroSection;

