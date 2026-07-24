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
import GallerySection from "./sections/Gallery";
import CommonIconGridSection from "@/components/widgets/common/Awards";
import { WEBSITE_DATA } from "@/utils/website";
import CommonFaqSection from "@/components/widgets/common/CommonFaqSection";

const PastWinnersLayout = () => {
  return (
    <Box>
      <AnimationWrapper><PastWinnersHeroSection /></AnimationWrapper>
      <AnimationWrapper><PastWinnersVideoSection /></AnimationWrapper>
      <AnimationWrapper><PastWinnersInnovationSection /></AnimationWrapper>
      <AnimationWrapper><PastWinnersGuestsSection /></AnimationWrapper>
      <AnimationWrapper><PastWinnersWinnerSection /></AnimationWrapper>
         
         <AnimationWrapper>
        <CommonFaqSection data={{ ...WEBSITE_DATA.pastWinners.faqs, items: WEBSITE_DATA.pastWinners.faqs.items }} showNumbers={true} />
      </AnimationWrapper>
         
         
         
          <AnimationWrapper>
         <CommonIconGridSection
      data={WEBSITE_DATA.pastWinners.CategoryAwards} 
    />
      </AnimationWrapper>
         
         
         
         <AnimationWrapper>
  <GallerySection />
</AnimationWrapper>

      <Footer />
    </Box>
  );
};

export default PastWinnersLayout;

