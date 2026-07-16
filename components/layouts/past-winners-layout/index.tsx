"use client";

import React from "react";
import { Box } from "@mui/material";

import PastWinnersHeroSection from "./sections/Hero";
import PastWinnersVideoSection from "./sections/Video";
import PastWinnersInnovationSection from "./sections/Innovation";
import PastWinnersGuestsSection from "./sections/Guests";
import PastWinnersWinnerSection from "./sections/Winner";
import Footer from "@/components/widgets/Footer";
import AnimationWrapper from "@/components/widgets/common/AnimationWrapper";

const PastWinnersLayout = () => {
  return (
    <Box>
      <AnimationWrapper><PastWinnersHeroSection /></AnimationWrapper>
      <AnimationWrapper><PastWinnersVideoSection /></AnimationWrapper>
      <AnimationWrapper><PastWinnersInnovationSection /></AnimationWrapper>
      <AnimationWrapper><PastWinnersGuestsSection /></AnimationWrapper>
      <AnimationWrapper><PastWinnersWinnerSection /></AnimationWrapper>
      <Footer />
    </Box>
  );
};

export default PastWinnersLayout;

