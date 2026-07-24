"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Box, Container, Typography, IconButton, Stack, useMediaQuery, Modal } from "@mui/material";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { ASSETS } from "@/utils/assets";

const GALLERY_IMAGES = [
  ASSETS.IMAGES.PAST_WINNERS_1,
  ASSETS.IMAGES.PAST_WINNERS_2,
  ASSETS.IMAGES.PAST_WINNERS_3,
 ASSETS.IMAGES.PAST_WINNERS_4,
 ASSETS.IMAGES.PAST_WINNERS_5,
 ASSETS.IMAGES.PAST_WINNERS_6,
 ASSETS.IMAGES.PAST_WINNERS_7,
 ASSETS.IMAGES.PAST_WINNERS_8,
 ASSETS.IMAGES.PAST_WINNERS_9,
 ASSETS.IMAGES.PAST_WINNERS_10,
 ASSETS.IMAGES.PAST_WINNERS_11,
 ASSETS.IMAGES.PAST_WINNERS_12,
 ASSETS.IMAGES.PAST_WINNERS_13,
 ASSETS.IMAGES.PAST_WINNERS_14,
 ASSETS.IMAGES.PAST_WINNERS_15,
 
];

// Helper to get relative indices for an infinite circular array
const getRelativeIndex = (index: number, activeIndex: number, length: number) => {
  const diff = (index - activeIndex + length) % length;
  if (diff > Math.floor(length / 2)) {
    return diff - length;
  }
  return diff;
};

const GallerySection = () => {
  const [activeIndex, setActiveIndex] = useState(2);
  const [lightboxImage, setLightboxImage] = useState<string | null>(null);

  // Breakpoints
  const isMobile = useMediaQuery("(max-width: 767px)");
  const isTablet = useMediaQuery("(min-width: 768px) and (max-width: 1023px)");
  const isLaptop = useMediaQuery("(min-width: 1024px) and (max-width: 1439px)");

  const handleNext = () => {
    setActiveIndex((prev) => (prev + 1) % GALLERY_IMAGES.length);
  };

  const handlePrev = () => {
    setActiveIndex((prev) => (prev - 1 + GALLERY_IMAGES.length) % GALLERY_IMAGES.length);
  };

  return (
    <Box
      sx={{
        pt: { xs: 4, md: 6},
         pb: { xs: 6, md: 14},
        backgroundColor: COLORS.WHITE,
        position: "relative",
        overflow: "hidden",
      }}
    >
      
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          top: "20%",
          left: 0,
          width: 200,
          height: 100,
          zIndex: 0,
          opacity: 0.8,
        }}
      >
        <Image 
          src={ASSETS.IMAGES.ICON_DOTS} 
          alt="dots" 
          fill 
          style={{ objectFit: "contain" }} 
          unoptimized 
        />
      </Box>

     
      <Box
        sx={{
          display: { xs: "none", md: "block" },
          position: "absolute",
          bottom: "10%",
          right: 0,
          width: 200,
          height: 100,
          zIndex: 0,
          opacity: 0.8,
        }}
      >
        <Image 
          src={ASSETS.IMAGES.ICON_DOTS} 
          alt="dots" 
          fill 
          style={{ objectFit: "contain" }} 
          unoptimized 
        />
      </Box>

      <Container
        maxWidth={false}
        sx={{ maxWidth: CONSTANTS.MAX_WIDTH, position: "relative", zIndex: 1 }}
      >
        <Typography
          sx={{
            fontFamily: poppins.style.fontFamily,
            fontWeight: 500,
            fontSize: { xs: "32px", md: "45px" },
            color: COLORS.BLACK,
            textAlign: "center",
            mb: 1,
          }}
        >
          Gallery
        </Typography>

        <Typography
          sx={{
            fontFamily: ibmPlexSans.style.fontFamily,
            fontSize: { xs: "14px", md: "16px" },
            color: COLORS.TEXT_MUTED,
            textAlign: "center",
            mb: { xs: 2, md: 8 },
            maxWidth: 600,
            mx: "auto",
          }}
        >
          Moments that capture our journey, events, and achievements.
        </Typography>

        
        <Box
          sx={{
            position: "relative",
            height: { xs: 250, sm: 380, md: 450 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            mb: { xs: 2, md: -2 }, 
          }}
        >
          {GALLERY_IMAGES.map((src, index) => {
            const relIndex = getRelativeIndex(index, activeIndex, GALLERY_IMAGES.length);
            const isActive = relIndex === 0;
            const isAdj = Math.abs(relIndex) === 1;

          
            const gap = 14; 
            let visibleCount = 2; 
           
            let actW = 355; 
            let actH = 378;
            let adjW = 250; 
            let adjH = 350;
            let outW = 250; 
            let outH = 350; 

            if (isMobile) {
              visibleCount = 0;
              actW = 300; adjW = 300; outW = 340;
              actH = 235;
            } else if (isTablet) {
              visibleCount = 0;
              actW = 547; adjW = 547; outW = 547;
            } else if (isLaptop) {
              visibleCount = 1; 
              actW = 320; adjW = 320; outW = 320;
            }

      
            const adjX = (actW / 2) + gap + (adjW / 2);
            const outerX = adjX + (adjW / 2) + gap + (outW / 2);

            let xPos = 0;
            if (relIndex === 1) xPos = adjX;
            else if (relIndex === -1) xPos = -adjX;
            else if (relIndex === 2) xPos = outerX;
            else if (relIndex === -2) xPos = -outerX;

            const currentW = isActive ? actW : isAdj ? adjW : outW;
            const currentH = isActive ? actH : isAdj ? adjH : outH;

            return (
              <motion.div
                key={index}
                initial={false}
                animate={{
                  x: xPos,
                  width: `${currentW}px`,
                  height: `${currentH}px`,
                  opacity: Math.abs(relIndex) > visibleCount ? 0 : 1,
                  zIndex: 10 - Math.abs(relIndex),
                }}
                transition={{ type: "spring", stiffness: 250, damping: 25 }}
                style={{
                  position: "absolute",
                  borderRadius: "16px",
                  overflow: "hidden",
                  boxShadow: isActive ? "0px 20px 40px rgba(0,0,0,0.15)" : "none",
                  cursor: "pointer", // Make sure cursor is always pointer
                  pointerEvents: Math.abs(relIndex) > visibleCount ? "none" : "auto", 
                }}
                onClick={() => {
                  setLightboxImage(src);
                }}
              >
                <Image
                  src={src}
                  alt={`Gallery Image ${index + 1}`}
                  fill
                  style={{
                    objectFit: "cover",
                    pointerEvents: "none",
                  }}
                  unoptimized
                  quality={100}
                />
              </motion.div>
            );
          })}
        </Box>

     
        <Stack direction="row" spacing={2} justifyContent="center">
          <IconButton
            onClick={handlePrev}
            disableRipple
            sx={{
              backgroundColor: "#E5E7EB",
              width: { xs: 36, md: 44 }, // Smaller on mobile
              height: { xs: 36, md: 44 }, // Smaller on mobile
              "&:hover": { backgroundColor: "#D1D5DB" },
            }}
          >
            <ChevronLeft size={24} color="#374151" />
          </IconButton>
          <IconButton
            onClick={handleNext}
            disableRipple
            sx={{
              backgroundColor: "#E5E7EB",
              width: { xs: 36, md: 44 }, // Smaller on mobile
              height: { xs: 36, md: 44 }, // Smaller on mobile
              "&:hover": { backgroundColor: "#D1D5DB" },
            }}
          >
            <ChevronRight size={24} color="#374151" />
          </IconButton>
        </Stack>
      </Container>

  
      <Modal
        open={!!lightboxImage}
        onClose={() => setLightboxImage(null)}
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          zIndex: 9999,
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: { xs: "90vw", md: "800px" },
            height: { xs: "60vh", md: "600px" },
            outline: "none",
            borderRadius: "16px",
            overflow: "hidden",
            boxShadow: 24,
            backgroundColor: "#fff",
          }}
        >
        
          <IconButton
            onClick={() => setLightboxImage(null)}
            sx={{
              position: "absolute",
              top: 16,
              right: 16,
              color: "red",
              zIndex: 10,
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              "&:hover": { backgroundColor: "rgba(255, 255, 255, 1)" },
            }}
          >
            <X size={28} />
          </IconButton>
          
          {lightboxImage && (
            <Image
              src={lightboxImage}
              alt="Expanded View"
              fill
              style={{ objectFit: "cover" }}
              unoptimized
              quality={100}
            />
          )}
        </Box>
      </Modal>
    </Box>
  );
};

export default GallerySection;
