"use client";

import React from "react";
import Image from "next/image";
import { Box, Container, Stack, Typography } from "@mui/material";

import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
import { WEBSITE_DATA } from "@/utils/website";

const PatentSection = () => {
  const patentData = WEBSITE_DATA.patent.PatentIdea;

  return (
    <Box
      sx={{
        backgroundColor: COLORS.WHITE,
        py: { xs: 6, sm: 8, md: 10 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 5, sm: 6, md: 8 }}
           alignItems={{ xs: "center", md: "flex-start" }}
          justifyContent="space-between"
        >
          <Box
            sx={{
              width: { xs: "100%", md: "42%" },
              textAlign: { xs: "center", md: "left" },
            }}
          >
            <Box
              sx={{
                mb: 2,
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <SparkleLabel
                text={patentData.sparkle}
                fontSize={14}
                sparklePosition="both"
                color={COLORS.PRIMARY}
              />
            </Box>

            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 500,
                fontSize: { xs: "28px", sm: "32px", md: "36px" },
                color: COLORS.BLACK,
                lineHeight: { xs: 1.25, md: 1.2 },
                mb: 2,
                whiteSpace: "pre-line",
              }}
            >
              {patentData.title}
            </Typography>

            <Typography
              sx={{
                fontFamily: ibmPlexSans.style.fontFamily,
                fontSize: { xs: "16px", md: "18px" },
                color: COLORS.TEXT_MUTED,
                lineHeight: 1.6,
                maxWidth: { xs: "100%", md: 420 },
                mx: { xs: "auto", md: 0 },
              }}
            >
              {patentData.subtitle}
            </Typography>
          </Box>

          <Box
            sx={{
              width: { xs: "100%", md: "52%" },
              maxWidth: { xs: 520, md: "none" },
              mx: { xs: "auto", md: 0 },
              position: "relative",
              height: { xs: 230, sm: 320, md: 380 },
              borderRadius: "12px",
              overflow: "hidden",
            }}
          >
            <Image
              src={patentData.image}
              alt="US Patent Certificate"
              fill
              style={{ objectFit: "cover" }}
            />
          </Box>
        </Stack>

        <Box
          sx={{
            mt: { xs: 6, md: 10 },
           
            mx: "auto",
          }}
        >
          <Typography
            sx={{
              fontFamily: ibmPlexSans.style.fontFamily,
              fontSize: { xs: "16px", md: "18px" },
              color: COLORS.TEXT_MUTED,
              lineHeight: { xs: 1.75, md: 1.8 },
              mb: 4,
              textAlign: { xs: "left", md: "left" },
            }}
          >
            <Box component="span" sx={{ fontWeight: 700, color: COLORS.BLACK }}>
              {patentData.paragraph1Prefix}
            </Box>{" "}
            {patentData.paragraph1}
          </Typography>

          <Typography
            sx={{
              fontFamily: ibmPlexSans.style.fontFamily,
              fontSize: { xs: "16px", md: "18px" },
              color: COLORS.TEXT_MUTED,
              lineHeight: { xs: 1.75, md: 1.8 },
              mb: 4,
              textAlign: { xs: "left", md: "left" },
            }}
          >
            {patentData.paragraph2}
          </Typography>

          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 700,
              fontSize: { xs: "15px", sm: "16px", md: "18px" },
              color: COLORS.SECONDARY,
              textAlign: "center",
              mt: { xs: 4, md: 5 },
              lineHeight: 1.5,
            }}
          >
            {patentData.footerText}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default PatentSection;