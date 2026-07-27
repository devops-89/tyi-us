"use client";

import React, { useEffect, useState, useRef } from "react";
import Image from "next/image";
import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import { useInView, motion } from "framer-motion";

import { Colors } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";

const { innovation } = WEBSITE_DATA.pastWinners;

const CountUp = ({ value }: { value: string | number }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });

  const numericValue =
    typeof value === "number"
      ? value
      : parseInt(String(value).replace(/\D/g, ""), 10);

  const suffix = typeof value === "string" ? value.replace(/[0-9]/g, "") : "";

  useEffect(() => {
    if (!isInView || Number.isNaN(numericValue)) return;

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
  }, [numericValue, isInView]);

  return (
    <span ref={ref}>
      {count}
      {suffix}
    </span>
  );
};

const PastWinnersInnovationSection = () => {
  return (
    <Box sx={{py: { xs: 4, md: 6 }, backgroundColor: Colors.WHITE}}>
      <Container maxWidth={false} sx={{ maxWidth: 1920 }}>
        <Box sx={{ maxWidth: 1454, mx: "auto" }}>
          <Box
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
          >
            <Box sx={{ mb: 2 }}>
              <SparkleLabel text={innovation.sparkle} fontSize={{ xs:"16px", md:"18px"}} />
            </Box>

            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 700,
                fontSize: { xs: 30, md: 34, lg: 40 }, 
                color: Colors.BLACK,
                lineHeight: { xs: 1, md: 1.4 }, 

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
                fontSize: { xs: "14px", md: "16px" },
                    lineHeight: { xs: 1.2, md: 1.4 },
                color: Colors.TEXT_MUTED,
                mb: { xs: 3, md: 6 },
              }}
            >
              {innovation.description}
            </Typography>
          </Box>

          {innovation.cards.map((card, idx) => (
            <Grid
              key={idx}
              component={motion.div}
              initial={{ opacity: 0, x: idx % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.7, delay: idx * 0.2 }}
              container
              spacing={{ xs: 3, md: 6 }}
              alignItems="center"
              sx={{ mt: idx === 0 ? 0 : { xs: 4, md: 2 } }}
            >
              <Grid
                size={{ xs: 12, md: idx === 0 ? 5 : 7 }}
                order={{ xs: 1, md: idx === 0 ? 1 : 2 }}
              >
                <Box
                  sx={{
                    position: "relative",
                    height: { xs: 220, sm: 320, md: 403 },
                    width: "100%",
                    borderRadius: "32px",
                    overflow: "hidden",
                    backgroundColor: "#EDEDed",
                    transition: "transform 0.4s ease",
                    "&:hover": {
                      transform: "scale(1.02)",
                    }
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
                    fontSize: { xs: 18, md: 19, lg: 24 }, 
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
                     fontSize: { xs: "14px", md: "16px" },
                  lineHeight: { xs: 1.2, md: 1.4 },
                      color: Colors.TEXT_MUTED,
                      textAlign:  "justify" ,
                    }}
                  >
                    {card.desc1}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: ibmPlexSans.style.fontFamily,
                     fontSize: { xs: "14px", md: "16px" },
                  lineHeight: { xs: 1.2, md: 1.4 },
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
            component={motion.div}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.6 }}
            direction={{ xs: "column", sm: "row" }}
            justifyContent="center"
            alignItems="center"
            spacing={{ xs: 4, md: 12 }}
            sx={{ mt: { xs: 6, md: 16 } }}
          >
            {innovation.stats.map((m) => (
              <Stack key={m.label} spacing={1} alignItems="center">
                <Typography
                  sx={{
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 700,
                    fontSize: { xs: 25, md: 28, lg: 34 }, 
                    color: Colors.BLACK,
                  }}
                >
                  <CountUp value={m.value} />
                </Typography>

                <Typography
                  sx={{
                    fontFamily: ibmPlexSans.style.fontFamily,
                    fontWeight: 600,
                    fontSize: { xs: 16, md: 16, lg: 18 }, 
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