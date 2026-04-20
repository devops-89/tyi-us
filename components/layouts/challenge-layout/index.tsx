"use client";

import React from "react";
import { Box } from "@mui/material";

import ChallengeHeroSection from "./sections/Hero";
import YoungMindsSection from "./sections/YoungMinds";
import AwardsSection from "./sections/Awards";
import RulesSection from "./sections/Rules";
import ScoreBreakdownSection from "./sections/ScoreBreakdown";
import ChallengeFaqSection from "./sections/Faq";
import ChallengeCtaSection from "./sections/Cta";
import Footer from "@/components/widgets/Footer";

const ChallengeLayout = () => {
  return (
    <Box>
      <ChallengeHeroSection />
      <YoungMindsSection />
      <AwardsSection />
      <RulesSection />
      <ScoreBreakdownSection />
      <ChallengeFaqSection />
      <ChallengeCtaSection />
      <Footer />
    </Box>
  );
};

export default ChallengeLayout;

