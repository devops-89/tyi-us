import { Box, Container, Grid } from "@mui/material";
import { Colors, CONSTANTS } from "@/utils/enum";
import { WEBSITE_DATA } from "@/utils/website";
import SectionTitle from "@/components/widgets/SectionTitle";
import ServiceCard from "@/components/widgets/common/Service-Card";

const ServicesList = () => {
  const { list } = WEBSITE_DATA.services;
  return (
    <Box sx={{py: { xs: 4, md: 6 }, backgroundColor: Colors.WHITE}}>
      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH }}>
        <SectionTitle 
          title={list.title} 
          subtitle={list.subtitle}
        />
        <Grid container spacing={4}>
          {list.items.map((service) => (
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
