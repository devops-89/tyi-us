"use client";

import React from "react";
import Image from "next/image";
import { Box, Container, Grid, Stack, Typography, Button } from "@mui/material";
import { ArrowUpRight } from "lucide-react";

import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";

const { competitions } = WEBSITE_DATA.about;

const AboutCompetitionsSection = () => {
  return (
    <Box sx={{ backgroundColor: Colors.WHITE, py: { xs: 10, md: 12 } }}>
      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH }}>
        <Box sx={{ mb: 2 }}>
          <SparkleLabel text={competitions.sparkle} />
        </Box>

        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 700,
                fontSize: { xs: 26, md: 32 },
                color: Colors.BLACK,
                mb: 2,
              }}
            >
              {competitions.title}
            </Typography>
            <Typography
              sx={{
                fontFamily: ibmPlexSans.style.fontFamily,
                fontSize: 18,
                color: Colors.TEXT_MUTED,
                lineHeight: "32px",
                mb: 4,
              }}
            >
              {competitions.description}
            </Typography>

            <Button
              variant="outlined"
              endIcon={<ArrowUpRight size={18} />}
              sx={{
                borderRadius: "50px",
                px: 3,
                py: 1.6,
                borderColor: Colors.SECONDARY,
                color: Colors.SECONDARY,
                backgroundColor: "rgba(214,14,52,0.08)",
                textTransform: "none",
                fontFamily: poppins.style.fontFamily,
                fontWeight: 600,
                "&:hover": {
                  borderColor: Colors.SECONDARY,
                  backgroundColor: "rgba(214,14,52,0.12)",
                },
              }}
            >
              {competitions.buttonText}
            </Button>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Grid container spacing={4}>
              {competitions.items.map((item) => (
                <Grid key={item.title} size={{ xs: 12, md: 6 }}>
                  <Box sx={{ position: "relative", width: "100%", height: 260, borderRadius: 3, overflow: "hidden" }}>
                    <Image src={item.image} alt={item.title} fill style={{ objectFit: "cover" }} />
                    <Box
                      sx={{
                        position: "absolute",
                        inset: 0,
                        background: "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.4) 100%)",
                      }}
                    />
                    <Typography
                      sx={{
                        position: "absolute",
                        bottom: 20,
                        left: 20,
                        right: 20,
                        fontFamily: poppins.style.fontFamily,
                        fontWeight: 600,
                        fontSize: 16,
                        color: Colors.WHITE,
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

