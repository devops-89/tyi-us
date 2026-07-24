"use client";

import React from "react";
import { Box, Container, Stack, Typography, Button } from "@mui/material";
import { ArrowUpRight } from "lucide-react";
import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
import CommonFaqList from "@/components/widgets/common/CommonFaqList";

export interface FaqData {
  sparkle?: string;
  title: string;
  description: string;
  buttonText?: string;
  items: { question: string; answer?: string }[];
}

interface CommonFaqSectionProps {
  data: FaqData;
  showNumbers?: boolean;
}

export default function CommonFaqSection({ data, showNumbers = false }: CommonFaqSectionProps) {
  return (
    <Box
      sx={{
        py: { xs: 4, md: 6 },
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
          {/* Left Side: Title and Description */}
          <Box
            sx={{
              flex: 1,
              width: "100%",
              maxWidth: { xs: "100%", md: 560 },
            }}
          >
            {data.sparkle && (
              <Box sx={{ mb: 1.5 }}>
                <SparkleLabel text={data.sparkle} fontSize={{ xs: "16px", md: "18px" }} />
              </Box>
            )}

            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 400,
                fontSize: { xs: "24px", sm: "30px", md: "35px", lg: "45px" },
                color: Colors.BLACK,
                lineHeight: { xs: "30px", sm: "35px", md: "40px", lg: "60px" },
                mb: 1.5,
              }}
            >
              {data.title}
            </Typography>

            <Typography
              sx={{
                fontFamily: ibmPlexSans.style.fontFamily,
                fontWeight: 400,
                fontSize: { xs: "14px", md: "16px" },
                lineHeight: { xs: 1.2, md: 1.4 },
                color: Colors.TEXT_MUTED,
                mb: 3,
              }}
            >
              {data.description}
            </Typography>

            {data.buttonText && (
              <Button
                variant="outlined"
                endIcon={<ArrowUpRight size={18} />}
                sx={{
                  borderRadius: "50px",
                  px: { xs: 2.5, md: 3 },
                  py: 1,
                  borderColor: Colors.SECONDARY,
                  color: Colors.SECONDARY,
                  backgroundColor: Colors.SOCIAL_ICON_BORDER,
                  textTransform: "none",
                  fontFamily: ibmPlexSans.style.fontFamily,
                  fontWeight: 400,
                  fontSize: { xs: "15px", md: "18px" },
                  width: { xs: "100%", sm: "fit-content" },
                  "&:hover": {
                    backgroundColor: Colors.ACCENT_SOFT,
                    borderColor: Colors.PRIMARY,
                    color: Colors.PRIMARY,
                  },
                }}
              >
                {data.buttonText}
              </Button>
            )}
          </Box>

          {/* Right Side: FAQ List */}
          <Box sx={{ flex: 1.3, width: "100%" }}>
            <Box sx={{ mt: { xs: 0, md: -1.5 } }}>
              <CommonFaqList items={data.items} showNumbers={showNumbers} />
            </Box>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
