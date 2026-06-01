"use client";

import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
import { WEBSITE_DATA } from "@/utils/website";

const WhoIsThisForSection = () => {
  const whoIsThisFor = WEBSITE_DATA.patent.BigData;

  return (
    <Box
      sx={{
        backgroundColor: COLORS.SUBMIT_ACCENT_BG,
        py: { xs: 4, sm: 8, md: 10 },
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
        <Box
          sx={{
            textAlign: "center",
            mb: { xs: 6, md: 11 },
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
              text={whoIsThisFor.sparkle}
              fontSize={18}
              sparkleSize={35}
               type="blue-star"
              sparklePosition="both"
              color={COLORS.PRIMARY}
            />
          </Box>

          <Typography
            sx={{
              fontFamily: "PolySans Trial, sans-serif",
              fontWeight: 400,
            fontSize: { xs: "24px", sm: "30px", md: "45px" },
              lineHeight: {
                xs: "38px",
                sm: "42px",
                md: "48px",
              },
              letterSpacing: "-0.01em",
              textAlign: "center",
              textTransform: "capitalize",
              color: COLORS.BLACK,
              mb: 2,
            }}
          >
            {whoIsThisFor.title}
          </Typography>

          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 400,
              fontSize: {
                xs: "16px",
                sm: "18px",
                md: "22px",
              },
              lineHeight: {
                xs: "28px",
                sm: "32px",
                md: "36px",
              },
              letterSpacing: "-0.02em",
              textAlign: "center",
              textTransform: "capitalize",
              color: COLORS.TEXT_MUTED,
              maxWidth: 1100,
              mx: "auto",
            }}
          >
            {whoIsThisFor.description}
          </Typography>
        </Box>

        <Grid
          container
          spacing={{ xs: 6, md: 8 }}
          justifyContent="center"
          alignItems="flex-start"
        >
          {whoIsThisFor.items.map((item) => (
            <Grid key={item.title2} size={{ xs: 12, sm: 4 }}>
              <Box sx={{ textAlign: "center" }}>
                <Box
                  sx={{
                    width: { xs: 110, sm: 120, md: 129 },
                    height: { xs: 110, sm: 120, md: 129 },
                    borderRadius: "50%",
                    backgroundColor: COLORS.DIVIDER,
                    mx: "auto",
                    mb: { xs: 3, md: 4 },
                  }}
                />

                <Typography
                  sx={{
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 600,
                    fontSize: {
                      xs: "18px",
                      md: "20px",
                    },
                    lineHeight: {
                      xs: "30px",
                      md: "36px",
                    },
                    letterSpacing: "-0.02em",
                    textAlign: "center",
                    textTransform: "uppercase",
                    color: COLORS.BLACK,
                  }}
                >
                  {item.title1}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 600,
                    fontSize: {
                      xs: "18px",
                      md: "20px",
                    },
                    lineHeight: {
                      xs: "30px",
                      md: "36px",
                    },
                    letterSpacing: "-0.02em",
                    textAlign: "center",
                    textTransform: "uppercase",
                    color: COLORS.BLACK,
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