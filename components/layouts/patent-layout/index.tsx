"use client";

import React from "react";
import AnimationWrapper from "@/components/widgets/common/AnimationWrapper";
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
     <AnimationWrapper>
        <WhyPatentMatterSection/>
      </AnimationWrapper>
     <AnimationWrapper>
        <WhoIsThisForSection/>
      </AnimationWrapper>
     <AnimationWrapper>
        <PatentPreviewSection/>
      </AnimationWrapper>
     <AnimationWrapper>
        <NurturingYoungInventorsSection/>
      </AnimationWrapper>
     <AnimationWrapper>
        <PatentServiceSection/>
      </AnimationWrapper>
     <AnimationWrapper>
        <CaseStudiesSection/>
      </AnimationWrapper>
     <AnimationWrapper>
        <SuccessStoriesSection/>
      </AnimationWrapper>
     <AnimationWrapper>
        <FaqSection/>
      </AnimationWrapper>
     <AnimationWrapper>
        <ProtectIdeaSection/>
      </AnimationWrapper>
      <Footer />
    </Box>
  );
};

export default GetPatent;

