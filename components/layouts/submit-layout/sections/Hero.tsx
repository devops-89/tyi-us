"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Container, Stack, Typography, Button } from "@mui/material";
import { ArrowUpRight } from "lucide-react";
import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";
import { DualCta } from "@/components/widgets/common/CtaButton";
const { hero } = WEBSITE_DATA.submit;
const SubmitHeroSection = () => {
  return (
    <Box sx={{ backgroundColor: COLORS.WHITE, pt: { xs: 6, md: 12 }, pb: { xs: 10, md: 12 } }}>
      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 5, md: 10 }} alignItems="center">
          <Box sx={{ flex: 1 }}>
            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 500,
                fontSize: { xs: "34px", md: "45px" },
                color: COLORS.BLACK,
                lineHeight: 1.15,
                letterSpacing: "-0.4px",
                mb: 2,
                whiteSpace: "pre-line",
              }}
            >
              {hero.title}
            </Typography>

            <Typography
              sx={{
                fontFamily: ibmPlexSans.style.fontFamily,
                fontSize: { xs: "18px", md: "20px" },
                fontWeight: 400,
                color: COLORS.TEXT_MUTED,
                lineHeight: 1.6,
                letterSpacing: "0.2px",
                maxWidth: 554,
                mb: 6,
              }}
            >
              {hero.description}
            </Typography>

            <DualCta
              primaryText={hero.cta1Text || ""}
              primaryHref={hero.cta1Href || ""}
              secondaryText={hero.cta2Text || ""}
              secondaryHref={hero.cta2Href || ""}
            />
          </Box>

          <Box sx={{ flex: 1, width: "100%", display: "flex", justifyContent: { xs: "center", md: "flex-end" } }}>
            <Box sx={{ position: "relative", width: { xs: "100%", md: 650 }, maxWidth: 650, height: { xs: 320, md: 480 } }}>
              <Image src={hero.image} alt="Innovation Camp" fill style={{ objectFit: "cover", borderRadius: 20 }} />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default SubmitHeroSection;

