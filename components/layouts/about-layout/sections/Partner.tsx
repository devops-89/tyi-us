"use client";

import React from "react";
import Image from "next/image";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";

const { partner } = WEBSITE_DATA.about;

const AboutPartnerSection = () => {
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
            mb: 3,
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <SparkleLabel text={partner.sparkle} fontSize={{sx:"16px", md:"18px"}} />
        </Box>

        <Typography
          sx={{
            fontFamily: poppins.style.fontFamily,
            fontWeight: 700,
            fontSize: { xs: 24, sm: 28, md: 32 },
            color: Colors.BLACK,
            mb: 1,
            lineHeight: { xs: 1.3, md: 1.2 },
            textAlign: "left",
          }}
        >
          {partner.titlePre}
          <Box component="span" sx={{ color: Colors.SECONDARY }}>
            {partner.titleAccent}
          </Box>
        </Typography>

        <Typography
          sx={{
            fontFamily: ibmPlexSans.style.fontFamily,
            fontSize: { xs: "14px", md: "16px" },
                  lineHeight: { xs: 1.2, md: 1.4 },
            color: Colors.TEXT_MUTED,
            mb: { xs: 4, md: 4 },
           
            textAlign: { xs: "justify", md: "left" },
          }}
        >
          {partner.description}
        </Typography>

        <Grid container spacing={{ xs: 4, md: 6 }}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Grid container spacing={{ xs: 2, md: 3 }}>
              <Grid size={{ xs: 6, md: 6 }}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: 180, sm: 240, md: 250 },
                    borderRadius: 2,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={partner.images[0]}
                    alt="Students"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Grid>

              <Grid size={{ xs: 6, md: 6 }}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: 180, sm: 240, md: 250 },
                    borderRadius: 2,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={partner.images[1]}
                    alt="Students"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Grid>

              <Grid size={{ xs: 12 }}>
                <Box
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: 220, sm: 250, md: 280 },
                    borderRadius: 2,
                    overflow: "hidden",
                  }}
                >
                  <Image
                    src={partner.images[2]}
                    alt="Group study"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={{ xs: 3, md: 4 }}>
              {partner.features.map((f) => (
                <Box key={f.title}>
                  <Typography
                    sx={{
                      fontFamily: poppins.style.fontFamily,
                      fontWeight: 700,
                      fontSize: { xs: 18, sm: 22, md: 24 },
                      color: Colors.BLACK,
                      mb: 1,
                      lineHeight: { xs: 1.3, md: 1.2 },
                      textAlign: { xs: "justify", md: "left" },
                    }}
                  >
                    {f.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: ibmPlexSans.style.fontFamily,
                    fontSize: { xs: "14px", md: "16px" },
                  lineHeight: { xs: 1.2, md: 1.4 },
                      color: Colors.TEXT_MUTED,
                    
                      textAlign: { xs: "justify", md: "left" },
                    }}
                  >
                    {f.desc}
                  </Typography>
                </Box>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutPartnerSection;