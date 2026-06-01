"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Typography,
  Dialog,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { Play } from "lucide-react";

import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
import { WEBSITE_DATA } from "@/utils/website";

const NurturingYoungInventorsSection = () => {
  const [openVideo, setOpenVideo] = useState(false);
  const data = WEBSITE_DATA.patent.Nurturing;

  return (
    <Box
      sx={{
        backgroundColor: COLORS.WHITE,
        py: { xs: 4, md: 10 },
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
                textTransform: "capitalize",
                color: COLORS.BLACK,
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
                  fontSize: { xs: "16px", sm: "18px", md: "20px" },
                  lineHeight: { xs: "28px", sm: "32px", md: "35px" },
                  letterSpacing: "-0.02em",
                  textTransform: "capitalize",
                  color: COLORS.TEXT_MUTED,
                  mb: 0.6,
                }}
              >
                {item.prefix}

                <Box
                  component="span"
                  sx={{
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 600,
                    fontSize: { xs: "16px", sm: "18px", md: "20px" },
                    lineHeight: { xs: "28px", sm: "32px", md: "35px" },
                    letterSpacing: "-0.02em",
                    textTransform: "capitalize",
                    color: COLORS.BLACK,
                  }}
                >
                  {item.highlight}
                </Box>

                {item.suffix}
              </Typography>
            ))}
          </Box>

          <Box
            onClick={() => setOpenVideo(true)}
            sx={{
              width: "100%",
              maxWidth: 1160,
              height: { xs: 230, sm: 420, md: 560, lg: 658 },
              backgroundColor: COLORS.BLACK,
              borderRadius: "29px",
              mx: "auto",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              cursor: "pointer",
              overflow: "hidden",
            }}
          >
            <Box
              sx={{
                width: { xs: 52, md: 62 },
                height: { xs: 36, md: 44 },
                borderRadius: "10px",
                backgroundColor: COLORS.SECONDARY,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: COLORS.WHITE,
              }}
            >
              <Play size={24} fill="white" />
            </Box>
          </Box>
        </Box>

        <Dialog
          open={openVideo}
          onClose={() => setOpenVideo(false)}
          maxWidth="lg"
          fullWidth
          PaperProps={{
            sx: {
              backgroundColor: COLORS.BLACK,
              borderRadius: "14px",
              overflow: "hidden",
            },
          }}
        >
          <Box sx={{ position: "relative" }}>
            <IconButton
              onClick={() => setOpenVideo(false)}
              sx={{
                position: "absolute",
                top: 8,
                right: 8,
                zIndex: 2,
                backgroundColor: COLORS.WHITE,
                color: COLORS.BLACK,
                "&:hover": {
                  backgroundColor: COLORS.WHITE,
                },
              }}
            >
              <CloseIcon />
            </IconButton>

            <Box
              sx={{
                position: "relative",
                width: "100%",
                paddingTop: "56.25%",
              }}
            >
              {openVideo && (
                <iframe
                  src={data.videoUrl}
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
              )}
            </Box>
          </Box>
        </Dialog>
      </Container>
    </Box>
  );
};

export default NurturingYoungInventorsSection;