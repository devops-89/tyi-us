"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Container, Stack, Typography, Button } from "@mui/material";
import { ArrowUpRight } from "lucide-react";

import { Colors } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";

const ChallengeHeroSection = () => {
  const { hero } = WEBSITE_DATA.challenge;

  return (
    <Box
      sx={{
        backgroundColor: Colors.WHITE,
        pt: { xs: 0, md: 4 },
        pb: { xs: 4, md: 6 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: 1920,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box sx={{ maxWidth: 1180, mx: "auto", pt: { xs: 2, md: 1} }}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
            <SparkleLabel text={hero.sparkle} type="red-star" fontSize={{ xs:"16px", md:"18px"}} sparkleSize={35}
 />
          </Box>

          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 500,
              fontSize: { xs: "24px", sm: "30px", md: "45px" },
              color: "#0A0A0A",
              textAlign: "center",
              letterSpacing: "-0.2px",
              lineHeight: { xs: 1.25, md: 1.22653 },
              whiteSpace: "pre-line",
              mb: { xs: 2, md: 3 },
            }}
          >
            {hero.title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontFamily: ibmPlexSans.style.fontFamily,
              fontWeight: 400,
           fontSize: { xs: "14px", md: "16px" },
              color: Colors.TEXT_MUTED,
              textAlign: "center",
              maxWidth: { xs: "100%", md: 1000 },
              mx: "auto",
              lineHeight: { xs: 1.2, md: 1.4 },
              whiteSpace: "pre-line",
              mb: { xs: 4, md: 5 },
            }}
          >
            {hero.description}
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={{ xs: 2, sm: 3 }}
            justifyContent="center"
            alignItems="center"
            sx={{ mb: { xs: 5, md: 8 } }}
          >
            <Button
              component={Link}
              href="https://topyounginnovators.org/submit-your-entry/"
              variant="contained"
              endIcon={<ArrowUpRight size={18} />}
              sx={{
                height: { xs: 40, md: 48 }, 
                borderRadius: "50px",
                px: { xs: 2.5, md: 4 }, 
                width: { xs: "220px", sm: "auto" }, 
                backgroundColor: Colors.SECONDARY,
                color: Colors.WHITE,
                fontFamily: poppins.style.fontFamily,
                fontWeight: 600,
                fontSize: { xs: "14px", md: "18px" }, 
                textTransform: "none",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: Colors.PRIMARY,
                                    boxShadow: "0 8px 24px rgba(52, 96, 183, 0.25)",
                },
              }}
            >
              {hero.primaryCta}
            </Button>

            <Button
              component={Link}
              href="https://topyounginnovators.org/innovation-camp/"
              variant="outlined"
              endIcon={<ArrowUpRight size={18} />}
              sx={{
                height: { xs: 40, md: 48 }, 
                borderRadius: "50px",
                px: { xs: 2.5, md: 4 }, 
                width: { xs: "220px", sm: "auto" }, 
                border: `1px solid ${Colors.SECONDARY}`,
                color: Colors.SECONDARY,
                fontFamily: poppins.style.fontFamily,
                fontWeight: 600,
                fontSize: { xs: "14px", md: "18px" }, 
                textTransform: "none",
                backgroundColor: "transparent",
                "&:hover": {
                  backgroundColor: "rgba(227, 24, 55, 0.05)",
                  borderColor: Colors.SECONDARY,
                },
              }}
            >
              {hero.secondaryCta}
            </Button>
          </Stack>

          <Box sx={{ maxWidth: 1454, mx: "auto" }}>
            <Stack
              direction={{ xs: "column", md: "row" }}
              spacing={{ xs: 2, md: 3 }}
              alignItems="stretch"
            >
              <Box
                sx={{
                  position: "relative",
                  flex: 1,
                  minHeight: { xs: 260, sm: 340, md: 549 },
                  borderRadius: { xs: "18px", md: "24px" },
                  overflow: "hidden",
                }}
              >
                <Image
                  src={hero.images[0]}
                  alt="Challenge"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>

              <Stack
                spacing={{ xs: 2, md: 3 }}
                sx={{ width: { xs: "100%", md: 470 } }}
              >
                <Box
                  sx={{
                    position: "relative",
                    height: { xs: 220, sm: 280, md: 264 },
                    borderRadius: { xs: "16px", md: "18px" },
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={hero.images[1]}
                    alt="Innovation"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>

                <Box
                  sx={{
                    position: "relative",
                    height: { xs: 220, sm: 280, md: 258 },
                    borderRadius: { xs: "16px", md: "18px" },
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={hero.images[2]}
                    alt="Student"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Stack>

              <Box
                sx={{
                  position: "relative",
                  flex: 1,
                  minHeight: { xs: 260, sm: 340, md: 549 },
                  borderRadius: { xs: "18px", md: "24px" },
                  overflow: "hidden",
                }}
              >
                <Image
                  src={hero.images[3]}
                  alt="Highlight"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Stack>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ChallengeHeroSection;