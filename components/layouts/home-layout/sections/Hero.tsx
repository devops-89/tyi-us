"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Container, Stack, Typography, Button } from "@mui/material";
import { ArrowUpRight } from "lucide-react";

import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";
import { ASSETS } from "@/utils/assets";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";

const HomeHeroSection = () => {
  const { hero } = WEBSITE_DATA.home;

  return (
    <Box
      sx={{
        pt: { xs: 0, md: 4 },
        pb: { xs: 3, md: 4 },
        backgroundColor: Colors.WHITE,
        position: "relative",
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
          spacing={{ xs: 4, md: 6 }}
          alignItems="flex-start"
        >
    
          <Box sx={{ flex: 1, pt: { xs: 1, md: 4 }, width: "100%" }}>
            <Box sx={{ mb: 2 }}>
              <SparkleLabel
                text={hero.sparkle}
                color={Colors.SECONDARY}
                fontSize={18}
                sparklePosition="right"
                customIcon={
                  <Box sx={{ width: 35, height: 35, position: "relative" }}>
                    <Image
                      src={ASSETS.IMAGES.ICON_RED_STAR}
                      alt="red star"
                      fill
                      style={{ objectFit: "contain" }}
                    />
                  </Box>
                }
              />
            </Box>

            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 700,
                fontSize: { xs: "16px", md: "20px" },
                color: Colors.BLACK,
                mb: 1,
              }}
            >
              {hero.secondaryTitle}
            </Typography>

            <Box sx={{ mb: 0, mt: 1 }}>
              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 600,
                  fontSize: { xs: "28px", sm: "36px", md: "45px" },
                  backgroundColor: Colors.BLACK,
                  color: Colors.WHITE,
                  display: "inline-block",
                  px: { xs: 2, md: 3 },
                  py: 1,
                  borderRadius: "15px 50px 50px 0",
                  lineHeight: 1.1,
                }}
              >
                {hero.tertiaryTitle}
              </Typography>
            </Box>

            <Box sx={{ mb: 3, mt: 0 }}>
              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 600,
                  fontSize: { xs: "28px", sm: "36px", md: "45px" },
                  backgroundColor: Colors.BLACK,
                  color: Colors.WHITE,
                  display: "inline-block",
                  px: { xs: 2, md: 3 },
                  py: 1,
                  borderRadius: "0 50px 50px 15px",
                  lineHeight: 1.1,
                }}
              >
                {hero.title}
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{
                fontFamily: ibmPlexSans.style.fontFamily,
                fontSize: { xs: "14px", md: "16px" },
                color: Colors.TEXT_MUTED,
                maxWidth: "600px",
                textAlign: "justify",
                lineHeight: { xs: 1.2, md: 1.4 },

                mb: 3,
              }}
            >
              {hero.description}
            </Typography>

            <Button
              component={Link}
              href={hero.cta1Href}
              variant="contained"
              endIcon={<ArrowUpRight size={18} />}
              sx={{
                height: { xs: 40, md: 48 },
                borderRadius: "50px",
                px: { xs: 2.5, md: 4 },
                backgroundColor: Colors.SECONDARY,
                color: Colors.WHITE,
                fontFamily: poppins.style.fontFamily,
                fontWeight: 600,
                fontSize: { xs: "14px", md: "16px" },
                textTransform: "none",
                boxShadow: "none",
                
                
                display: "flex",
                mx: "auto",
                width: "fit-content",
                "@media (min-width: 768px)": {
                  display: "inline-flex",
                  mx: 0,
                  width: "auto",
                },

                "&:hover": {
                  backgroundColor: "#c61530",
                  boxShadow: "none",
                },
              }}
            >
              {hero.cta1Text}
            </Button>
          </Box>
          <Box
            sx={{
              flex: { xs: "none", md: 1.2 },
              position: "relative",
              width: "100%",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
              height: { xs: "260px", sm: "340px", md: "460px" },
              maxWidth: "840px",
            }}
          >
            <iframe
              src={hero.video}
              title="America's Top Young Innovators Video"
             
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              style={{ 
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%", 
                height: "100%", 
                objectFit: "cover",
                border: 0  
              }}
            />
          </Box>
        </Stack>
        <Stack
          direction={{ xs: "column", lg: "row" }}
          spacing={{ xs: 2, lg: 8 }}
          alignItems={{ xs: "stretch", lg: "center" }}
          justifyContent="space-between"
          sx={{
            mt: { xs: 3, md: 12 },
            width: "100%",
          }}
        >
          <Typography
            sx={{
              fontFamily: ibmPlexSans.style.fontFamily,
              fontSize: { xs: "14px", md: "16px" },
              color: Colors.BLACK,
            lineHeight: { xs: 1.2, md: 1.4 },

              textAlign: "justify",
              maxWidth: { lg: "950px" },
              order: { xs: 1, lg: 2 },
              flex: 1,
              "& span": {
                color: Colors.SECONDARY,
                fontWeight: 700,
              },
            }}
          >
            <span>Top Young Innovators</span>{" "}
            {hero.description2.replace("Top Young Innovators ", "")}
          </Typography>

          {/* ABOUT BUTTON */}
          <Button
            component={Link}
            href={hero.cta2Href}
            variant="outlined"
            endIcon={<ArrowUpRight size={18} />}
            sx={{
              height: { xs: 40, md: 48 },
              borderRadius: "50px",
              px: { xs: 2.5, md: 4 },
              border: `1px solid ${Colors.SECONDARY}`,
              color: Colors.SECONDARY,
              fontFamily: poppins.style.fontFamily,
              fontWeight: 600,
              fontSize: { xs: "14px", md: "16px" },
              textTransform: "none",
              backgroundColor: "transparent",

              
              width: "fit-content",
              alignSelf: "center",
              "@media (min-width: 768px)": {
                alignSelf: "flex-start",
              },

              order: { xs: 2, lg: 1 },

              mt: {
                xs: 4,
                md: 0,
              },

              "&:hover": {
                backgroundColor: "rgba(227, 24, 55, 0.05)",
                borderColor: Colors.SECONDARY,
              },
            }}
          >
            {hero.cta2Text}
          </Button>
        </Stack>
        <Box
          sx={{
            mt: { xs: 5, md: 8 },
            width: "100%",
            height: "1.5px",
            backgroundColor: "rgba(0, 0, 0, 0.1)",
          }}
        />
      </Container>
    </Box>
  );
};

export default HomeHeroSection;