"use client";

import React from "react";
import Image from "next/image";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";
import { ASSETS } from "@/utils/assets";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";

const { awards } = WEBSITE_DATA.challenge;

const AwardsSection = () => {
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
        <Box sx={{ maxWidth: 1454, mx: "auto", position: "relative" }}>
          <Box sx={{ mb: 2, display: "flex", justifyContent: "center" }}>
            <Stack
              direction="row"
              spacing={1.5}
              alignItems="center"
              sx={{ px: { xs: 1, md: 3 }, py: 0.5 }}
            >
              <Box
                sx={{
                  maxWidth: { xs: "300px", sm: "100%" },
                  textAlign: { xs: "center", md: "left" },
                }}
              >
                <SparkleLabel
                  text={awards.sparkle}
                  fontSize={{ xs:"16px", md:"18px"}}
                  
                  
                  type="blue-star"
                  sparklePosition="both"
                  sparkleSize={35}
                  
                />
              </Box>

              
            </Stack>
          </Box>

          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 500,
              fontSize: { xs: "24px", sm: "30px", md: "45px" },
              color: Colors.BLACK,
              textAlign: "center",
              lineHeight: { xs: 1.25, md: 1.2 },
              mb: 1,
            }}
          >
            {awards.title}
          </Typography>

          <Typography
            sx={{
              fontFamily: ibmPlexSans.style.fontFamily,
              fontSize: { xs: "14px", md: "16px" },
                  lineHeight: { xs: 1.2, md: 1.4 },
              color: Colors.TEXT_MUTED,
              textAlign: "center",
             mb: { xs: 5, md: 8 },
              maxWidth: 800,
              mx: "auto",
            }}
          >
            {awards.description}
          </Typography>

          <Grid container spacing={{ xs: 3, md: 4 }} justifyContent="center" alignItems="stretch">
            {awards.items.map(
              ({ index, labelTop, labelMain, labelBottom, Icon }, i) => (
                <Grid key={i} size={{ xs: 12, sm: 6, md: 3 }}>
                  <Box
                    sx={{
                      backgroundColor: Colors.WHITE,
                      border: "1px solid rgba(0, 0, 0, 0.08)",
                      borderRadius: "24px",
                      p: { xs: 3, md: 4 },
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      textAlign: "center",
                      transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                      height: "100%", 
                      "&:hover": {
                        transform: "translateY(-10px)",
                        boxShadow: "0 20px 40px rgba(27, 62, 140, 0.08)",
                        borderColor: "rgba(27, 62, 140, 0.2)",
                        "& .icon-circle": {
                          transform: "scale(1.1)",
                          boxShadow: "0px 12px 30px rgba(32, 138, 36, 0.3)",
                        },
                        "& .icon-circle::after": {
                          transform: "scale(1.15)",
                          borderColor: "rgba(27, 62, 140, 0.3)",
                        },
                        "& .card-main-text": {
                          color: Colors.SECONDARY
                        },
                      },
                    }}
                  >
                
                    <Box
                      sx={{
                        backgroundColor: "#F4F7FC",
                        px: 2.5,
                        py: 0.8,
                        borderRadius: "20px",
                        mb: 4,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: poppins.style.fontFamily,
                          fontWeight: 600,
                          fontSize: "13px",
                          color: Colors.SECONDARY,
                          textTransform: "uppercase",
                          letterSpacing: "0.5px",
                        }}
                      >
                        {String(index).toUpperCase().includes("AWARD") 
                          ? index 
                          : `AWARD ${String(index).padStart(2, '0')}`}
                      </Typography>
                    </Box>

                 
                    <Box
                      className="icon-circle"
                      sx={{
                        width: { xs: 80, md: 90 },
                        height: { xs: 80, md: 90 },
                        borderRadius: "50%",
                        backgroundColor:Colors.SECONDARY,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        position: "relative",
                        boxShadow: "0px 8px 24px rgba(27, 62, 140, 0.2)",
                        mb: { xs: 4, md: 5 },
                        transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        "&::after": {
                          content: '""',
                          position: "absolute",
                          inset: -8,
                          borderRadius: "50%",
                          border: "1.5px solid rgba(27, 62, 140, 0.15)",
                          transition: "all 0.4s cubic-bezier(0.4, 0, 0.2, 1)",
                        },
                      }}
                    >
                      {typeof Icon === "string" ? (
                        <Box
                          sx={{
                            position: "relative",
                            width: "50%",
                            height: "50%",
                          }}
                        >
                          <Image
                            src={Icon}
                            alt="award"
                            fill
                            style={{ objectFit: "contain" }}
                          />
                        </Box>
                      ) : (
                        <Icon
                          size={40}
                          color={Colors.WHITE}
                          strokeWidth={1.5}
                        />
                      )}
                    </Box>
                    <Stack spacing={0.8} sx={{ px: { xs: 0, md: 1 } }}>
                      {labelTop && (
                        <Typography
                          sx={{
                            fontFamily: ibmPlexSans.style.fontFamily,
                            fontSize: { xs: 14, md: 15 },
                            color: Colors.TEXT_MUTED,
                            lineHeight: 1.3,
                          }}
                        >
                          {labelTop}
                        </Typography>
                      )}

                      <Typography
                        className="card-main-text"
                        sx={{
                          fontFamily: poppins.style.fontFamily,
                          fontWeight: 700,
                          fontSize: { xs: 18, md: 20 },
                          color: "#0A0A0A",
                          lineHeight: 1.3,
                          textTransform: "uppercase",
                          transition: "color 0.4s ease",
                        }}
                      >
                        {labelMain}
                      </Typography>

                      {labelBottom && (
                        <Typography
                          sx={{
                            fontFamily: ibmPlexSans.style.fontFamily,
                            fontSize: { xs: 14, md: 15 },
                            color: Colors.TEXT_MUTED,
                            lineHeight: 1.5,
                          }}
                        >
                          {labelBottom}
                        </Typography>
                      )}
                    </Stack>
                  </Box>
                </Grid>
              )
            )}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default AwardsSection;