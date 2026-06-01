"use client";

import React from "react";
import Image from "next/image";
import { Box, Container, Stack, Typography } from "@mui/material";

import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
import { WEBSITE_DATA } from "@/utils/website";

const PatentSection = () => {
  const patentData = WEBSITE_DATA.patent.PatentIdea;

  return (
    <Box
      sx={{
        backgroundColor: COLORS.WHITE,
        py: { xs: 4, sm: 8, md: 10 },
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
                fontSize={15}
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
                  xs: "36px",
                  sm: "40px",
                  md: "44px",
                  lg: "48px",
                },
                letterSpacing: "-0.01em",
                textTransform: "capitalize",
                color: COLORS.BLACK,
                mb: 2,
                whiteSpace: "pre-line",
              }}
            >
              {patentData.title}
            </Typography>

            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 400,
                fontSize: {
                  xs: "16px",
                  sm: "18px",
                  md: "20px",
                  lg: "22px",
                },
                lineHeight: {
                  xs: "28px",
                  sm: "30px",
                  md: "32px",
                  lg: "35px",
                },
                letterSpacing: "-0.02em",
                textTransform: "capitalize",
                color: COLORS.TEXT_MUTED,
                maxWidth: { xs: "100%", md: 520 },
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
              borderRadius: "16px",
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
              fontFamily: poppins.style.fontFamily,
              fontWeight: 400,
              fontSize: {
                xs: "16px",
                sm: "18px",
                md: "20px",
                lg: "22px",
              },
              color: COLORS.TEXT_MUTED,
              lineHeight: {
                xs: "28px",
                sm: "30px",
                md: "32px",
                lg: "35px",
              },
              letterSpacing: "-0.02em",
              textTransform: "capitalize",
              mb: 4,
              textAlign: "left",
            }}
          >
            <Box
              component="span"
              sx={{
                fontWeight: 700,
                color: COLORS.BLACK,
              }}
            >
              {patentData.paragraph1Prefix}
            </Box>{" "}
            {patentData.paragraph1}
          </Typography>

          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 400,
              fontSize: {
                xs: "16px",
                sm: "18px",
                md: "20px",
                lg: "22px",
              },
              color: COLORS.TEXT_MUTED,
              lineHeight: {
                xs: "28px",
                sm: "30px",
                md: "32px",
                lg: "35px",
              },
              letterSpacing: "-0.02em",
              textTransform: "capitalize",
              mb: 4,
              textAlign: "left",
            }}
          >
            {patentData.paragraph2}
          </Typography>

          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 600,
              fontSize: {
                xs: "15px",
                sm: "16px",
                md: "24px",
              },
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