import React from "react";
import { Box, Container, Typography, Button } from "@mui/material";

import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import Link from "next/link";

const ProtectIdeaSection = () => {
  return (
    <Box sx={{py: { xs: 4, md: 6 }, backgroundColor: Colors.WHITE}}>
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
            minHeight: { xs: "auto", md: 409 },
            mx: "auto",
            position: "relative",
            overflow: "hidden",
            backgroundColor: Colors.BLACK,
            borderRadius: "25px",
            px: { xs: 3, sm: 4, md: 5 },
            py: { xs: 4, md: 7 },
          }}
        >
          <Box
            sx={{
              position: "absolute",
              width: { xs: 500, md: 631 },
              height: { xs: 465, md: 587 },
              left: { xs: "45%", md: "591px" },
              top: { xs: "-120px", md: "-189px" },
              border: "40px solid #2D2D2D80",
              borderRadius: "50%",
              
              zIndex: 0,
              pointerEvents: "none",
            }}
          />
          <Box
            sx={{
              position: "absolute",
              width: { xs: 500, md: 631 },
              height: { xs: 465, md: 587 },
              left: { xs: "45%", md: "591px" },
              top: { xs: "20px", md: "10px" },
              border: "40px solid #2D2D2D80",
              borderRadius: "50%",
             
              zIndex: 0,
              pointerEvents: "none",
            }}
          />

          <Box
            sx={{
              position: "relative",
              zIndex: 1,
              width: "100%",
              display: "grid",
              gridTemplateColumns: {
                xs: "1fr",
                md: "1fr 1fr",
              },
              gap: { xs: 4, md: 8 },
              alignItems: "start",
              pt: { xs: 0, md: "35px" },
            }}
          >
            <Typography
              sx={{
                fontFamily: "PolySans Trial, sans-serif",
                fontWeight: 400,
                fontSize: {
                  xs: "32px",
                  sm: "36px",
                  md: "40px",
                },
                lineHeight: "100%",
                letterSpacing: "-0.02em",
                color: Colors.WHITE,
                maxWidth: 430,
              }}
            >
              Ready to Protect Your
              <br />
              Big Idea?
            </Typography>

            <Box
              sx={{
                color: Colors.WHITE,
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
              }}
            >
              <Box sx={{ maxWidth: 520, mb: { xs: 4, md: 5 } }}>
                <Typography
                  sx={{
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 400,
                    fontSize: { xs: "14px", md: "16px" },
                  lineHeight: { xs: 1.2, md: 1.4 },
                    
                    letterSpacing: "-0.02em",
                    color: Colors.WHITE,
                    mb: 4,
                  }}
                >
                  • Schedule a Free Discovery Call with our Innovation Experts
                </Typography>

                <Typography
                  sx={{
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 400,
                 fontSize: { xs: "14px", md: "16px" },
                  lineHeight: { xs: 1.2, md: 1.4 },
                    letterSpacing: "-0.02em",
                    color: Colors.WHITE,
                  }}
                >
                  • 100% Confidentiality guaranteed
                </Typography>
              </Box>

              <Button
  component={Link}
  href="/contact"
  variant="contained"
  sx={{
    width: 151,
    height: 47,
    borderRadius: "25px",
    px: "25px",
    py: "10px",
    gap: "12px",
    backgroundColor: Colors.SECONDARY,
    color: Colors.WHITE,
    fontFamily: poppins.style.fontFamily,
    fontWeight: 400,
    fontSize: "16px",
    lineHeight: "100%",
    letterSpacing: "-0.02em",
    textTransform: "none",
    boxShadow: "none",
    ml: { xs: 0, md: "auto" },
    mr: { xs: 0, md: "70px" },
    "&:hover": {
      backgroundColor: Colors.PRIMARY,
      boxShadow: "none",
    },
  }}
>
  Contact Us
</Button>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default ProtectIdeaSection;