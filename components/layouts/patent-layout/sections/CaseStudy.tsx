"use client";

import React from "react";
import Image from "next/image";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
import { WEBSITE_DATA } from "@/utils/website";

const CaseStudiesSection = () => {
  const caseStudies = WEBSITE_DATA.patent.CaseStudiesData;

  return (
    <Box sx={{py: { xs: 4, md: 6 }, backgroundColor: COLORS.WHITE}}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 1208, mx: "auto" }}>
          <Box
            sx={{
              mb: { xs: 4, md: 7 },
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
                mb: 2,
              }}
            >
              <SparkleLabel
                text={caseStudies.sparkle}
                 fontSize={{sx:"16px", md:"18px"}}
              sparkleSize={35}
               type="blue-star"
                sparklePosition="both"
               
              />
            </Box>

            <Typography
              sx={{
                fontFamily: "PolySans Trial, sans-serif",
                fontWeight: 400,
                fontSize: { xs: "24px", sm: "30px", md: "45px" },
                lineHeight: { xs: "38px", sm: "42px", md: "48px" },
                letterSpacing: "-0.01em",
                textTransform: "capitalize",
                color: COLORS.BLACK,
              }}
            >
              {caseStudies.title}
            </Typography>
          </Box>

          <Grid
            container
            spacing={{ xs: 3, md: 2, lg: 3 }}
            justifyContent="center"
          >
            {caseStudies.items.map((item, index) => (
              <Grid key={index} size={{ xs: 12, sm: 6, md: 3 }}>
                <Box
                  sx={{
                    width: "100%",
                    maxWidth: {
                      xs: "100%",
                      sm: 380,
                      md: 290,
                    },
                    minHeight: 411.14,
                    backgroundColor: COLORS.WHITE,
                    borderRadius: "16px",
                    border: "0.8px solid #0000001A",
                    overflow: "hidden",
                    boxShadow:
                      "0px 1px 2px -1px #0000001A, 0px 1px 3px 0px #0000001A",
                    display: "flex",
                    flexDirection: "column",
                    mx: "auto",
                  }}
                >
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: {
                        xs: 220,
                        sm: 250,
                        md: 180,
                      },
                      backgroundColor: COLORS.WHITE,
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      unoptimized
                      sizes="(max-width: 600px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      style={{
                        objectFit: "contain",
                        objectPosition: "center center",
                      }}
                    />
                  </Box>

                  <Box
                    sx={{
                      px: { xs: "20px", md: "18px", lg: "24px" },
                      pt: "20px",
                      pb: "18.14px",
                      display: "flex",
                      flexDirection: "column",
                      flex: 1,
                      gap: "12.8px",
                    }}
                  >
                    <Typography
                      sx={{
                        fontFamily: poppins.style.fontFamily,
                        fontWeight: 600,
                        fontSize: { xs: "18px", md: "17px", lg: "18px" },
                        lineHeight: { xs: "23.4px", md: "22px", lg: "23.4px" },
                        letterSpacing: "-0.45px",
                        color: "#171717",
                        minHeight: "47px",
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Box
                      sx={{
                        backgroundColor: "#FFF5E6",
                        border: "0.8px solid #F9A51E4D",
                        borderRadius: "14px",
                        px: "12.8px",
                        pt: "12.8px",
                        pb: "12px",
                        minHeight: "103px",
                      }}
                    >
                      {item.awardImage && (
                        <Box
                          sx={{
                            mb: 1,
                            width: "100%",
                            display: "flex",
                            justifyContent: "flex-start",
                            alignItems: "center",
                          }}
                        >
                          <Image
                            src={item.awardImage}
                            alt="Award"
                            width={215}
                            height={20}
                            style={{
                              display: "block",
                              objectFit: "contain",
                              maxWidth: "30%",
                              height: "auto",
                            }}
                          />
                        </Box>
                      )}

                      <Typography
                        sx={{
                          fontFamily: poppins.style.fontFamily,
                          fontWeight: 400,
                          fontSize: "13.5px",
                          lineHeight: "19.25px",
                          color: "#262626",
                        }}
                      >
                        {item.award}
                      </Typography>
                    </Box>

                    <Stack
                      direction="row"
                      justifyContent="space-between"
                      sx={{ mt: "auto" }}
                    >
                      <Typography
                        component="a"
                        href={item.patentLink}
                        target="_blank"
                        sx={{
                          fontFamily: poppins.style.fontFamily,
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "20px",
                          color: COLORS.PRIMARY,
                          textDecoration: "none",
                        }}
                      >
                        Google
                        <br />
                        Patents ↗
                      </Typography>

                      <Typography
                        component="a"
                        href={item.certificateLink}
                        target="_blank"
                        sx={{
                          fontFamily: poppins.style.fontFamily,
                          fontWeight: 400,
                          fontSize: "14px",
                          lineHeight: "20px",
                          color: COLORS.PRIMARY,
                          textDecoration: "none",
                        }}
                      >
                        Patent
                        <br />
                        Certificate ↗
                      </Typography>
                    </Stack>
                  </Box>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default CaseStudiesSection;