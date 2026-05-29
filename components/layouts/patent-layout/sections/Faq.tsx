"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Button,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import NorthEastIcon from "@mui/icons-material/NorthEast";

import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";

const faqData = [
  {
    question: "What is Top Young Innovators?",
    answer:
      "Top Young Innovators is a global platform that encourages students to develop innovative solutions to real-world problems through STEM, creativity, and critical thinking challenges.",
  },
  {
    question: "How do I submit my idea or project?",
    answer:
      "You can submit your idea or project through the official registration or submission form provided on the website.",
  },
  {
    question: "What types of projects are accepted?",
    answer:
      "Projects related to innovation, STEM, problem-solving, creativity, technology, sustainability, and real-world impact are accepted.",
  },
  {
    question: "Is there any registration fee?",
    answer:
      "Please check the registration details on the website for the latest fee information.",
  },
  {
    question: "What benefits do participants get?",
    answer:
      "Participants get exposure, learning opportunities, expert guidance, and a chance to showcase their innovative ideas.",
  },
];

const FaqSection = () => {
  const [expanded, setExpanded] = useState<number>(0);

  return (
    <Box sx={{ backgroundColor: COLORS.WHITE, py: { xs: 7, md: 12 } }}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "35% 65%" },
            gap: { xs: 5, md: 8 },
            alignItems: "flex-start",
          }}
        >
          <Box>
            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontSize: "13px",
                fontWeight: 600,
                color: COLORS.PRIMARY,
                mb: 1.5,
              }}
            >
              ✽ FAQs ✽
            </Typography>

            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontSize: { xs: "30px", md: "38px" },
                fontWeight: 500,
                color: COLORS.BLACK,
                lineHeight: 1.25,
                mb: 2.5,
                maxWidth: 360,
              }}
            >
              Frequently Asked Questions
            </Typography>

            <Typography
              sx={{
                fontFamily: ibmPlexSans.style.fontFamily,
                fontSize: { xs: "14px", md: "16px" },
                color: COLORS.TEXT_MUTED,
                lineHeight: 1.8,
                maxWidth: 380,
                mb: 5,
              }}
            >
              We know hiring can feel overwhelming, so we’ve gathered the top
              questions in one place to make your experience smooth and
              stress-free.
            </Typography>

            <Button
              variant="outlined"
              endIcon={<NorthEastIcon sx={{ fontSize: 16 }} />}
              sx={{
                borderRadius: "50px",
                px: 3,
                py: 1.2,
                borderColor: COLORS.SECONDARY,
                color: COLORS.SECONDARY,
                fontFamily: poppins.style.fontFamily,
                fontSize: "14px",
                fontWeight: 500,
                textTransform: "none",
                "&:hover": {
                  borderColor: COLORS.PRIMARY,
                  backgroundColor: "transparent",
                  color: COLORS.PRIMARY,
                },
              }}
            >
              More FAQs
            </Button>
          </Box>

          <Box>
            {faqData.map((item, index) => {
              const isOpen = expanded === index;

              return (
                <Accordion
                  key={index}
                  expanded={isOpen}
                  onChange={() => setExpanded(isOpen ? -1 : index)}
                  disableGutters
                  elevation={0}
                  sx={{
                    backgroundColor: "transparent",
                    borderBottom: "1px solid #9E9E9E",
                    "&::before": {
                      display: "none",
                    },
                  }}
                >
                  <AccordionSummary
                    expandIcon={
                      isOpen ? (
                        <RemoveIcon sx={{ color: COLORS.BLACK }} />
                      ) : (
                        <AddIcon sx={{ color: COLORS.BLACK }} />
                      )
                    }
                    sx={{
                      px: 0,
                      py: 1.4,
                      minHeight: "auto",
                      "& .MuiAccordionSummary-content": {
                        my: 0,
                      },
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: poppins.style.fontFamily,
                        fontSize: { xs: "15px", md: "18px" },
                        fontWeight: 500,
                        color: COLORS.BLACK,
                        lineHeight: 1.4,
                      }}
                    >
                      {index + 1}. {item.question}
                    </Typography>
                  </AccordionSummary>

                  <AccordionDetails sx={{ px: 0, pt: 0, pb: 2 }}>
                    <Typography
                      sx={{
                        fontFamily: ibmPlexSans.style.fontFamily,
                        fontSize: { xs: "14px", md: "16px" },
                        color: COLORS.TEXT_MUTED,
                        lineHeight: 1.8,
                        maxWidth: 700,
                      }}
                    >
                      {item.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              );
            })}
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default FaqSection;