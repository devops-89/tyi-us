"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";

import { Colors } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";

const { innovation } = WEBSITE_DATA.pastWinners;

const CountUp = ({ value }: { value: string | number }) => {
  const [count, setCount] = useState(0);

  const numericValue =
    typeof value === "number"
      ? value
      : parseInt(String(value).replace(/\D/g, ""), 10);

  const suffix = typeof value === "string" ? value.replace(/[0-9]/g, "") : "";

  useEffect(() => {
    if (Number.isNaN(numericValue)) return;

    let start = 0;
    const duration = 2000;
    const increment = numericValue / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [numericValue]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

const PastWinnersInnovationSection = () => {
  return (
    <Box sx={{ py: { xs: 4, md: 12 }, backgroundColor: Colors.WHITE }}>
      <Container maxWidth={false} sx={{ maxWidth: 1920 }}>
        <Box sx={{ maxWidth: 1454, mx: "auto" }}>
          <Box sx={{ mb: 2 }}>
            <SparkleLabel text={innovation.sparkle} />
          </Box>

          <Typography
            sx={{
              fontFamily: poppins.style.fontFamily,
              fontWeight: 700,
              fontSize: { xs: 30, md: 40 },
              color: Colors.BLACK,
              lineHeight: 1.1,
              mb: 1,
            }}
          >
            {innovation.title}{" "}
            <Box component="span" sx={{ color: Colors.SECONDARY }}>
              {innovation.titleAccent}
            </Box>
          </Typography>

          <Typography
            sx={{
              fontFamily: ibmPlexSans.style.fontFamily,
              fontSize: { xs: 16, md: 18 },
              color: Colors.TEXT_MUTED,
              mb: 6,
            }}
          >
            {innovation.description}
          </Typography>

          {innovation.cards.map((card, idx) => (
            <Grid
              key={idx}
              container
              spacing={6}
              alignItems="center"
              sx={{ mt: idx === 0 ? 0 : 2 }}
            >
              <Grid
                size={{ xs: 12, md: idx === 0 ? 5 : 7 }}
                order={{ xs: 1, md: idx === 0 ? 1 : 2 }}
              >
                <Box
                  sx={{
                    position: "relative",
                    height: 403,
                    width: "100%",
                    borderRadius: "32px",
                    overflow: "hidden",
                    backgroundColor: "#EDEDed",
                  }}
                >
                  <Image
                    src={card.image}
                    alt={card.title}
                    fill
                    style={{ objectFit: "cover" }}
                  />
                </Box>
              </Grid>

              <Grid
                size={{ xs: 12, md: idx === 0 ? 7 : 5 }}
                order={{ xs: 2, md: idx === 0 ? 2 : 1 }}
              >
                <Typography
                  sx={{
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 600,
                    fontSize: 22,
                    color: Colors.BLACK,
                    mb: 2,
                  }}
                >
                  {card.title}
                </Typography>

                <Stack spacing={2}>
                  <Typography
                    sx={{
                      fontFamily: ibmPlexSans.style.fontFamily,
                      fontSize: 18,
                      color: Colors.TEXT_MUTED,
                      textAlign: "justify",
                    }}
                  >
                    {card.desc1}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: ibmPlexSans.style.fontFamily,
                      fontSize: 18,
                      color: Colors.TEXT_MUTED,
                      textAlign: "justify",
                    }}
                  >
                    {card.desc2}
                  </Typography>
                </Stack>
              </Grid>
            </Grid>
          ))}

          <Stack
            direction={{ xs: "column", sm: "row" }}
            justifyContent="center"
            alignItems="center"
            spacing={{ xs: 4, md: 12 }}
            sx={{ mt: 16 }}
          >
            {innovation.stats.map((m) => (
              <Stack key={m.label} spacing={1} alignItems="center">
                <Typography
                  sx={{
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 700,
                    fontSize: { xs: 36, md: 44 },
                    color: Colors.BLACK,
                  }}
                >
                  <CountUp value={m.value} />
                </Typography>

                <Typography
                  sx={{
                    fontFamily: ibmPlexSans.style.fontFamily,
                    fontWeight: 600,
                    fontSize: { xs: 16, md: 18 },
                    color: Colors.TEXT_MUTED,
                    textAlign: "center",
                  }}
                >
                  {m.label}
                </Typography>
              </Stack>
            ))}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
};

export default PastWinnersInnovationSection;