import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Box, Container, Stack, Typography, Button } from "@mui/material";
import { ArrowUpRight } from "lucide-react";
import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";

const Hero = () => {
  const { hero } = WEBSITE_DATA.services;

  return (
    <Box
      sx={{
        pt: { xs: 8, md: 10 },
        pb: { xs: 8, md: 10 },
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
          {/* Left Content */}
          <Box sx={{ flex: 1, pt: 4 }}>
            <Box sx={{ mb: 2 }}>
              <SparkleLabel 
                text={hero.sparkle}
              />
            </Box>

            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 600,
                fontSize: "28px",
                color: Colors.BLACK,
                mb: 1.5,
              }}
            >
              {hero.titlePre}
            </Typography>

            <Box sx={{ mb: 1 }}>
              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 800,
                  fontSize: { xs: "32px", md: "48px" },
                  backgroundColor: Colors.BLACK,
                  color: Colors.WHITE,
                  display: "inline-block",
                  px: 3,
                  py: 1,
                  borderRadius: "15px 15px 15px 0",
                  lineHeight: 1.1,
                }}
              >
                {hero.titleAccent1}
              </Typography>
            </Box>

            <Box sx={{ mb: 1.5 }}>
              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 700,
                  fontSize: { xs: "32px", md: "42px" },
                  backgroundColor: Colors.BLACK,
                  color: Colors.WHITE,
                  display: "inline-block",
                  px: 3,
                  py: 1,
                  borderRadius: "0 15px 15px 15px",
                  lineHeight: 1.1,
                }}
              >
                {hero.titleAccent2}
              </Typography>
            </Box>

            <Typography
              sx={{
                fontFamily: ibmPlexSans.style.fontFamily,
                fontWeight: 600,
                fontSize: "18px",
                color: Colors.BLACK,
                mb: 4,
              }}
            >
              {hero.subtitle}
            </Typography>

            <Typography
              variant="body1"
              sx={{
                fontFamily: ibmPlexSans.style.fontFamily,
                fontSize: "15px",
                color: Colors.TEXT_MUTED,
                maxWidth: "380px",
                lineHeight: 1.6,
                mb: 5,
              }}
            >
              {hero.description}
            </Typography>

            <Stack direction="column" spacing={5} alignItems="flex-start">
              {/* Submit Button Row */}
              <Button
                component={Link}
                href={hero.cta1Href}
                variant="outlined"
                endIcon={<ArrowUpRight size={18} />}
                sx={{
                  height: 48,
                  borderRadius: "50px",
                  px: 3,
                  borderColor: "rgba(227, 24, 55, 0.2)",
                  backgroundColor: "rgba(227, 24, 55, 0.05)",
                  color: Colors.SECONDARY,
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 600,
                  fontSize: "14px",
                  textTransform: "none",
                  "&:hover": { 
                    borderColor: Colors.SECONDARY, 
                    backgroundColor: "rgba(227, 24, 55, 0.1)" 
                  },
                }}
              >
                {hero.cta1Text}
              </Button>

              {/* About Button + Description Row */}
              <Stack direction={{ xs: "column", lg: "row" }} spacing={3} alignItems="flex-start">
                <Button
                  component={Link}
                  href={hero.cta2Href}
                  startIcon={<Box sx={{ width: 10, height: 10, borderRadius: "50%", backgroundColor: Colors.SECONDARY, mr: 0.5 }} />}
                  sx={{
                    height: 48,
                    borderRadius: "50px",
                    px: 3,
                    border: `1px solid ${Colors.BORDER}`,
                    color: Colors.BLACK,
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 600,
                    fontSize: "14px",
                    textTransform: "none",
                    backgroundColor: Colors.WHITE,
                    minWidth: "120px",
                    "&:hover": { 
                      backgroundColor: Colors.GRAY_LIGHT,
                      borderColor: Colors.BLACK 
                    },
                  }}
                >
                  {hero.cta2Text}
                </Button>
                
                <Typography
                  sx={{
                    fontFamily: ibmPlexSans.style.fontFamily,
                    fontSize: "14px",
                    color: Colors.BLACK,
                    lineHeight: 1.6,
                    maxWidth: "500px",
                    "& span": { color: Colors.SECONDARY, fontWeight: 700 }
                  }}
                >
                  <span>Top Young Innovators</span> is a global platform dedicated to discovering and nurturing the most creative, inventive, and forward-thinking young minds from around the world.
                </Typography>
              </Stack>
            </Stack>
          </Box>

          {/* Right Image */}
          <Box
            sx={{
              flex: 1.2,
              position: "relative",
              width: "100%",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
              height: { xs: "300px", md: "520px" },
            }}
          >
            <Image
              src={hero.image}
              alt="America's Top Young Innovators"
              fill
              style={{ objectFit: "cover" }}
              priority
            />

            {/* Play Button Overlay (Watch) */}
            <Box
              sx={{
                position: "absolute",
                top: "50%",
                left: "40%",
                transform: "translate(-50%, -50%)",
                display: "flex",
                alignItems: "center",
                gap: 2,
                cursor: "pointer",
                padding: "8px 16px",
                borderRadius: "50px",
                "&:hover": {
                  "& .play-icon": { scale: "1.1" }
                }
              }}
            >
              <Box
                className="play-icon"
                sx={{
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  backgroundColor: "rgba(255, 255, 255, 0.3)",
                  border: `2px solid ${Colors.WHITE}`,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(4px)"
                }}
              >
                <Box
                  sx={{
                    width: 0,
                    height: 0,
                    borderTop: "8px solid transparent",
                    borderBottom: "8px solid transparent",
                    borderLeft: `12px solid ${Colors.WHITE}`,
                    ml: "3px"
                  }}
                />
              </Box>
              <Box>
                <Typography
                  sx={{
                    fontFamily: ibmPlexSans.style.fontFamily,
                    color: Colors.WHITE,
                    fontWeight: 700,
                    fontSize: "12px",
                    lineHeight: 1,
                  }}
                >
                  {hero.watchLabel}
                </Typography>
                <Typography
                  sx={{
                    fontFamily: ibmPlexSans.style.fontFamily,
                    color: Colors.WHITE,
                    fontSize: "10px",
                    lineHeight: 1.5,
                  }}
                >
                  {hero.watchDescription}
                </Typography>
              </Box>
            </Box>

            {/* Red Line Bottom Label */}
            <Box
              sx={{
                position: "absolute",
                bottom: 0,
                left: 0,
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                p: "14px 28px",
                borderBottom: `4px solid ${Colors.SECONDARY}`,
                display: "inline-block",
                width: "auto",
                margin: "0 0 20px 20px",
                borderRadius: "4px",
              }}
            >
              <Typography
                sx={{
                  fontFamily: ibmPlexSans.style.fontFamily,
                  fontWeight: 700,
                  fontSize: "14px",
                  color: Colors.BLACK,
                }}
              >
                {hero.imageLabel}
              </Typography>
            </Box>
          </Box>
        </Stack>

        <Box
          sx={{ mt: 10, width: "100%", height: "1px", backgroundColor: Colors.DIVIDER }}
        />
      </Container>
    </Box>
  );
};

export default Hero;
