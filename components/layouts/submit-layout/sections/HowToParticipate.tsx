"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Container, Grid, Stack, Typography, Button } from "@mui/material";
import { ArrowUpRight } from "lucide-react";

import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
import StepCard from "@/components/widgets/common/StepCard";

const { howToParticipate } = WEBSITE_DATA.submit;

const HowToParticipateSection = () => {
  return (
    <Box sx={{ backgroundColor: Colors.WHITE, pb: { xs: 10, md: 14 } }}>
      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH }}>
        <Grid container spacing={{ xs: 4, md: 6 }} alignItems="flex-start" sx={{ mb: { xs: 6, md: 10 } }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ mb: 2 }}>
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
                fontSize: { xs: "28px", md: "45px"},
                color: Colors.BLACK,
                lineHeight: 1.2,
                mb: 2,
              }}
            >
              {howToParticipate.header}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Typography
              sx={{
                fontFamily: ibmPlexSans.style.fontFamily,
                fontSize: { xs: "16px", md: "20px"},
                color: Colors.TEXT_MUTED,
                lineHeight: 1.65,
                mb: 3,
                maxWidth: 600
              }}
            >
              {howToParticipate.description}
            </Typography>
            <Typography 
              sx={{ 
                fontFamily: poppins.style.fontFamily, 
                fontWeight: 600,
                fontSize: "18px",
                color: Colors.BLACK,
                display: "flex",
                alignItems: "center",
                gap: 1,
                cursor: "pointer",
                "&:hover": { color: Colors.PRIMARY }
              }}
            >
              Get Started <span style={{ fontSize: "20px" }}>→</span>
            </Typography>
          </Grid>
        </Grid>

        <Grid container spacing={5}>
          {howToParticipate.steps.map((s, index) => (
            <Grid key={index} size={{ xs: 12, md: 4 }}>
              <StepCard
                image={s.image}
                title={s.title}
                description={s.desc}
                ctaText={s.cta}
                ctaHref={s.href}
                ctaWidth={s.width || "100%"}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default HowToParticipateSection;

