"use client";

import React from "react";
import Image from "next/image";
import { Box, Container, Grid, Typography } from "@mui/material";

import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";

const { hero } = WEBSITE_DATA.about;

const AboutHeroSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: Colors.WHITE,
        pt: { xs: 1, md: 12 },
        pb: { xs: 4, md: 6 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Grid container spacing={{ xs: 5, md: 6 }} alignItems="flex-start">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                width: "100%",
                maxWidth: 604,
                mx: { xs: "auto", md: 0 },
              }}
            >
              <Box
                sx={{
                  mb: 2,
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <SparkleLabel text={hero.sparkle} />
              </Box>

              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 700,
                  fontSize: { xs: 30, md: 40 },
                  color: Colors.BLACK,
                  mb: 2,
                  lineHeight: { xs: 1.25, md: "48px" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                {hero.title}
              </Typography>

              <Typography
                sx={{
                  fontFamily: ibmPlexSans.style.fontFamily,
                  
                  color: Colors.TEXT_MUTED,
                  fontSize: { xs: "14px", md: "16px" },
                  lineHeight: { xs: 1.2, md: 1.4 },
                  whiteSpace: "pre-line",
                  textAlign: {md:"left", xs:"justify"},
                }}
              >
                {hero.description}
              </Typography>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Box
              sx={{
                display: { xs: "block", md: "none" },
                position: "relative",
                width: "100%",
                height: { xs: 320, sm: 420 },
                borderRadius: "30px",
                overflow: "hidden",
              }}
            >
              <Image
                src={hero.image2}
                alt="Young students"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>

            <Box
              sx={{
                display: { xs: "none", md: "block" },
                position: "relative",
                width: "100%",
                height: { md: 495, lg: 495 }, 
              }}
            >
              <Box
                sx={{
                  display: { md: "none", lg: "block" }, 
                  position: "absolute",
                  top: 0,
                  right: 0,
                  width: { md: 427, lg: 427 }, 
                  height: { md: 473, lg: 473 }, 
                  overflow: "hidden",
                  zIndex: 1,
                }}
              >
                <Image
                  src={hero.image1}
                  alt="Books and globe"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  top: { md: 93, lg: 93 }, 
                  left: 0,
                  width: { md: 481, lg: 481 }, 
                  height: { md: 400, lg: 400 }, 
                  backgroundColor: Colors.WHITE,
                  pr: { md: "8px", lg: "8px" }, 
                  pt: { md: "8px", lg: "8px" }, 
                  borderRadius: { md: "30px", lg: "30px" }, 
                  boxSizing: "border-box",
                  zIndex: 2,
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: "100%",
                    borderRadius: { md: "20px", lg: "20px" }, 
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={hero.image2}
                    alt="Young students"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutHeroSection;