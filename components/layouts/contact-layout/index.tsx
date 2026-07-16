"use client";

import React from "react";
import { Box } from "@mui/material";

import ContactSection from "./sections/Contact";
import Footer from "@/components/widgets/Footer";
import AnimationWrapper from "@/components/widgets/common/AnimationWrapper";

const ContactLayout = () => {
  return (
    <Box>
      <AnimationWrapper><ContactSection /></AnimationWrapper>
      <Footer variant="uae" />
    </Box>
  );
};

export default ContactLayout;

