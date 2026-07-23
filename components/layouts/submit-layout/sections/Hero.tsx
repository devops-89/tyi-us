"use client";

import React from "react";
import Image from "next/image";
import { Box, Container, Stack, Typography } from "@mui/material";
import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";
import { DualCta } from "@/components/widgets/common/CtaButton";

const { hero } = WEBSITE_DATA.submit;

const SubmitHeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: Colors.WHITE,
        pt: { xs: 1, md: 6 },
        pb: { xs: 4, md: 6 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
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
              width: "100%",
              textAlign: { xs: "center", md: "left" },
              "@media (min-width: 768px)": {
                textAlign: "left",
              },
            }}
          >
            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 500,
                fontSize: { xs: "28px", sm: "32px", md: "45px" },
                color: Colors.BLACK,
                lineHeight: { xs: 1.25, md: 1.15 },
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
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: { xs: 1.2, md: 1.4 },
                fontWeight: 400,
                color: Colors.TEXT_MUTED,
                textAlign: { xs: "justify", lg: "left" },
                letterSpacing: "0.2px",
                whiteSpace: "pre-line",
                maxWidth: { xs: "100%", md: 554 },
                mx: { xs: "auto", md: 0 },
                mb: { xs: 4, md: 6 },
              }}
            >
              {hero.description}
            </Typography>

            <Box
              sx={{
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
                "@media (min-width: 768px)": {
                  justifyContent: "flex-start",
                },
              }}
            >
              <DualCta
                primaryText={hero.cta1Text || ""}
                primaryHref={hero.cta1Href || ""}
                secondaryText={hero.cta2Text || ""}
                secondaryHref={hero.cta2Href || ""}
              />
            </Box>
          </Box>

          <Box
            sx={{
              flex: 1,
              width: "100%",
              display: "flex",
              justifyContent: { xs: "center", md: "flex-end" },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                maxWidth: { xs: "100%", sm: 560, md: 650 },
                height: { xs: 260, sm: 360, md: 400 },
                borderRadius: { xs: "18px", md: "20px" },
                overflow: "hidden",
              }}
            >
              <Image
                src={hero.image}
                alt="Innovation Camp"
                fill
                style={{
                  objectFit: "cover",
                }}
              />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default SubmitHeroSection;