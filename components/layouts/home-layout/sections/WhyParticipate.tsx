"use client";

import React from "react";
import { Box, Container, Stack, Typography, Grid } from "@mui/material";
import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
import Image from "next/image";
import { ASSETS } from "@/utils/assets";

const featuresLeft = [
  {
    title: "Innovation Camp Learning",
    desc: " Attend the Innovation Camp to learn the process of developing ideas and solutions.",
    icon: "/images/icons/ai-innovation.png",
  },
  {
    title: "Solve Real-World Problems",
    desc: "  Identify a real-world problem and come up with an innovative solution.",
    icon: "/images/icons/fluent_search-info-24-filled.png",
  },
  {
    title: "Win the Title of India’s Top Young Innovator",
    desc: ' Win the prestigious title of "India\'s Top Young Innovator."',
    icon: "/images/icons/marketeq_reward.png",
  },
];

const featuresRight = [
  {
    title: "Put Your Innovation on the World Stage",
    desc: "Present your innovation to the world and attract potential investors.",
    icon: "/images/icons/hugeicons_save-money-dollar.png",
  },
  {
    title: "Opportunity for a US Patent",
    desc: "Get the chance to own a US Patent for your innovation.",
    icon: "/images/icons/streamline-ultimate_human-resources-search-men.png",
  },
  {
    title: "Gain Global Recognition",
    desc: " Receive recognition on a global platform for your innovative work",
    icon: "/images/icons/marketeq_reward.png",
  },
];

const FeatureItem = ({
  align,
  item,
}: {
  align: "left" | "right";
  item: any;
}) => (
  <Box
    sx={{
      textAlign: { xs: "center", md: align },
      mb: { xs: 4, md: 0 },
    }}
  >
    <Box
      sx={{
        display: "flex",
        justifyContent: {
          xs: "center",
          md: align === "right" ? "flex-end" : "flex-start",
        },
        mb: { xs: 1.5, md: 2 },
      }}
    >
      <Box
        sx={{
          width: { xs: 44, md: 48 },
          height: { xs: 44, md: 48 },
          borderRadius: "50%",
          backgroundColor: Colors.SECONDARY,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Image
          src={item.icon}
          alt={item.title}
          width={24}
          height={24}
          style={{ objectFit: "contain" }}
        />
      </Box>
    </Box>

    <Typography
      sx={{
        fontFamily: poppins.style.fontFamily,
        fontWeight: 400,
        fontSize: { xs: "22px", sm: "24px", md: "28px" },
        color: Colors.BLACK,
        mb: 1,
        lineHeight: { xs: 1.25, md: 1.3 },
      }}
    >
      {item.title}
    </Typography>

    <Typography
      sx={{
        fontFamily: ibmPlexSans.style.fontFamily,
        fontSize: { xs: "16px", md: "20px" },
        color: Colors.TEXT_MUTED,
        lineHeight: { xs: 1.6, md: 1.5 },
      }}
    >
      {item.desc}
    </Typography>
  </Box>
);

const WhyParticipateSection = () => {
  return (
    <Box
      sx={{
        pt: { xs: 6, md: 10 },
        pb: { xs: 8, md: 18 },
        backgroundColor: Colors.WHITE,
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Stack spacing={2} sx={{ mb: { xs: 3, md: 2 } }}>
          <SparkleLabel
            text="Why Participate in the Challenge?"
            sparklePosition="both"
            type="diamond"
            color={Colors.PRIMARY}
           fontSize={{ xs: "12px", sm: "18px" }}
          />
        </Stack>

        <Grid container spacing={{ xs: 3, md: 10 }} alignItems="flex-start">
          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 400,
                fontSize: { xs: "20px", sm: "24px", md: "28px" },
                color: Colors.BLACK,
                lineHeight: { xs: 1.25, md: 1.3 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
             Why Participate in India’s <br /> Top Young Innovators? 
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 6 }}>
            <Typography
              sx={{
                fontFamily: ibmPlexSans.style.fontFamily,
                fontSize: { xs: "16px", md: "20px" },
                fontWeight: 400,
                color: Colors.TEXT_MUTED,
                lineHeight: 1.6,
                textAlign: { xs: "center", md: "right" },
                mb: 1.5,
              }}
            >
              Gain exposure, mentorship, and the chance to become a globally celebrated young innovator.
            </Typography>
          </Grid>
        </Grid>

        <Grid
          container
          spacing={{ xs: 4, md: 4 }}
          alignItems="stretch"
          sx={{ mt: { xs: 5, md: 16 } }}
        >
          {/* Left Features */}
          <Grid size={{ xs: 12, md: 4 }} order={{ xs: 2, md: 1 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                py: { md: 2 },
              }}
            >
              {featuresLeft.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent:
                      index === 0
                        ? "flex-start"
                        : index === 1
                        ? "center"
                        : "flex-end",
                  }}
                >
                  <FeatureItem align="right" item={item} />
                </Box>
              ))}
            </Box>
          </Grid>

          {/* Center Image */}
          <Grid size={{ xs: 12, md: 4 }} order={{ xs: 1, md: 2 }}>
            <Box
              sx={{
                position: "relative",
                width: "100%",
                height: { xs: 320, sm: 380, md: 600 },
                display: "flex",
                justifyContent: "center",
                transform: { xs: "none", md: "scale(1.15)" },
                mb: { xs: 2, md: 0 },
              }}
            >
              <Image
                src={ASSETS.IMAGES.IMAGE37}
                alt="Young Innovator"
                fill
                style={{ objectFit: "contain", objectPosition: "center" }}
              />
            </Box>
          </Grid>

          {/* Right Features */}
          <Grid size={{ xs: 12, md: 4 }} order={{ xs: 3, md: 3 }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                height: "100%",
                py: { md: 2 },
              }}
            >
              {featuresRight.map((item, index) => (
                <Box
                  key={index}
                  sx={{
                    flex: 1,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent:
                      index === 0
                        ? "flex-start"
                        : index === 1
                        ? "center"
                        : "flex-end",
                  }}
                >
                  <FeatureItem align="left" item={item} />
                </Box>
              ))}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default WhyParticipateSection;