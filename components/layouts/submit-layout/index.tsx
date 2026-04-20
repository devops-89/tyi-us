"use client";

import React from "react";
import { Box } from "@mui/material";

import SubmitHeroSection from "./sections/Hero";
import HowToParticipateSection from "./sections/HowToParticipate";
import Footer from "@/components/widgets/Footer";

const SubmitLayout = () => {
  return (
    <Box>
      <SubmitHeroSection />
      <HowToParticipateSection />
      <Footer />
    </Box>
  );
};

export default SubmitLayout;

