"use client";

import React from "react";
import Image from "next/image";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
import { WEBSITE_DATA } from "@/utils/website";

const WhyPatentMatterSection = () => {
  const patentMatterCards = WEBSITE_DATA.patent.PatentMatterCard;

  return (
    <Box sx={{py: { xs: 4, md: 6 }, backgroundColor: COLORS.WHITE}}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box sx={{ width: "100%", maxWidth: 1162, mx: "auto" }}>
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
                text="Patents Helps"
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
                lineHeight: {
                  xs: "32px",
                  sm: "34px",
                  md: "35px",
                  lg: "36.8px",
                },
                letterSpacing: "-0.8px",
                color: COLORS.BLACK,
              }}
            >
              Why Patent Matter
            </Typography>
          </Box>

          <Grid
            container
            columnSpacing={{ xs: 0, md: "12px", lg: "8px" }}
            rowSpacing={{ xs: 2.5, md: "20px" }}
          >
            {patentMatterCards.map((item) => (
              <Grid key={item.title} size={{ xs: 12, md: 6 }}>
                <Stack
                  direction="row"
                  alignItems="flex-start"
                  sx={{
                    width: "100%",
                    maxWidth: { xs: "100%", md: "100%", lg: 577 },
                    minHeight: 149.109,
                    backgroundColor: "#FCE8EB80",
                    border: "0.8px solid #0000001A",
                    borderRadius: "16px",
                    px: { xs: 2, md: 2.5 },
                    py: "18px",
                    gap: "20px",
                    boxSizing: "border-box",
                  }}
                >
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      backgroundColor: "#F6B7C1",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      flexShrink: 0,
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={item.Icon}
                      alt={item.title}
                      width={16}
                      height={26}
                      style={{ objectFit: "contain" }}
                    />
                  </Box>

                  <Box>
                    <Typography
                      sx={{
                        fontFamily: poppins.style.fontFamily,
                        fontWeight: 600,
                        fontSize: "20px",
                        lineHeight: "24px",
                        color: "#E31837",
                        mb: 0.75,
                      }}
                    >
                      {item.title}
                    </Typography>

                    <Typography
                      sx={{
                        fontFamily: poppins.style.fontFamily,
                        fontWeight: 400,
                        fontSize: { xs: "14px", md: "16px" },
                  lineHeight: { xs: 1.2, md: 1.4 },
                        color: "#5C5C5C",
                      }}
                    >
                      {item.desc}
                    </Typography>
                  </Box>
                </Stack>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default WhyPatentMatterSection;