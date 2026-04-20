import React from "react";
import Image from "next/image";
import { Box, Container, Grid, Typography, Stack, List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";
import { ASSETS } from "@/utils/assets";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";

const { youngMinds } = WEBSITE_DATA.challenge;

const YoungMindsSection = () => {
  return (
    <Box sx={{ py: { xs: 8, md: 12 }, backgroundColor: Colors.WHITE, position: "relative", overflow: "hidden" }}>
      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH }}>
        {/* Header */}
        <Box sx={{ mb: { xs: 6, md: 8 } }}>
          <Box sx={{ mb: 2 }}>
            <SparkleLabel text={youngMinds.sparkle} fontSize="18px" sparklePosition="both" />
          </Box>
          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 500,
              fontSize: { xs: "28px", md: "45px" },
              color: Colors.BLACK,
              lineHeight: 1.2,
              mb: 1,
            }}
          >
            Young Minds Can Solve the Most Pressing
            <br />
            World Problems{" "}
            <Box
              component="span"
              sx={{
                display: "inline-flex",
                verticalAlign: "middle",
                ml: 1,
                width: { xs: 30, md: 38 },
                height: { xs: 30, md: 38 },
                position: "relative",
              }}
            >
              <Image
                src={ASSETS.IMAGES.ICON_TARGET_SIX_LINES}
                alt="icon"
                fill
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Typography>
          <Typography
            sx={{
              fontFamily: ibmPlexSans.style.fontFamily,
              fontSize: { xs: "16px", md: "20px" },
              color: Colors.TEXT_MUTED,
              lineHeight: 1.6,
            }}
          >
            {youngMinds.description}
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 6, md: 10 }} alignItems="center">
          {/* Left Side - Image with Dots */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Box sx={{ position: "relative", pr: { md: 4 } }}>
              {/* Dots Decoration */}
              <Box
                sx={{
                  position: "absolute",
                  top: -20,
                  right: 0,
                  width: 110,
                  height: 140,
                  backgroundImage: `radial-gradient(${Colors.SECONDARY} 15%, transparent 15%)`,
                  backgroundSize: "22px 22px",
                  opacity: 0.8,
                  zIndex: 0,
                }}
              />
              
              <Box
                sx={{
                  position: "relative",
                  zIndex: 1,
                  height: { xs: 400, md: 550 },
                  width: "100%",
                }}
              >
                <Image 
                  src={youngMinds.images[0]} 
                  alt="Young Innovator" 
                  fill 
                  style={{ objectFit: "cover" }} 
                />
              </Box>
            </Box>
          </Grid>

          {/* Right Side - Paragraphs */}
          <Grid size={{ xs: 12, md: 6 }}>
            <Stack spacing={4}>
              {youngMinds.paragraphs?.map((text, index) => (
                <Typography
                  key={index}
                  sx={{
                    fontFamily: ibmPlexSans.style.fontFamily,
                    fontSize: { xs: "16px", md: "20px" },
                    color: "#4A4A4A",
                    lineHeight: 1.6,
                    fontWeight: 400,
                    textAlign: "justify",
                  }}
                >
                  {text}
                </Typography>
              ))}
            </Stack>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default YoungMindsSection;

