"use client";

import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";

import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";

const InnovationCampInfoCards = () => {
  const infoCards = WEBSITE_DATA.innovation.InnovationInfoCard;

  return (
    <Box
      sx={{py: { xs: 4, md: 6 }, backgroundColor: "#FDE8EC"}}
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
          spacing={{ xs: 2.5, md: 3 }}
          justifyContent="center"
        >
          {infoCards.map((card) => (
            <Grid
              key={card.title}
              size={{ xs: 12, sm: 6, md: 3 }}
              sx={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 290,
                  minHeight: { xs: 190, md: 203 },
                  backgroundColor: Colors.WHITE,
                  borderRadius: "16px",
                  border: "0.8px solid rgba(0,0,0,0.08)",
                  p: "24px",
                  display: "flex",
                  flexDirection: "column",
                  boxSizing: "border-box",
                }}
              >
                <Typography
                  sx={{
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 500,
                    fontSize: "14px",
                    lineHeight: "16px",
                    letterSpacing: "0.6px",
                    textTransform: "uppercase",
                    color: Colors.PRIMARY,
                    mb: 1.5,
                  }}
                >
                  {card.label}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 600,
                    fontSize: {
                      xs: "22px",
                      md: "24px",
                    },
                    lineHeight: {
                      xs: "24px",
                      md: "26.4px",
                    },
                    letterSpacing: "-0.6px",
                    color: Colors.SECONDARY,
                    mb: 2,
                  }}
                >
                  {card.title}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "1.2",
                    letterSpacing: "0px",
                    color: "#5C5C5C",
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