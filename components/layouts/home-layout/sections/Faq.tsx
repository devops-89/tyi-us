"use client";

import React, { useMemo, useState } from "react";
import {
  Box,
  Container,
  Stack,
  Typography,
  IconButton,
  Collapse,
  Button,
} from "@mui/material";
import { Minus, Plus, ArrowUpRight } from "lucide-react";
import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";

const { faqs } = WEBSITE_DATA.common;

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState<number>(0);

  const rows = useMemo(
    () => faqs.items.map((f, idx) => ({ ...f, idx })),
    []
  );

  return (
    <Box
      sx={{
        py: {  md: 10 },
        backgroundColor: Colors.WHITE,
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Stack
          direction={{ xs: "column", md: "row" }}
          spacing={{ xs: 5, md: 10 }}
          alignItems="flex-start"
        >
          {/* Left Content */}
          <Box
            sx={{
              flex: 1,
              width: "100%",
              maxWidth: { xs: "100%", md: 560 },
            }}
          >
            <Box sx={{ mb: 1.5 }}>
              <SparkleLabel text={faqs.sparkle} fontSize={18} />
            </Box>

            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 400,
                fontSize: { xs: 30, sm: 36, md: 40 , lg:45},
                color: Colors.BLACK,
                lineHeight: { xs: "42px", sm: "50px", md: "55px", lg:"66px" },
                mb: 1.5,
              }}
            >
              {faqs.title}
            </Typography>

            <Typography
              sx={{
                fontFamily: ibmPlexSans.style.fontFamily,
                fontWeight: 400,
                fontSize: { xs: 16, md: 20 },
                color: Colors.TEXT_MUTED,
                lineHeight: { xs: "28px", md: "38px" },
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
                px: { xs: 2.5, md: 3 },
                py: 1,
                borderColor: Colors.SECONDARY,
                color: Colors.SECONDARY,
                backgroundColor: "rgba(227, 24, 55, 0.08)",
                textTransform: "none",
                fontFamily: ibmPlexSans.style.fontFamily,
                fontWeight: 400,
                fontSize: { xs: "15px", md: "18px" },
                width: { xs: "100%", sm: "fit-content" },
                "&:hover": {
                  backgroundColor: "rgba(227, 24, 55, 0.12)",
                  borderColor: Colors.SECONDARY,
                },
              }}
            >
              {faqs.buttonText}
            </Button>
          </Box>

          {/* FAQ Right Section */}
          <Box sx={{ flex: 1.3, width: "100%" }}>
            <Stack spacing={2}>
              {rows.map(({ question, answer, idx }) => {
                const open = openIndex === idx;

                return (
                  <Box
                    key={question}
                    sx={{
                      borderBottom: `1px solid ${Colors.BLACK}`,
                    }}
                  >
                    <Stack
                      direction="row"
                      alignItems="center"
                      justifyContent="space-between"
                      sx={{
                        py: { xs: 2, md: 1.5 },
                        gap: 2,
                      }}
                    >
                      <Typography
                        sx={{
                                                 fontFamily: poppins.style.fontFamily,
                                                 fontWeight: 400,
                                                 fontSize: { xs: 18, sm: 22, md: 20, lg: 28 },
                                                 color: Colors.BLACK,
                                                 lineHeight: { xs: "28px", md: "40px", lg: "84px" },
                                                 flex: 1,
                                               }}
                      >
                        {question}
                      </Typography>

                      <IconButton
                        onClick={() =>
                          setOpenIndex(open ? -1 : idx)
                        }
                        sx={{
                          width: { xs: 36, md: 44 },
                          height: { xs: 36, md: 44 },
                          borderRadius: "999px",
                          color: Colors.BLACK,
                          flexShrink: 0,
                        }}
                      >
                        {open ? (
                          <Minus size={22} />
                        ) : (
                          <Plus size={22} />
                        )}
                      </IconButton>
                    </Stack>

                    <Collapse
                      in={open}
                      timeout="auto"
                      unmountOnExit
                    >
                      {answer && (
                        <Typography
                          sx={{
                            pb: 2,
                            pr: { xs: 1, md: 4 },
                            fontFamily:
                              ibmPlexSans.style.fontFamily,
                            fontWeight: 400,
                            fontSize: { xs: 16, md: 20 },
                            color: Colors.TEXT_MUTED,
                            lineHeight: { xs: "28px", md: "38px" },
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