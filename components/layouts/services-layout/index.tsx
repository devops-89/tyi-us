"use client";

import React from "react";
import AnimationWrapper from "@/components/widgets/common/AnimationWrapper";
import Hero from "./sections/Hero";
import ServicesList from "./sections/ServicesList";
import { Box } from "@mui/material";

const ServicesLayout = () => {
  return (
    <Box>
      <Hero />
      <AnimationWrapper>
        <ServicesList />
      </AnimationWrapper>
      {/* Add more sections as needed */}
    </Box>
  );
};

export default ServicesLayout;
