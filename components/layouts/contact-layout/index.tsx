"use client";

import React from "react";
import { Box } from "@mui/material";

import ContactSection from "./sections/Contact";
import Footer from "@/components/widgets/Footer";

const ContactLayout = () => {
  return (
    <Box>
      <ContactSection />
      <Footer variant="uae" />
    </Box>
  );
};

export default ContactLayout;

