"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Box, Container, Grid, Typography, Stack, IconButton, Divider } from "@mui/material";
import { COLORS, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { ASSETS } from "@/utils/assets";
import { WEBSITE_DATA } from "@/utils/website";
import { FooterVariant } from "@/utils/types";

const Footer = ({ variant = "usa" }: { variant?: FooterVariant }) => {
  const footerData = WEBSITE_DATA.common.footer;

  const orgName = variant === "uae" ? footerData.orgNameUAE : footerData.orgNameUSA;
  const hqLabel = variant === "uae" ? footerData.hqLabelUAE : footerData.hqLabelUSA;

  const linkStyle = {
    color: COLORS.FOOTER_TEXT,
    fontSize: "15px",
    fontFamily: ibmPlexSans.style.fontFamily,
    textDecoration: "none",
    lineHeight: "1.8",
    transition: "color 0.2s ease",
  };

  return (
    <Box
      component="footer"
      sx={{ backgroundColor: COLORS.FOOTER_BG, color: COLORS.WHITE }}
    >
      {}
      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH, pt: { xs: 7, md: 9 }, pb: { xs: 5, md: 7 } }}>
        <Grid container spacing={{ xs: 5, md: 4 }}>

          <Grid size={{ xs: 12, md: 3.5 }}>
            <Stack spacing={3}>
              <Box sx={{ width: 220, maxWidth: "100%" }}>
                <Image
                  src={ASSETS.IMAGES.FOOTER_LOGO}
                  alt={orgName}
                  width={220}
                  height={90}
                  style={{ width: "100%", height: "auto", objectFit: "contain" }}
                />
              </Box>

              {}
              <Typography
                sx={{
                  fontFamily: ibmPlexSans.style.fontFamily,
                  fontSize: "14px",
                  color: COLORS.FOOTER_TEXT,
                  lineHeight: "24px",
                  maxWidth: 300,
                  textAlign: "justify",
                }}
              >
                {footerData.description}
              </Typography>

              {}
              <Stack direction="row" spacing={1.5} flexWrap="wrap">
                {footerData.socialLinks.map(({ Icon, href, label }, idx) => (
                  <IconButton
                    key={idx}
                    component={Link}
                    href={href}
                    aria-label={label}
                    sx={{
                      backgroundColor: COLORS.WHITE,
                      width: 38,
                      height: 38,
                      color: COLORS.SOCIAL_ICON,
                      borderRadius: "50%",
                      "&:hover": {
                        backgroundColor: COLORS.GRAY_LIGHT,
                        transform: "translateY(-2px)",
                      },
                      transition: "all 0.2s ease",
                    }}
                  >
                    <Icon size={16} strokeWidth={2} />
                  </IconButton>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {}
          <Grid size={{ xs: 12, sm: 4, md: 2.5 }}>
            <Stack spacing={3}>
              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 700,
                  fontSize: "18px",
                  color: COLORS.WHITE,
                  letterSpacing: "0.2px",
                }}
              >
                {footerData.quickLinksLabel}
              </Typography>
              <Stack spacing={1.2}>
                {footerData.quickLinks.map((l, index) => (
                  <Link key={index} href={l.href} style={linkStyle}>
                    {l.label}
                  </Link>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {}
          <Grid size={{ xs: 12, sm: 4, md: 3 }}>
            <Stack spacing={3}>
              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 700,
                  fontSize: "18px",
                  color: COLORS.WHITE,
                  letterSpacing: "0.2px",
                }}
              >
                {footerData.competitionLinksLabel}
              </Typography>
              <Stack spacing={1.2}>
                {footerData.competitionLinks.map((l, index) => (
                  <Link key={index} href={l.href} style={linkStyle}>
                    {l.label}
                  </Link>
                ))}
              </Stack>
            </Stack>
          </Grid>

          {}
          <Grid size={{ xs: 12, sm: 4, md: 3 }}>
            <Stack spacing={3}>
              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 700,
                  fontSize: "18px",
                  color: COLORS.WHITE,
                  letterSpacing: "0.2px",
                }}
              >
                {footerData.contactInformationLabel}
              </Typography>
              <Stack spacing={2}>
                {footerData.contactItems.map(({ Icon, textInfo, isDynamicHq }, idx) => {
                  const displayLabel = isDynamicHq ? hqLabel : textInfo;
                  return (
                    <Stack key={idx} direction="row" spacing={1.5} alignItems="flex-start">
                      <Box
                        sx={{
                          mt: "2px",
                          flexShrink: 0,
                          color: "rgba(255,255,255,0.7)",
                        }}
                      >
                        <Icon size={16} strokeWidth={1.8} />
                      </Box>
                      <Typography
                        sx={{
                          color: COLORS.FOOTER_TEXT,
                          fontSize: "14px",
                          fontFamily: ibmPlexSans.style.fontFamily,
                          lineHeight: "22px",
                        }}
                      >
                        {displayLabel}
                      </Typography>
                    </Stack>
                  );
                })}
              </Stack>
            </Stack>
          </Grid>

        </Grid>
      </Container>

      {}
      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH, pb: 4 }}>
        <Divider sx={{ borderColor: "rgba(255,255,255,0.12)" }} />
        <Stack
          direction={{ xs: "column", sm: "row" }}
          spacing={{ xs: 1.5, sm: 0 }}
          alignItems={{ xs: "flex-start", sm: "center" }}
          justifyContent="space-between"
          sx={{ py: 3 }}
        >
          <Typography
            sx={{
              fontFamily: ibmPlexSans.style.fontFamily,
              fontSize: "14px",
              color: COLORS.FOOTER_TEXT,
            }}
          >
            {footerData.copyrightTemplate.replace("{orgName}", orgName)}
          </Typography>
          <Stack direction="row" spacing={3}>
            <Link
              href="#"
              style={{
                color: COLORS.WHITE,
                fontSize: "14px",
                fontFamily: ibmPlexSans.style.fontFamily,
                textDecoration: "none",
              }}
            >
              {footerData.privacyPolicy}
            </Link>
            <Link
              href="#"
              style={{
                color: COLORS.WHITE,
                fontSize: "14px",
                fontFamily: ibmPlexSans.style.fontFamily,
                textDecoration: "none",
              }}
            >
              {footerData.termsOfUse}
            </Link>
          </Stack>
        </Stack>
        <Divider sx={{ borderColor: "rgba(255,255,255,0.12)" }} />
      </Container>
    </Box>
  );
};

export default Footer;
