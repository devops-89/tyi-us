"use client";

import React from "react";
import Image from "next/image";
import { Box, Container, Grid, Typography, Button } from "@mui/material";
import { ArrowUpRight } from "lucide-react";
import { motion, Variants } from "framer-motion";

import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";
import Link from "next/link";

const { competitions } = WEBSITE_DATA.about;


const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};


const AboutCompetitionsSection = () => {
  return (
    <Box sx={{ py: { xs: 4, md: 6 }, backgroundColor: Colors.WHITE, overflow: "hidden" }}>
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={fadeInUp}
        >
          <Box
            sx={{
              mb: 2,
              display: "flex",
              justifyContent: { xs: "center", md: "flex-start" },
            }}
          >
            <SparkleLabel text={competitions.sparkle} fontSize={{ xs: "16px", md: "18px" }} />
          </Box>
        </motion.div>

        <Grid container spacing={{ xs: 5, md: 6 }} alignItems="center">
          <Grid size={{ xs: 12, md: 5 }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <motion.div variants={fadeInUp}>
                <Typography
                  sx={{
                    fontFamily: poppins.style.fontFamily,
                    fontWeight: 700,
                    fontSize: { xs: 24, sm: 28, md: 32 },
                    color: Colors.BLACK,
                    mb: 2,
                    lineHeight: { xs: 1.2, md: 1.2 },
                    textAlign: { xs: "center", md: "left" },
                  }}
                >
                  {competitions.title}
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Typography
                  sx={{
                    fontFamily: ibmPlexSans.style.fontFamily,
                    color: Colors.TEXT_MUTED,
                    fontSize: { xs: "14px", md: "16px" },
                    lineHeight: { xs: 1.2, md: 1.4 },
                    mb: { xs: 3, md: 4 },
                    textAlign: { xs: "justify", md: "left" },
                  }}
                >
                  {competitions.description}
                </Typography>
              </motion.div>

              <motion.div variants={fadeInUp}>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "center",
                    "@media (min-width: 768px)": {
                      justifyContent: "flex-start",
                    },
                  }}
                >
                  <Button
                    component={Link}
                    href="https://topyounginnovators.vercel.app/competitions"
                    variant="outlined"
                    endIcon={<ArrowUpRight size={18} />}
                    sx={{
                      borderRadius: "50px",
                      px: { xs: 2.5, md: 3 },
                      borderColor: Colors.SECONDARY,
                      color: Colors.SECONDARY,
                      backgroundColor: Colors.BUTTON_SHADOW,
                      textTransform: "none",
                      fontFamily: poppins.style.fontFamily,
                      fontWeight: 600,
                      width: "fit-content",
                      height: 40,
                      fontSize: "14px",
                      "@media (min-width: 768px)": {
                        width: "auto",
                        height: 48,
                        fontSize: "16px",
                      },
                      "&:hover": {
                        backgroundColor: Colors.SOCIAL_ICON_BORDER,
                        borderColor: Colors.PRIMARY,
                        color: Colors.PRIMARY,
                      },
                    }}
                  >
                    {competitions.buttonText}
                  </Button>
                </Box>
              </motion.div>
            </motion.div>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-100px" }}
              variants={staggerContainer}
            >
              <Grid container spacing={{ xs: 3, md: 4 }}>
                {competitions.items.map((item, index) => (
                  <Grid key={item.title} size={{ xs: 12, sm: 6, md: 6 }}>
                    <motion.div variants={fadeInUp}>
                      <motion.div
                        whileHover={{ scale: 1.02, y: -4 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                      >
                       
                        <Box
                          sx={{
                            position: "relative",
                            width: "100%",
                            height: { xs: 220, sm: 240, md: 260 },
                            borderRadius: 3,
                            overflow: "hidden",
                            cursor: "pointer",
                            boxShadow: "0 4px 20px rgba(0,0,0,0.05)",
                            "&:hover .overlay": {
                              backgroundColor: "rgba(255, 255, 255, 0.55)", 
                            }
                          }}
                        >
                          
                          <Image
                            src={item.image}
                            alt={item.title}
                            fill
                            style={{ objectFit: "cover" }}
                          />

                         
                          <Box
                            className="overlay"
                            sx={{
                              position: "absolute",
                              inset: 0,
                              backgroundColor: "rgba(255, 255, 255, 0.75)",
                              zIndex: 1,
                              transition: "background-color 0.4s ease",
                            }}
                          />

                         
                          <motion.div
                            initial={{ scale: 0.8, opacity: 0 }}
                            whileInView={{ scale: 1, opacity: 1 }}
                            transition={{ delay: 0.2 + (index * 0.15), duration: 0.6, type: "spring", bounce: 0.4 }}
                            style={{
                              position: "absolute",
                              inset: 0,
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                              zIndex: 2,
                              padding: "24px",
                            }}
                          >
                            <Box sx={{ position: "relative", width: "100%", height: "100%" }}>
                              <Image
                                src={item.logo || item.image}
                                alt={`${item.title} Logo`}
                                fill
                                style={{ objectFit: "contain" }}
                              />
                            </Box>
                          </motion.div>
                        </Box>
                      </motion.div>
                    </motion.div>
                  </Grid>
                ))}
              </Grid>
            </motion.div>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default AboutCompetitionsSection;