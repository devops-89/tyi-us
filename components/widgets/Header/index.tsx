"use client";

import React from "react";
import { 
  Box, 
  Container, 
  Stack, 
  Typography, 
  Link as MuiLink,
  Button
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { Colors, CONSTANTS } from "@/utils/enum";
import { NAV_ITEMS } from "@/public/data/navigation";
import { poppins } from "@/utils/fonts";
import { ArrowUpRight, Plus } from "lucide-react";

const Header = () => {
  return (
    <Box
      component="header"
      sx={{
        height: CONSTANTS.NAV_HEIGHT,
        width: "100%",
        position: "fixed",
        top: 0,
        zIndex: 1000,
        backgroundColor: Colors.NAV_BG,
        backdropFilter: "blur(50px)",
        borderBottom: `1px solid ${Colors.BORDER}`,
        display: "flex",
        alignItems: "center",
      }}
    >
      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH }}>
        <Stack 
          direction="row" 
          justifyContent="space-between" 
          alignItems="center"
          spacing={2}
        >
          <Link href="/" style={{ textDecoration: "none" }}>
            <Box sx={{ display: "flex", alignItems: "center", gap: 2 }}>
              <Image 
                src="/images/logo.png" 
                alt="America's Top Young Innovators" 
                width={150} 
                height={60} 
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
                  color: Colors.BLACK,
                  "&:hover": { color: Colors.SECONDARY }
                }}
              >
                <Typography 
                  sx={{ 
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 700,
                    fontSize: "14px",
                    letterSpacing: "0.5px"
                  }}
                >
                  {item.label}
                </Typography>
                {item.hasDropdown && <Plus size={14} strokeWidth={3} />}
              </Stack>
            ))}
          </Stack>

          <Button
            variant="contained"
            endIcon={
              <Box 
                sx={{ 
                  backgroundColor: Colors.WHITE, 
                  borderRadius: "50%", 
                  width: 32, 
                  height: 32, 
                  display: "flex", 
                  alignItems: "center", 
                  justifyContent: "center",
                  ml: 1
                }}
              >
                <ArrowUpRight size={18} color={Colors.SECONDARY} />
              </Box>
            }
            sx={{
              backgroundColor: Colors.SECONDARY,
              borderRadius: "50px",
              px: "6px",
              py: "6px",
              pl: 3,
              textTransform: "none",
              fontFamily: poppins.style.fontFamily,
              fontWeight: 700,
              fontSize: "14px",
              boxShadow: "none",
              "&:hover": {
                backgroundColor: Colors.PRIMARY,
                boxShadow: "0 10px 20px rgba(0,0,0,0.1)"
              }
            }}
          >
            Let's Connect
          </Button>
        </Stack>
      </Container>
    </Box>
  );
};

export default Header;
