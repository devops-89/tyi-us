"use client";

import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { COLORS, CONSTANTS } from "@/utils/enum";
import MetricsCard from "@/components/widgets/common/Metrics-Card";
import { METRICS_DATA } from "@/public/data/insights";

const MetricsSection = () => {
  return (
    <Box sx={{  py: { xs: 4, md: 8 }, backgroundColor: COLORS.WHITE }}>
      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH }}>
        <Grid container spacing={4}>
          {METRICS_DATA.map((metric, index) => (
            <Grid size={{ xs: 6, md: 3 }} key={index}>
              <MetricsCard {...metric} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default MetricsSection;
