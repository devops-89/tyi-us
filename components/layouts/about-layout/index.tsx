"use client";

import React from "react";
import { Box } from "@mui/material";

import AboutHeroSection from "./sections/Hero";
import AboutPartnerSection from "./sections/Partner";
import AboutCompetitionsSection from "./sections/Competitions";
import Footer from "@/components/widgets/Footer";

const AboutLayout = () => {
  return (
    <Box>
      <AboutHeroSection />
      <AboutPartnerSection />
      <AboutCompetitionsSection />
      <Footer />
    </Box>
  );
};

export default AboutLayout;

