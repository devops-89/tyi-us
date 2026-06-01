"use client";

import React from "react";
import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";
import { Play } from "lucide-react";

import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";

const PastWinnersVideoSection = () => {
  const { video } = WEBSITE_DATA.pastWinners;
  return (
    <Box sx={{ py: { xs: 4, md: 10 }, backgroundColor: Colors.WHITE }}>
      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH }}>
        <Typography
          sx={{
            fontFamily: poppins.style.fontFamily,
            fontWeight: 600,
            fontSize: 14,
            color: Colors.SECONDARY,
            textAlign: "center",
            mb: 2,
          }}
        >
          {video.sparkle}
        </Typography>

        <Typography
          sx={{
            fontFamily: poppins.style.fontFamily,
            fontWeight: 700,
            fontSize: { xs: 24, md: 32 },
            color: Colors.BLACK,
            textAlign: "center",
            mb: 1,
          }}
        >
          {video.title}
        </Typography>
        <Typography sx={{ color: Colors.TEXT_MUTED, textAlign: "center", mb: 5 }}>
          {video.description}
        </Typography>

        <Box
          sx={{
            position: "relative",
            height: { xs: 260, md: 700 },
            width: "100%",
            borderRadius: "32px",
            overflow: "hidden",
            backgroundColor: "#7c7c7c",
          }}
        >
          <Image src={video.image} alt="Event recap video" fill style={{ objectFit: "cover" }} />
          <Box sx={{ position: "absolute", inset: 0, backgroundColor: "rgba(0,0,0,0.3)" }} />

          <Box
            sx={{
              position: "absolute",
              left: "50%",
              top: "50%",
              transform: "translate(-50%, -50%)",
              display: "flex",
              alignItems: "center",
              gap: 2,
              color: Colors.WHITE,
            }}
          >
            <Box
              sx={{
                width: 60,
                height: 60,
                borderRadius: "30px",
                border: "2px solid #fff",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Play size={18} />
            </Box>
            <Box>
              <Typography sx={{ fontFamily: poppins.style.fontFamily, fontWeight: 700, fontSize: 14, lineHeight: "24px" }}>
                {video.watchLabel}
              </Typography>
              <Typography sx={{ fontFamily: poppins.style.fontFamily, fontSize: 14, lineHeight: "24px" }}>
                {video.watchDesc}
              </Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default PastWinnersVideoSection;

