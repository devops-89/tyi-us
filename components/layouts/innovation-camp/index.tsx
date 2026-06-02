"use client";

import React from "react";
import { Box } from "@mui/material";


import Footer from "@/components/widgets/Footer";
import ModulesCoveredSection from "./sections/Module";
import LearningOutcomesSection from "./sections/Learning";
import InnovationCampInfoCards from "./sections/Deadline";
import ParticipationJourneySection from "../home-layout/sections/ParticipationJourney";
import PartnersSection from "../home-layout/sections/Partners";
import FreeInnovationSection from "./sections/FreeInnovation";



const InnovationCamp = () => {
  return (
    <Box>
     <FreeInnovationSection/>
     <ModulesCoveredSection/>
     <LearningOutcomesSection/>
     <InnovationCampInfoCards/>
     <ParticipationJourneySection/>
     <PartnersSection/>
    <Footer />
    </Box>
  );
};

export default InnovationCamp;

