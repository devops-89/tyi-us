"use client";

import React from "react";
import Image from "next/image";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";
import { ASSETS } from "@/utils/assets";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";

const { youngMinds } = WEBSITE_DATA.challenge;

const YoungMindsSection = () => {
  return (
    <Box
      sx={{py: { xs: 4, lg: 6 }, backgroundColor: COLORS.WHITE,
        position: "relative",
        overflow: "hidden"}}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          px: { xs: 2, sm: 3, lg: 4 },
        }}
      >
        <Box sx={{ mb: { xs: 4, lg: 8 } }}>
          <Box
            sx={{
              mb: 2,
              display: "flex",
              justifyContent: { xs: "center", lg: "flex-start" },
            }}
          >
            <Box
              sx={{
                maxWidth: { xs: "340px", sm: "100%" },
                textAlign: { xs: "center", lg: "left" },
              }}
            >
              <SparkleLabel
                text={youngMinds.sparkle}
                fontSize={{xs:"16px", md:"18px"}}

                sparklePosition="both"
              />
            </Box>
          </Box>

          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 500,
              fontSize: { xs: "22px", sm: "28px", lg: "45px" },
              color: COLORS.BLACK,
              lineHeight: { xs: 1.25, lg: 1.2 },
              mb: 1,
              textAlign: { xs: "center", lg: "left" },
            }}
          >
            Young Minds Can Solve the World&apos;s
            <Box component="br" sx={{ display: { xs: "none", lg: "block" } }} />
            {" "}Biggest Problems{" "}
            <Box
              component="span"
              sx={{
                display: "inline-flex",
                verticalAlign: "middle",
                ml: 1,
                width: { xs: 28, lg: 38 },
                height: { xs: 28, lg: 38 },
                position: "relative",
              }}
            >
              <Image
                src={ASSETS.IMAGES.ICON_TARGET_SIX_LINES}
                alt="icon"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Typography>

          <Typography
            sx={{
              fontFamily: ibmPlexSans.style.fontFamily,
              fontSize: { xs: "14px", lg: "16px" },
                  lineHeight: { xs: 1.2, lg: 1.4 },
              color: COLORS.TEXT_MUTED,
              
              textAlign: { xs: "center", lg: "left" },
              maxWidth: { xs: "100%", lg: "900px" },
            }}
          >
            {youngMinds.description}
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 4, lg: 10 }} alignItems="center">
          <Grid size={{ xs: 12, lg: 6 }}>
            <Box sx={{ position: "relative", pr: { xs: 0, lg: 4 } }}>
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: -12, lg: -20 },
                  right: { xs: -4, lg: 0 },
                  width: { xs: 80, lg: 110 },
                  height: { xs: 100, lg: 140 },
                  backgroundImage: `radial-gradient(${COLORS.SECONDARY} 15%, transparent 15%)`,
                  backgroundSize: { xs: "18px 18px", lg: "22px 22px" },
                  opacity: 0.8,
                  zIndex: 0,
                }}
              />

              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  height: { xs: 300, sm: 400, lg: 400},
                  width: "100%",
                  borderRadius: { xs: "80px 24px 24px 24px", lg: "140px 32px 32px 32px" },
                  overflow: "hidden",
                }}
              >
                <Image
                  src={youngMinds.images[0]}
                  alt="Young Innovator"
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Box>
            </Box>
          </Grid>

          <Grid size={{ xs: 12, lg: 6 }}>
            <Stack spacing={{ xs: 2.5, lg: 4 }}>
              {youngMinds.paragraphs?.map((text, index) => (
                <Typography
                  key={index}
                  sx={{
                    fontFamily: ibmPlexSans.style.fontFamily,
                   fontSize: { xs: "14px", lg: "16px" },
                        lineHeight: { xs: 1.2, lg: 1.4 },
                    color: "#4A4A4A",
                  fontWeight: 400,
                    textAlign: "justify",
                  }}
                >
                  {text}
                </Typography>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default YoungMindsSection;