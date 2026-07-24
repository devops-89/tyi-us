"use client";

import React from "react";
import AnimationWrapper from "@/components/widgets/common/AnimationWrapper";
import { Box } from "@mui/material";

import PastWinnersHeroSection from "./sections/Hero";
import PastWinnersVideoSection from "./sections/Video";
import PastWinnersInnovationSection from "./sections/Innovation";
import PastWinnersGuestsSection from "./sections/Guests";
import PastWinnersWinnerSection from "./sections/Winner";
import Footer from "@/components/widgets/Footer";
import CommonFaqSection from "@/components/widgets/common/CommonFaqSection";
import { WEBSITE_DATA } from "@/utils/website";
import CommonIconGridSection from "@/components/widgets/common/Award";
import GallerySection from "./sections/Gallery";

const PastWinnersLayout = () => {
  return (
    <Box>
      <PastWinnersHeroSection />
      <AnimationWrapper>
        <PastWinnersVideoSection />
      </AnimationWrapper>
      <AnimationWrapper>
        <PastWinnersInnovationSection />
      </AnimationWrapper>
      <AnimationWrapper>
        <PastWinnersGuestsSection />
      </AnimationWrapper>
      <AnimationWrapper>
        <PastWinnersWinnerSection />
      </AnimationWrapper>
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

