"use client";

import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";

const ProtectIdeaSection = () => {
  return (
    <Box sx={{ backgroundColor: COLORS.WHITE, py: { xs: 6, md: 10 } }}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            position: "relative",
            overflow: "hidden",
            backgroundColor: COLORS.BLACK,
            borderRadius: { xs: "18px", md: "20px" },
            minHeight: { xs: 360, md: 260 },
            px: { xs: 3, sm: 4, md: 5 },
            py: { xs: 4, md: 5 },
            display: "grid",
            gridTemplateColumns: { xs: "1fr", md: "1fr 1fr" },
            alignItems: "center",
            gap: { xs: 4, md: 5 },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              right: { xs: "-120px", md: "-20px" },
              top: { xs: "35%", md: "-35px" },
              width: { xs: 320, md: 460 },
              height: { xs: 220, md: 340 },
              border: "28px solid rgba(255,255,255,0.08)",
              borderRadius: "50%",
              transform: "rotate(-8deg)",
            }}
          />

          <Box
            sx={{
              position: "absolute",
              right: { xs: "-70px", md: "70px" },
              top: { xs: "45%", md: "25px" },
              width: { xs: 260, md: 370 },
              height: { xs: 160, md: 240 },
              border: "28px solid rgba(255,255,255,0.08)",
              borderRadius: "50%",
              transform: "rotate(-8deg)",
            }}
          />

          <Typography
            sx={{
              position: "relative",
              zIndex: 1,
              fontFamily: poppins.style.fontFamily,
              fontSize: { xs: "28px", sm: "34px", md: "32px" },
              fontWeight: 500,
              color: COLORS.WHITE,
              lineHeight: 1.05,
              maxWidth: 350,
            }}
          >
            Ready to Protect Your <br />
            Big Idea?
          </Typography>

          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              color: COLORS.WHITE,
              display: "flex",
              flexDirection: "column",
              alignItems: { xs: "flex-start", md: "center" },
              gap: 3,
            }}
          >
            <Box sx={{ width: "100%", maxWidth: 420 }}>
              <Typography
                sx={{
                  fontFamily: ibmPlexSans.style.fontFamily,
                  fontSize: { xs: "15px", md: "16px" },
                  color: COLORS.WHITE,
                  lineHeight: 1.5,
                  mb: 2.5,
                }}
              >
                • &nbsp; Schedule a Free Discovery Call with our
                <br />
                &nbsp;&nbsp;&nbsp;Innovation Experts
              </Typography>

              <Typography
                sx={{
                  fontFamily: ibmPlexSans.style.fontFamily,
                  fontSize: { xs: "15px", md: "16px" },
                  color: COLORS.WHITE,
                  lineHeight: 1.5,
                }}
              >
                • &nbsp; 100% Confidentiality guaranteed
              </Typography>
            </Box>

            <Button
              variant="contained"
              sx={{
                alignSelf: { xs: "flex-start", md: "center" },
                mt: { xs: 1, md: 1 },
                px: 3.5,
                height: 42,
                borderRadius: "50px",
                backgroundColor: COLORS.SECONDARY,
                color: COLORS.WHITE,
                fontFamily: poppins.style.fontFamily,
                fontSize: "14px",
                fontWeight: 600,
                textTransform: "none",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: COLORS.PRIMARY,
                  boxShadow: "none",
                },
              }}
            >
              Contact Us
            </Button>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProtectIdeaSection;