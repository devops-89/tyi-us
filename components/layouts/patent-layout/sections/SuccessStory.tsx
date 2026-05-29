"use client";

import React from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Stack,
  Typography,
  IconButton,
} from "@mui/material";
import { ChevronLeft, ChevronRight } from "lucide-react";

import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
import { ASSETS } from "@/utils/assets";

const successStories = [
  {
    image: ASSETS.IMAGES.HERO2,
    title: "Madhalasa Iyer: From Teen Researcher to Global Problem Solver",
    description:
      "From winning global writing awards to publishing scientific research, Madhalasa Iyer is proof that compassion and curiosity can fuel real-world impact",
    points: [
      "TEDx and EarthX Speaker",
      "Accepted to Princeton University (Ivy League)",
      "Author of Award-Winning Children's Book Motley",
      "2 US Patents Granted",
    ],
  },
  {
    image: ASSETS.IMAGES.HERO3,
    title: "Madhalasa Iyer: From Teen Researcher to Global Problem Solver",
    description:
      "From winning global writing awards to publishing scientific research, Madhalasa Iyer is proof that compassion and curiosity can fuel real-world impact",
    points: [
      "TEDx and EarthX Speaker",
      "Accepted to Princeton University (Ivy League)",
      "Author of Award-Winning Children's Book Motley",
      "2 US Patents Granted",
    ],
  },
];

const SuccessStoriesSection = () => {
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
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
          sx={{ mb: { xs: 4, md: 6 } }}
        >
          <Box>
            <SparkleLabel
              text="Real Stories"
              fontSize={14}
              sparklePosition="both"
              color={COLORS.PRIMARY}
            />

            <Typography
              sx={{
                mt: 1,
                fontFamily: poppins.style.fontFamily,
                fontWeight: 500,
                fontSize: { xs: "30px", md: "48px" },
                color: COLORS.BLACK,
                lineHeight: 1.2,
              }}
            >
              Success Stories
            </Typography>
          </Box>

          <Stack
            direction="row"
            spacing={1}
            sx={{
              display: { xs: "none", lg: "flex" },
            }}
          >
            <IconButton
              sx={{
                width: 40,
                height: 40,
                border: "1px solid #E5E5E5",
              }}
            >
              <ChevronLeft size={18} />
            </IconButton>

            <IconButton
              sx={{
                width: 40,
                height: 40,
                border: "1px solid #E5E5E5",
              }}
            >
              <ChevronRight size={18} />
            </IconButton>
          </Stack>
        </Stack>

        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: "1fr",
            gap: { xs: 2, md: 3 },

            "@media (min-width:768px)": {
              gridTemplateColumns: "repeat(2, 1fr)",
            },

            "@media (min-width:1200px)": {
              gridTemplateColumns: "repeat(4, 1fr)",
            },
          }}
        >
          {successStories.map((story, index) => (
            <Box
              key={index}
              sx={{
                width: "100%",
                backgroundColor: "#F6F6F6",
                borderRadius: "14px",
                overflow: "hidden",
              }}
            >
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: {
                    xs: 220,
                    sm: 260,
                    md: 280,
                  },
                }}
              >
                <Image
                  src={story.image}
                  alt={story.title}
                  fill
                  style={{
                    objectFit: "cover",
                  }}
                />
              </Box>

              <Box
                sx={{
                  p: {
                    xs: 2.5,
                    md: 3,
                  },
                }}
              >
                <Typography
                  sx={{
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 700,
                    fontSize: {
                      xs: "18px",
                      md: "20px",
                    },
                    color: COLORS.BLACK,
                    lineHeight: 1.35,
                    mb: 1,
                  }}
                >
                  {story.title}
                </Typography>

                <Typography
                  sx={{
                    fontFamily: ibmPlexSans.style.fontFamily,
                    fontSize: {
                      xs: "14px",
                      md: "15px",
                    },
                    color: COLORS.TEXT_MUTED,
                    lineHeight: 1.7,
                    mb: 3,
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
                        fontFamily: ibmPlexSans.style.fontFamily,
                        fontSize: {
                          xs: "14px",
                          md: "15px",
                        },
                        fontWeight: 600,
                        color: "#555",
                        lineHeight: 1.8,
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
      </Container>
    </Box>
  );
};

export default SuccessStoriesSection;