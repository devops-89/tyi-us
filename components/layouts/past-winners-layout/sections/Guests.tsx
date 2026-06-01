"use client";

import React from "react";
import Image from "next/image";
import { Box, Container, Grid, Stack, Typography, IconButton } from "@mui/material";
import { Globe, Instagram, Linkedin } from "lucide-react";

import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";

const PastWinnersGuestsSection = () => {
  const { guests } = WEBSITE_DATA.pastWinners;
  return (
    <Box sx={{ py: { xs: 4, md: 12 }, backgroundColor: Colors.WHITE }}>
      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH }}>
        <Stack spacing={2} alignItems="center" sx={{ mb: 6 }}>
          <Typography sx={{ fontFamily: poppins.style.fontFamily, fontWeight: 700, fontSize: { xs: 28, md: 32 }, color: Colors.BLACK }}>
            {guests.title}
          </Typography>
          <Typography sx={{ fontFamily: ibmPlexSans.style.fontFamily, fontSize: 16, color: Colors.TEXT_MUTED, textAlign: "center", maxWidth: 720 }}>
            {guests.description}
          </Typography>
        </Stack>

        <Grid container spacing={6} justifyContent="center">
          {guests.items.map((g) => (
            <Grid key={g.name} size={{ xs: 12, md: 4 }}>
              <Stack spacing={2} alignItems="flex-start">
                <Box sx={{ position: "relative", width: "100%", height: 387, borderRadius: "18px", overflow: "hidden" }}>
                  <Image src={g.image} alt={g.name} fill style={{ objectFit: "cover" }} />
                </Box>
                <Typography sx={{ fontFamily: poppins.style.fontFamily, fontWeight: 700, fontSize: 22, color: Colors.BLACK }}>
                  {g.name}
                </Typography>
                <Typography sx={{ fontFamily: ibmPlexSans.style.fontFamily, fontSize: 16, color: Colors.TEXT_MUTED }}>
                  {g.title}
                </Typography>
                <Stack direction="row" spacing={1}>
                  <IconButton size="small" sx={{ border: `1px solid ${Colors.BORDER}` }}>
                    <Linkedin size={18} />
                  </IconButton>
                  <IconButton size="small" sx={{ border: `1px solid ${Colors.BORDER}` }}>
                    <Instagram size={18} />
                  </IconButton>
                  <IconButton size="small" sx={{ border: `1px solid ${Colors.BORDER}` }}>
                    <Globe size={18} />
                  </IconButton>
                </Stack>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default PastWinnersGuestsSection;

