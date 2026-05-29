"use client";

import React from "react";
import Image from "next/image";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { Award } from "lucide-react";

import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
import { ASSETS } from "@/utils/assets";

const caseStudies = [
  {
    title: "Relay-based system to launch a projectile",
    award: "Winner - 1st Prize, NASA Ames Space Settlement Challenge — 2018",
    image: ASSETS.IMAGES.HERO1,
  },
  {
    title: "Relay-based system to launch a projectile",
    award: "Winner - 1st Prize, NASA Ames Space Settlement Challenge — 2018",
    image: ASSETS.IMAGES.HERO2,
  },
  {
    title: "Relay-based system to launch a projectile",
    award: "Winner - 1st Prize, NASA Ames Space Settlement Challenge — 2018",
    image: ASSETS.IMAGES.HERO3,
  },
  {
    title: "Relay-based system to launch a projectile",
    award: "Winner - 1st Prize, NASA Ames Space Settlement Challenge — 2018",
    image: ASSETS.IMAGES.HERO4,
  },
];

const CaseStudiesSection = () => {
  return (
    <Box sx={{ backgroundColor: COLORS.WHITE, py: { xs: 6, md: 9 } }}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box sx={{ mb: { xs: 4, md: 5 } }}>
          <SparkleLabel
            text="Read In Details"
            fontSize={14}
            sparklePosition="both"
            color={COLORS.PRIMARY}
          />

          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 500,
              fontSize: { xs: "28px", md: "34px" },
              color: COLORS.BLACK,
              mt: 1,
            }}
          >
            Case Studies
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 3, md: 3 }}>
          {caseStudies.map((item, index) => (
            <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
              <Box
                sx={{
                  backgroundColor: COLORS.WHITE,
                  border: "1px solid #E7E7E7",
                  borderRadius: "10px",
                  overflow: "hidden",
                  height: "100%",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    height: { xs: 180, md: 120 },
                    backgroundColor: "#F4F4F4",
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />

                  <Box
                    sx={{
                      position: "absolute",
                      top: 10,
                      right: 10,
                      backgroundColor: COLORS.WHITE,
                      border: `1px solid ${COLORS.PRIMARY}`,
                      borderRadius: "999px",
                      px: 1.2,
                      py: 0.3,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: ibmPlexSans.style.fontFamily,
                        fontSize: "10px",
                        fontWeight: 700,
                        color: COLORS.PRIMARY,
                      }}
                    >
                      ✓ Granted
                    </Typography>
                  </Box>
                </Box>

                <Box sx={{ p: 2 }}>
                  <Typography
                    sx={{
                      fontFamily: poppins.style.fontFamily,
                      fontWeight: 700,
                      fontSize: { xs: "15px", md: "14px" },
                      color: COLORS.BLACK,
                      lineHeight: 1.3,
                      mb: 1.5,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Box
                    sx={{
                      backgroundColor: "#FFF1DC",
                      border: "1px solid #F3D9A8",
                      borderRadius: "8px",
                      p: 1.2,
                      mb: 1.5,
                    }}
                  >
                    <Stack direction="row" spacing={0.6} alignItems="center">
                      <Award size={13} color="#D99A00" />

                      <Typography
                        sx={{
                          fontFamily: poppins.style.fontFamily,
                          fontSize: "10px",
                          fontWeight: 700,
                          color: "#C58A00",
                        }}
                      >
                        AWARD
                      </Typography>
                    </Stack>

                    <Typography
                      sx={{
                        fontFamily: ibmPlexSans.style.fontFamily,
                        fontSize: "11px",
                        color: COLORS.BLACK,
                        lineHeight: 1.4,
                        mt: 0.5,
                      }}
                    >
                      {item.award}
                    </Typography>
                  </Box>

                  <Stack direction="row" justifyContent="space-between">
                    <Typography
                      sx={{
                        fontFamily: ibmPlexSans.style.fontFamily,
                        fontSize: "11px",
                        color: COLORS.PRIMARY,
                        cursor: "pointer",
                      }}
                    >
                      Google Patents ↗
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: ibmPlexSans.style.fontFamily,
                        fontSize: "11px",
                        color: COLORS.PRIMARY,
                        cursor: "pointer",
                      }}
                    >
                      Patent Certificate ↗
                    </Typography>
                  </Stack>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CaseStudiesSection;