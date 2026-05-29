"use client";

import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";

import { WEBSITE_DATA } from "@/utils/website";

const WhoIsThisForSection = () => {
  const whoIsThisFor = WEBSITE_DATA.patent.BigData;

  return (
    <Box
      sx={{
        backgroundColor: "#FDECEF",
        py: { xs: 6, sm: 8, md: 10 },
        mt: { xs: 4, sm: 6, md: 12 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box sx={{ textAlign: "center", mb: { xs: 6, md: 11 } }}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <SparkleLabel
              text={whoIsThisFor.sparkle}
              fontSize={18}
              sparklePosition="both"
              color={COLORS.PRIMARY}
            />
          </Box>

          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 500,
              fontSize: { xs: "32px", md: "48px" },
              color: COLORS.BLACK,
              lineHeight: 1.2,
              mb: 2,
            }}
          >
            {whoIsThisFor.title}
          </Typography>

          <Typography
            sx={{
              fontFamily: ibmPlexSans.style.fontFamily,
              fontSize: { xs: "18px", md: "26px" },
              color: COLORS.TEXT_MUTED,
              lineHeight: 1.5,
            }}
          >
            {whoIsThisFor.description}
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 6, md: 8 }} justifyContent="center">
          {whoIsThisFor.items.map((item) => (
            <Grid key={item.title2} size={{ xs: 12, sm: 4 }}>
              <Box sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    width: { xs: 110, md: 135 },
                    height: { xs: 110, md: 135 },
                    borderRadius: "50%",
                    backgroundColor: "#D9D9D9",
                    mx: "auto",
                    mb: { xs: 4, md: 5 },
                  }}
                />

                <Typography
                  sx={{
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 700,
                    fontSize: { xs: "18px", md: "21px" },
                    color: COLORS.BLACK,
                    lineHeight: 1.4,
                    mb: 1,
                  }}
                >
                  {item.title1}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 700,
                    fontSize: { xs: "18px", md: "21px" },
                    color: COLORS.BLACK,
                    lineHeight: 1.4,
                  }}
                >
                  {item.title2}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhoIsThisForSection;