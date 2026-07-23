"use client";

import React from "react";
import Image from "next/image";
import { Box, Container, Stack, Typography } from "@mui/material";

import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
import { ASSETS } from "@/utils/assets";

const PartnersSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 4, md: 20 },
        backgroundColor: COLORS.WHITE,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          left: 0,
          top: 60,
          width: { xs: 100, md: 180 },
          height: { xs: 60, md: 120 },
          display: { xs: "none", md: "block" },
        }}
      >
        <Image
          src={ASSETS.IMAGES.ICON_DOTS}
          alt=""
          fill
          style={{ objectFit: "contain", objectPosition: "top left" }}
        />
      </Box>

      <Box
        sx={{
          position: "absolute",
          right: 0,
          bottom: { xs: 10, md: 55 },
          width: { xs: 100, md: 180 },
          height: { xs: 60, md: 120 },
          display: { xs: "none", md: "block" },
          zIndex: 0,
        }}
      >
        <Image
          src={ASSETS.IMAGES.ICON_DOTS}
          alt=""
          fill
          style={{ objectFit: "contain", objectPosition: "bottom right" }}
        />
      </Box>

      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          position: "relative",
          zIndex: 1,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Stack spacing={{ xs: 3, md: 3 }}>
          <Box
            sx={{
              mb: 1.5,
              pl: { xs: 0, md: 1 },
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <SparkleLabel
              text="Connect With Us"
              color={COLORS.PRIMARY}
               fontSize={{ xs:"16px", md:"18px"}}
 
            />
          </Box>

          <Stack
            direction={{ xs: "column", md: "row" }}
            alignItems={{ xs: "center", md: "center" }}
            justifyContent="space-between"
            spacing={{ xs: 4, md: 4 }}
          >
            <Box
              sx={{
                maxWidth: 600,
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 400,
                  fontSize: { xs: 30, sm: 34, md: 45 },
                  color: COLORS.BLACK,
                  lineHeight: 1.25,
                  mb: 1.5,
                }}
              >
                Our Partners
              </Typography>

              <Typography
                sx={{
                  fontFamily: ibmPlexSans.style.fontFamily,
                  fontWeight: 400,
                  fontSize: { xs: 14, md: 16 },
                  color: COLORS.TEXT_MUTED,
                  lineHeight: { xs: 1.6, md: 1.6 },
                }}
              >
                Working together to inspire the next generation of innovators.
              </Typography>
            </Box>

            <Box
              component="a"
              href="https://discoverstem.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{
                position: "relative",
                width: { xs: 240, sm: 280, md: 387 },
                height: { xs: 60, sm: 70, md: 97 },
                mx: { xs: "auto", md: 0 },
                display: "block",
              }}
            >
              <Image
                src={ASSETS.IMAGES.PARTNER_DISCOVERSTEM}
                alt="DiscoverSTEM Foundation"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Stack>
        </Stack>
      </Container>
    </Box>
  );
};

export default PartnersSection;