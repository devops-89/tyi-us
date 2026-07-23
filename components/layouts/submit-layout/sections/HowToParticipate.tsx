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
      sx={{py: { xs: 4, md: 6 }, backgroundColor: Colors.WHITE}}
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
                fontSize={{ xs:"16px", md:"18px"}}
                 sparkleSize={35}

              />
            </Box>

            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 600,
                fontSize: { xs: "24px", sm: "30px", md: "40px", lg: "45px" },
                color: Colors.BLACK,
                lineHeight: { xs: 1.25, md: 1, lg: 1.2 },
                
                textAlign: "center", 
                "@media (min-width: 1024px)": {
                  textAlign: "left", 
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
               fontSize: { xs: "14px", md: "16px" },
                  lineHeight: { xs: 1.2, md: 1.4 },
                color: Colors.TEXT_MUTED,
                mb: 1,
                maxWidth: 600,
                mx: { xs: "auto", md: 0 },
                textAlign: "center", 
                "@media (min-width: 1024px)": {
                  textAlign: "left", 
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
                justifyContent: "center", 
                gap: 1,
                cursor: "pointer",
                "&:hover": { color: Colors.PRIMARY },
                "@media (min-width: 1024px)": {
                  justifyContent: "flex-start", 
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
                    mx: "auto", 
                    "@media (min-width: 768px)": {
                      width: "auto",
                      maxWidth: "none",
                      whiteSpace: "nowrap",
                      mx: 0, 
                    }
                  },
                  "& .MuiButton-root": {
                    width: "fit-content",
                    height: "36px !important", 
                    minHeight: "36px !important", 
                    px: "18px !important", 
                    fontSize: "13px !important", 
                    display: "flex",
                    mx: "auto", 
                    "@media (min-width: 768px)": {
                      width: "auto",
                      height: "48px !important", 
                      minHeight: "48px !important",
                      px: "24px !important",
                      fontSize: "16px !important",
                      mx: 0, 
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