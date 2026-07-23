"use client";

import React from "react";
import Image from "next/image";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";

const { winner } = WEBSITE_DATA.pastWinners;

const PastWinnersWinnerSection = () => {
  return (
    <Box sx={{py: { xs: 4, md: 6 }, backgroundColor: COLORS.WHITE}}>
      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH }}>
        <Stack spacing={2} alignItems="center" sx={{ mb: 4 }}>
          <Typography sx={{ fontFamily: poppins.style.fontFamily, fontWeight: 700, fontSize: { xs: 22, md: 28 }, color: COLORS.BLACK, textAlign: "center" }}>
            {winner.title}
            <br />
            <Box component="span" sx={{ color: COLORS.SECONDARY }}>
              {winner.winnerName}
            </Box>
          </Typography>
          <Typography sx={{ fontFamily: ibmPlexSans.style.fontFamily, fontSize:{ xs: 14, md: 16 }, color: COLORS.TEXT_MUTED, textAlign:{xs:"justify", md:"center"}, maxWidth: 900 }}>
            {winner.description}
          </Typography>
        </Stack>

        <Grid container spacing={6} alignItems="center">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography sx={{ fontFamily: ibmPlexSans.style.fontFamily, fontSize:{ xs: 14, md: 16 }, color: COLORS.TEXT_MUTED, textAlign:{xs:"justify", md:"center"}, lineHeight: 1.4 }}>
              {winner.details}
            </Typography>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: "relative", width: "100%", height: 394, borderRadius: "20px", overflow: "hidden" }}>
              <Image src={winner.image} alt="Winner" fill style={{ objectFit: "cover" }} />
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default PastWinnersWinnerSection;

