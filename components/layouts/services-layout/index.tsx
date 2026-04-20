"use client";

import React from "react";
import Hero from "./sections/Hero";
import ServicesList from "./sections/ServicesList";
import { Box } from "@mui/material";

const ServicesLayout = () => {
  return (
    <Box>
      <Hero />
      <ServicesList />
      {/* Add more sections as needed */}
    </Box>
  );
};

export default ServicesLayout;
