"use client";

import React from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";

import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
import { WEBSITE_DATA } from "@/utils/website";

const CultureOfInnovationSection = () => {
  const { sparkle, title, leadDesc, bodyDesc, highlightDesc } = 
    WEBSITE_DATA.about.cultureOfInnovation;

  return (
    <Box
      sx={{
        py: { xs: 6, md: 10 },
        backgroundColor: COLORS.WHITE,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Grid container spacing={{ xs: 4, md: 8 }} alignItems="flex-start">
          {/* LEFT SIDE: Sticky Title & Label */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ position: { md: "sticky" }, top: "100px" }}>
              <Box sx={{ mb: 2, display: "flex", justifyContent: "flex-start" }}>
                <SparkleLabel
                  text={sparkle}
                  fontSize="18px"
                  type="blue-star"
                  sparklePosition="right"
                  sparkleSize={30}
                  color={COLORS.PRIMARY}
                />
              </Box>

              <Typography
                variant="h2"
                dangerouslySetInnerHTML={{ __html: title }}
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 700,
                  fontSize: { xs: "28px", sm: "36px", md: "46px" },
                  color: COLORS.BLACK,
                  lineHeight: 1.15,
                  letterSpacing: "-0.5px",
                  "& span": {
                    color: COLORS.SECONDARY, // Crimson Red color
                  },
                }}
              />

              {/* Decorative Accent Line */}
              <Box
                sx={{
                  width: "80px",
                  height: "4px",
                  backgroundColor: COLORS.SECONDARY,
                  borderRadius: "2px",
                  mt: 3,
                  display: { xs: "none", md: "block" },
                }}
              />
            </Box>
          </Grid>

          {/* RIGHT SIDE: Description Paragraphs */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={3}>
              {/* Lead Paragraph */}
              <Typography
                dangerouslySetInnerHTML={{ __html: leadDesc }}
                sx={{
                  fontFamily: ibmPlexSans.style.fontFamily,
                  fontSize: { xs: "16px", md: "19px" },
                  fontWeight: 500,
                  color: COLORS.BLACK,
                  lineHeight: 1.6,
                  "& span": {
                    color: COLORS.SECONDARY,
                    fontWeight: 700,
                  },
                }}
              />

              {/* Second Paragraph */}
              <Typography
                sx={{
                  fontFamily: ibmPlexSans.style.fontFamily,
                  fontSize: { xs: "15px", md: "17px" },
                  color: COLORS.TEXT_MUTED,
                  lineHeight: 1.7,
                }}
              >
                {bodyDesc}
              </Typography>

              {/* Third Paragraph - Highlight Box */}
              <Typography
                dangerouslySetInnerHTML={{ __html: highlightDesc }}
                sx={{
                  fontFamily: ibmPlexSans.style.fontFamily,
                  fontSize: { xs: "15px", md: "17px" },
                  color: COLORS.TEXT_MUTED,
                  lineHeight: 1.7,
                  p: { xs: "20px", md: "24px 28px" },
                  backgroundColor: "#F3F4F6", 
                  borderRadius: "16px",
                  borderLeft: `4px solid ${COLORS.PRIMARY}`,
                  "& strong": {
                    color: COLORS.BLACK,
                  },
                }}
              />
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default CultureOfInnovationSection;