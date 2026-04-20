"use client";

import React from "react";
import Image from "next/image";
import { Box, Container, Stack, Typography, Grid } from "@mui/material";

import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";

const { scoreBreakdown } = WEBSITE_DATA.challenge;

const ScoreBreakdownSection = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: Colors.WHITE }}>
      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH }}>
        <Box sx={{ maxWidth: 1454, mx: "auto" }}>
          {/* Header - Right Aligned as per screenshot */}
          <Stack alignItems={{ xs: "flex-start", md: "flex-end" }} sx={{ mb: { xs: 6, md: 0 } }}>
            <Box sx={{ mb: 2 }}>
              <SparkleLabel 
                text={scoreBreakdown.sparkle} 
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
                textAlign: { xs: "left", md: "right" },
                mb: 1,
              }}
            >
              {scoreBreakdown.title}
            </Typography>
            <Typography
              sx={{
                fontFamily: ibmPlexSans.style.fontFamily,
                fontWeight: 400,
                fontSize: { xs: "16px", md: "20px" },
                color: Colors.TEXT_MUTED,
                textAlign: { xs: "left", md: "right" },
                maxWidth: 800,
                mb: { xs: 4, md: 0 }
              }}
            >
              {scoreBreakdown.description}
            </Typography>
          </Stack>

          <Grid container spacing={{ xs: 6, md: 4 }} sx={{ mt: { md: -2 } }}>
            {scoreBreakdown.items.map((c, index) => (
              <Grid 
                key={c.number} 
                size={{ xs: 12, md: 4 }}
                sx={{ 
                  mt: { md: index * 20 } // Staggering offset
                }}
              >
                <Box 
                  sx={{ 
                    position: "relative", 
                    pl: 4,
                    pt: 2,
                    height: "100%"
                  }}
                >
                  {/* Dark Blue Vertical Line */}
                  <Box 
                    sx={{ 
                      position: "absolute", 
                      left: 0, 
                      top: { md: 10 }, 
                      bottom: { md: 10 }, 
                      width: 3.5, 
                      backgroundColor: "#1B3E8C" 
                    }} 
                  />

                  {/* Number Background */}
                  <Typography
                    sx={{
                      fontFamily: ibmPlexSans.style.fontFamily,
                      fontWeight: 700,
                      fontSize: { xs: "60px", md: "80px" },
                      color: "rgba(0, 0, 0, 0.08)",
                      lineHeight: 1,
                      mb: 1,
                    }}
                  >
                    {c.number}
                  </Typography>

                  <Stack spacing={1} sx={{ mb: 3 }}>
                    <Typography 
                      sx={{ 
                        fontFamily: poppins.style.fontFamily, 
                        fontWeight: 500, 
                        fontSize: { xs: "20px", md: "22px" }, 
                        color: Colors.BLACK,
                        lineHeight: 1.2
                      }}
                    >
                      {c.title}
                    </Typography>
                    
                    {c.subtitle && (
                      <Typography 
                        sx={{ 
                          fontFamily: ibmPlexSans.style.fontFamily, 
                          fontWeight: 400,
                          fontSize: "16px", 
                          color: Colors.TEXT_MUTED,
                          lineHeight: 1.4
                        }}
                      >
                        {c.subtitle}
                      </Typography>
                    )}

                    <Typography 
                      sx={{ 
                        fontFamily: poppins.style.fontFamily, 
                        fontWeight: 500, 
                        fontSize: "18px", 
                        color: Colors.SECONDARY 
                      }}
                    >
                      {c.marks}
                    </Typography>
                  </Stack>

                  {/* Image Square */}
                  <Box 
                    sx={{ 
                      position: "relative", 
                      width: "100%", 
                      aspectRatio: "1/1",
                      borderRadius: "12px",
                      overflow: "hidden",
                      backgroundColor: Colors.GRAY_LIGHT,
                      boxShadow: "0px 10px 30px rgba(0,0,0,0.05)"
                    }}
                  >
                    <Image 
                      src={c.image} 
                      alt={c.title} 
                      fill 
                      style={{ objectFit: "cover" }} 
                    />
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default ScoreBreakdownSection;

