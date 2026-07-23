"use client";

import React from "react";
import Image from "next/image";
import { Box, Container, Stack, Typography } from "@mui/material";
import { 
  ArrowUpRight, 
  ClipboardList, 
  Compass, 
  Send, 
  FileText, 
  Trophy, 
  Award 
} from "lucide-react";

import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
import { ASSETS } from "@/utils/assets";

const selectionSteps = [
  {
    stepLabel: "Step 1",
    description: "Express your interest in joining the Innovation Camp through our Contact Us page.",
  },
  {
    stepLabel: "Step 2",
    description: "If you meet our eligibility criteria, we will send you the Application Form via email.",
  },
  {
    stepLabel: "Step 3",
    description: "Complete and submit the Application Form.",
  },
  {
    stepLabel: "Step 4",
    description: "We will confirm your seat via email and WhatsApp and share further details about the camp.",
  },
  {
    stepLabel: "Step 5",
    description: "Confirm your seat and get ready to join the Innovation Camp!",
  },
];


const STEP_ICONS = [
  ClipboardList,
  Compass,
  Send,
  FileText,
  Trophy,
  Award,
];

const SelectionFlowSection = () => {
  return (
    <Box
      sx={{
        py: { xs: 4, md: 6 }, 
        backgroundColor: COLORS.WHITE,
        position: "relative",
        overflow: "hidden"
      }}
    >
      
      <Box
        sx={{
          position: "absolute",
          left: { xs: 10, md: -20 },
          bottom: { xs: 40, md: 100 },
          zIndex: 0,
          width: { xs: 200, md: 500 },
          height: { xs: 120, md: 300 },
          opacity: { xs: 0.25, md: 0.5 },
          pointerEvents: "none",
        }}
      >
        <Image
          src="/images/icons/top-young-innovators.png"
          alt=""
          fill
          style={{ objectFit: "contain", objectPosition: "left bottom" }}
        />
      </Box>

      

      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          position: "relative",
          zIndex: 1,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
    
        <Stack alignItems="center" textAlign="center" sx={{ mb: { xs: 6, md: 8 } }}>
          <Box sx={{ mb: 2, py: { xs: 4, md: 6 } }}>
            <SparkleLabel
              text="Selection Flow"
              fontSize={{ xs: "16px", md: "18px" }}
              sparklePosition="both"
            />
          </Box>

          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 500,
              fontSize: { xs: "28px", sm: "36px", md: "42px" },
              color: COLORS.BLACK,
              lineHeight: 1.2,
              mb: 2.5,
              maxWidth: 800,
            }}
          >
            How to Join the Innovation Camp
          </Typography>
        </Stack>

       
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: { xs: '1fr', sm: 'repeat(2, 1fr)', md: 'repeat(3, 1fr)' },
            gap: { xs: 3, md: 4 }
          }}
        >
          {selectionSteps.map((step, index) => {
            
            const IconComponent = STEP_ICONS[index % STEP_ICONS.length];

            return (
              <Box
                key={index}
                sx={{
                  position: 'relative',
                  p: { xs: 3, md: 4 },
                  borderRadius: '24px',
                  border: '1px solid rgba(227, 24, 55, 0.12)',
                  backgroundColor: COLORS.WHITE,
                  overflow: 'hidden',
                  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  
                  
                  
                  
                  '&:hover': {
                    borderColor: COLORS.SECONDARY,
                    transform: 'translateY(-10px)', 
                    boxShadow: '0 20px 40px rgba(227, 24, 55, 0.08)',
                    
                    '& .step-badge': {
                      backgroundColor: COLORS.SECONDARY,
                      color: COLORS.WHITE,
                    },
                    '& .icon-wrapper': {
                      backgroundColor: COLORS.SECONDARY,
                      color: COLORS.WHITE,
                      borderColor: COLORS.SECONDARY,
                      transform: 'scale(1.2) rotate(360deg)', 
                    },
                    '& .card-title': {
                      color: COLORS.SECONDARY, 
                    },
                    '& .card-arrow': {
                      color: COLORS.SECONDARY,
                    }
                  }
                }}
              >
                
                <Typography
                  className="watermark"
                  sx={{
                    position: 'absolute',
                    bottom: '-25px',
                    right: '0px',
                    fontSize: '140px',
                    fontWeight: 800,
                    color: 'rgba(227, 24, 55, 0.04)',
                    lineHeight: 1,
                    fontFamily: poppins.style.fontFamily,
                    zIndex: 0,
                    pointerEvents: 'none',
                  }}
                >
                  {String(index + 1).padStart(2, '0')}
                </Typography>

                
                <Stack 
                  direction="row" 
                  justifyContent="space-between" 
                  alignItems="center" 
                  sx={{ mb: 4, position: 'relative', zIndex: 1 }}
                >
                  <Box
                    className="step-badge"
                    sx={{
                      px: 2,
                      py: 0.5,
                      borderRadius: '20px',
                      backgroundColor: 'rgba(227, 24, 55, 0.05)',
                      color: COLORS.SECONDARY,
                      transition: 'all 0.4s ease',
                      display: 'flex',
                      alignItems: 'center',
                    }}
                  >
                    <Typography 
                      sx={{ 
                        fontFamily: ibmPlexSans.style.fontFamily, 
                        fontWeight: 700, 
                        fontSize: '12px', 
                        textTransform: 'uppercase',
                        letterSpacing: '0.5px'
                      }}
                    >
                      STEP - {String(index + 1).padStart(2, '0')}
                    </Typography>
                  </Box>

                  <Box
                    className="icon-wrapper"
                    sx={{
                      width: 40,
                      height: 40,
                      borderRadius: '50%',
                      border: '1px solid rgba(227, 24, 55, 0.2)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: COLORS.SECONDARY,
                      transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
                      backgroundColor: COLORS.WHITE,
                    }}
                  >
                    <IconComponent size={20} />
                  </Box>
                </Stack>

                
                <Stack 
                  direction="row" 
                  justifyContent="space-between" 
                  alignItems="flex-start" 
                  sx={{ position: 'relative', zIndex: 1 }}
                >
                  <Typography
                    className="card-title"
                    sx={{
                      fontFamily: ibmPlexSans.style.fontFamily,
                      fontSize: { xs: '15px', md: '17px' },
                      fontWeight: 500,
                      color: COLORS.BLACK,
                      lineHeight: 1.5,
                      pr: 2,
                      transition: 'color 0.4s ease', 
                    }}
                  >
                    {step.description}
                  </Typography>
                  
                  <Box 
                    className="card-arrow"
                    sx={{ 
                      color: '#D0D0D0', 
                      mt: 0.5, 
                      transition: 'color 0.4s ease',
                      flexShrink: 0 
                    }}
                  >
                    <ArrowUpRight size={22} />
                  </Box>
                </Stack>
              </Box>
            );
          })}
        </Box>
      </Container>
    </Box>
  );
};

export default SelectionFlowSection;