"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  Box,
  Container,
  Typography,
  TextField,
  Button,
  Dialog,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins } from "@/utils/fonts";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
import { ASSETS } from "@/utils/assets";

const PatentPreviewSection = () => {
  const [inventorName, setInventorName] = useState("");
  const [inventionTitle, setInventionTitle] = useState("");

  const [generatedName, setGeneratedName] = useState("");
  const [generatedTitle, setGeneratedTitle] = useState("");
  const [openPreview, setOpenPreview] = useState(false);

  const handleGenerate = () => {
    setGeneratedName(inventorName);
    setGeneratedTitle(inventionTitle);
  };

  const handleReset = () => {
    setInventorName("");
    setInventionTitle("");
    setGeneratedName("");
    setGeneratedTitle("");
    setOpenPreview(false);
  };

  
  const CertificateImage = ({ preview = false }: { preview?: boolean }) => (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        
        maxWidth: preview 
          ? { xs: 300, sm: 480, md: 580 } 
          : { xs: 340, sm: 600, md: 830 },
        mx: "auto",
        borderRadius: "10px",
        overflow: "visible",
      }}
    >
      <Image
        src={ASSETS.IMAGES.PATENT_PREVIEW}
        alt="Patent Certificate Preview"
        width={830}
        height={654}
        style={{
          width: "100%",
          height: "auto",
          display: "block",
        }}
      />

      {generatedName && (
        <Typography
          sx={{
            position: "absolute",
            top: { xs: "47%", sm: "50%" },
            left: "61%",
            transform: "translateX(-50%)",
            fontFamily: poppins.style.fontFamily,
            
            fontSize: preview 
              ? { xs: "10px", sm: "14px", md: "15px" }
              : { xs: "12px", sm: "18px", md: "22px" },
            fontWeight: 600,
            color: COLORS.BLACK,
            textAlign: "center",
            width: "80%",
            lineHeight: 1.2,
          }}
        >
          {generatedName}
        </Typography>
      )}

      {generatedTitle && (
        <Typography
          sx={{
            position: "absolute",
            top: { xs: "60%", sm: "62%" },
            left: "61%",
            transform: "translateX(-50%)",
            fontFamily: poppins.style.fontFamily,
            
            fontSize: preview
              ? { xs: "8px", sm: "11px", md: "13px" }
              : { xs: "10px", sm: "15px", md: "18px" },
            fontWeight: 500,
            color: COLORS.BLACK,
            textAlign: "center",
            width: "80%",
            lineHeight: 1.2,
          }}
        >
          {generatedTitle}
        </Typography>
      )}
    </Box>
  );

  return (
    <Box sx={{py: { xs: 4, md: 6 }, backgroundColor: COLORS.WHITE}}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            width: "100%",
            maxWidth: 1160,
            mx: "auto",
            mb: 2,
          }}
        >
          <SparkleLabel
            text="Own Your Patent"
            fontSize={18}
            sparkleSize={35}
            type="blue-star"
            sparklePosition="both"
            color={COLORS.PRIMARY}
          />
        </Box>

        <Typography
          sx={{
            fontFamily: "PolySans Trial, sans-serif",
            fontWeight: 400,
            fontSize: { xs: "24px", sm: "30px", md: "40px" },
            lineHeight: { xs: 1.2, sm: 1.4, md: 1.6 },
            letterSpacing: "-0.01em",
            textTransform: "capitalize",
            color: COLORS.BLACK,
            maxWidth: 1160,
            mx: "auto",
            mb: 2,
          }}
        >
          Ever Wondered What It Feels Like To See Your Own US Patent?
        </Typography>

        <Typography
          sx={{
            fontFamily: poppins.style.fontFamily,
            fontWeight: 400,
            fontSize: { xs: "14px", md: "16px" },
                  lineHeight: { xs: 1.2, md: 1.4 },
            letterSpacing: "-0.02em",
            textTransform: "capitalize",
            color: COLORS.TEXT_MUTED,
            textAlign: {md:"left", xs:"justify"},
            maxWidth: 1160,
            mx: "auto",
            mb: 4,
          }}
        >
          Now You Can! Enter Your Details To Generate A Personalized Sample U.S.
          Patent Certificate, A Glimpse Into Your Future As An Innovator.
        </Typography>

        <Box
          sx={{
            width: "100%",
            maxWidth: 1160,
            mx: "auto",
            display: "flex",
            flexDirection: { xs: "column", sm: "row" },
            alignItems: { xs: "stretch", sm: "center" },
            justifyContent: "space-between",
            gap: { xs: 2, sm: 1.5, md: 2 },
            mb: { xs: 4, md: 5 },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", sm: "58%", md: "62%" },
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: { xs: 2, sm: 1.5, md: 2 },
              minWidth: 0,
            }}
          >
            <TextField
              value={inventorName}
              onChange={(e) => setInventorName(e.target.value)}
              placeholder="Inventor Name"
              size="small"
              fullWidth
              sx={{
                flex: 1,
                minWidth: 0,
                maxWidth: "100%",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  backgroundColor: COLORS.SUBMIT_ACCENT_BG,
                  height: 50,
                  "& fieldset": {
                    border: "0.8px solid #00000080",
                  },
                  "&:hover fieldset": {
                    border: "0.8px solid #00000080",
                  },
                  "&.Mui-focused fieldset": {
                    border: `0.8px solid ${COLORS.PRIMARY}`,
                  },
                },
                "& input": {
                  fontFamily: poppins.style.fontFamily,
                  fontSize: "14px",
                  height: "50px",
                  boxSizing: "border-box",
                },
              }}
            />

            <TextField
              value={inventionTitle}
              onChange={(e) => setInventionTitle(e.target.value)}
              placeholder="Invention Title"
              size="small"
              fullWidth
              sx={{
                flex: 1,
                minWidth: 0,
                maxWidth: "100%",
                "& .MuiOutlinedInput-root": {
                  borderRadius: "10px",
                  backgroundColor: COLORS.SUBMIT_ACCENT_BG,
                  height: 50,
                  "& fieldset": {
                    border: "0.8px solid #00000080",
                  },
                  "&:hover fieldset": {
                    border: "0.8px solid #00000080",
                  },
                  "&.Mui-focused fieldset": {
                    border: `0.8px solid ${COLORS.PRIMARY}`,
                  },
                },
                "& input": {
                  fontFamily: poppins.style.fontFamily,
                  fontSize: "14px",
                  height: "50px",
                  boxSizing: "border-box",
                },
              }}
            />
          </Box>

          <Box
            sx={{
              width: { xs: "100%", sm: "42%", md: "35%" },
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: { xs: "stretch", sm: "flex-end" },
              alignItems: "center",
              gap: { xs: "10px", sm: "6px", md: "10px" },
              minWidth: 0,
              ml: { md: 2 },
            }}
          >
            <Button
              variant="contained"
              onClick={handleGenerate}
              sx={{
                width: { xs: "100%", sm: 86, md: 113 },
                minWidth: { xs: "100%", sm: 86, md: 113 },
                height: 41,
                borderRadius: "32px",
                p: { xs: "10px", sm: "8px", md: "10px" },
                backgroundColor: COLORS.SECONDARY,
                color: COLORS.WHITE,
                fontFamily: poppins.style.fontFamily,
                fontSize: { xs: "13px", sm: "11px", md: "13px" },
                fontWeight: 600,
                textTransform: "none",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: COLORS.PRIMARY,
                  boxShadow: "none",
                },
              }}
            >
              Generate
            </Button>

            <Button
              variant="contained"
              onClick={() => setOpenPreview(true)}
              sx={{
                width: { xs: "100%", sm: 86, md: 113 },
                minWidth: { xs: "100%", sm: 86, md: 113 },
                height: 41,
                borderRadius: "32px",
                p: { xs: "10px", sm: "8px", md: "10px" },
                backgroundColor: COLORS.SUBMIT_ACCENT_BG,
                color: COLORS.BLACK,
                fontFamily: poppins.style.fontFamily,
                fontSize: { xs: "13px", sm: "11px", md: "13px" },
                fontWeight: 500,
                textTransform: "none",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: COLORS.SOCIAL_ICON_SOFT,
                  boxShadow: "none",
                },
              }}
            >
              Preview
            </Button>

            <Button
              variant="contained"
              onClick={handleReset}
              sx={{
                width: { xs: "100%", sm: 86, md: 113 },
                minWidth: { xs: "100%", sm: 86, md: 113 },
                height: 41,
                borderRadius: "32px",
                p: { xs: "10px", sm: "8px", md: "10px" },
                backgroundColor: COLORS.SUBMIT_ACCENT_BG,
                color: COLORS.BLACK,
                fontFamily: poppins.style.fontFamily,
                fontSize: { xs: "13px", sm: "11px", md: "13px" },
                fontWeight: 500,
                textTransform: "none",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: COLORS.SOCIAL_ICON_SOFT,
                  boxShadow: "none",
                },
              }}
            >
              Reset
            </Button>
          </Box>
        </Box>

        <CertificateImage />

        {}
        <Dialog
          open={openPreview}
          onClose={() => setOpenPreview(false)}
          maxWidth="md"
          fullWidth
          PaperProps={{
            sx: {
              borderRadius: "16px",
              p: { xs: 1.5, sm: 2, md: 3 },
              backgroundColor: COLORS.WHITE,
            },
          }}
        >
          <Box sx={{ position: "relative" }}>
            <IconButton
              onClick={() => setOpenPreview(false)}
              sx={{
                position: "absolute",
                right: { xs: 0, sm: 4 },
                top: { xs: 0, sm: 4 },
                zIndex: 2,
                backgroundColor: COLORS.SUBMIT_ACCENT_BG,
                "&:hover": {
                  backgroundColor: COLORS.SOCIAL_ICON_SOFT,
                },
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>

            <Box sx={{ pt: { xs: 5, sm: 4 } }}>
              <CertificateImage preview={true} />
            </Box>
          </Box>
        </Dialog>
      </Container>
    </Box>
  );
};

export default PatentPreviewSection;