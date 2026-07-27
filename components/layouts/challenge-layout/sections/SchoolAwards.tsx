"use client";

import React from "react";
import Image from "next/image";
import { Box, Container, Typography, Grid, Button } from "@mui/material";
import { WEBSITE_DATA } from "@/utils/website";
import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import { motion } from "framer-motion";

export default function SchoolAwardsSection() {
  const data = WEBSITE_DATA.challenge.schoolAwards;

  return (
    <Box
      sx={{
        py: { xs: 4, md: 6 },
        backgroundColor: Colors.WHITE,
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH, px: { xs: 2, sm: 3, md: 4 } }}>
        <Box 
          component={motion.div}
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          sx={{ textAlign: "center", mb: 8 }}
        >
          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 500,
              fontSize: { xs: "32px", md: "45px" },
              color: "#1A1A1A",
              mb: 1,
            }}
          >
            {data.title}
          </Typography>
          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 400,
              fontSize: { xs: "16px", md: "18px" },
              color: "#4A4A4A",
              maxWidth: 750,
              mx: "auto",
            }}
          >
            {data.description}
          </Typography>
        </Box>

        <Grid container spacing={4} justifyContent="center">
          {data.items.map((item, idx) => (
            <Grid size={{ xs: 12, md: 6 }} key={idx}>
              <Box
                component={motion.div}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: idx * 0.1 }}
                sx={{
                  backgroundColor: "rgba(251, 251, 251, 0.9)",
                  borderRadius: "20px",
                  p: "10px",
                  height: "100%",
                  minHeight: { md: 562 },
                  maxWidth: { md: 635 },
                  mx: "auto",
                  display: "flex",
                  flexDirection: "column",
                  position: "relative",
                  boxShadow: "0px 4px 20px rgba(0, 0, 0, 0.03)",
                  transition: "all 0.4s ease-in-out",
                  "&:hover": {
                    transform: "translateY(-10px)",
                    boxShadow: "0px 15px 40px rgba(0, 0, 0, 0.08)",
                    "& .card-image": {
                      transform: "scale(1.05)",
                    }
                  }
                }}
              >
                {/* Image */}
                <Box
                  className="card-image"
                  sx={{
                    position: "relative",
                    width: "100%",
                    height: { xs: 200, sm: 290 },
                    borderRadius: "18px",
                    overflow: "hidden",
                    mb: 2,
                  }}
                >
                  <Image
                    src={item.image}
                    alt={item.title}
                    fill
                    style={{ objectFit: "cover" }}
                    unoptimized
                  />
                </Box>

                {/* Content */}
                <Box sx={{ px: { xs: 1, sm: 2.5 }, pb: 2, pt: 1, flex: 1, display: "flex", flexDirection: "column" }}>
                  <Typography
                    sx={{
                      fontFamily: poppins.style.fontFamily,
                      fontWeight: 500,
                      fontSize: { xs: "20px", md: "30px" },
                      lineHeight: { xs: 1.2, md: "45px" },
                      letterSpacing: "-0.4px",
                      color: "#1A1A1A",
                      mb: 2,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: poppins.style.fontFamily,
                      fontWeight: 400,
                       fontSize: { xs: "14px", md: "16px" },
                      lineHeight: { xs: 1.4, md: "29px" },
                      letterSpacing: "0.2px",
                      color: "#4A4A4A",
                      mb: 4,
                      flex: 1,
                    }}
                  >
                    {item.description}
                  </Typography>

                  <Box>
                    <Button
                      sx={{
                        backgroundColor: "#FCECEF",
                        borderRadius: "30px",
                        textTransform: "none",
                        color: "#D60E34",
                        fontFamily: "'Manrope', sans-serif",
                        fontWeight: 600,
                        fontSize: "14px",
                        px: 3,
                        py: 1,
                        "&:hover": {
                          backgroundColor: "#f7d4dc",
                        },
                      }}
                    >
                      Get Started
                    </Button>
                  </Box>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
}
