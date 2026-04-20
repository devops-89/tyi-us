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
import FaqSection from "./sections/Faq";

import JoinCTA from "./sections/JoinCTA";

const HomeLayout = () => {
  return (
    <Box>
      <Hero />
      <ChallengeSection />
      <ScaleSection />
      <ParticipationJourneySection />
      <WhyParticipateSection />
      <JoinCTA />
      <FaqSection />
      <PartnersSection />
      <Footer />
    </Box>
  );
};

export default HomeLayout;
