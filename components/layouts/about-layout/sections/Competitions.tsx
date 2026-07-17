"use client";

import React from "react";
import Image from "next/image";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { ArrowUpRight } from "lucide-react";

import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
import Link from "next/link";

const { competitions } = WEBSITE_DATA.about;

const AboutCompetitionsSection = () => {
  return (
    <Box
      sx={{py: { xs: 4, md: 6 }, backgroundColor: Colors.WHITE}}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            mb: 2,
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <SparkleLabel text={competitions.sparkle} />
        </Box>

        <Grid container spacing={{ xs: 5, md: 6 }} alignItems="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 700,
                fontSize: { xs: 24, sm: 28, md: 32 },
                color: Colors.BLACK,
                mb: 2,
                lineHeight: { xs: 1.2, md: 1.2 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {competitions.title}
            </Typography>

            <Typography
              sx={{
                fontFamily: ibmPlexSans.style.fontFamily,
               
                color: Colors.TEXT_MUTED,
                fontSize: { xs: "14px", md: "16px" },
                  lineHeight: { xs: 1.2, md: 1.4 },
                mb: { xs: 3, md: 4 },
                textAlign: { xs: "justify", md: "left" },
              }}
            >
              {competitions.description}
            </Typography>

            {}
            <Box
              sx={{
                display: "flex",
                justifyContent: "center",
                "@media (min-width: 768px)": {
                  justifyContent: "flex-start",
                }
              }}
            >
              <Button
              component={Link} 
                href="https://topyounginnovators.vercel.app/competitions" 
                variant="outlined"
                endIcon={<ArrowUpRight size={18} />}
                sx={{
                  borderRadius: "50px",
                  px: { xs: 2.5, md: 3 },
                  borderColor: Colors.SECONDARY,
                  color: Colors.SECONDARY,
                  backgroundColor: "rgba(214,14,52,0.08)",
                  textTransform: "none",
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 600,
                  
                  
                  width: "fit-content",
                  height: 40,
                  fontSize: "14px",
                  "@media (min-width: 768px)": {
                    width: "auto",
                    height: 48,
                    fontSize: "16px",
                  },

                  "&:hover": {
                    borderColor: Colors.SECONDARY,
                    backgroundColor: "rgba(214,14,52,0.12)",
                  },
                }}
              >
                {competitions.buttonText}
              </Button>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Grid container spacing={{ xs: 3, md: 4 }}>
              {competitions.items.map((item) => (
                <Grid key={item.title} size={{ xs: 12, sm: 6, md: 6 }}>
                  <Box
                    sx={{
                      position: "relative",
                      width: "100%",
                      height: { xs: 220, sm: 240, md: 260 },
                      borderRadius: 3,
                      overflow: "hidden",
                    }}
                  >
                    <Image
                      src={item.image}
                      alt={item.title}
                      fill
                      style={{ objectFit: "cover" }}
                    />

                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background:
                          "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.4) 100%)",
                      }}
                    />

                    <Typography
                      sx={{
                        position: "absolute",
                        bottom: { xs: 16, md: 20 },
                        left: { xs: 16, md: 20 },
                        right: { xs: 16, md: 20 },
                        fontFamily: poppins.style.fontFamily,
                        fontWeight: 600,
                        fontSize: { xs: 14, md: 16 },
                        color: Colors.WHITE,
                        lineHeight: 1.4,
                      }}
                    >
                      {item.title}
                    </Typography>
                  </Box>
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutCompetitionsSection;