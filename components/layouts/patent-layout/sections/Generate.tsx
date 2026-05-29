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
import { poppins, ibmPlexSans } from "@/utils/fonts";
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

  const CertificateImage = () => (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        maxWidth: { xs: 340, sm: 520, md: 680 },
        height: { xs: 260, sm: 420, md: 520 },
        mx: "auto",
        borderRadius: "8px",
        overflow: "hidden",
      }}
    >
      <Image
        src={ASSETS.IMAGES.HERO3}
        alt="Patent Certificate Preview"
        fill
        style={{ objectFit: "contain" }}
      />

      {generatedName && (
        <Typography
          sx={{
            position: "absolute",
            top: { xs: "54%", sm: "55%" },
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: poppins.style.fontFamily,
            fontSize: { xs: "12px", sm: "18px", md: "22px" },
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
            top: { xs: "63%", sm: "64%" },
            left: "50%",
            transform: "translateX(-50%)",
            fontFamily: ibmPlexSans.style.fontFamily,
            fontSize: { xs: "10px", sm: "15px", md: "18px" },
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
    <Box sx={{ backgroundColor: COLORS.WHITE, py: { xs: 6, md: 10 } }}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box sx={{ mb: 2 }}>
          <SparkleLabel
            text="Own Your Patent"
            fontSize={14}
            sparklePosition="both"
            color={COLORS.PRIMARY}
          />
        </Box>

        <Typography
          sx={{
            fontFamily: poppins.style.fontFamily,
            fontWeight: 500,
            fontSize: { xs: "26px", md: "40px" },
            color: COLORS.BLACK,
            lineHeight: 1.25,
            mb: 2,
          }}
        >
          Ever Wondered What It Feels Like To See Your Own US Patent?
        </Typography>

        <Typography
          sx={{
            fontFamily: ibmPlexSans.style.fontFamily,
            fontSize: { xs: "16px", md: "22px" },
            color: COLORS.TEXT_MUTED,
            lineHeight: 1.7,
            mb: 4,
          }}
        >
          Now You Can! Enter Your Details To Generate A Personalized Sample U.S.
          Patent Certificate, A Glimpse Into Your Future As An Innovator.
        </Typography>

        <Box
          sx={{
            display: "flex",
            flexDirection: { xs: "column", lg: "row" },
            alignItems: "center",
            gap: { xs: 2, lg: 2 },
            width: "100%",
            mb: { xs: 4, md: 5 },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", lg: "60%" },
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
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
                "& .MuiOutlinedInput-root": {
                  borderRadius: "6px",
                  backgroundColor: "#FDECEF",
                  height: 40,
                },
                "& input": {
                  fontFamily: ibmPlexSans.style.fontFamily,
                  fontSize: "14px",
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
                "& .MuiOutlinedInput-root": {
                  borderRadius: "6px",
                  backgroundColor: "#FDECEF",
                  height: 40,
                },
                "& input": {
                  fontFamily: ibmPlexSans.style.fontFamily,
                  fontSize: "14px",
                },
              }}
            />
          </Box>

          <Box
            sx={{
              width: { xs: "100%", lg: "40%" },
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              justifyContent: { xs: "stretch", lg: "flex-end" },
              gap: 2,
            }}
          >
            <Button
              variant="contained"
              onClick={handleGenerate}
              sx={{
                minWidth: { xs: "100%", sm: 120 },
                height: 40,
                borderRadius: "50px",
                backgroundColor: COLORS.SECONDARY,
                fontFamily: poppins.style.fontFamily,
                fontSize: "13px",
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
                minWidth: { xs: "100%", sm: 120 },
                height: 40,
                borderRadius: "50px",
                backgroundColor: "#FDECEF",
                color: COLORS.BLACK,
                fontFamily: poppins.style.fontFamily,
                fontSize: "13px",
                fontWeight: 500,
                textTransform: "none",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#F8D2DA",
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
                minWidth: { xs: "100%", sm: 120 },
                height: 40,
                borderRadius: "50px",
                backgroundColor: "#FDECEF",
                color: COLORS.BLACK,
                fontFamily: poppins.style.fontFamily,
                fontSize: "13px",
                fontWeight: 500,
                textTransform: "none",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: "#F8D2DA",
                  boxShadow: "none",
                },
              }}
            >
              Reset
            </Button>
          </Box>
        </Box>

        <CertificateImage />

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
                backgroundColor: "#FDECEF",
                "&:hover": {
                  backgroundColor: "#F8D2DA",
                },
              }}
            >
              <CloseIcon fontSize="small" />
            </IconButton>

            <Box sx={{ pt: { xs: 5, sm: 4 } }}>
              <CertificateImage />
            </Box>
          </Box>
        </Dialog>
      </Container>
    </Box>
  );
};

export default PatentPreviewSection;