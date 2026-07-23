"use client";

import React from "react";
import { Box } from "@mui/material";


import Footer from "@/components/widgets/Footer";
import ModulesCoveredSection from "./sections/Module";
import LearningOutcomesSection from "./sections/Learning";
import InnovationCampInfoCards from "./sections/Deadline";

import PartnersSection from "../home-layout/sections/Partners";

import SelectionFlowSection from "./sections/Selectionflow";
import InnovationCampSection from "./sections/freeinnovation";




const InnovationCamp = () => {
  return (
    <Box>
     <InnovationCampSection/>
     <ModulesCoveredSection/>
     <LearningOutcomesSection/>
     <InnovationCampInfoCards/>
     <SelectionFlowSection/>
     <PartnersSection/>
    <Footer />
    </Box>
  );
};

export default InnovationCamp;

