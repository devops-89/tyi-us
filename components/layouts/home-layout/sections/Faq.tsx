"use client";

import React, { useMemo, useState } from "react";
import { Box, Container, Stack, Typography, IconButton, Collapse, Button } from "@mui/material";
import { Minus, Plus, ArrowUpRight } from "lucide-react";
import Image from "next/image";
import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
import { ASSETS } from "@/utils/assets";
const { faqs } = WEBSITE_DATA.common;
const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);
  const rows = useMemo(() => faqs.items.map((f, idx) => ({ ...f, idx })), []);
  return (
    <Box sx={{ py: { xs: 8, md: 10 }, backgroundColor: Colors.WHITE, position: "relative", overflow: "hidden" }}>
      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH }}>
        <Stack direction={{ xs: "column", md: "row" }} spacing={{ xs: 6, md: 10 }} alignItems="flex-start">
          <Box sx={{ flex: 1, maxWidth: 560 }}>
            <Box sx={{ mb: 1.5 }}>
              <SparkleLabel text={faqs.sparkle} fontSize={18} />
            </Box>
            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 400,
                fontSize: { xs: 34, md: 45 },
                color: Colors.BLACK,
                lineHeight: "66px",
                mb: 1.5,
              }}
            >
              {faqs.title}
            </Typography>
            <Typography
              sx={{
                fontFamily: ibmPlexSans.style.fontFamily,
                fontWeight: 400,
                fontSize: 20,
                color: Colors.TEXT_MUTED,
                lineHeight: "38px",
                mb: 3,
              }}
            >
              {faqs.description}
            </Typography>
            <Button
              variant="outlined"
              endIcon={<ArrowUpRight size={18} />}
              sx={{
                borderRadius: "50px",
                px: 3,
                py: 1,
                borderColor: Colors.SECONDARY,
                color: Colors.SECONDARY,
                backgroundColor: "rgba(227, 24, 55, 0.08)",
                textTransform: "none",
                fontFamily: ibmPlexSans.style.fontFamily,
                fontWeight: 400,
                fontSize: "18px",
                "&:hover": {
                  backgroundColor: "rgba(227, 24, 55, 0.12)",
                  borderColor: Colors.SECONDARY,
                },
              }}
            >
              {faqs.buttonText}
            </Button>
          </Box>

          <Box sx={{ flex: 1.3, width: "100%" }}>
            <Stack spacing={2}>
              {rows.map(({ question, answer, idx }) => {
                const open = openIndex === idx;
                return (
                  <Box key={question} sx={{ borderBottom: `1px solid ${Colors.BLACK}` }}>
                    <Stack direction="row" alignItems="center" justifyContent="space-between" sx={{ py: 1.5 }}>
                      <Typography
                        sx={{
                          fontFamily: poppins.style.fontFamily,
                          fontWeight: 400,
                          fontSize: { xs: 20, md: 28 },
                          color: Colors.BLACK,
                          lineHeight: "84px",
                        }}
                      >
                        {question}
                      </Typography>
                      <IconButton
                        onClick={() => setOpenIndex(open ? -1 : idx)}
                        sx={{
                          width: 44,
                          height: 44,
                          borderRadius: "999px",
                          color: Colors.BLACK,
                        }}
                      >
                        {open ? <Minus size={22} /> : <Plus size={22} />}
                      </IconButton>
                    </Stack>

                    <Collapse in={open} timeout="auto" unmountOnExit>
                      {answer && (
                        <Typography
                          sx={{
                            pb: 2,
                            fontFamily: ibmPlexSans.style.fontFamily,
                            fontWeight: 400,
                            fontSize: 20,
                            color: Colors.TEXT_MUTED,
                            lineHeight: "38px",
                          }}
                        >
                          {answer}
                        </Typography>
                      )}
                    </Collapse>
                  </Box>
                );
              })}
            </Stack>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
};

export default FaqSection;

