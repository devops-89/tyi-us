"use client";

import React from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";

import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
import { WEBSITE_DATA } from "@/utils/website";

const ModulesCoveredSection = () => {
  const modulesData = WEBSITE_DATA.innovation.ModuleItem;

  return (
    <Box sx={{py: { xs: 4, md: 6 }, backgroundColor: Colors.WHITE}}>
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
             fontSize={{ xs:"16px", md:"18px"}}
 sparkleSize={35}

                              type="blue-star"
                             sparklePosition="both"
                            
                           
            />
          </Box>

          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 500,
              fontSize: { xs: "24px", sm: "30px", md: "45px" },
              color: Colors.BLACK,
              lineHeight: 1.2,
            }}
          >
            Modules Covered in “Free Innovation Camp”
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 3, md: 3, lg: 4 }}>
          {modulesData.map((item) => (
            <Grid key={item.title} size={{ xs: 12, sm: 6, md: 4, lg: 3 }}>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: { lg: 271 },
                  height: { xs: "auto", lg: 318 },
                  minHeight: { xs: 280, lg: 318 },
                  backgroundColor: "#F3F4F6",
                  borderRadius: "16px",
                  p: "28px",
                  display: "flex",
                  flexDirection: "column",
                  gap: "20px",
                  mx: "auto",
                }}
              >
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="flex-start"
                  sx={{ gap: 1.5 }}
                >
                  <Box
                    sx={{
                      width: 56,
                      height: 56,
                      borderRadius: "14px",
                      backgroundColor: Colors.SECONDARY,
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      color: Colors.WHITE,
                      flexShrink: 0,
                    }}
                  >
                    <item.Icon size={28} strokeWidth={2.2} />
                  </Box>

                  <Box
                    sx={{
                      backgroundColor: "#E5ECFA",
                      borderRadius: "999px",
                      px: 1.5,
                      py: 0.5,
                      flexShrink: 0,
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: poppins.style.fontFamily,
                        fontWeight: 400,
                        fontSize: "12px",
                        lineHeight: "18px",
                        letterSpacing: "0.48px",
                        color: "#37569E",
                        textTransform: "uppercase",
                        whiteSpace: "nowrap",
                      }}
                    >
                      {item.level}
                    </Typography>
                  </Box>
                </Stack>

                <Typography
                  sx={{
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 600,
                    fontSize: "18px",
                    lineHeight: "25.2px",
                    letterSpacing: "-0.18px",
                    color: Colors.BLACK,
                  }}
                >
                  {item.title}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "22.4px",
                    letterSpacing: "0px",
                    color: Colors.TEXT_MUTED,
                  }}
                >
                  {item.desc}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 400,
                    fontSize: "13px",
                    lineHeight: "19.5px",
                    letterSpacing: "0px",
                    color: Colors.TEXT_MUTED,
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