"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";

import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
import { WEBSITE_DATA } from "@/utils/website";

const LearningOutcomesSection = () => {
  const learningOutcomes =
    WEBSITE_DATA.innovation.LearningOutcomesData;

  return (
    <Box
      sx={{
        backgroundColor: COLORS.WHITE,
        py: { xs: 4, md: 10 },
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
              fontSize= "18px"
               type="blue-star"
              sparklePosition="both"
              sparkleSize={35}
              color={COLORS.PRIMARY}
            />
          </Box>

          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 400,
           fontSize: { xs: "24px", sm: "30px", md: "45px" },
              lineHeight: {
                xs: "38px",
                sm: "46px",
                md: "54px",
                lg: "62px",
              },
              letterSpacing: "-0.03em",
              textAlign: "center",
              color: COLORS.BLACK,
              mb: { xs: 2.5, md: 4 },
              maxWidth: "1000px",
              mx: "auto",
            }}
          >
            {learningOutcomes.title}
          </Typography>

          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 400,
              fontSize: {
                xs: "16px",
                sm: "18px",
                md: "20px",
                lg: "22px",
              },
              lineHeight: {
                xs: "28px",
                sm: "30px",
                md: "32px",
                lg: "35px",
              },
              letterSpacing: "-0.02em",
              textAlign: "center",
              textTransform: "capitalize",
              color: COLORS.TEXT_MUTED,
              maxWidth: "1100px",
              mx: "auto",
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