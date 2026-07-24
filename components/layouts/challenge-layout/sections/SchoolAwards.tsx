"use client";

import React from "react";
import Image from "next/image";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { WEBSITE_DATA } from "@/utils/website";
import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";

export default function SchoolAwardsSection() {
  const data = WEBSITE_DATA.challenge.schoolAwards;

  return (
    <Box
      sx={{
        py: { xs: 4, md: 6 },
        backgroundColor: Colors.WHITE,
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH, px: { xs: 2, sm: 3, md: 4 } }}>
        <Box sx={{ textAlign: "center", mb: 8 }}>
          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 500,
              fontSize: { xs: "32px", md: "45px" },
              color: "#1A1A1A",
              mb: 1,
            }}
          >
            {data.title}
          </Typography>
          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 400,
              fontSize: { xs: "16px", md: "18px" },
              color: "#4A4A4A",
              maxWidth: 750,
              mx: "auto",
            }}
          >
            {data.description}
          </Typography>
        </Box>

        <Grid container spacing={2} justifyContent="center">
          {data.items.map((item, idx) => (
            <Grid size={{ xs: 12, md: 4 }} key={idx}>
              <Box
                sx={{
                  backgroundColor: "rgba(251, 251, 251, 0.9)",
                  borderRadius: "20px",
                  p: "10px",
                  height: "100%",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.03)",
                }}
              >
                {/* Image */}
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: 200, sm: 262 },
                    borderRadius: "18px",
                    overflow: "hidden",
                    mb: 2,
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                </Box>

                {/* Content */}
                <Box sx={{ px: { xs: 1, sm: 2.5 }, pb: 2, flex: 1, display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{
                      fontFamily: poppins.style.fontFamily,
                      fontWeight: 500,
                      fontSize: { xs: "16px", md: "20px" },
                      lineHeight: 1.5,
                      letterSpacing: "-0.4px",
                      color: "#1A1A1A",
                      mb: 2,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: poppins.style.fontFamily,
                      fontWeight: 400,
                      fontSize: { xs: "14px", md: "16px" },
                      lineHeight: 1.44,
                      letterSpacing: "0.2px",
                      color: "#4A4A4A",
                      mb: 4,
                      flex: 1,
                    }}
                  >
                    {item.description}
                  </Typography>

                  <Box>
                    <Button
                      sx={{
                        backgroundColor: "#FCECEF",
                        borderRadius: "30px",
                        textTransform: "none",
                        color: "#D60E34",
                        fontFamily: "'Manrope', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        px: 3,
                        py: 1,
                        "&:hover": {
                          backgroundColor: "#f7d4dc",
                        },
                      }}
                    >
                      Get Started
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
