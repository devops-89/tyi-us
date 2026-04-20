"use client";
import React from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Button
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { COLORS, CONSTANTS } from "@/utils/enum";
import { NAV_ITEMS } from "@/public/data/navigation";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { ArrowUpRight, Plus } from "lucide-react";
import { ASSETS } from "@/utils/assets";
const Navbar = () => {
  return (
    <Box
      component="nav"
      sx={{
        height: CONSTANTS.NAV_HEIGHT,
        width: "100%",
        position: "fixed",
        top: 0,
        zIndex: 1000,
        backgroundColor: COLORS.WHITE,
        boxShadow: "0px 0px 5px rgba(0,0,0,0.1)",
        borderBottom: `1px solid ${COLORS.BORDER}`,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH }}>
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <Box sx={{ display: "flex", alignItems: "center", width: "180px" }}>
              <Image
                src={ASSETS.IMAGES.LOGO}
                alt="Logo"
                width={120}
                height={46}
                style={{ objectFit: "contain" }}
              />
            </Box>
          </Link>
          <Stack direction="row" spacing={4} alignItems="center">
            {NAV_ITEMS.map((item) => (
              <Stack
                key={item.label}
                direction="row"
                alignItems="center"
                spacing={0.5}
                component={Link}
                href={item.href}
                sx={{
                  textDecoration: "none",
                  color: COLORS.BLACK,
                  "&:hover": { color: COLORS.SECONDARY },
                  transition: "color 0.2s ease"
                }}
              >
                <Typography
                  sx={{
                    fontFamily: ibmPlexSans.style.fontFamily,
                    fontWeight: 500,
                    fontSize: "14px",
                  }}
                >
                  {item.label}
                </Typography>
                {item.hasDropdown && (
                  <Plus
                    size={16}
                    strokeWidth={2.5}
                    style={{ color: COLORS.BLACK, opacity: 0.7 }}
                  />
                )}
              </Stack>
            ))}
          </Stack>
          <Box sx={{ width: "180px", display: "flex", justifyContent: "flex-end" }}>
            <Button
              variant="contained"
              endIcon={
                <Box
                  sx={{
                    backgroundColor: COLORS.WHITE,
                    borderRadius: "50%",
                    width: 30,
                    height: 30,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    ml: 1,
                    mr:1, 
                  }}
                >
                  <ArrowUpRight size={20} color={COLORS.SECONDARY} />
                </Box>
              }
              sx={{
                backgroundColor: COLORS.SECONDARY,
                borderRadius: "50px",
                px: "4px",
                py: "7px",
                pl: 2,
                textTransform: "none",
                fontFamily: ibmPlexSans.style.fontFamily,
                fontWeight: 600,
                fontSize: "14px",
                boxShadow: "none",
                "&:hover": {
                  backgroundColor: COLORS.PRIMARY,
                  boxShadow: "0 8px 20px rgba(227, 24, 55, 0.2)"
                }
              }}
            >
              Let's Connect
            </Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default Navbar;
