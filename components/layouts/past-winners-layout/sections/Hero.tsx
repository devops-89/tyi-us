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

const PastWinnersHeroSection = () => {
  const { hero } = WEBSITE_DATA.pastWinners;
  return (
    <Box
      sx={{
        pt: { xs: 0, sm: 3, md: 6 },
        pb: { xs: 4, sm: 6, md: 4 },
        backgroundColor: Colors.WHITE,
        position: "relative",
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="flex-start"
        >
          {}
          <Box sx={{ flex: 1, pt: 1, width: "100%" }}>
            <Box sx={{ mb: 2 }}>
              <SparkleLabel text={hero.sparkle} />
            </Box>

            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 700,
                fontSize: { xs: "26px", sm: "32px", md: "38px", lg: "48px" }, 
                color: Colors.BLACK,
                lineHeight: 1.1,
                mb: 3,
              }}
            >
              {hero.title}
            </Typography>

            <Typography
              sx={{
                fontFamily: ibmPlexSans.style.fontFamily,
                fontWeight: 600,
              fontSize: { xs: "14px", md: "16px" },
                  lineHeight: { xs: 1.2, md: 1.4 },
                color: Colors.BLACK,
                mb: 4,
              }}
            >
              {hero.subtitle}
            </Typography>

            <Stack direction="column" spacing={2} alignItems="flex-start">
              {}
              <Button
                component={Link}
                href="/recap"
                variant="outlined"
                endIcon={<ArrowUpRight size={18} />}
                sx={{
                  height: { xs: 40, md: 48 }, 
                  borderRadius: "50px",
                  px: { xs: 2.5, md: 3 }, 
                  width: { xs: "230px", sm: "auto" }, 
                  borderColor: "rgba(227, 24, 55, 0.2)",
                  backgroundColor: "rgba(227, 24, 55, 0.05)",
                  color: Colors.SECONDARY,
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 600,
                  fontSize: "14px",
                  textTransform: "none",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": { 
                    borderColor: Colors.SECONDARY, 
                    backgroundColor: "rgba(227, 24, 55, 0.1)" 
                  },
                }}
              >
                {hero.cta1Text}
              </Button>

              {}
              <Button
                component={Link}
                href="/moments"
                startIcon={<Box sx={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: Colors.SECONDARY, mr: 0.5 }} />}
                sx={{
                  height: { xs: 40, md: 48 }, 
                  borderRadius: "50px",
                  px: { xs: 2.5, md: 3 }, 
                  width: { xs: "230px", sm: "auto" }, 
                  border: `1px solid ${Colors.BORDER}`,
                  color: Colors.BLACK,
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 600,
                  fontSize: "14px",
                  textTransform: "none",
                  backgroundColor: Colors.WHITE,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  "&:hover": { 
                    backgroundColor: Colors.GRAY_LIGHT,
                    borderColor: Colors.BLACK 
                  },
                }}
              >
                {hero.cta2Text}
              </Button>
            </Stack>
          </Box>

          {}
          <Box
            sx={{
              flex: { xs: "none", md: 1.2 }, 
              position: "relative",
              width: "100%",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
              height: { xs: "280px", sm: "360px", md: "520px" }, 
            }}
          >
            <Image
              src={hero.image}
              alt="Past Winners"
              fill
              style={{ objectFit: "cover" }}
              priority
            />

            {}
            <Box
              sx={{
                position: "absolute",
                top: { xs: 12, md: 20 },
                right: { xs: 12, md: 20 },
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                p: { xs: "6px 12px", md: "10px 20px" }, 
                borderRadius: "10px",
                backdropFilter: "blur(4px)",
                border: `1px solid ${Colors.BORDER}`,
              }}
            >
              <Typography sx={{ fontFamily: ibmPlexSans.style.fontFamily, fontWeight: 700, fontSize: { xs: "10px", md: "12px" }, color: Colors.BLACK }}>
                {hero.overlayText1}
              </Typography>
            </Box>

            <Box
              sx={{
                position: "absolute",
                bottom: { xs: 12, md: 20 },
                left: { xs: 12, md: 20 },
                backgroundColor: "rgba(255, 255, 255, 0.9)",
                p: { xs: "6px 12px", md: "10px 20px" }, 
                borderRadius: "10px",
                backdropFilter: "blur(4px)",
                border: `1px solid ${Colors.BORDER}`,
              }}
            >
              <Typography sx={{ fontFamily: ibmPlexSans.style.fontFamily, fontWeight: 700, fontSize: { xs: "10px", md: "12px" }, color: Colors.BLACK }}>
                {hero.overlayText2}
              </Typography>
            </Box>
          </Box>
        </Stack>

        <Box
          sx={{ mt: { xs: 4, sm: 6, md: 10 }, width: "100%", height: "1px", backgroundColor: Colors.DIVIDER }}
        />
      </Container>
    </Box>
  );
};

export default PastWinnersHeroSection;