"use client";

import React from "react";
import { Box } from "@mui/material";

import AboutHeroSection from "./sections/Hero";
import AboutPartnerSection from "./sections/Partner";
import AboutCompetitionsSection from "./sections/Competitions";
import Footer from "@/components/widgets/Footer";
import AnimationWrapper from "@/components/widgets/common/AnimationWrapper";

const AboutLayout = () => {
  return (
    <Box>
      <AnimationWrapper><AboutHeroSection /></AnimationWrapper>
      <AnimationWrapper><AboutPartnerSection /></AnimationWrapper>
      <AnimationWrapper><AboutCompetitionsSection /></AnimationWrapper>
      <Footer />
    </Box>
  );
};

export default AboutLayout;

