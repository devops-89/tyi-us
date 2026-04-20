"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Container, Stack, Typography, Button, Grid } from "@mui/material";
import { ArrowUpRight, CheckCircle2 } from "lucide-react";

import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
import { ASSETS } from "@/utils/assets";

const { rules: rulesData } = WEBSITE_DATA.challenge;

const RulesSection = () => {
  return (
    <Box sx={{ py: { xs: 10, md: 12 }, backgroundColor: Colors.WHITE }}>
      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH }}>
        <Box sx={{ maxWidth: 1454, mx: "auto" }}>
          {/* Header Section - Left Aligned */}
          <Box sx={{ mb: 6, textAlign: "left" }}>
            <Box sx={{ mb: 2 }}>
              <SparkleLabel 
                text={rulesData.sparkle} 
                sparklePosition="both" 
                type="flower"
                fontSize="18px"
              />
            </Box>

            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 500,
                fontSize: { xs: "30px", md: "45px" },
                color: Colors.BLACK,
                lineHeight: 1.1,
                mb: 1.5,
              }}
            >
              {rulesData.title}
            </Typography>
            <Typography
              sx={{
                fontFamily: ibmPlexSans.style.fontFamily,
                fontSize: { xs: "16px", md: "20px" },
                color: Colors.TEXT_MUTED,
                lineHeight: 1.6,
                maxWidth: 800,
              }}
            >
              {rulesData.description}
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 6, md: 10 }} alignItems="flex-start">
            {/* Left Side - Image with Floating Overlay Box */}
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ position: "relative" }}>
                {/* Main Image Container */}
                <Box 
                  sx={{ 
                    position: "relative", 
                    width: "100%", 
                    height: { xs: 420, md: 575 }, 
                    borderRadius: "30px", 
                    overflow: "hidden",
                    boxShadow: "0px 10px 30px rgba(0,0,0,0.05)"
                  }}
                >
                  <Image src={rulesData.image} alt="Rules" fill style={{ objectFit: "cover" }} />
                </Box>
                <Box
                  sx={{
                    position: "absolute",
                    bottom: -80,
                    right: { xs: -20, md: -50 },
                    width: { xs: 180, md: 220 },
                    height: { xs: 220, md: 240 },
                    borderRadius: "30px",
                    backgroundColor: Colors.WHITE,
                    boxShadow: "0px 15px 50px rgba(0,0,0,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: 3,
                    zIndex: 2
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: poppins.style.fontFamily,
                      fontWeight: 800,
                      fontSize: { xs: 32, md: 40 },
                      lineHeight: 1.4,
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box component="span" sx={{ color: "#1B3E8C" }}>Learn.</Box>
                    <Box component="span" sx={{ color: "#A32448" }}>Grow.</Box>
                    <Box component="span" sx={{ color: "#E31837" }}>Lead.</Box>
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={4} sx={{ pt: { md: 2 } }}>
                {rulesData.rules.map((ruleText: string, idx: number) => {
                  const parts = ruleText.split("contact us");
                  return (
                    <Stack key={idx} direction="row" spacing={2.5} alignItems="flex-start">
                      <Box
                        sx={{
                          flexShrink: 0,
                          width: 28,
                          height: 28,
                          borderRadius: "50%",
                          backgroundColor: Colors.SECONDARY,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mt: 0.5,
                        }}
                      >
                        <Box sx={{ width: 14, height: 10, position: "relative" }}>
                          <svg viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M1 5.5L4.5 9L12.5 1" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </Box>
                      </Box>
    
                      <Typography
                        sx={{
                          fontFamily: ibmPlexSans.style.fontFamily,
                          fontSize: { xs: "16px", md: "20px" },
                          color: "#333333",
                          lineHeight: 1.6,
                          textAlign: "justify",
                        }}
                      >
                        {parts.length > 1 ? (
                          <>
                            {parts[0]}
                            <Link href="/contact" style={{ color: Colors.SECONDARY, fontWeight: 500, textDecoration: "none" }}>
                              contact us
                            </Link>
                            {parts[1]}
                          </>
                        ) : ruleText}
                      </Typography>
                    </Stack>
                  );
                })}

                <Box sx={{ pt: { xs: 2, md: 4 } }}>
                  <Button
                    component={Link}
                    href="#"
                    variant="contained"
                    endIcon={<ArrowUpRight size={22} />}
                    sx={{
                      height: 56,
                      px: 5,
                      borderRadius: "50px",
                      backgroundColor: Colors.SECONDARY,
                      fontFamily: ibmPlexSans.style.fontFamily,
                      fontWeight: 600,
                      fontSize: 18,
                      textTransform: "none",
                      boxShadow: "0 4px 14px rgba(227, 24, 55, 0.3)",
                      "&:hover": { 
                        backgroundColor: Colors.PRIMARY,
                        boxShadow: "0 6px 20px rgba(227, 24, 55, 0.4)",
                      },
                    }}
                  >
                    {rulesData.buttonText}
                  </Button>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default RulesSection;

