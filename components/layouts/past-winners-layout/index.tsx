"use client";

import React from "react";
import { Box } from "@mui/material";

import PastWinnersHeroSection from "./sections/Hero";
import PastWinnersVideoSection from "./sections/Video";
import PastWinnersInnovationSection from "./sections/Innovation";
import PastWinnersGuestsSection from "./sections/Guests";
import PastWinnersWinnerSection from "./sections/Winner";
import Footer from "@/components/widgets/Footer";

const PastWinnersLayout = () => {
  return (
    <Box>
      <PastWinnersHeroSection />
      <PastWinnersVideoSection />
      <PastWinnersInnovationSection />
      <PastWinnersGuestsSection />
      <PastWinnersWinnerSection />
      <Footer />
    </Box>
  );
};

export default PastWinnersLayout;

