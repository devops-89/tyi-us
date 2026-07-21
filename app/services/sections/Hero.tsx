"use client";

import React from "react";
import { Box, Container, Typography, Stack, IconButton } from "@mui/material";
import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import Image from "next/image";
import { Play } from "lucide-react";

const Hero = () => {
  return (
    <Box
      sx={{
        pt: { xs: 8, md: 12 },
        pb: { xs: 8, md: 10 },
        backgroundColor: Colors.WHITE,
        position: "relative",
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH }}>
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={4}
          alignItems="flex-start"
        >
          <Box sx={{ flex: 1, pt: 4 }}>
            <Stack
              direction="row"
              alignItems="center"
              spacing={1}
              sx={{ mb: 3 }}
            >
              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 500,
                  fontSize: "16px",
                  color: "#666",
                  letterSpacing: "0.5px",
                }}
              >
                Welcome to the Grand Finale of
              </Typography>
              <Box
                component="span"
                sx={{
                  color: Colors.SECONDARY,
                  fontSize: "24px",
                  lineHeight: 1,
                }}
              >
                ✦
              </Box>
            </Stack>

            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 600,
                fontSize: "28px",
                color: Colors.BLACK,
                mb: 1,
              }}
            >
              America's
            </Typography>

            <Box sx={{ mb: 1 }}>
              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 800,
                  fontSize: { xs: "32px", md: "48px" },
                  backgroundColor: Colors.BLACK,
                  color: Colors.WHITE,
                  display: "inline-block",
                  px: 3,
                  py: 1,
                  borderRadius: "15px 15px 15px 0",
                  lineHeight: 1,
                }}
              >
                Top Young
              </Typography>
            </Box>

            <Box sx={{ mb: 6 }}>
              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 700,
                  fontSize: { xs: "32px", md: "42px" },
                  backgroundColor: Colors.BLACK,
                  color: Colors.WHITE,
                  display: "inline-block",
                  px: 3,
                  py: 1,
                  borderRadius: "0 15px 15px 15px",
                  lineHeight: 1,
                }}
              >
                Innovators 2025
              </Typography>
            </Box>

            <Typography
              variant="body1"
              sx={{
                fontFamily: ibmPlexSans.style.fontFamily,
                fontSize: "15px",
                color: "#666",
                maxWidth: "380px",
                lineHeight: 1.6,
                mb: 4,
              }}
            >
              Join us to celebrate the Winners of America's Top Young
              Innovators. Receive Prestigious Awards and 80+ Young Students get
              Patent Certificates.
            </Typography>
          </Box>

          <Box
            sx={{
              flex: 1.2,
              position: "relative",
              width: "100%",
              borderRadius: "24px",
              overflow: "hidden",
              boxShadow: "0 20px 60px rgba(0,0,0,0.1)",
            }}
          >
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: "300px", md: "480px" },
              }}
            >
              <Image
                src="/images/hero-video-thumb.png"
                alt="Winners"
                fill
                style={{ objectFit: "cover" }}
              />
              <Box
                sx={{
                  position: "absolute",
                  top: "50%",
                  left: "40%",
                  transform: "translate(-50%, -50%)",
                  display: "flex",
                  alignItems: "center",
                  gap: 2,
                }}
              >
                <IconButton
                  sx={{
                    width: 70,
                    height: 70,
                    backgroundColor: "rgba(255,255,255,0.2)",
                    backdropFilter: "blur(4px)",
                    border: "2px solid #fff",
                    color: "#fff",
                    "&:hover": { backgroundColor: "rgba(255,255,255,0.3)" },
                  }}
                >
                  <Play fill="#fff" size={28} />
                </IconButton>
                <Box>
                  <Typography
                    sx={{
                      color: "#fff",
                      fontWeight: 700,
                      fontSize: "14px",
                      lineHeight: 1.2,
                    }}
                  >
                    Watch
                  </Typography>
                  <Typography
                    sx={{ color: "#fff", fontWeight: 400, fontSize: "12px" }}
                  >
                    That's how we make it work?
                  </Typography>
                </Box>
              </Box>

              <Box
                sx={{
                  position: "absolute",
                  bottom: 20,
                  left: 20,
                  backgroundColor: "#fff",
                  p: "10px 20px",
                  borderRadius: "10px",
                  borderBottom: `4px solid ${Colors.SECONDARY}`,
                  boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                }}
              >
                <Typography
                  sx={{ fontWeight: 700, fontSize: "14px", color: "#333" }}
                >
                  America's Top Young Innovators - Grand Finale 2024
                </Typography>
              </Box>
            </Box>
          </Box>
        </Stack>

        <Box
          sx={{ mt: 10, width: "100%", height: "1px", backgroundColor: "#eee" }}
        />
      </Container>
    </Box>
  );
};

export default Hero;
