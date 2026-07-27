"use client";

import React, { useState } from "react";
import { Box, Container, Grid, Typography, Stack } from "@mui/material";
import { Download, ThumbsUp, ThumbsDown } from "lucide-react";

import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";

const TUTORIALS = [
  {
    title: "Registration Process",
    description: "Here’s a video with a comprehensive, step-by-step walkthrough of the registration process.",
    videoSrc: "https://topyounginnovators.org/uae/wp-content/uploads/2026/01/UAE-TYI-Registration-Walk-Through-Video-2025-EDIT-02_1.mp4",
  },
  {
    title: "Entry Submission Process",
    description: "Watch this video for a detailed, step-by-step guide on the entry submission process.",
    videoSrc: "https://topyounginnovators.org/uae/wp-content/uploads/2025/08/UAE-TYI-Entry-Submission-Walk-Through-Video-2025.mp4",
  },
];

const VideoTutorialSection = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // Store reactions for each video index: 'like' | 'dislike' | null
  const [reactions, setReactions] = useState<Record<number, "like" | "dislike" | null>>({});
  
  const activeVideo = TUTORIALS[activeIndex];
  const currentReaction = reactions[activeIndex] || null;

  const handleTutorialClick = (index: number) => {
    setActiveIndex(index);
  };

  const handleReaction = (type: "like" | "dislike") => {
    setReactions((prev) => ({
      ...prev,
      [activeIndex]: prev[activeIndex] === type ? null : type, // Toggle off if already active
    }));
  };

  return (
    <Box sx={{ py: { xs: 4, md: 6 }, backgroundColor: Colors.WHITE }}>
      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH }}>
        <Grid container spacing={{ xs: 6, lg: 10 }} alignItems="center">
          
          {/* Left Side: Video Card */}
          <Grid size={{ xs: 12, md: 7 }}>
            <Box
              sx={{
                backgroundColor: "#FFFFFF",
                boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.25)",
                borderRadius: "19px",
                p: { xs: 2, md: 4 },
              }}
            >
              {/* Video Player */}
              <Box
                sx={{
                  position: "relative",
                  width: "100%",
                  height: { xs: "250px", sm: "350px", md: "478px" },
                  borderRadius: "15px",
                  overflow: "hidden",
                  backgroundColor: "#000", // Fallback black background while loading
                }}
              >
                <video
                  key={activeIndex} // Force remount on switch so the browser updates the player completely
                  src={activeVideo.videoSrc}
                  controls
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "15px" }}
                />
              </Box>

              {/* Bottom Actions */}
              <Stack
                direction="row"
                alignItems="center"
                justifyContent="space-between"
                sx={{ mt: 3 }}
              >
                {/* Download Button */}
                <Box
                  component="a"
                  href={activeVideo.videoSrc}
                  download
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{ 
                    display: "flex", 
                    alignItems: "center", 
                    gap: 1, 
                    cursor: "pointer",
                    textDecoration: "none",
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: poppins.style.fontFamily,
                      fontWeight: 400,
                      fontSize: { xs: "16px", md: "20px" },
                      color: "#000000",
                      letterSpacing: "0.2px",
                      "&:hover": { color: Colors.PRIMARY }
                    }}
                  >
                    Download
                  </Typography>
                  <Download color="#000000" size={24} />
                </Box>

                {/* Like / Dislike */}
                <Stack direction="row" spacing={2}>
                  <Box
                    onClick={() => handleReaction("like")}
                    sx={{
                      width: 50,
                      height: 50,
                      backgroundColor: currentReaction === "like" ? "rgba(6, 112, 50, 0.15)" : "#F7F7F7",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      "&:hover": { backgroundColor: currentReaction === "like" ? "rgba(6, 112, 50, 0.25)" : "#E0E0E0" }
                    }}
                  >
                    <ThumbsUp size={24} color={currentReaction === "like" ? Colors.PRIMARY : "#000"} />
                  </Box>
                  <Box
                    onClick={() => handleReaction("dislike")}
                    sx={{
                      width: 50,
                      height: 50,
                      backgroundColor: currentReaction === "dislike" ? "rgba(227, 24, 55, 0.15)" : "#F7F7F7",
                      borderRadius: "50%",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      cursor: "pointer",
                      transition: "all 0.2s",
                      "&:hover": { backgroundColor: currentReaction === "dislike" ? "rgba(227, 24, 55, 0.25)" : "#E0E0E0" }
                    }}
                  >
                    <ThumbsDown size={24} color={currentReaction === "dislike" ? Colors.SECONDARY : "#000"} />
                  </Box>
                </Stack>
              </Stack>
            </Box>
          </Grid>

          {/* Right Side: Tutorial List */}
          <Grid size={{ xs: 12, md: 5 }}>
            <Box>
              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 400,
                  fontSize: "16px",
                  lineHeight: "29px",
                  letterSpacing: "4px",
                  textTransform: "uppercase",
                  color: "#272626",
                  mb: 4,
                }}
              >
                Video Tutorial
              </Typography>

              <Stack spacing={4}>
                {TUTORIALS.map((tutorial, index) => {
                  const isActive = index === activeIndex;
                  return (
                    <Box
                      key={index}
                      onClick={() => handleTutorialClick(index)}
                      sx={{
                        backgroundColor: isActive ? "rgba(6, 112, 50, 0.12)" : "#F7F7F7",
                        borderRadius: isActive ? "4px 27px 27px 4px" : "20px",
                        borderLeft: isActive ? `4px solid ${Colors.PRIMARY}` : "4px solid transparent",
                        p: { xs: 3, md: 4 },
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                        "&:hover": {
                          backgroundColor: isActive ? "rgba(6, 112, 50, 0.12)" : "rgba(6, 112, 50, 0.05)",
                        }
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: poppins.style.fontFamily,
                          fontWeight: 600,
                          fontSize: { xs: "22px", md: "28px" },
                          color: "#272626",
                          letterSpacing: "-0.4px",
                          mb: 1,
                        }}
                      >
                        {tutorial.title}
                      </Typography>
                      <Typography
                        sx={{
                          fontFamily: poppins.style.fontFamily,
                          fontWeight: 400,
                          fontSize: { xs: "14px", md: "16px" },
                          color: "#393939",
                          lineHeight: "18px",
                          letterSpacing: "0.2px",
                        }}
                      >
                        {tutorial.description}
                      </Typography>
                    </Box>
                  );
                })}
              </Stack>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default VideoTutorialSection;
