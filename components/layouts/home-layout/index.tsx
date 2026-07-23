"use client";

import React from "react";
import Hero from "./sections/Hero";
import ChallengeSection from "./sections/Challenge";
import ScaleSection from "./sections/Scale";
import { Box } from "@mui/material";
import Footer from "@/components/widgets/Footer";
import ParticipationJourneySection from "./sections/ParticipationJourney";
import WhyParticipateSection from "./sections/WhyParticipate";
import PartnersSection from "./sections/Partners";
import CommonFaqSection from "@/components/widgets/common/CommonFaqSection";
import { WEBSITE_DATA } from "@/utils/website";

import JoinCTA from "./sections/JoinCTA";
import AnimationWrapper from "@/components/widgets/common/AnimationWrapper";

const HomeLayout = () => {
  return (
    <Box>
      <AnimationWrapper><Hero /></AnimationWrapper>
      <AnimationWrapper><ChallengeSection /></AnimationWrapper>
      <AnimationWrapper><ScaleSection /></AnimationWrapper>
      <AnimationWrapper><ParticipationJourneySection /></AnimationWrapper>
      <AnimationWrapper><WhyParticipateSection /></AnimationWrapper>
      <AnimationWrapper><JoinCTA /></AnimationWrapper>
      <AnimationWrapper><CommonFaqSection data={WEBSITE_DATA.common.faqs} /></AnimationWrapper>
      <AnimationWrapper><PartnersSection /></AnimationWrapper>
      <Footer />
    </Box>
  );
};

export default HomeLayout;
