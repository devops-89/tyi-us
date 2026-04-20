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
    <Box sx={{ py: { xs: 8, md: 25 }, backgroundColor: COLORS.WHITE, position: "relative", overflow: "hidden" }}>
      <Box sx={{ position: "absolute", left: 0, top: 100, width: { xs: 100, md: 180 }, height: { xs: 60, md: 120 }, display: { xs: "none", md: "block" } }}>
        <Image src={ASSETS.IMAGES.ICON_DOTS} alt="" fill style={{ objectFit: "contain", objectPosition: "top left" }} />
      </Box>
      <Box sx={{ position: "absolute", right: 0, bottom: { xs: 10, md:100 }, width: { xs: 100, md: 180 }, height: { xs: 60, md: 120 }, display: { xs: "none", md: "block" }, zIndex: 0 }}>
        <Image src={ASSETS.IMAGES.ICON_DOTS} alt="" fill style={{ objectFit: "contain", objectPosition: "bottom right" }} />
      </Box>

      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH, position: "relative", zIndex: 1 }}>
        <Stack spacing={3}>
          <Box sx={{ mb: 1.5, pl: 1 }}>
            <SparkleLabel
              text="Connect With Us"
              color="#1C4282"
              fontSize={18}
            />
          </Box>

          <Stack direction={{ xs: "column", md: "row" }} alignItems={{ xs: "flex-start", md: "center" }} justifyContent="space-between" spacing={4}>
            <Box sx={{ maxWidth: 600 }}>
              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 400,
                  fontSize: { xs: 32, md: 45 },
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
                  fontSize: 22,
                  color: COLORS.TEXT_MUTED,
                  lineHeight: 1.6,
                }}
              >
                Working together to inspire the next generation of innovators.
              </Typography>
            </Box>

            <Box sx={{ position: "relative", width: { xs: 280, md: 387 }, height: { xs: 70, md: 97 } }}>
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

