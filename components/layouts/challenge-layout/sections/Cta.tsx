"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Container, Stack, Typography, Button, Grid } from "@mui/material";
import { ArrowUpRight } from "lucide-react";
import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";
import { ASSETS } from "@/utils/assets";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
const { cta } = WEBSITE_DATA.challenge;
const ChallengeCtaSection = () => {
  return (
    <Box 
      sx={{ 
        py: { xs: 8, md: 0 }, 
        background: "linear-gradient(90deg, #D0DDF7 0%, #FFFFFF 100%)",
        position: "relative",
        overflow: "visible",
        height: { md: 430 },
        display: "flex",
        alignItems: "center"
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH }}>
        <Grid container spacing={{ xs: 6, md: 8 }} alignItems="center">
          {/* Left Side - New Step Image (Aligned flush) */}
          <Grid size={{ xs: 12, md: 6 }} sx={{ position: "relative", alignSelf: "stretch", zIndex: 2 }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: 430,
                display: "flex",
                alignItems: "flex-end",
                backgroundColor: "transparent",
              }}
            >
              <Image 
                src={cta.image} 
                alt="Join the challenge" 
                fill 
                style={{ 
                  objectFit: "contain", 
                  objectPosition: "bottom left",
                }} 
              />
            </Box>
          </Grid>

          {/* Right Side - Content */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ py: { xs: 4, md: 0 } }}>
              <Box sx={{ mb: 2 }}>
                <SparkleLabel 
                  text={cta.sparkle} 
                  sparklePosition="both" 
                  type="diamond" 
                  fontSize="18px"
                />
              </Box>
              
              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 500,
                  fontSize: { xs: "32px", md: "45px" },
                  color: Colors.BLACK,
                  lineHeight: 1.15,
                  mb: 2,
                  maxWidth: 700
                }}
              >
                {cta.title}
              </Typography>

              <Typography
                sx={{
                  fontFamily: ibmPlexSans.style.fontFamily,
                  fontWeight: 400,
                  fontSize: { xs: "18px", md: "20px" },
                  color: Colors.TEXT_MUTED,
                  lineHeight: 1.6,
                  mb: 5,
                  maxWidth: 600
                }}
              >
                {cta.description}
              </Typography>

              <Button
                component={Link}
                href="https://topyounginnovators.org/submit-your-entry/"
                variant="contained"
                endIcon={<ArrowUpRight size={22} />}
                sx={{
                  height: 56,
                  px: 6,
                  borderRadius: "50px",
                  backgroundColor: Colors.SECONDARY,
                  color: Colors.WHITE,
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 600,
                  fontSize: "18px",
                  textTransform: "none",
                  boxShadow: "0px 10px 30px rgba(227, 24, 55, 0.2)",
                  "&:hover": { 
                    backgroundColor: "#c61530",
                    boxShadow: "0px 15px 40px rgba(227, 24, 55, 0.3)",
                  },
                }}
              >
                {cta.buttonText}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};
export default ChallengeCtaSection;