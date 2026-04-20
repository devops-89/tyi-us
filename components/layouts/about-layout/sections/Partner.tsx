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
    <Box sx={{ backgroundColor: Colors.WHITE, py: { xs: 10, md: 12 } }}>
      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH }}>
        <Box sx={{ mb: 3 }}>
          <SparkleLabel text={partner.sparkle} />
        </Box>

        <Typography
          sx={{
            fontFamily: poppins.style.fontFamily,
            fontWeight: 700,
            fontSize: { xs: 26, md: 32 },
            color: Colors.BLACK,
            mb: 1,
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
            fontSize: 18,
            color: Colors.TEXT_MUTED,
            mb: 4,
          }}
        >
          {partner.description}
        </Typography>

        <Grid container spacing={6}>
          <Grid size={{ xs: 12, md: 5 }}>
            <Grid container spacing={3}>
              <Grid size={{ xs: 6, md: 6 }}>
                <Box sx={{ position: "relative", width: "100%", height: 288, borderRadius: 2, overflow: "hidden" }}>
                  <Image src={partner.images[0]} alt="Students" fill style={{ objectFit: "cover" }} />
                </Box>
              </Grid>
              <Grid size={{ xs: 6, md: 6 }}>
                <Box sx={{ position: "relative", width: "100%", height: 288, borderRadius: 2, overflow: "hidden" }}>
                  <Image src={partner.images[1]} alt="Students" fill style={{ objectFit: "cover" }} />
                </Box>
              </Grid>
              <Grid size={{ xs: 12 }}>
                <Box sx={{ position: "relative", width: "100%", height: 323, borderRadius: 2, overflow: "hidden" }}>
                  <Image src={partner.images[2]} alt="Group study" fill style={{ objectFit: "cover" }} />
                </Box>
              </Grid>
            </Grid>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Stack spacing={4}>
              {partner.features.map((f) => (
                <Box key={f.title}>
                  <Typography
                    sx={{
                      fontFamily: poppins.style.fontFamily,
                      fontWeight: 700,
                      fontSize: 24,
                      color: Colors.BLACK,
                      mb: 1,
                    }}
                  >
                    {f.title}
                  </Typography>
                  <Typography sx={{ fontFamily: ibmPlexSans.style.fontFamily, fontSize: 18, color: Colors.TEXT_MUTED, lineHeight: "32px" }}>
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

