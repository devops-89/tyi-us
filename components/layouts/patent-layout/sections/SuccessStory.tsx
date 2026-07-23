"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Stack,
  Typography,
  IconButton,
  useTheme,
  useMediaQuery,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
import { WEBSITE_DATA } from "@/utils/website";

const CARD_GAP = 20;

const SuccessStoriesSection = () => {
  const successStoriesData = WEBSITE_DATA.patent.SuccessStoriesData;
  const originalStories = successStoriesData.stories;
  
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  
  
  const extendedStories = [...originalStories, ...originalStories, ...originalStories];
  
 
  const [activeIndex, setActiveIndex] = useState(originalStories.length);
  const [isTransitioning, setIsTransitioning] = useState(false);
  
 
  const [isClickDisabled, setIsClickDisabled] = useState(false);

  const handlePrev = () => {
    if (isClickDisabled) return;
    setIsClickDisabled(true);
    setIsTransitioning(true);
    setActiveIndex((prev) => prev - 1);
  };

  const handleNext = () => {
    if (isClickDisabled) return;
    setIsClickDisabled(true);
    setIsTransitioning(true);
    setActiveIndex((prev) => prev + 1);
  };

  
  const handleTransitionEnd = () => {
    setIsTransitioning(false);
    setIsClickDisabled(false);
    
  
    if (activeIndex >= originalStories.length * 2) {
      setActiveIndex(activeIndex - originalStories.length);
    } 
 
    else if (activeIndex < originalStories.length) {
      setActiveIndex(activeIndex + originalStories.length);
    }
  };

  return (
    <Box sx={{py: { xs: 4, md: 6 }, backgroundColor: COLORS.WHITE}}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            mb: 2,
          }}
        >
          <SparkleLabel
            text={successStoriesData.sparkle}
            fontSize={{ xs:"16px", md:"18px"}}
            sparkleSize={35}
            type="blue-star"
            sparklePosition="both"
            color={COLORS.PRIMARY}
          />
        </Box>

        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          spacing={2}
          sx={{
            mb: { xs: 4, md: 6 },
          }}
        >
          <Typography
            sx={{
              fontFamily: "PolySans Trial, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "20px", sm: "30px", md: "45px" },
              lineHeight: { xs: "28px", sm: "42px", md: "48px" },
              letterSpacing: "-0.01em",
              textTransform: "capitalize",
              color: COLORS.BLACK,
            }}
          >
            {successStoriesData.title}
          </Typography>

          <Stack
            direction="row"
            spacing={1}
            sx={{
              display: "flex",
              flexShrink: 0,
            }}
          >
            <IconButton
              onClick={handlePrev}
              sx={{
                width: { xs: 32, md: 48 },
                height: { xs: 32, md: 48 },
                border: "1px solid #E5E5E5",
                backgroundColor: COLORS.WHITE,
                "&:hover": { backgroundColor: "#F6F6F6" },
                "& svg": {
                  width: { xs: 16, md: 20 },
                  height: { xs: 16, md: 20 },
                }
              }}
            >
              <ChevronLeft />
            </IconButton>

            <IconButton
              onClick={handleNext}
              sx={{
                width: { xs: 32, md: 48 },
                height: { xs: 32, md: 48 },
                border: "1px solid #E5E5E5",
                backgroundColor: COLORS.WHITE,
                "&:hover": { backgroundColor: "#F6F6F6" },
                "& svg": {
                  width: { xs: 16, md: 20 },
                  height: { xs: 16, md: 20 },
                }
              }}
            >
              <ChevronRight />
            </IconButton>
          </Stack>
        </Stack>

        <Box
          sx={{
            width: "100%",
            overflow: "hidden",
            position: "relative",
          }}
        >
        
          <Box
            onTransitionEnd={handleTransitionEnd}
            sx={{
              display: "flex",
              gap: `${CARD_GAP}px`,
              transition: isTransitioning ? "transform 0.45s ease" : "none",
              transform: {
                xs: `translateX(calc(-${activeIndex} * (100% + ${CARD_GAP}px)))`,
                md: `translateX(calc(-${activeIndex} * (50% + ${CARD_GAP / 2}px)))`,
              },
            }}
          >
            {extendedStories.map((story, index) => (
              <Box
                key={index}
                sx={{
                  width: {
                    xs: "100%",
                    md: `calc(50% - ${CARD_GAP / 2}px)`,
                  },
                  minWidth: {
                    xs: "100%",
                    md: `calc(50% - ${CARD_GAP / 2}px)`,
                  },
                  minHeight: { xs: "auto", md: 543 },
                  backgroundColor: COLORS.WHITE,
                  borderRadius: "16px",
                  overflow: "hidden",
                  border: "0.8px solid #0000001A",
                  boxShadow:
                    "0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A",
                  display: "flex",
                  flexDirection: "column",
                }}
              >
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: 240, sm: 300, md: 315 },
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={story.image}
                    alt={story.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>

                <Box
                  sx={{
                    p: { xs: 2.5, md: 3 },
                    flex: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: poppins.style.fontFamily,
                      fontWeight: 600,
                      fontSize: { xs: "16px", md: "20px" },
                      lineHeight: { xs: 1.2, md: 1.4 },
                      letterSpacing: "-0.45px",
                      color: COLORS.BLACK,
                      mb: 2,
                    }}
                  >
                    {story.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: poppins.style.fontFamily,
                      fontWeight: 400,
                      fontSize: { xs: "14px", md: "16px" },
                      lineHeight: { xs: 1.2, md: 1.4 },
                      letterSpacing: "0px",
                      color: "#5C5C5C",
                      mb: 2,
                    }}
                  >
                    {story.description}
                  </Typography>

                  <Box component="ul" sx={{ pl: 2.5, m: 0 }}>
                    {story.points.map((point, idx) => (
                      <Typography
                        key={idx}
                        component="li"
                        sx={{
                          fontFamily: poppins.style.fontFamily,
                          fontWeight: 600,
                          fontSize: { xs: "14px", md: "16px" },
                          lineHeight: { xs: 1.2, md: 1.4 },
                          letterSpacing: "0px",
                          color: "#5C5C5C",
                          mb: 0.5,
                        }}
                      >
                        {point}
                      </Typography>
                    ))}
                  </Box>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default SuccessStoriesSection;