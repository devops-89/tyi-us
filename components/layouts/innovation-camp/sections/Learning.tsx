"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";

import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
import { WEBSITE_DATA } from "@/utils/website";

const LearningOutcomesSection = () => {
  const learningOutcomes =
    WEBSITE_DATA.innovation.LearningOutcomesData;

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
              fontSize={{ xs:"16px", md:"18px"}}
 sparkleSize={35}

               type="blue-star"
              sparklePosition="both"
              
          
            />
          </Box>

          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 400,
           fontSize: { xs: "24px", sm: "30px", md: "45px" },
              lineHeight: {
                xs: "30px",
                sm: "35px",
                md: "45px",
                lg: "62px",
              },
              letterSpacing: "-0.03em",
              textAlign: "center",
              color: Colors.BLACK,
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
             fontSize: { xs: "14px", md: "16px" },
                  lineHeight: { xs: 1.2, md: 1.4 },
              letterSpacing: "-0.02em",
              textAlign: {xs:"justify", md:"center"},
              textTransform: "capitalize",
              color: Colors.TEXT_MUTED,
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