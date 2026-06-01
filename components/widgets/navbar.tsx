"use client";

import React, { useState } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  Button,
  Drawer,
  IconButton,
  Menu as MuiMenu,
  MenuItem,
  Collapse,
} from "@mui/material";
import Link from "next/link";
import Image from "next/image";
import { COLORS, CONSTANTS } from "@/utils/enum";
import { NAV_ITEMS } from "@/public/data/navigation";
import { ibmPlexSans } from "@/utils/fonts";
import { ArrowUpRight, ChevronDown, Menu, X } from "lucide-react";
import { ASSETS } from "@/utils/assets";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [desktopDropdownItems, setDesktopDropdownItems] = useState<any[]>([]);
  const [mobileOpenDropdown, setMobileOpenDropdown] = useState<string | null>(
    null
  );

  const handleDesktopDropdownOpen = (
    event: React.MouseEvent<HTMLElement>,
    items: any[] = []
  ) => {
    setAnchorEl(event.currentTarget);
    setDesktopDropdownItems(items);
  };

  const handleDesktopDropdownClose = () => {
    setAnchorEl(null);
    setDesktopDropdownItems([]);
  };

  return (
    <>
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
          <Stack direction="row" justifyContent="space-between" alignItems="center">
            <Link href="/" style={{ textDecoration: "none" }}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  width: "180px",
                }}
              >
                <Image
                  src={ASSETS.IMAGES.LOGO}
                  alt="Logo"
                  width={120}
                  height={46}
                  style={{ objectFit: "contain" }}
                />
              </Box>
            </Link>

            <Stack
              direction="row"
              spacing={4}
              alignItems="center"
              sx={{ display: { xs: "none", lg: "flex" } }}
            >
              {NAV_ITEMS.map((item) =>
                item.hasDropdown && item.dropdownItems ? (
                  <Stack
                    key={item.label}
                    direction="row"
                    alignItems="center"
                    spacing={0.5}
                    onClick={(event) =>
                      handleDesktopDropdownOpen(event, item.dropdownItems)
                    }
                    sx={{
                      cursor: "pointer",
                      color: COLORS.BLACK,
                      "&:hover": { color: COLORS.SECONDARY },
                      transition: "color 0.2s ease",
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

                    <ChevronDown size={16} strokeWidth={2.5} />
                  </Stack>
                ) : (
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
                      transition: "color 0.2s ease",
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
                  </Stack>
                )
              )}
            </Stack>

            <MuiMenu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleDesktopDropdownClose}
              PaperProps={{
                sx: {
                  mt: 1.5,
                  borderRadius: "12px",
                  boxShadow: "0 10px 30px rgba(0,0,0,0.12)",
                  minWidth: 220,
                },
              }}
            >
              {desktopDropdownItems.map((dropdownItem) => (
                <MenuItem
                  key={dropdownItem.href}
                  component={Link}
                  href={dropdownItem.href}
                  onClick={handleDesktopDropdownClose}
                  sx={{
                    fontFamily: ibmPlexSans.style.fontFamily,
                    fontWeight: 500,
                    fontSize: "14px",
                    py: 1.2,
                  }}
                >
                  {dropdownItem.label}
                </MenuItem>
              ))}
            </MuiMenu>

            <Box
              sx={{
                width: "180px",
                display: { xs: "none", lg: "flex" },
                justifyContent: "flex-end",
              }}
            >
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
                      mr: 1,
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
                    boxShadow: "0 8px 20px rgba(227, 24, 55, 0.2)",
                  },
                }}
              >
                Let&apos;s Connect
              </Button>
            </Box>

            <IconButton
              onClick={() => setOpen(true)}
              sx={{ display: { xs: "flex", lg: "none" } }}
            >
              <Menu size={28} />
            </IconButton>
          </Stack>
        </Container>
      </Box>

      <Drawer anchor="right" open={open} onClose={() => setOpen(false)}>
        <Box sx={{ width: 280, height: "100%", p: 3 }}>
          <Box sx={{ display: "flex", justifyContent: "flex-end", mb: 4 }}>
            <IconButton onClick={() => setOpen(false)}>
              <X size={28} />
            </IconButton>
          </Box>

          <Stack spacing={2.5}>
            {NAV_ITEMS.map((item) => {
              const hasDropdown = item.hasDropdown && item.dropdownItems;

              if (hasDropdown) {
                const isOpen = mobileOpenDropdown === item.label;

                return (
                  <Box key={item.label}>
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      onClick={() =>
                        setMobileOpenDropdown(isOpen ? null : item.label)
                      }
                      sx={{
                        cursor: "pointer",
                        color: COLORS.BLACK,
                      }}
                    >
                      <Typography
                        sx={{
                          fontFamily: ibmPlexSans.style.fontFamily,
                          fontWeight: 500,
                          fontSize: "18px",
                        }}
                      >
                        {item.label}
                      </Typography>

                      <ChevronDown
                        size={18}
                        style={{
                          transform: isOpen ? "rotate(180deg)" : "rotate(0deg)",
                          transition: "transform 0.2s ease",
                        }}
                      />
                    </Stack>

                    <Collapse in={isOpen} timeout="auto" unmountOnExit>
                      <Stack spacing={1.5} sx={{ pl: 2, pt: 2 }}>
                        {item.dropdownItems?.map((dropdownItem) => (
                          <Typography
                            key={dropdownItem.href}
                            component={Link}
                            href={dropdownItem.href}
                            onClick={() => setOpen(false)}
                            sx={{
                              fontFamily: ibmPlexSans.style.fontFamily,
                              fontWeight: 500,
                              fontSize: "15px",
                              textDecoration: "none",
                              color: COLORS.TEXT_MUTED,
                              "&:hover": {
                                color: COLORS.SECONDARY,
                              },
                            }}
                          >
                            {dropdownItem.label}
                          </Typography>
                        ))}
                      </Stack>
                    </Collapse>
                  </Box>
                );
              }

              return (
                <Stack
                  key={item.label}
                  direction="row"
                  alignItems="center"
                  spacing={1}
                  component={Link}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  sx={{
                    textDecoration: "none",
                    color: COLORS.BLACK,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: ibmPlexSans.style.fontFamily,
                      fontWeight: 500,
                      fontSize: "18px",
                    }}
                  >
                    {item.label}
                  </Typography>
                </Stack>
              );
            })}

            <Button
              variant="contained"
              endIcon={<ArrowUpRight size={18} />}
              sx={{
                mt: 2,
                backgroundColor: COLORS.SECONDARY,
                borderRadius: "50px",
                textTransform: "none",
                fontFamily: ibmPlexSans.style.fontFamily,
                fontWeight: 600,
                fontSize: "14px",
                "&:hover": {
                  backgroundColor: COLORS.PRIMARY,
                },
              }}
            >
              Let&apos;s Connect
            </Button>
          </Stack>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;