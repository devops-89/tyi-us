"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  Box,
  Container,
  Stack,
  Typography,
  Button,
  Divider,
} from "@mui/material";
import { ArrowLeft, ArrowRight } from "lucide-react";

import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
import { ASSETS } from "@/utils/assets";

const { participation } = WEBSITE_DATA.home;

const ParticipationJourneySection = () => {
  const [activeStep, setActiveStep] = React.useState(0);
  const totalSteps = participation.steps.length;

  const handleNext = () => {
    setActiveStep((prev) => (prev + 1) % totalSteps);
  };

  const handlePrev = () => {
    setActiveStep((prev) => (prev - 1 + totalSteps) % totalSteps);
  };

  return (
    <Box
      sx={{
        py: { xs: 8, md: 10 },
        backgroundColor: Colors.WHITE,
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Background Decor */}
      <Box
        sx={{
          position: "absolute",
          left: { xs: 20, md: -20 },
          bottom: { xs: 60, md: 100 },
          zIndex: 0,
          width: { xs: 260, md: 500 },
          height: { xs: 150, md: 300 },
          opacity: 0.5,
          pointerEvents: "none",
        }}
      >
        <Image src="/images/icons/top-young-innovators.png" alt="" fill style={{ objectFit: "contain", objectPosition: "left bottom" }} />
      </Box>
      <Box
        sx={{
          position: "absolute",
          left: 0,
          bottom: { xs: 60, md: 100 },
          width: { xs: 100, md: 180 },
          height: { xs: 60, md: 120 },
          zIndex: 1,
          opacity: 0.6,
        }}
      >
        <Image src={ASSETS.IMAGES.ICON_DOTS} alt="" fill style={{ objectFit: "contain", objectPosition: "bottom left" }} />
      </Box>

      <Container
        maxWidth={false}
        sx={{ maxWidth: CONSTANTS.MAX_WIDTH, position: "relative", zIndex: 1 }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 6, md: 8 }}
          alignItems="flex-start"
        >
          <Box sx={{ flex: 1, minWidth: 0 }}>
            <Box sx={{ mb: 1.5 }}>
              <SparkleLabel 
                text={participation.sparkle} 
                fontSize={18} 
                sparklePosition="both" 
              />
            </Box>

            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 400,
                fontSize: "28px",
                color: Colors.BLACK,
                lineHeight: 1.25,
                mb: 1.5,
                maxWidth: 600,
              }}
            >
              {participation.title}
            </Typography>

            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 400,
                fontSize: "20px",
                color: Colors.TEXT_MUTED,
                lineHeight: 1.9,
                maxWidth: 640,
                mb: 2.5,
                textAlign: "justify"
              }}
            >
              {participation.description}
            </Typography>

            <Stack direction="row" spacing={1.5}>
              <Button
                onClick={handlePrev}
                variant="contained"
                sx={{
                  minWidth: 0,
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  backgroundColor: Colors.SECONDARY,
                  "&:hover": { backgroundColor: Colors.PRIMARY },
                }}
              >
                <ArrowLeft size={18} />
              </Button>
              <Button
                onClick={handleNext}
                variant="contained"
                sx={{
                  minWidth: 0,
                  width: 44,
                  height: 44,
                  borderRadius: "50%",
                  backgroundColor: Colors.PRIMARY,
                  "&:hover": { backgroundColor: "#000080" },
                }}
              >
                <ArrowRight size={18} />
              </Button>
            </Stack>
          </Box>

          <Box sx={{ flex: 1.5, minWidth: 0, position: "relative" }}>
            <Stack direction="row" spacing={4} alignItems="stretch">
              <Box sx={{ flex: 1 }}>
                {participation.steps.map((s, idx) => {
                  const isLast = idx === participation.steps.length - 1;
                  const isActive = idx === activeStep;
                  return (
                    <Stack key={s.stepLabel} direction="row" spacing={{ xs: 3, md: 5 }}>
                      {/* Timeline Stepper Column (LEFT) */}
                      <Box
                        sx={{
                          display: "flex",
                          flexDirection: "column",
                          alignItems: "center",
                          width: 20,
                          flexShrink: 0,
                        }}
                      >
                        {/* Dot */}
                        <Box
                          sx={{
                            width: 14,
                            height: 14,
                            borderRadius: "50%",
                            backgroundColor: isActive ? Colors.PRIMARY : Colors.SECONDARY,
                            mt: 1.2,
                            zIndex: 2,
                            transition: "background-color 0.3s ease",
                          }}
                        />
                        {/* Vertical Line */}
                        {!isLast && (
                          <Box
                            sx={{
                              width: 2,
                              flex: 1,
                              backgroundColor: Colors.SECONDARY,
                              my: 0.5,
                            }}
                          />
                        )}
                      </Box>

                      {/* Step Content (MIDDLE) */}
                      <Box sx={{ flex: 1, pb: isLast ? 0 : 8, opacity: isActive ? 1 : 0.6, transition: "opacity 0.3s ease" }}>
                        <Box
                          onClick={() => setActiveStep(idx)}
                          sx={{
                            display: "inline-flex",
                            alignItems: "center",
                            justifyContent: "center",
                            border: `1px solid ${isActive ? Colors.PRIMARY : "#E0E0E0"}`,
                            borderRadius: "999px",
                            px: 2.5,
                            py: 0.8,
                            mb: 1.5,
                            cursor: "pointer",
                            backgroundColor: isActive ? "rgba(0, 0, 128, 0.05)" : "transparent",
                            transition: "all 0.3s ease",
                          }}
                        >
                          <Typography
                            sx={{
                              fontFamily: ibmPlexSans.style.fontFamily,
                              fontWeight: 700,
                              fontSize: 12,
                              color: isActive ? Colors.PRIMARY : Colors.TEXT_MUTED,
                            }}
                          >
                            {s.stepLabel}
                          </Typography>
                        </Box>

                        <Typography
                          sx={{
                            fontFamily: poppins.style.fontFamily,
                            fontWeight: 400,
                            fontSize: "28px",
                            color: Colors.BLACK,
                            mb: 0.5,
                          }}
                        >
                          {s.title}
                        </Typography>

                        <Typography
                          sx={{
                            fontFamily: poppins.style.fontFamily,
                            fontWeight: 400,
                            fontSize: "20px",
                            color: Colors.TEXT_MUTED,
                            lineHeight: 1.6,
                            textAlign: "justify",
                          }}
                        >
                          {s.description}
                        </Typography>
                      </Box>

                      {/* Right Progressive Segment Indicator (RIGHT) */}
                      <Box
                        sx={{
                          width: 6,
                          backgroundColor: "#F0F0F0",
                          borderRadius: "4px",
                          position: "relative",
                          display: { xs: "none", md: "block" },
                          overflow: "hidden",
                          mb: isLast ? 0 : 4, // Match bottom spacing of steps
                        }}
                      >
                        <Box
                          sx={{
                            position: "absolute",
                            top: 0,
                            left: 0,
                            right: 0,
                            height: idx <= activeStep ? "100%" : "0%",
                            backgroundColor: Colors.PRIMARY,
                            transition: "height 0.4s ease-out",
                            transitionDelay: idx <= activeStep ? `${(idx - activeStep) * 0}s` : "0s",
                          }}
                        />
                      </Box>
                    </Stack>
                  );
                })}
              </Box>
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default ParticipationJourneySection;
