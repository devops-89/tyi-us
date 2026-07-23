"use client";

import React from "react";
import { Box, Container, Typography, Grid } from "@mui/material";
import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import AppButton from "@/components/widgets/Button";
import Image from "next/image";
import { ASSETS } from "@/utils/assets";
import Link from "next/link";

const ChallengeSection = () => {
  return (
    <Box
      sx={{py: { xs: 4, md: 6 }, backgroundColor: Colors.WHITE}}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Grid container spacing={{ xs: 5, md: 6 }} alignItems="stretch">
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Box sx={{ pr: { xs: 0, md: 10 }, flex: 1 }}>
              <Typography
                variant="h3"
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 400,
                  fontSize: { xs: "24px", sm: "26px", md: "28px" },
                  color: Colors.BLACK,
                  mb: 2,
                  lineHeight: { xs: 1.25, md: 1.1 },
                }}
              >
                The Ultimate Innovation Challenge for Young Creators
              </Typography>

              <Typography
                sx={{
                  fontFamily: ibmPlexSans.style.fontFamily,
                  fontSize: { xs: "14px", md: "16px" },
                  color: Colors.TEXT_MUTED,
                  lineHeight: { xs: 1.2, md: 1.4 },
                  mb: { xs: 3, md: 4 },
                  maxWidth: "600px",
                  textAlign:  "justify" ,
                }}
              >
                Top Young Innovators brings an exciting innovation competition
                "America's Top Young Innovator" to hunt the most innovative and
                creative young minds.
              </Typography>




  <AppButton
               component={Link}
  href="/challenge" 
    pill
    sx={{
      mb: { xs: 4, md: 8 },
      fontSize: { xs: "14px", md: "18px" },
      padding: { xs: "8px 20px", md: "12px 32px" },
      
      display: "flex",
      mx: "auto",
      "@media (min-width: 768px)": {
        display: "inline-flex",
        mx: 0,
      },
    }}
  >
    Explore the Competition
  </AppButton>

            </Box>

            <Box
              sx={{
                borderRadius: { xs: "20px", md: "32px" },
                overflow: "hidden",
                position: "relative",
                height: { xs: "280px", sm: "350px", md: "520px" },
                mt: "auto",
                border: "1px solid #EAEAEA",
              }}
            >
              <Image
                src={ASSETS.IMAGES.HERO2}
                alt="Students innovating"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Grid>

    
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{ display: "flex", flexDirection: "column" }}
          >
            <Box
              sx={{
                flex: 1,
                pt: { xs: 0, md: 24 },
                ml: { xs: 0, md: "5px" },
                maxWidth: { xs: "100%", md: "520px" },
              }}
            >
              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 400,
                  fontSize: { xs: "24px", sm: "26px", md: "28px" },
                  color: Colors.BLACK,
                  mb: 2,
                  lineHeight: { xs: 1.25, md: 1.25 },
                }}
              >
                Got a Big Idea? Show It to the World!
              </Typography>

              <Typography
                sx={{
                  fontFamily: ibmPlexSans.style.fontFamily,
                  fontSize: { xs: "14px", md: "16px" },
                  color: Colors.TEXT_MUTED,
                    lineHeight: { xs: 1.2, md: 1.4 },
                  mb: { xs: 3, md: 4 },
                  maxWidth: { xs: "100%", md: "520px" },
                   textAlign:  "justify" ,
                }}
              >
                If you are aged between 10 to 22 years and have an idea that
                you think has the power to change the world, participate in
                “America’s Top Young Innovator”, win the title, and get global
                recognition.
              </Typography>
            </Box>

            <Box
              sx={{
                borderRadius: { xs: "20px", md: "32px" },
                overflow: "hidden",
                position: "relative",
                height: { xs: "280px", sm: "350px", md: "460px" },
                mt: { xs: 0, md: 0 },
                border: "1px solid #EAEAEA",
              }}
            >
              <Image
                src={ASSETS.IMAGES.HERO3}
                alt="Eco Globe"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ChallengeSection;