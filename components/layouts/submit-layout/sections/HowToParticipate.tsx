"use client";

import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
import StepCard from "@/components/widgets/common/StepCard";

const { howToParticipate } = WEBSITE_DATA.submit;

const HowToParticipateSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: Colors.WHITE,
        pb: { xs: 6, md: 14 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Grid
          container
          spacing={{ xs: 3, md: 6 }}
          alignItems="flex-start"
          sx={{ mb: { xs: 5, md: 10 } }}
        >
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                mb: 2,
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <SparkleLabel
                text={howToParticipate.sparkle}
                type="blue-star"
                sparklePosition="both"
                sparkleSize={14}
              />
            </Box>

            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 600,
                fontSize: { xs: "30px", sm: "36px", md: "40px", lg: "45px" },
                color: Colors.BLACK,
                lineHeight: { xs: 1.25, md: 1, lg: 1.2 },
                mb: 2,
                textAlign: "center", // Center text on screens < 768px
                "@media (min-width: 768px)": {
                  textAlign: "left", // Left-align text on screens >= 768px
                }
              }}
            >
              {howToParticipate.header}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              sx={{
                fontFamily: ibmPlexSans.style.fontFamily,
                fontSize: { xs: "16px", md: "20px" },
                color: Colors.TEXT_MUTED,
                lineHeight: 1.65,
                mb: 3,
                maxWidth: 600,
                mx: { xs: "auto", md: 0 },
                textAlign: "center", // Center text on screens < 768px
                "@media (min-width: 768px)": {
                  textAlign: "left", // Left-align text on screens >= 768px
                }
              }}
            >
              {howToParticipate.description}
            </Typography>

            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 600,
                fontSize: { xs: "16px", md: "18px" },
                color: Colors.BLACK,
                display: "flex",
                alignItems: "center",
                justifyContent: "center", // Center on screens < 768px
                gap: 1,
                cursor: "pointer",
                "&:hover": { color: Colors.PRIMARY },
                "@media (min-width: 768px)": {
                  justifyContent: "flex-start", // Left-align on screens >= 768px
                }
              }}
            >
              Get Started <span style={{ fontSize: "20px" }}>→</span>
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={{ xs: 4, md: 5 }}>
          {howToParticipate.steps.map((s, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 4 }}>
              <Box
                sx={{
                  height: "100%",
                  "& a, & button": {
                    width: "fit-content",
                    maxWidth: "100%",
                    whiteSpace: "normal",
                    textAlign: "center",
                    display: "flex",
                    mx: "auto", // Center button on screens < 768px
                    "@media (min-width: 768px)": {
                      width: "auto",
                      maxWidth: "none",
                      whiteSpace: "nowrap",
                      mx: 0, // Left-align on screens >= 768px
                    }
                  },
                  "& .MuiButton-root": {
                    width: "fit-content",
                    height: "36px !important", // Forced height on mobile
                    minHeight: "36px !important", // Forced minimum height on mobile
                    px: "18px !important", // Forced padding on mobile
                    fontSize: "13px !important", // Forced font-size on mobile
                    display: "flex",
                    mx: "auto", // Center button on screens < 768px
                    "@media (min-width: 768px)": {
                      width: "auto",
                      height: "48px !important", // Desktop height
                      minHeight: "48px !important",
                      px: "24px !important",
                      fontSize: "16px !important",
                      mx: 0, // Left-align on screens >= 768px
                    }
                  },
                }}
              >
                <StepCard
                  image={s.image}
                  title={s.title}
                  description={s.desc}
                  ctaText={s.cta}
                  ctaHref={s.href}
                  ctaWidth={{ xs: "fit-content", md: s.width || "100%" }}
                />
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HowToParticipateSection;