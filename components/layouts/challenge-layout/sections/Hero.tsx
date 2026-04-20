"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Container, Stack, Typography, Button } from "@mui/material";
import { ArrowUpRight } from "lucide-react";

import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";

const { hero } = WEBSITE_DATA.challenge;

const ChallengeHeroSection = () => {
  const { hero } = WEBSITE_DATA.challenge;

  return (
    <Box
      sx={{
        backgroundColor: Colors.WHITE,
        pt: { xs: 6, md: 4 },
        pb: { xs: 8, md: 10 },
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: 1920 }}>
        <Box sx={{ maxWidth: 1180, mx: "auto", pt: { xs: 2, md: 4 } }}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 3 }}>
            <SparkleLabel text={hero.sparkle} type="red-star" fontSize="18px" />
          </Box>

          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 500,
              fontSize: { xs: "28px", md: "45px" },
              color: "#0A0A0A",
              textAlign: "center",
              letterSpacing: "-0.2px",
              lineHeight: 1.22653,
              whiteSpace: "pre-line",
              mb: 3,
            }}
          >
            {hero.title}
          </Typography>

          <Typography
            variant="body1"
            sx={{
              fontFamily: ibmPlexSans.style.fontFamily,
              fontWeight: 400,
              fontSize: { xs: "16px", md: "20px" },
              color: Colors.TEXT_MUTED,
              textAlign: "center",
              maxWidth: { xs: 800, md: 1000 },
              mx: "auto",
              lineHeight: 1.6,
              whiteSpace: "pre-line",
              mb: 5,
            }}
          >
            {hero.description}
          </Typography>

          <Stack
            direction={{ xs: "column", sm: "row" }}
            spacing={3}
            justifyContent="center"
            sx={{ mb: 8 }}
          >
          <Button
              component={Link}
              href="https://topyounginnovators.org/submit-your-entry/"
              variant="contained"
              endIcon={<ArrowUpRight size={18} />}
              sx={{
                height: 48,
                borderRadius: "50px",
                px: 4,
                backgroundColor: Colors.SECONDARY,
                color: Colors.WHITE,
                fontFamily: poppins.style.fontFamily,
                fontWeight: 600,
                fontSize: "18px",
                textTransform: "none",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#c61530",
                  boxShadow: "none",
                },
              }}
            >
              {hero.primaryCta}
            </Button>

            {/* Secondary Action */}
            <Button
              component={Link}
              href="https://topyounginnovators.org/innovation-camp/"
              variant="outlined"
              endIcon={<ArrowUpRight size={18} />}
              sx={{
                height: 48,
                borderRadius: "50px",
                px: 4,
                border: `1px solid ${Colors.SECONDARY}`,
                color: Colors.SECONDARY,
                fontFamily: poppins.style.fontFamily,
                fontWeight: 600,
                fontSize: "18px",
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
              spacing={3}
              alignItems="stretch"
            >
              <Box
                sx={{
                  position: "relative",
                  flex: 1,
                  minHeight: { xs: 260, md: 549 },
                  borderRadius: "24px",
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

              <Stack spacing={3} sx={{ width: { xs: "100%", md: 470 } }}>
                <Box
                  sx={{
                    position: "relative",
                    height: { xs: 180, md: 264 },
                    borderRadius: "18px",
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
                    height: { xs: 180, md: 258 },
                    borderRadius: "18px",
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
                  minHeight: { xs: 260, md: 549 },
                  borderRadius: "24px",
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
