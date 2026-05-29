"use client";

import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";

const InnovationCampInfoCards = () => {
  const infoCards = WEBSITE_DATA.innovation.InnovationInfoCard;

  return (
    <Box
      sx={{
        backgroundColor: "#FDE8EC",
        py: { xs: 6, md: 8 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center">
          {infoCards.map((card) => (
            <Grid key={card.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <Box
                sx={{
                  height: "100%",
                  minHeight: { xs: 170, md: 180 },
                  backgroundColor: COLORS.WHITE,
                  borderRadius: "14px",
                  p: { xs: 3, md: 3 },
                  boxShadow: "0 4px 12px rgba(0,0,0,0.12)",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 600,
                    fontSize: "11px",
                    color: COLORS.PRIMARY,
                    letterSpacing: "0.8px",
                    textTransform: "uppercase",
                    mb: 0.5,
                  }}
                >
                  {card.label}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 700,
                    fontSize: { xs: "22px", md: "24px" },
                    color: COLORS.SECONDARY,
                    lineHeight: 1.2,
                    mb: 2,
                  }}
                >
                  {card.title}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: ibmPlexSans.style.fontFamily,
                    fontSize: { xs: "14px", md: "15px" },
                    color: COLORS.TEXT_MUTED,
                    lineHeight: 1.6,
                    whiteSpace: "pre-line",
                  }}
                >
                  {card.description}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default InnovationCampInfoCards;