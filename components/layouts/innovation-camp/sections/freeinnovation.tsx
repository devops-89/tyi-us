"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Box, Container, Stack, Typography, Button } from "@mui/material";
import { ArrowUpRight } from "lucide-react";

import { Colors, COLORS, CONSTANTS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
import { WEBSITE_DATA } from "@/utils/website";

const InnovationCampSection = () => {
  const [activeImage, setActiveImage] = useState(0);
  const innovationCampData = WEBSITE_DATA.innovation.innovationCampData;

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImage((prev) =>
        prev === innovationCampData.sliderImages.length - 1 ? 0 : prev + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [innovationCampData.sliderImages.length]);

  return (
    <Box sx={{ backgroundColor: COLORS.WHITE, py: { xs: 4, md: 8 } }}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 4, md: 8 }}
          alignItems={{ xs: "center", md: "flex-start" }}
          justifyContent="space-between"
        >
          <Box
            sx={{
              width: { xs: "100%", md: "42%" },
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
            }}
          >
          <Box
  sx={{
    display: "flex",
    justifyContent: { xs: "center", sm: "flex-start" },
    width: "100%",
    mb: 3,
  }}
>
  <Box
    sx={{
      maxWidth: { xs: "220px", sm: "100%" },
      textAlign: { xs: "center", md: "left" },
    }}
  >
    <SparkleLabel
      text={innovationCampData.sparkle}
      type="blue-star"
      fontSize={{ xs: "12px", sm: "18px" }}
      sparkleSize={24}
    />
  </Box>
</Box>

            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 400,
               fontSize: { xs: "24px", sm: "30px", md: "45px" },
                lineHeight: { xs: "38px", sm: "42px", md: "48px" },
                letterSpacing: "-0.01em",
                textTransform: "capitalize",
                color: COLORS.BLACK,
                
                mb: 2,
                whiteSpace: "pre-line",
              }}
            >
              {innovationCampData.headline}
            </Typography>

            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 400,
                fontSize: { xs: "16px", sm: "18px", md: "22px" },
                lineHeight: { xs: "28px", sm: "32px", md: "35px" },
                letterSpacing: "-0.02em",
                textTransform: "capitalize",
                color: COLORS.TEXT_MUTED,
                maxWidth: { xs: "100%", md: 520 },
                mb: 3,
              }}
            >
              {innovationCampData.description}
            </Typography>

            <Button
              variant="contained"
              endIcon={<ArrowUpRight size={18} />}
              sx={{
                width: { xs: "100%", sm: 274 },
                height: { xs: 54, md: 60 },
                borderRadius: "50px",
                backgroundColor: Colors.SECONDARY,
                color: Colors.WHITE,
                fontFamily: "PolySans Trial, sans-serif",
                fontWeight: 400,
                fontSize: { xs: "18px", md: "20px" },
                lineHeight: "20px",
                textTransform: "none",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: COLORS.PRIMARY,
                  boxShadow: "none",
                },
              }}
            >
              {innovationCampData.buttonText}
            </Button>
          </Box>

          <Box sx={{ width: { xs: "100%", md: "48%" } }}>
            <Box
              sx={{
                width: "100%",
                maxWidth: { md: 609 },
                height: { xs: 240, sm: 320, md: 428 },
                borderRadius: "16px",
                overflow: "hidden",
                position: "relative",
                ml: { md: "auto" },
              }}
            >
              <Image
                src={innovationCampData.sliderImages[activeImage]}
                alt="Innovation Camp"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>

            <Stack
              direction="row"
              spacing={0.8}
              justifyContent="center"
              sx={{ mt: 1.5 }}
            >
              {innovationCampData.sliderImages.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setActiveImage(index)}
                  sx={{
                    width: index === activeImage ? 7 : 5,
                    height: index === activeImage ? 7 : 5,
                    borderRadius: "50%",
                    backgroundColor:
                      index === activeImage ? COLORS.BLACK : "#D9D9D9",
                    cursor: "pointer",
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Stack>

        <Box
          sx={{
            mt: { xs: 6, md: 10 },
            maxWidth: CONSTANTS.MAX_WIDTH,
            mx: "auto",
            textAlign: "center",
          }}
        >
          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 400,
              fontSize: { xs: "16px", sm: "18px", md: "22px" },
              lineHeight: { xs: "28px", sm: "32px", md: "35px" },
              letterSpacing: "-0.02em",
              textTransform: "capitalize",
              color: COLORS.TEXT_MUTED,
              mb: 3,
            }}
          >
            {innovationCampData.paragraph1}
          </Typography>

          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 400,
              fontSize: { xs: "16px", sm: "18px", md: "22px" },
              lineHeight: { xs: "28px", sm: "32px", md: "35px" },
              letterSpacing: "-0.02em",
              textTransform: "capitalize",
              color: COLORS.TEXT_MUTED,
              mb: 4,
            }}
          >
            {innovationCampData.paragraph2}
          </Typography>

          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 400,
              fontSize: { xs: "15px", sm: "17px", md: "22px" },
              lineHeight: { xs: "26px", sm: "30px", md: "35px" },
              letterSpacing: "-0.02em",
              textTransform: "capitalize",
              color: COLORS.TEXT_MUTED,
            }}
          >
            <Box component="span" sx={{ color: COLORS.SECONDARY }}>
              Note:
            </Box>{" "}
            {innovationCampData.note}
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default InnovationCampSection;