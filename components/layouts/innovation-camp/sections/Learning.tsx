"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";

import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
import { WEBSITE_DATA } from "@/utils/website";

const LearningOutcomesSection = () => {
  const learningOutcomes =
    WEBSITE_DATA.innovation.LearningOutcomesData;

  return (
    <Box
      sx={{
        backgroundColor: COLORS.WHITE,
        py: { xs: 6, md: 10 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 4, md: 5 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 2,
            }}
          >
            <SparkleLabel
              text={learningOutcomes.sparkle}
              fontSize={18}
              sparklePosition="both"
              color={COLORS.PRIMARY}
            />
          </Box>

          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 500,
              fontSize: { xs: "30px", md: "48px" },
              color: COLORS.BLACK,
              lineHeight: 1.2,
              mb: { xs: 3, md: 4 },
            }}
          >
            {learningOutcomes.title}
          </Typography>

          <Typography
            sx={{
              fontFamily: ibmPlexSans.style.fontFamily,
              fontWeight: 400,
              fontSize: { xs: "16px", md: "18px" },
              color: COLORS.TEXT_MUTED,
              lineHeight: { xs: 1.8, md: 1.9 },
              maxWidth: CONSTANTS.MAX_WIDTH,
              mx: "auto",
              textAlign: "center",
            }}
          >
            {learningOutcomes.description}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default LearningOutcomesSection;