"use client";

import React from "react";
import Image from "next/image";
import { Box, Container, Typography } from "@mui/material";
import { Play } from "lucide-react";

import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";


const getEmbedUrl = (url?: string) => {
  if (!url) return "";

  let videoId = "";
  if (url.includes("watch?v=")) {
    videoId = url.split("watch?v=")[1].split("&")[0];
  } else if (url.includes("youtu.be/")) {
    videoId = url.split("youtu.be/")[1].split("?")[0];
  } else if (url.includes("embed/")) {
    return `${url}${url.includes("?") ? "&" : "?"}autoplay=1&mute=1`;
  }

 
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
  }

  
  return `${url}${url.includes("?") ? "&" : "?"}autoplay=1&mute=1`;
};

const PastWinnersVideoSection = () => {
  const { video } = WEBSITE_DATA.pastWinners;
  
  return (
    <Box sx={{py: { xs: 4, md: 6 }, backgroundColor: Colors.WHITE}}>
      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH }}>
        <Typography
          sx={{
            fontFamily: poppins.style.fontFamily,
            fontWeight: 600,
            fontSize: { xs: "14px", md: "16px" },
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
             lineHeight: { xs: 1.2, md: 1.4 }, 
            mb: 1,
          }}
        >
          {video.title}
        </Typography>
        <Typography 
          sx={{ 
            color: Colors.TEXT_MUTED, 
            textAlign: "center", 
            mb: 5,
            fontSize: { xs: "14px", md: "16px" },
            lineHeight: { xs: 1.2, md: 1.4 }, 
          }}
        >
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
          <iframe
            src={getEmbedUrl(video.image)} 
            title="Past Winners Video"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              border: 0,
              }}
          />
        </Box>
      </Container>
    </Box>
  );
};

export default PastWinnersVideoSection;