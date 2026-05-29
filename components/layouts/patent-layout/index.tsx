"use client";

import React from "react";
import { Box } from "@mui/material";
import Footer from "@/components/widgets/Footer";
import PatentSection from "./sections/PatentIdea";
import WhyPatentMatterSection from "./sections/Patentmatter";
import WhoIsThisForSection from "./sections/Bigidea";
import PatentPreviewSection from "./sections/Generate";
import NurturingYoungInventorsSection from "./sections/Nurturing";
import PatentServiceSection from "./sections/patentservices";
import CaseStudiesSection from "./sections/CaseStudy";
import SuccessStoriesSection from "./sections/SuccessStory";
import FaqSection from "./sections/Faq";
import ProtectIdeaSection from "./sections/Contact";




const GetPatent = () => {
  return (
    <Box>
   
     <PatentSection/>
     <WhyPatentMatterSection/>
     <WhoIsThisForSection/>
     <PatentPreviewSection/>
     <NurturingYoungInventorsSection/>
     <PatentServiceSection/>
     <CaseStudiesSection/>
     <SuccessStoriesSection/>
     <FaqSection/>
     <ProtectIdeaSection/>
      <Footer />
    </Box>
  );
};

export default GetPatent;

