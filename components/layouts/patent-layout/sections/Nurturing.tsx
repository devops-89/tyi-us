"use client";

import React from "react";
import {
  Box,
  Container,
  Typography,
} from "@mui/material";

import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
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

  // If a standard YouTube ID was found, format it as an embed link with autoplay and mute
  if (videoId) {
    return `https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1`;
  }

  // Fallback for non-YouTube videos (e.g. Vimeo, raw mp4)
  return `${url}${url.includes("?") ? "&" : "?"}autoplay=1&mute=1`;
};

const NurturingYoungInventorsSection = () => {
  const data = WEBSITE_DATA.patent.Nurturing;

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
            width: "100%",
            maxWidth: 1160,
            mx: "auto",
          }}
        >
          <Box
            sx={{
              textAlign: {
                xs: "center",
                sm: "center",
                md: "center",
                lg: "left",
              },
            }}
          >
            <Box
              sx={{
                mb: 2,
                display: "flex",
                justifyContent: {
                  xs: "center",
                  sm: "center",
                  md: "flex-start",
                  lg: "flex-start",
                },
              }}
            >
              <SparkleLabel
                text={data.sparkle}
                fontSize={{ xs:"16px", md:"18px"}}
              sparkleSize={35}
               type="blue-star"
                sparklePosition="both"
               
              />
            </Box>

            <Typography
              sx={{
                fontFamily: "PolySans Trial, sans-serif",
                fontWeight: 400,
             fontSize: { xs: "24px", sm: "30px", md: "45px" },
                lineHeight: {
                  xs: 1.25,
                  sm: 1.4,
                  md: 1.6,
                },
                letterSpacing: "-0.01em",
                textTransform: "capitalize",
                color: Colors.BLACK,
                mb: { xs: 3, md: 4 },
                textAlign: {
                  xs: "center",
                  sm: "center",
                  md: "left",
                  lg: "left",
                },
              }}
            >
              {data.title}
            </Typography>
          </Box>

          <Box
            component="ul"
            sx={{
              pl: { xs: 2.5, md: 3 },
              mb: { xs: 5, md: 7 },
              maxWidth: 1160,
            }}
          >
            {data.items.map((item, index) => (
              <Typography
                key={index}
                component="li"
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 400,
                  fontSize: { xs: "14px", md: "16px" },
                  lineHeight: { xs: 1.6, md: 1.4 },
                  letterSpacing: "-0.02em",
                  textTransform: "capitalize",
                  color: Colors.TEXT_MUTED,
                  mb: 0.6,
                }}
              >
                {item.prefix}

                <Box
                  component="span"
                  sx={{
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 600,
                    fontSize: { xs: "14px", md: "16px" },
                  lineHeight: { xs: 1.6, md: 1.4 },
                    letterSpacing: "-0.02em",
                    textTransform: "capitalize",
                    color: Colors.BLACK,
                  }}
                >
                  {item.highlight}
                </Box>

                {item.suffix}
              </Typography>
            ))}
          </Box>

          {}
          <Box
            sx={{
              position: "relative",
              width: "100%",
              maxWidth: 1160,
              height: { xs: 230, sm: 420, md: 560, lg: 658 },
              backgroundColor: Colors.BLACK,
              borderRadius: "29px",
              mx: "auto",
              overflow: "hidden",
            }}
          >
            <iframe
              src={getEmbedUrl(data.videoUrl)}
              title="Nurturing Young Inventors Video"
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
        </Box>
      </Container>
    </Box>
  );
};

export default NurturingYoungInventorsSection;