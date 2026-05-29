"use client";

import React from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";

import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
import { WEBSITE_DATA } from "@/utils/website";

const ModulesCoveredSection = () => {
  const modulesData = WEBSITE_DATA.innovation.ModuleItem;

  return (
    <Box
      sx={{
        backgroundColor: COLORS.WHITE,
        py: { xs: 6, md: 10 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box sx={{ textAlign: "center", mb: { xs: 4, md: 8 } }}>
          <Box sx={{ display: "flex", justifyContent: "center", mb: 2 }}>
            <SparkleLabel
              text="8 Module Covered"
              fontSize={18}
              sparklePosition="both"
              color={COLORS.PRIMARY}
            />
          </Box>

          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 500,
              fontSize: { xs: "28px", sm: "34px", md: "40px" },
              color: COLORS.BLACK,
              lineHeight: 1.2,
            }}
          >
            Modules Covered in “Free Innovation Camp”
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 3, md: 4 }}>
          {modulesData.map((item) => (
            <Grid key={item.title} size={{ xs: 12, sm: 6, md: 3 }}>
              <Box
                sx={{
                  height: "100%",
                  minHeight: { xs: 260, md: 305 },
                  backgroundColor: "#F4F5F7",
                  borderRadius: "14px",
                  p: { xs: 3, md: 3.2 },
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  sx={{ mb: 4 }}
                >
                  <Box
                    sx={{
                      width: 54,
                      height: 54,
                      borderRadius: "14px",
                      backgroundColor: COLORS.SECONDARY,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: COLORS.WHITE,
                      flexShrink: 0,
                    }}
                  >
                    <item.Icon size={26} strokeWidth={2.2} />
                  </Box>

                  <Box
                    sx={{
                      backgroundColor: "#E5ECFA",
                      borderRadius: "999px",
                      px: 1.5,
                      py: 0.5,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: ibmPlexSans.style.fontFamily,
                        fontSize: "11px",
                        fontWeight: 600,
                        color: COLORS.PRIMARY,
                        letterSpacing: "0.5px",
                      }}
                    >
                      {item.level}
                    </Typography>
                  </Box>
                </Stack>

                <Typography
                  sx={{
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 700,
                    fontSize: { xs: "18px", md: "18px" },
                    color: COLORS.BLACK,
                    lineHeight: 1.3,
                    mb: 1.5,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: ibmPlexSans.style.fontFamily,
                    fontSize: "15px",
                    color: COLORS.TEXT_MUTED,
                    lineHeight: 1.55,
                    mb: 3,
                  }}
                >
                  {item.desc}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: ibmPlexSans.style.fontFamily,
                    fontSize: "13px",
                    color: COLORS.TEXT_MUTED,
                    mt: "auto",
                  }}
                >
                  {item.duration}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ModulesCoveredSection;