"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Collapse,
  Grid,
} from "@mui/material";
import { Minus, Plus } from "lucide-react";

import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";

const { faq } = WEBSITE_DATA.challenge;
const { faqs: faqItems } = WEBSITE_DATA.common;

const ChallengeFaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <Box
      sx={{
        py: { xs: 4, md: 12 },
        backgroundColor: Colors.WHITE,
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Grid
          container
          spacing={{ xs: 5, md: 10 }}
          alignItems="flex-start"
        >
          {/* Left Column */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box
              sx={{
                position: { xs: "relative", md: "sticky" },
                top: { md: 100 },
                textAlign: { xs: "left" , md: "left" },
              }}
            >
              <Box
                sx={{
                  mb: 2,
                  display: "flex",
                  justifyContent: {
                    xs: "flex-start",
                    md: "flex-start",
                  },
                }}
              >
                <SparkleLabel
                  text={faq.sparkle}
                  sparklePosition="both"
                  type="flower"
                  fontSize="18px"
                />
              </Box>

              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 500,
                  fontSize: { xs: "24px", sm: "30px", md: "45px" },
                  color: Colors.BLACK,
                  lineHeight: { xs: 1.25, md: 1.2 },
                  mb: 2,
                }}
              >
                {faq.title}
              </Typography>

              <Typography
                sx={{
                  fontFamily: ibmPlexSans.style.fontFamily,
                  fontSize: { xs: "16px", md: "20px" },
                  fontWeight: 400,
                  color: Colors.TEXT_MUTED,
                  lineHeight: 1.6,
                  maxWidth: { xs: "100%", md: 520 },
                  mx: { xs: "auto", md: 0 },
                }}
              >
                {faq.description}
              </Typography>
            </Box>
          </Grid>

          {/* Right Column */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={0} sx={{ mt: { xs: 0, md: -1.5 } }}>
              {faqItems.items.map((item, idx) => {
                const isOpen = openIndex === idx;

                return (
                  <Box
                    key={idx}
                    sx={{
                      borderBottom: "1px solid #E0E0E0",
                    }}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      onClick={() =>
                        setOpenIndex(isOpen ? -1 : idx)
                      }
                      sx={{
                        py: { xs: 2.5, md: 3.5 },
                        cursor: "pointer",
                        gap: 2,
                        "&:hover": {
                          color: Colors.SECONDARY,
                          "& .faq-icon": {
                            color: Colors.SECONDARY,
                          },
                        },
                        transition: "all 0.2s ease-in-out",
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: poppins.style.fontFamily,
                          fontWeight: 500,
                          fontSize: {
                            xs: "17px",
                            sm: "18px",
                            md: "22px",
                          },
                          color: Colors.BLACK,
                          lineHeight: { xs: 1.5, md: 1.4 },
                          flex: 1,
                        }}
                      >
                        {idx + 1}. {item.question}
                      </Typography>

                      <Box
                        className="faq-icon"
                        sx={{
                          color: Colors.BLACK,
                          flexShrink: 0,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          transition: "color 0.2s",
                        }}
                      >
                        {isOpen ? (
                          <Minus
                            size={20}
                            strokeWidth={2.5}
                          />
                        ) : (
                          <Plus
                            size={20}
                            strokeWidth={2.5}
                          />
                        )}
                      </Box>
                    </Stack>

                    <Collapse
                      in={isOpen}
                      timeout="auto"
                      unmountOnExit
                    >
                      <Typography
                        sx={{
                          pb: { xs: 2.5, md: 3 },
                          pr: { xs: 1, md: 0 },
                          fontFamily:
                            ibmPlexSans.style.fontFamily,
                          fontWeight: 400,
                          fontSize: {
                            xs: "15px",
                            sm: "16px",
                            md: "20px",
                          },
                          color: Colors.TEXT_MUTED,
                          lineHeight: {
                            xs: 1.7,
                            md: 1.6,
                          },
                          maxWidth: {
                            xs: "100%",
                            md: "95%",
                          },
                          marginLeft: {
                            xs: "18px",
                            md: "28px",
                          },
                        }}
                      >
                        {item.answer ||
                          "Information coming soon."}
                      </Typography>
                    </Collapse>
                  </Box>
                );
              })}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ChallengeFaqSection;