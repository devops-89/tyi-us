"use client";

import React from "react";
import { Box, Container, Grid } from "@mui/material";
import { CONSTANTS } from "@/utils/enum";
import SectionTitle from "@/components/widgets/SectionTitle";
import ServiceCard from "@/components/widgets/common/Service-Card";
import { SERVICES_DATA } from "@/public/data/services";

const ServicesList = () => {
  return (
    <Box sx={{ py: { xs: 10, md: 15 } }}>
      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH }}>
        <SectionTitle 
          title="Our Innovation Services" 
          subtitle="Explore the various ways we support and nurture the next generation of innovators."
        />
        <Grid container spacing={4}>
          {SERVICES_DATA.map((service) => (
            <Grid size={{ xs: 12, sm: 6, md: 3 }} key={service.id}>
              <ServiceCard 
                title={service.title} 
                description={service.description} 
                iconName={service.icon || "Activity"} 
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default ServicesList;
