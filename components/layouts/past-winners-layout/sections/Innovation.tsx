"use client";

import React from "react";
import Image from "next/image";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";

const { innovation } = WEBSITE_DATA.pastWinners;

const PastWinnersInnovationSection = () => {
  return (
    <Box sx={{ py: { xs: 10, md: 12 }, backgroundColor: Colors.WHITE }}>
      <Container maxWidth={false} sx={{ maxWidth: 1920 }}>
        <Box sx={{ maxWidth: 1454, mx: "auto" }}>
          <Box sx={{ mb: 2 }}>
            <SparkleLabel text={innovation.sparkle} />
          </Box>

          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 700,
              fontSize: { xs: 30, md: 40 },
              color: Colors.BLACK,
              lineHeight: 1.1,
              mb: 1,
            }}
          >
            {innovation.title}{" "}
            <Box component="span" sx={{ color: Colors.SECONDARY }}>
              {innovation.titleAccent}
            </Box>
          </Typography>

          <Typography
            sx={{
              fontFamily: ibmPlexSans.style.fontFamily,
              fontSize: { xs: 16, md: 18 },
              color: Colors.TEXT_MUTED,
              mb: 6,
            }}
          >
            {innovation.description}
          </Typography>

          {innovation.cards.map((card, idx) => (
            <Grid key={idx} container spacing={6} alignItems="center" sx={{ mt: idx === 0 ? 0 : 2 }}>
              <Grid size={{ xs: 12, md: idx === 0 ? 5 : 7 }} order={{ xs: 1, md: idx === 0 ? 1 : 2 }}>
                <Box sx={{ position: "relative", height: 403, width: "100%", borderRadius: "32px", overflow: "hidden", backgroundColor: "#EDEDed" }}>
                  <Image src={card.image} alt={card.title} fill style={{ objectFit: "cover" }} />
                </Box>
              </Grid>
              <Grid size={{ xs: 12, md: idx === 0 ? 7 : 5 }} order={{ xs: 2, md: idx === 0 ? 2 : 1 }}>
                <Typography sx={{ fontFamily: poppins.style.fontFamily, fontWeight: 600, fontSize: 22, color: Colors.BLACK, mb: 2 }}>
                  {card.title}
                </Typography>
                <Stack spacing={2}>
                  <Typography sx={{ fontFamily: ibmPlexSans.style.fontFamily, fontSize: 18, color: Colors.TEXT_MUTED, textAlign: "justify" }}>
                    {card.desc1}
                  </Typography>
                  <Typography sx={{ fontFamily: ibmPlexSans.style.fontFamily, fontSize: 18, color: Colors.TEXT_MUTED, textAlign: "justify" }}>
                    {card.desc2}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          ))}

          <Stack direction="row" justifyContent="center" spacing={{ xs: 6, md: 12 }} sx={{ mt: 8 }}>
            {innovation.stats.map((m) => (
              <Stack key={m.label} spacing={1} alignItems="center">
                <Typography sx={{ fontFamily: poppins.style.fontFamily, fontWeight: 700, fontSize: 44, color: Colors.BLACK }}>
                  {m.value}
                </Typography>
                <Typography sx={{ fontFamily: ibmPlexSans.style.fontFamily, fontWeight: 600, fontSize: 18, color: Colors.TEXT_MUTED }}>
                  {m.label}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default PastWinnersInnovationSection;

