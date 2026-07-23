"use client";

import React from "react";
import AnimationWrapper from "@/components/widgets/common/AnimationWrapper";
import { Box } from "@mui/material";

import SubmitHeroSection from "./sections/Hero";
import HowToParticipateSection from "./sections/HowToParticipate";
import Footer from "@/components/widgets/Footer";

const SubmitLayout = () => {
  return (
    <Box>
      <SubmitHeroSection />
      <AnimationWrapper>
        <HowToParticipateSection />
      </AnimationWrapper>
      <Footer />
    </Box>
  );
};

export default SubmitLayout;

