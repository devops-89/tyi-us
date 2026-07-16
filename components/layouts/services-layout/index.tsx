"use client";

import React from "react";
import Hero from "./sections/Hero";
import ServicesList from "./sections/ServicesList";
import { Box } from "@mui/material";
import AnimationWrapper from "@/components/widgets/common/AnimationWrapper";

const ServicesLayout = () => {
  return (
    <Box>
      <AnimationWrapper><Hero /></AnimationWrapper>
      <AnimationWrapper><ServicesList /></AnimationWrapper>
      {}
    </Box>
  );
};

export default ServicesLayout;
