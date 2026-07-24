"use client";

import React, { useState } from "react";
import { Box, Stack, Typography, IconButton, Collapse } from "@mui/material";
import { Minus, Plus } from "lucide-react";
import { Colors } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";

interface FaqItem {
  question: string;
  answer?: string;
}

interface CommonFaqListProps {
  items: FaqItem[];
  showNumbers?: boolean;
}

export default function CommonFaqList({ items, showNumbers = false }: CommonFaqListProps) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <Stack spacing={2} sx={{ width: "100%" }}>
      {items.map((item, idx) => {
        const open = openIndex === idx;

        return (
          <Box
            key={item.question + idx}
            sx={{
              borderBottom: `1px solid ${Colors.BLACK}`,
            }}
          >
            <Stack
              direction="row"
              alignItems="center"
              justifyContent="space-between"
              onClick={() => setOpenIndex(open ? -1 : idx)}
              sx={{
                py: { xs: 2, md: 1.5 },
                gap: 2,
                cursor: "pointer",
                "&:hover": {
                  "& .faq-icon": {
                    color: Colors.PRIMARY,
                  },
                },
              }}
            >
              <Typography
                sx={{
                  fontFamily: poppins.style.fontFamily,
                  fontWeight: 400,
                  fontSize: { xs: 18, sm: 22, md: 22, lg: 28 },
                  color: Colors.BLACK,
                  lineHeight: { xs: "28px", md: "40px", lg: "40px" },
                  flex: 1,
                }}
              >
                {showNumbers ? `${idx + 1}. ` : ""}
                {item.question}
              </Typography>

              <IconButton
                className="faq-icon"
                component="div"
                disableRipple
                sx={{
                  width: { xs: 36, md: 44 },
                  height: { xs: 36, md: 44 },
                  borderRadius: "999px",
                  color: open ? Colors.PRIMARY : Colors.SECONDARY,
                  flexShrink: 0,
                  transition: "color 0.2s",
                }}
              >
                {open ? <Minus size={22} /> : <Plus size={22} />}
              </IconButton>
            </Stack>

            <Collapse in={open} timeout="auto" unmountOnExit>
              {item.answer && (
                <Typography
                  sx={{
                    pb: 2,
                    pr: { xs: 1, md: 4 },
                    fontFamily: ibmPlexSans.style.fontFamily,
                    fontWeight: 400,
                    fontSize: { xs: "14px", md: "16px" },
                    lineHeight: { xs: 1.2, md: 1.4 },
                    color: Colors.TEXT_MUTED,
                    marginLeft: showNumbers ? { xs: "18px", md: "28px" } : 0,
                  }}
                >
                  {item.answer}
                </Typography>
              )}
            </Collapse>
          </Box>
        );
      })}
    </Stack>
  );
}
