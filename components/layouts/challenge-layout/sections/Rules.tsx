"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Container, Stack, Typography, Button, Grid } from "@mui/material";
import { ArrowUpRight } from "lucide-react";

import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";

const { rules: rulesData } = WEBSITE_DATA.challenge;

const RulesSection = () => {
  return (
    <Box sx={{py: { xs: 4, md: 6 }, backgroundColor: Colors.WHITE}}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box sx={{ maxWidth: 1454, mx: "auto" }}>
          <Box sx={{ mb: { xs: 4, md: 6 }, textAlign: { xs: "center", md: "left" } }}>
            <Box
              sx={{
                mb: 2,
                display: "flex",
                justifyContent: { xs: "center", md: "flex-start" },
              }}
            >
              <SparkleLabel
                text={rulesData.sparkle}
                sparklePosition="both"
                type="flower"
                fontSize={{ xs:"16px", md:"18px"}}
 
              />
            </Box>

            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 500,
                fontSize: { xs: "24px", sm: "30px", md: "38px", lg: "45px" }, 
                color: Colors.BLACK,
                lineHeight: { xs: 1.2, md: 1.1 },
                mb: 1.5,
              }}
            >
              {rulesData.title}
            </Typography>

            <Typography
              sx={{
                fontFamily: ibmPlexSans.style.fontFamily,
                fontSize: { xs: "14px", md: "16px" },
                  lineHeight: { xs: 1.2, md: 1.4 },
                color: Colors.TEXT_MUTED,
               
                maxWidth: 800,
                mx: { xs: "auto", md: 0 },
              }}
            >
              {rulesData.description}
            </Typography>
          </Box>

          <Grid container spacing={{ xs: 6, md: 8, lg: 10 }} alignItems="flex-start">
            <Grid size={{ xs: 12, md: 6 }}>
              <Box sx={{ position: "relative", pb: { xs: 6, md: 0 } }}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: 320, sm: 420, md: 600, lg: 575 }, 
                    borderRadius: { xs: "22px", md: "30px" },
                    overflow: "hidden",
                    boxShadow: "0px 10px 30px rgba(0,0,0,0.05)",
                  }}
                >
                  <Image
                    src={rulesData.image}
                    alt="Rules"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>

                <Box
                  sx={{
                    position: "absolute",
                    bottom: { xs: 0, md: -60, lg: -80 }, 
                    right: { xs: 16, md: -30, lg: -50 }, 
                    width: { xs: 150, sm: 180, md: 220 },
                    height: { xs: 150, sm: 190, md: 240 },
                    borderRadius: { xs: "22px", md: "30px" },
                    backgroundColor: Colors.WHITE,
                    boxShadow: "0px 15px 50px rgba(0,0,0,0.12)",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    p: { xs: 2, md: 3 },
                    zIndex: 2,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: poppins.style.fontFamily,
                      fontWeight: 800,
                      fontSize: { xs: 28, sm: 32, md: 40 },
                      lineHeight: 1.35,
                      textAlign: "center",
                      display: "flex",
                      flexDirection: "column",
                    }}
                  >
                    <Box component="span" sx={{ color: Colors.SECONDARY }}>
                      Learn.
                    </Box>
                    <Box component="span" sx={{ color: "#A32448" }}>
                      Grow.
                    </Box>
                    <Box component="span" sx={{ color: "#E31837" }}>
                      Lead.
                    </Box>
                  </Typography>
                </Box>
              </Box>
            </Grid>

            <Grid size={{ xs: 12, md: 6 }}>
              <Stack spacing={{ xs: 3, md: 3, lg: 4 }} sx={{ pt: { xs: 0, md: 2 } }}> {}
                {rulesData.rules.map((ruleText: string, idx: number) => {
                  const parts = ruleText.split("contact us");

                  return (
                    <Stack
                      key={idx}
                      direction="row"
                      spacing={{ xs: 1.5, md: 2.5 }}
                      alignItems="flex-start"
                    >
                      <Box
                        sx={{
                          flexShrink: 0,
                          width: { xs: 24, md: 28 },
                          height: { xs: 24, md: 28 },
                          borderRadius: "50%",
                          backgroundColor: Colors.SECONDARY,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          mt: 0.5,
                        }}
                      >
                        <svg
                          width="14"
                          height="11"
                          viewBox="0 0 14 11"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                          style={{ display: "block" }}
                        >
                          <path
                            d="M1 5.5L4.5 9L12.5 1"
                            stroke="white"
                            strokeWidth="2.5"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Box>

                      <Typography
                        sx={{
                          fontFamily: ibmPlexSans.style.fontFamily,
                          fontSize: { xs: "14px", md: "16px" },
                           lineHeight: { xs: 1.2, md: 1.4 },
                          color: "#333333",
                         
                          textAlign: { xs: "left", md: "justify" },
                        }}
                      >
                        {parts.length > 1 ? (
                          <>
                            {parts[0]}
                            <Link
                              href="/contact"
                              style={{
                                color: Colors.SECONDARY,
                                fontWeight: 500,
                                textDecoration: "none",
                              }}
                            >
                              contact us
                            </Link>
                            {parts[1]}
                          </>
                        ) : (
                          ruleText
                        )}
                      </Typography>
                    </Stack>
                  );
                })}

                <Box sx={{ pt: { xs: 1, md: 4 }, textAlign: { xs: "center", md: "left" } }}>
                  <Button
                    component={Link}
                    href="#"
                    variant="contained"
                    endIcon={<ArrowUpRight size={18} />}
                    sx={{
                      height: { xs: 40, md: 48, lg: 56 }, 
                      px: { xs: 2.5, md: 4, lg: 5 }, 
                      width: { xs: "fit-content", sm: "auto" },
                      borderRadius: "50px",
                      backgroundColor: Colors.SECONDARY,
                      fontFamily: ibmPlexSans.style.fontFamily,
                      fontWeight: 600,
                      fontSize: { xs: 14, md: 16, lg: 18 }, 
                      textTransform: "none",
                       boxShadow: Colors.BUTTON_SHADOW,
                    
                      "&:hover": {
                        backgroundColor: Colors.PRIMARY,
                          boxShadow: "0 4px 14px rgba(227, 24, 55, 0.3)", 
                      },
                    }}
                  >
                    {rulesData.buttonText}
                  </Button>
                </Box>
              </Stack>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default RulesSection;