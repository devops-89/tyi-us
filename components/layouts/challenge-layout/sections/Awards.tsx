"use client";

import React from "react";
import Image from "next/image";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { Crown, DollarSign, Trophy, Award } from "lucide-react";

import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";
import { ASSETS } from "@/utils/assets";

const { awards } = WEBSITE_DATA.challenge;

const AwardsSection = () => {
  return (
    <Box sx={{ py: { xs: 10, md: 12 }, backgroundColor: Colors.WHITE }}>
      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH }}>
        <Box sx={{ maxWidth: 1454, mx: "auto", position: "relative" }}>
          {/* Sparkle Header */}
          <Box sx={{ mb: 2, display: "flex", justifyContent: "center" }}>
            <Stack
              direction="row"
              spacing={1.5}
              alignItems="center"
              sx={{
                px: 3,
                py: 0.5,
              }}
            >
              <Box sx={{ position: "relative", width: 20, height: 20 }}>
                <Image src={ASSETS.IMAGES.ICON_BLUESTAR} alt="star" fill style={{ objectFit: "contain" }} />
              </Box>
              <Typography 
                sx={{ 
                  fontFamily: poppins.style.fontFamily, 
                  fontWeight: 500, 
                  fontSize: 16, 
                  color: Colors.PRIMARY,
                  textTransform: "capitalize"
                }}
              >
                {awards.sparkle}
              </Typography>
              <Box sx={{ position: "relative", width: 20, height: 20 }}>
                <Image src={ASSETS.IMAGES.ICON_BLUESTAR} alt="star" fill style={{ objectFit: "contain" }} />
              </Box>
            </Stack>
          </Box>

          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 500,
              fontSize: { xs: "28px", md: "45px" },
              color: Colors.BLACK,
              textAlign: "center",
              mb: 1,
            }}
          >
            {awards.title}
          </Typography>
          <Typography
            sx={{
              fontFamily: ibmPlexSans.style.fontFamily,
              fontSize: { xs: "16px", md: "20px" },
              color: Colors.TEXT_MUTED,
              textAlign: "center",
              mb: 8,
              maxWidth: 800,
              mx: "auto"
            }}
          >
            {awards.description}
          </Typography>

          <Grid container spacing={{ xs: 4, md: 6 }} justifyContent="center">
            {awards.items.map(({ index, labelTop, labelMain, labelBottom, Icon }, i) => (
              <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
                <Stack spacing={2} alignItems="center" sx={{ textAlign: "center" }}>
                  {/* Icon Circle */}
                  <Box
                    sx={{
                      width: { xs: 120, md: 167 },
                      height: { xs: 120, md: 167 },
                      borderRadius: "50%",
                      backgroundColor: "#1B3E8C", // Dark blue as per screenshot
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      position: "relative",
                      boxShadow: "0px 8px 24px rgba(0, 0, 0, 0.12)",
                      mb: 2,
                      "&::after": {
                        content: '""',
                        position: "absolute",
                        inset: -6,
                        borderRadius: "50%",
                        border: "2px solid rgba(0, 0, 0, 0.05)",
                      }
                    }}
                  >
                    {typeof Icon === "string" ? (
                      <Box sx={{ position: "relative", width: "50%", height: "50%" }}>
                        <Image src={Icon} alt="award" fill style={{ objectFit: "contain" }} />
                      </Box>
                    ) : (
                      <Icon size={64} color={Colors.WHITE} strokeWidth={1.5} />
                    )}
                  </Box>

                  {/* Index Number */}
                  <Typography 
                    sx={{ 
                      fontFamily: poppins.style.fontFamily, 
                      fontWeight: 500, 
                      fontSize: { xs: 24, md: 28 }, 
                      color: "#0A0A0A" 
                    }}
                  >
                    {index}
                  </Typography>

                  {/* Content Stack */}
                  <Stack spacing={0.5} sx={{ px: 2 }}>
                    {labelTop && (
                      <Typography 
                        sx={{ 
                          fontFamily: ibmPlexSans.style.fontFamily, 
                          fontSize: { xs: 14, md: 16 }, 
                          color: Colors.TEXT_MUTED,
                          lineHeight: 1.2
                        }}
                      >
                        {labelTop}
                      </Typography>
                    )}
                    
                    <Typography 
                      sx={{ 
                        fontFamily: poppins.style.fontFamily, 
                        fontWeight: 500, 
                        fontSize: { xs: 18, md: 20 }, 
                        color: "#0A0A0A",
                        lineHeight: 1.3
                      }}
                    >
                      {labelMain}
                    </Typography>

                    {labelBottom && (
                      <Typography 
                        sx={{ 
                          fontFamily: ibmPlexSans.style.fontFamily, 
                          fontSize: { xs: 14, md: 16 }, 
                          color: Colors.TEXT_MUTED,
                          lineHeight: 1.4
                        }}
                      >
                        {labelBottom}
                      </Typography>
                    )}
                  </Stack>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AwardsSection;

