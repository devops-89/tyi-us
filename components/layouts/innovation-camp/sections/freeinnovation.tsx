"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Box, Container, Stack, Typography, Button } from "@mui/material";
import { ArrowUpRight } from "lucide-react";

import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
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
    <Box sx={{ backgroundColor: COLORS.WHITE, py: { xs: 6, md: 8 } }}>
      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH, px: { xs: 2, sm: 3, md: 4 } }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 4, md: 10 }} alignItems="center" justifyContent="space-between">
          <Box sx={{ width: { xs: "100%", md: "42%" } }}>
            <Box sx={{ display: "flex", justifyContent: "start", mb: 3 }}>
              <SparkleLabel text={innovationCampData.sparkle} type="red-star" fontSize="18px" />
            </Box>

            <Typography sx={{ fontFamily: poppins.style.fontFamily, fontWeight: 500, fontSize: { xs: "30px", sm: "36px", md: "45px" }, color: COLORS.BLACK, lineHeight: 1.25, mb: 2, whiteSpace: "pre-line" }}>
              {innovationCampData.headline}
            </Typography>

            <Typography sx={{ fontFamily: ibmPlexSans.style.fontFamily, fontSize: { xs: "16px", md: "18px" }, color: COLORS.TEXT_MUTED, lineHeight: 1.6, maxWidth: 420, mb: 3 }}>
              {innovationCampData.description}
            </Typography>

            <Button
              variant="contained"
              endIcon={<ArrowUpRight size={16} />}
              sx={{
                height: 42,
                borderRadius: "50px",
                px: 3,
                backgroundColor: COLORS.SECONDARY,
                color: COLORS.WHITE,
                fontFamily: poppins.style.fontFamily,
                fontWeight: 600,
                fontSize: "13px",
                textTransform: "none",
                boxShadow: "none",
                "&:hover": { backgroundColor: COLORS.PRIMARY, boxShadow: "none" },
              }}
            >
              {innovationCampData.buttonText}
            </Button>
          </Box>

          <Box sx={{ width: { xs: "100%", md: "48%" } }}>
            <Box sx={{ width: "100%", height: { xs: 240, sm: 320, md: 360 }, borderRadius: "10px", overflow: "hidden", position: "relative" }}>
              <Image
                src={innovationCampData.sliderImages[activeImage]}
                alt="Innovation Camp"
                fill
                style={{ objectFit: "cover" }}
              />
            </Box>

            <Stack direction="row" spacing={0.8} justifyContent="center" sx={{ mt: 1.5 }}>
              {innovationCampData.sliderImages.map((_, index) => (
                <Box
                  key={index}
                  onClick={() => setActiveImage(index)}
                  sx={{
                    width: index === activeImage ? 7 : 5,
                    height: index === activeImage ? 7 : 5,
                    borderRadius: "50%",
                    backgroundColor: index === activeImage ? COLORS.BLACK : "#D9D9D9",
                    cursor: "pointer",
                  }}
                />
              ))}
            </Stack>
          </Box>
        </Stack>

        <Box sx={{ mt: { xs: 6, md: 10 }, maxWidth: CONSTANTS.MAX_WIDTH, mx: "auto", textAlign: "center" }}>
          <Typography sx={{ fontFamily: ibmPlexSans.style.fontFamily, fontSize: { xs: "16px", md: "18px" }, color: COLORS.TEXT_MUTED, lineHeight: 1.7, mb: 3 }}>
            {innovationCampData.paragraph1}
          </Typography>

          <Typography sx={{ fontFamily: ibmPlexSans.style.fontFamily, fontSize: { xs: "16px", md: "18px" }, color: COLORS.TEXT_MUTED, lineHeight: 1.7, mb: 4 }}>
            {innovationCampData.paragraph2}
          </Typography>

          <Typography sx={{ fontFamily: ibmPlexSans.style.fontFamily, fontSize: { xs: "14px", md: "16px" }, color: COLORS.TEXT_MUTED, lineHeight: 1.7 }}>
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