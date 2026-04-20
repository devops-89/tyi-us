"use client";

import React, { useState } from "react";
import { Box, Container, Stack, Typography, IconButton, Collapse, Grid } from "@mui/material";
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
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: Colors.WHITE }}>
      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH }}>
        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="flex-start">
          {/* Left Column - Header Info */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box sx={{ position: "sticky", top: 100 }}>
              <Box sx={{ mb: 2 }}>
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
                  fontSize: { xs: "32px", md: "45px" },
                  color: Colors.BLACK,
                  lineHeight: 1.2,
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
                }}
              >
                {faq.description}
              </Typography>
            </Box>
          </Grid>

          {/* Right Column - Accordions */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={0} sx={{ mt: { md: -1.5 } }}>
              {faqItems.items.map((item, idx) => {
                const isOpen = openIndex === idx;
                return (
                  <Box 
                    key={idx} 
                    sx={{ 
                      borderBottom: "1px solid #E0E0E0",
                      "&::first-of-type": {
                        // Optional: top border for the first item
                      }
                    }}
                  >
                    <Stack 
                      direction="row" 
                      alignItems="center" 
                      justifyContent="space-between" 
                      onClick={() => setOpenIndex(isOpen ? -1 : idx)}
                      sx={{ 
                        py: { xs: 3, md: 3.5 }, 
                        cursor: "pointer",
                        "&:hover": { 
                          color: Colors.SECONDARY,
                          "& .faq-icon": { color: Colors.SECONDARY }
                        },
                        transition: "all 0.2s ease-in-out"
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: poppins.style.fontFamily,
                          fontWeight: 500,
                          fontSize: { xs: "18px", md: "22px" },
                          color: Colors.BLACK,
                        }}
                      >
                        {idx + 1}. {item.question}
                      </Typography>
                      <Box 
                        className="faq-icon"
                        sx={{ 
                          color: Colors.BLACK,
                          ml: 2,
                          transition: "color 0.2s"
                        }}
                      >
                        {isOpen ? <Minus size={22} strokeWidth={2.5} /> : <Plus size={22} strokeWidth={2.5} />}
                      </Box>
                    </Stack>

                    <Collapse in={isOpen} timeout="auto" unmountOnExit>
                      <Typography
                        sx={{
                          pb: 3,
                          fontFamily: ibmPlexSans.style.fontFamily,
                          fontWeight: 400,
                          fontSize: "20px",
                          color: Colors.TEXT_MUTED,
                          lineHeight: 1.6,
                          maxWidth: "95%",
                          marginLeft: { xs: "24px", md: "28px" } // Indent answer from number
                        }}
                      >
                        {item.answer || "Information coming soon."}
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

