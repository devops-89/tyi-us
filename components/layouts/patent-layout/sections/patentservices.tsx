"use client";

import React from "react";
import { Box, Container, Typography } from "@mui/material";

import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
import { WEBSITE_DATA } from "@/utils/website";

const PatentServiceSection = () => {
  const patentService = WEBSITE_DATA.patent.PatentServiceData;

  return (
    <Box
      sx={{py: { xs: 4, md: 6 }, backgroundColor: COLORS.WHITE,
        
        overflow: "hidden"}}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 1160, mx: "auto" }}>
          <Box
            sx={{
              mb: { xs: 4, md: 5 },
              textAlign: { xs: "center", md: "center", lg: "left" },
            }}
          >
            <Box
              sx={{
                display: "flex",
                justifyContent: {
                  xs: "center",
                  md: "center",
                  lg: "flex-start",
                },
                mb: 1.5,
              }}
            >
              <SparkleLabel
                text={patentService.sparkle}
                fontSize={{sx:"16px", md:"18px"}}
                sparkleSize={35}
              type="blue-star"
                sparklePosition="both"
                color={COLORS.PRIMARY}
              />
            </Box>

            <Typography
              sx={{
                fontFamily: "PolySans Trial, sans-serif",
                fontWeight: 400,
                fontSize: { xs: "24px", sm: "30px", md: "45px" },
                lineHeight: { xs: "38px", sm: "42px", md: "44px", lg: "48px" },
                letterSpacing: "-0.01em",
                textTransform: "capitalize",
                color: COLORS.BLACK,
              }}
            >
              {patentService.title}
            </Typography>
          </Box>

          <Box
            sx={{
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                sm: "repeat(2, 1fr)",
                md: "repeat(2, 1fr)",
                lg: "repeat(4, 1fr)",
              },
              gap: { xs: "20px", md: "20px" },
            }}
          >
            {patentService.steps.map((step) => (
              <Box
                key={step.number}
                sx={{
                  position: "relative",
                  width: "100%",
                  maxWidth: { xs: "100%", lg: 290 },
                  minHeight: { xs: 340, md: 383.137 },
                  backgroundColor: COLORS.WHITE,
                  borderTop: "0.8px solid #0000000D",
                  borderLeft: "0.8px solid #0000001A",
                  borderRight: "0.8px solid #0000001A",
                  borderBottom: "0.8px solid #0000001A",
                  borderRadius: "16px",
                  p: "24px",
                  overflow: "hidden",
                  boxShadow:
                    "0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A",
                  mx: "auto",
                  boxSizing: "border-box",
                }}
              >
                <Box
                  sx={{
                    position: "absolute",
                    width: 128,
                    height: 128,
                    top: "-47.2px",
                    right: "-47.2px",
                    borderRadius: "50%",
                    backgroundColor: COLORS.CHALLENGE_FADE_L1,
                  }}
                />

                <Box
                  sx={{
                    width: 48,
                    height: 48,
                    borderRadius: "14px",
                    backgroundColor: COLORS.SUBMIT_ACCENT_BG,
                    color: COLORS.SECONDARY,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 600,
                    fontSize: "24px",
                    lineHeight: "22.75px",
                    letterSpacing: "0px",
                    mb: "32px",
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {step.number}
                </Box>

                <Typography
                  sx={{
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 600,
                    fontSize: "18px",
                    lineHeight: "27px",
                    letterSpacing: "-0.45px",
                    color: COLORS.SECONDARY,
                    minHeight: "60px",
                    mb: 2,
                    position: "relative",
                    zIndex: 1,
                  }}
                >
                  {step.title}
                </Typography>

                <Box sx={{ position: "relative", zIndex: 1 }}>
                  {step.desc && (
                    <Typography
                      sx={{
                        fontFamily: poppins.style.fontFamily,
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "22.75px",
                        letterSpacing: "0px",
                        color: "#5C5C5C",
                        mb: step.points ? 1 : 0,
                      }}
                    >
                      {step.desc}
                    </Typography>
                  )}

                  {step.points && (
                    <Box component="ul" sx={{ pl: 2.5, mt: 0.5, mb: 1 }}>
                      {step.points.map((point) => (
                        <Typography
                          key={point}
                          component="li"
                          sx={{
                            fontFamily: poppins.style.fontFamily,
                            fontWeight: 400,
                            fontSize: "14px",
                            lineHeight: "22.75px",
                            letterSpacing: "0px",
                            color: "#5C5C5C",
                          }}
                        >
                          {point}
                        </Typography>
                      ))}
                    </Box>
                  )}

                  {step.bottomText && (
                    <Typography
                      sx={{
                        fontFamily: poppins.style.fontFamily,
                        fontWeight: 400,
                        fontSize: "14px",
                        lineHeight: "22.75px",
                        letterSpacing: "0px",
                        color: "#5C5C5C",
                      }}
                    >
                      {step.bottomText}
                    </Typography>
                  )}
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PatentServiceSection;