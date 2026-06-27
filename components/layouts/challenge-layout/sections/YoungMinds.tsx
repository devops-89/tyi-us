"use client";

import React from "react";
import Image from "next/image";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";
import { ASSETS } from "@/utils/assets";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";

const { youngMinds } = WEBSITE_DATA.challenge;

const YoungMindsSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 4, md: 12 },
        backgroundColor: Colors.WHITE,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box sx={{ mb: { xs: 4, md: 8 } }}>
          <Box
            sx={{
              mb: 2,
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <Box
              sx={{
                maxWidth: { xs: "340px", sm: "100%" },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              <SparkleLabel
                text={youngMinds.sparkle}
                fontSize= "18px"
                sparklePosition="both"
                sparkleSize={15}
              />
            </Box>
          </Box>

          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 500,
              fontSize: { xs: "22px", sm: "28px", md: "45px" },
              color: Colors.BLACK,
              lineHeight: { xs: 1.25, md: 1.2 },
              mb: 1,
              textAlign: { xs: "center", md: "left" },
            }}
          >
            Young Minds Can Solve the World&apos;s
            <Box component="br" sx={{ display: { xs: "none", md: "block" } }} />
            {" "}Biggest Problems{" "}
            <Box
              component="span"
              sx={{
                display: "inline-flex",
                verticalAlign: "middle",
                ml: 1,
                width: { xs: 28, md: 38 },
                height: { xs: 28, md: 38 },
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
              fontSize: { xs: "16px", md: "20px" },
              color: Colors.TEXT_MUTED,
              lineHeight: 1.6,
              textAlign: { xs: "center", md: "left" },
              maxWidth: { xs: "100%", md: "900px" },
            }}
          >
            {youngMinds.description}
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 4, md: 10 }} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: "relative", pr: { xs: 0, md: 4 } }}>
              <Box
                sx={{
                  position: "absolute",
                  top: { xs: -12, md: -20 },
                  right: { xs: -4, md: 0 },
                  width: { xs: 80, md: 110 },
                  height: { xs: 100, md: 140 },
                  backgroundImage: `radial-gradient(${Colors.SECONDARY} 15%, transparent 15%)`,
                  backgroundSize: { xs: "18px 18px", md: "22px 22px" },
                  opacity: 0.8,
                  zIndex: 0,
                }}
              />

              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  height: { xs: 300, sm: 400, md: 550 },
                  width: "100%",
                  borderRadius: { xs: "20px", md: 0 },
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

          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={{ xs: 2.5, md: 4 }}>
              {youngMinds.paragraphs?.map((text, index) => (
                <Typography
                  key={index}
                  sx={{
                    fontFamily: ibmPlexSans.style.fontFamily,
                    fontSize: { xs: "16px", md: "20px" },
                    color: "#4A4A4A",
                    lineHeight: { xs: 1.7, md: 1.6 },
                    fontWeight: 400,
                    textAlign: { xs: "left", md: "justify" },
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