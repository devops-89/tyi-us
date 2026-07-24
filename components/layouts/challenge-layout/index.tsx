"use client";

import React from "react";
import AnimationWrapper from "@/components/widgets/common/AnimationWrapper";
import { Box } from "@mui/material";

import ChallengeHeroSection from "./sections/Hero";
import YoungMindsSection from "./sections/YoungMinds";

import RulesSection from "./sections/Rules";
import ScoreBreakdownSection from "./sections/ScoreBreakdown";
import CommonFaqSection from "@/components/widgets/common/CommonFaqSection";
import { WEBSITE_DATA } from "@/utils/website";
import ChallengeCtaSection from "./sections/Cta";
import Footer from "@/components/widgets/Footer";
import CommonIconGridSection from "@/components/widgets/common/Award";

const ChallengeLayout = () => {
  return (
    <Box>
      <ChallengeHeroSection />
      <AnimationWrapper>
        <YoungMindsSection />
      </AnimationWrapper>
      <AnimationWrapper>
         <CommonIconGridSection 
      data={WEBSITE_DATA.challenge.awards} 
    />
      </AnimationWrapper>
      <AnimationWrapper>
        <RulesSection />
      </AnimationWrapper>
      <AnimationWrapper>
        <ScoreBreakdownSection />
      </AnimationWrapper>
      <AnimationWrapper>
        <CommonFaqSection data={{ ...WEBSITE_DATA.challenge.faq, items: WEBSITE_DATA.common.faqs.items }} showNumbers={true} />
      </AnimationWrapper>
      <AnimationWrapper>
        <ChallengeCtaSection />
      </AnimationWrapper>
      <Footer />
    </Box>
  );
};

export default ChallengeLayout;

