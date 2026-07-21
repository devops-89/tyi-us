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
        <Box sx={{ maxWidth: 1454, mx: "auto" }}>
          <Stack
            alignItems={{ xs: "center", md: "flex-end" }}
            sx={{ mb: { xs: 5, md: 0 } }}
          >
            <Box sx={{ mb: 2 }}>
              <SparkleLabel
                text={scoreBreakdown.sparkle}
                sparklePosition="both"
                type="flower"
                fontSize={{ xs:"16px", md:"18px"}}

              />
            </Box>

            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 500,
                fontSize: { xs: "24px", sm: "30px", md: "45px" },
                color: Colors.BLACK,
                textAlign: { xs: "center", md: "right" },
                lineHeight: { xs: 1.25, md: 1.2 },
                mb: 1,
              }}
            >
              {scoreBreakdown.title}
            </Typography>

            <Typography
              sx={{
                fontFamily: ibmPlexSans.style.fontFamily,
                fontWeight: 400,
            fontSize: { xs: "14px", md: "16px" },
                  lineHeight: { xs: 1.2, md: 1.4 },
                color: Colors.TEXT_MUTED,
                textAlign: { xs: "center", md: "right" },
                
                maxWidth: 800,
                mb: { xs: 2, md: 0 },
              }}
            >
              {scoreBreakdown.description}
            </Typography>
          </Stack>

          <Grid
            container
            spacing={{ xs: 4, md: 4 }}
            sx={{ mt: { xs: 0, md: -2 } }}
          >
            {scoreBreakdown.items.map((c, index) => (
              <Grid
                key={c.number}
                size={{ xs: 12, sm: 6, md: 4 }}
                sx={{
                  mt: { xs: 0, md: index * 20 },
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    pl: { xs: 2.5, md: 4 },
                    pt: { xs: 1.5, md: 2 },
                    height: "100%",
                  }}
                >
                  <Box
                    sx={{
                      position: "absolute",
                      left: 0,
                      top: { xs: 8, md: 10 },
                      bottom: { xs: 8, md: 10 },
                      width: 3.5,
                      backgroundColor: "#1B3E8C",
                    }}
                  />

                  <Typography
                    sx={{
                      fontFamily: ibmPlexSans.style.fontFamily,
                      fontWeight: 700,
                      fontSize: { xs: "54px", md: "80px" },
                      color: "rgba(0, 0, 0, 0.08)",
                      lineHeight: 1,
                      mb: 1,
                    }}
                  >
                    {c.number}
                  </Typography>

                  <Stack spacing={1} sx={{ mb: { xs: 2, md: 3 } }}>
                    <Typography
                      sx={{
                        fontFamily: poppins.style.fontFamily,
                        fontWeight: 500,
                        fontSize: { xs: "20px", md: "22px" },
                        color: Colors.BLACK,
                        lineHeight: 1.25,
                      }}
                    >
                      {c.title}
                    </Typography>

                    {c.subtitle && (
                      <Typography
                        sx={{
                          fontFamily: ibmPlexSans.style.fontFamily,
                          fontWeight: 400,
                          fontSize: { xs: "15px", md: "16px" },
                          color: Colors.TEXT_MUTED,
                          lineHeight: 1.5,
                        }}
                      >
                        {c.subtitle}
                      </Typography>
                    )}

                    <Typography
                      sx={{
                        fontFamily: poppins.style.fontFamily,
                        fontWeight: 500,
                        fontSize: { xs: "17px", md: "18px" },
                        color: Colors.SECONDARY,
                      }}
                    >
                      {c.marks}
                    </Typography>
                  </Stack>

                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      aspectRatio: "1/1",
                      borderRadius: { xs: "10px", md: "12px" },
                      overflow: "hidden",
                      backgroundColor: Colors.GRAY_LIGHT,
                      boxShadow: "0px 10px 30px rgba(0,0,0,0.05)",
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