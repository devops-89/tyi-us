"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Container, Typography, Button, Grid } from "@mui/material";
import { ArrowUpRight } from "lucide-react";

import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";

const { cta } = WEBSITE_DATA.challenge;

const ChallengeCtaSection = () => {
  return (
    <Box
      sx={{py: { xs: 4, md: 6 }, background: "linear-gradient(90deg, #D0DDF7 0%, #FFFFFF 100%)",
        position: "relative",
        overflow: { xs: "hidden", md: "visible" },
        height: { xs: "auto", md: 430 },
        display: "flex",
        alignItems: "center"}}
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
          spacing={{ xs: 4, md: 8 }}
          alignItems="center"
        >
          <Grid
            size={{ xs: 12, md: 6 }}
            sx={{
              position: "relative",
              alignSelf: "stretch",
              zIndex: 2,
              order: { xs: 2, md: 1 },
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: 200, sm: 380, md: 430 },
                display: "flex",
                alignItems: "flex-end",
                backgroundColor: "transparent",
              }}
            >
              <Image
                src={cta.image}
                alt="Join the challenge"
                fill
                style={{
                  objectFit: "contain",
                  objectPosition: "bottom center",
                }}
              />
            </Box>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }} sx={{ order: { xs: 1, md: 2 } }}>
            <Box
              sx={{
                py: { xs: 2, md: 0 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <Box
                sx={{
                  mb: 2,
                  display: "flex",
                  justifyContent: { xs: "center", md: "flex-start" },
                }}
              >
                <SparkleLabel
                  text={cta.sparkle}
                  sparklePosition="both"
                  type="diamond"
                  fontSize={{ xs:"16px", md:"18px"}}
                  sparkleSize={35}
                />
              </Box>

              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 500,
                  fontSize: { xs: "24px", sm: "30px", md: "45px" },
                  color: Colors.BLACK,
                  lineHeight: { xs: 1.25, md: 1.15 },
                  mb: 2,
                  maxWidth: 700,
                  mx: { xs: "auto", md: 0 },
                }}
              >
                {cta.title}
              </Typography>

              <Typography
                sx={{
                  fontFamily: ibmPlexSans.style.fontFamily,
                  fontWeight: 400,
                 fontSize: { xs: "14px", md: "16px" },
                  lineHeight: { xs: 1.2, md: 1.4 },
                  color: Colors.TEXT_MUTED,
                  mb: { xs: 4, md: 5 },
                  maxWidth: 600,
                  mx: { xs: "auto", md: 0 },
                }}
              >
                {cta.description}
              </Typography>

              <Button
                component={Link}
                href="https://topyounginnovators.org/submit-your-entry/"
                variant="contained"
                endIcon={<ArrowUpRight size={18} />} 
                sx={{
                  height: { xs: 40, md: 56 }, 
                  px: { xs: 2.5, md: 6 }, 
                  width: { xs: "fit-content", sm: "auto" }, 
                  borderRadius: "50px",
                  backgroundColor: Colors.SECONDARY,
                  color: Colors.WHITE,
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 600,
                  fontSize: { xs: "14px", md: "18px" }, 
                  textTransform: "none",
                  boxShadow: "0px 10px 30px rgba(227, 24, 55, 0.2)",
                  "&:hover": {
                    backgroundColor: "#c61530",
                    boxShadow: "0px 15px 40px rgba(227, 24, 55, 0.3)",
                  },
                }}
              >
                {cta.buttonText}
              </Button>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ChallengeCtaSection;