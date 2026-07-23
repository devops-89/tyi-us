"use client";

import React from "react";
import AnimationWrapper from "@/components/widgets/common/AnimationWrapper";
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
      <AnimationWrapper>
        <YoungMindsSection />
      </AnimationWrapper>
      <AnimationWrapper>
        <AwardsSection />
      </AnimationWrapper>
      <AnimationWrapper>
        <RulesSection />
      </AnimationWrapper>
      <AnimationWrapper>
        <ScoreBreakdownSection />
      </AnimationWrapper>
      <AnimationWrapper>
        <ChallengeFaqSection />
      </AnimationWrapper>
      <AnimationWrapper>
        <ChallengeCtaSection />
      </AnimationWrapper>
      <Footer />
    </Box>
  );
};

export default ChallengeLayout;

