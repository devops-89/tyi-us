"use client";

import React from "react";
import { Box, Container, Grid, Typography } from "@mui/material";
import { StudentIcon, HobbyistIcon, ParentsIcon } from "@/components/widgets/icons/icon";

import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
import { WEBSITE_DATA } from "@/utils/website";

const WhoIsThisForSection = () => {
  const whoIsThisFor = WEBSITE_DATA.patent.BigData;

 
  const renderIcon = (index: number) => {
    switch (index) {
      case 0: return <StudentIcon />;
      case 1: return <ParentsIcon />;
      case 2: return <HobbyistIcon />;
      default: return null;
    }
  };

  return (
    <Box
      sx={{
        py: { xs: 4, md: 8 }, 
        backgroundColor: COLORS.SUBMIT_ACCENT_BG,
        mt: { xs: 4, sm: 6, md: 8 },
        mb: { xs: 4, sm: 6, md: 6 }
      }}
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
            textAlign: "center",
            mb: { xs: 6, md: 11 },
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              mb: 2,
            }}
          >
            <SparkleLabel
              text={whoIsThisFor.sparkle}
              fontSize={18}
              sparkleSize={35}
              type="blue-star"
              sparklePosition="both"
              color={COLORS.PRIMARY}
            />
          </Box>

          <Typography
            sx={{
              fontFamily: "PolySans Trial, sans-serif",
              fontWeight: 400,
              fontSize: { xs: "24px", sm: "30px", md: "45px" },
              lineHeight: {
                xs: "38px",
                sm: "42px",
                md: "48px",
              },
              letterSpacing: "-0.01em",
              textAlign: "center",
              textTransform: "capitalize",
              color: COLORS.BLACK,
              mb: 2,
            }}
          >
            {whoIsThisFor.title}
          </Typography>

          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 400,
              fontSize: { xs: "14px", md: "16px" },
              lineHeight: { xs: 1.2, md: 1.4 },
              letterSpacing: "-0.02em",
              textAlign: "center",
              textTransform: "capitalize",
              color: COLORS.TEXT_MUTED,
              maxWidth: 1100,
              mx: "auto",
            }}
          >
            {whoIsThisFor.description}
          </Typography>
        </Box>

        <Grid
          container
          spacing={{ xs: 6, md: 8 }}
          justifyContent="center"
          alignItems="flex-start"
        >
          {whoIsThisFor.items.map((item: any, index: number) => (
            <Grid key={item.title2} size={{ xs: 12, sm: 4 }}>
              
     
              <Box 
                sx={{ 
                  textAlign: "center",
                  cursor: "pointer",
             
                  "&:hover .hover-circle": {
                    transform: "scale(1.1) translateY(-5px)", 
                    boxShadow: "0px 15px 25px rgba(0, 0, 0, 0.15)", 
                  },
                  
                  "&:hover .hover-title": {
                    color: "#db0000", 
                  }
                }}
              >
                
                <Box
                  className="hover-circle"
                  sx={{
                    width: { xs: 110, sm: 120, md: 129 },
                    height: { xs: 110, sm: 120, md: 129 },
                    borderRadius: "50%",
                    backgroundColor: COLORS.WHITE,
                    mx: "auto",
                    mb: { xs: 3, md: 4 },
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    overflow: "hidden", 
                    transition: "all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)", 
                    "& svg": {
                      width: "100%",
                      height: "100%", 
                      maxHeight: "none !important",
                      transform: "scale(1.4)", 
                    }
                  }}
                >
                  
                  {renderIcon(index)}
                </Box>

                
                <Typography
                  className="hover-title"
                  sx={{
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 600,
                    fontSize: {
                      xs: "14px",
                      md: "16px",
                    },
                    lineHeight: {
                      xs: 1.2,
                      md: 1.4,
                    },
                    letterSpacing: "-0.02em",
                    textAlign: "center",
                    textTransform: "uppercase",
                    color: COLORS.BLACK,
                    transition: "color 0.3s ease", 
                  }}
                >
                  {item.title1}
                </Typography>

                <Typography
                  className="hover-title"
                  sx={{
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 600,
                    fontSize: {
                      xs: "14px",
                      md: "16px",
                    },
                    lineHeight: {
                      xs: 1.2,
                      md: 1.4,
                    },
                    letterSpacing: "-0.02em",
                    textAlign: "center",
                    textTransform: "uppercase",
                    color: COLORS.BLACK,
                    transition: "color 0.3s ease", 
                  }}
                >
                  {item.title2}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhoIsThisForSection;