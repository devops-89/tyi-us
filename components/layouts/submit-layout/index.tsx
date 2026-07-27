"use client";

import React from "react";
import { Box } from "@mui/material";

import SubmitHeroSection from "./sections/Hero";
import HowToParticipateSection from "./sections/HowToParticipate";
import VideoTutorialSection from "./sections/VideoTutorial";
import Footer from "@/components/widgets/Footer";
import AnimationWrapper from "@/components/widgets/common/AnimationWrapper";

const SubmitLayout = () => {
  return (
    <Box>
      <AnimationWrapper><SubmitHeroSection /></AnimationWrapper>
      <AnimationWrapper><HowToParticipateSection /></AnimationWrapper>
      <AnimationWrapper><VideoTutorialSection /></AnimationWrapper>
      <Footer />
    </Box>
  );
};

export default SubmitLayout;

