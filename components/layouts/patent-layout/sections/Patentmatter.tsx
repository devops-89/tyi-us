"use client";

import React from "react";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
import { WEBSITE_DATA } from "@/utils/website";

const WhyPatentMatterSection = () => {
  const patentMatterCards =
    WEBSITE_DATA.patent.PatentMatterCard;

  return (
    <Box
      sx={{
        backgroundColor: COLORS.WHITE,
        py: { xs: 6, md: 9 },
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box sx={{ mb: { xs: 4, md: 5 } }}>
          <SparkleLabel
            text="Patents Helps"
            fontSize={14}
            sparklePosition="both"
            color={COLORS.PRIMARY}
          />

          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 500,
              fontSize: { xs: "28px", md: "32px" },
              color: COLORS.BLACK,
              lineHeight: 1.2,
              mt: 1,
            }}
          >
            Why Patent Matter
          </Typography>
        </Box>

        <Grid container spacing={{ xs: 2, md: 2 }}>
          {patentMatterCards.map((item) => (
            <Grid key={item.title} size={{ xs: 12, md: 6 }}>
              <Stack
                direction="row"
                spacing={2}
                alignItems="flex-start"
                sx={{
                  height: "100%",
                  backgroundColor: "#FDECEF",
                  border: "1px solid #F8D2DA",
                  borderRadius: "10px",
                  px: { xs: 2, md: 2.5 },
                  py: { xs: 2, md: 2.2 },
                }}
              >
                <Box
                  sx={{
                    width: 34,
                    height: 34,
                    borderRadius: "50%",
                    backgroundColor: "#F8C9D2",
                    color: COLORS.SECONDARY,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                    mt: 0.4,
                  }}
                >
                  <item.Icon size={17} strokeWidth={2.2} />
                </Box>

                <Box>
                  <Typography
                    sx={{
                      fontFamily: poppins.style.fontFamily,
                      fontWeight: 700,
                      fontSize: { xs: "16px", md: "18px" },
                      color: COLORS.SECONDARY,
                      lineHeight: 1.25,
                      mb: 0.5,
                    }}
                  >
                    {item.title}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: ibmPlexSans.style.fontFamily,
                      fontSize: { xs: "16px", md: "18px" },
                      color: COLORS.TEXT_MUTED,
                      lineHeight: 1.5,
                    }}
                  >
                    {item.desc}
                  </Typography>
                </Box>
              </Stack>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyPatentMatterSection;