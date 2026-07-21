"use client";

import React from "react";
import {
  Box,
  Container,
  Grid,
  Stack,
  Typography,
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormControlLabel,
} from "@mui/material";
import { ArrowUpRight } from "lucide-react";
import { useFormik } from "formik";
import * as Yup from "yup";

import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";

const fieldSx = {
  "& .MuiInputBase-root:before": { borderBottomColor: "#A9A9A9" },
  "& .MuiInputBase-root:hover:not(.Mui-disabled):before": {
    borderBottomColor: "#A9A9A9",
  },
  "& .MuiInputBase-root:after": { borderBottomColor: Colors.BLACK },
  "& .MuiInputBase-input": {
    fontFamily: poppins.style.fontFamily,
    fontSize: { xs: 14, md: 16 },
    py: 1.5,
  },
  "& .MuiInputLabel-root": {
    fontFamily: poppins.style.fontFamily,
    fontSize: { xs: 14, md: 16 },
    color: "#8D8D8D",
  },
};

const { contact } = WEBSITE_DATA;

const validationSchema = Yup.object({
  inquiryType: Yup.string().required(),
  firstName: Yup.string().required("First name is required"),
  lastName: Yup.string().required("Last name is required"),
  email: Yup.string().email("Enter a valid email").required("Email is required"),
  phone: Yup.string().required("Phone number is required"),
  message: Yup.string().required("Message is required"),
});

const ContactSection = () => {
  const formik = useFormik({
    initialValues: {
      inquiryType: contact.infoSnippets[0], 
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      message: "", 
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      console.log("Form Submitted:", values);
      // Add your submission logic here
    },
  });

  return (
    <Box
      sx={{py: { xs: 4, md: 6 }, backgroundColor: Colors.WHITE}}
    >
      <Container
        maxWidth={false}
        sx={{
          maxWidth: CONSTANTS.MAX_WIDTH,
          px: { xs: 2, sm: 3, md: 4 },
        }}
      >
        <Box
          sx={{
            mb: { xs: 3, md: 2 },
            display: "flex",
            justifyContent: { xs: "center", md: "flex-start" },
          }}
        >
          <Stack
            direction="row"
            alignItems="center"
            spacing={1.25}
            sx={{
              px: 2.5,
              py: 1.25,
              borderRadius: "40px",
              border: `1px solid ${Colors.BORDER}`,
              backgroundColor: "rgba(255,255,255,0.5)",
              backdropFilter: "blur(7.5px)",
            }}
          >
            <SparkleLabel text={contact.sparkle} fontSize={{ xs:"16px", md:"18px"}} />
          </Stack>
        </Box>

        <Grid container spacing={{ xs: 5, md: 8 }} alignItems="flex-start">
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 700,
                fontSize: { xs: 30, sm: 34, md: 40 },
                color: Colors.BLACK,
                letterSpacing: "-0.4px",
                mb: 2,
                lineHeight: { xs: 1.25, md: 1.2 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {contact.title}
            </Typography>

            <Typography
              sx={{
                fontFamily: ibmPlexSans.style.fontFamily,
               fontSize: { xs: "14px", md: "16px" },
                  lineHeight: { xs: 1.2, md: 1.4 },
                color: Colors.TEXT_MUTED,
               
                mb: { xs: 3, md: 4 },
                whiteSpace: "pre-line",
                textAlign: { xs: "justify", md: "left" },
              }}
            >
              {contact.description}
            </Typography>

            {}
            <RadioGroup
              name="inquiryType"
              value={formik.values.inquiryType}
              onChange={formik.handleChange}
              sx={{ 
                mt: { xs: 3, md: 6 }, 
                display: "flex", 
                flexDirection: "column", 
                gap: { xs: 2, md: 3 } 
              }}
            >
              {contact.infoSnippets.map((snippet, idx) => (
                <FormControlLabel
                  key={idx}
                  value={snippet}
                  control={
                    <Radio
                      sx={{
                        p: 0,
                        mr: 1.5,
                        alignSelf: "flex-start",
                        mt: "4px", 
                        color: Colors.SECONDARY,
                        "&.Mui-checked": {
                          color: Colors.SECONDARY,
                        },
                      }}
                    />
                  }
                  label={
                    <Typography
                      sx={{
                        fontFamily: poppins.style.fontFamily,
                        fontSize: { xs: 13, md: 14 },
                        color: "#2F2F2F",
                        letterSpacing: { xs: "0.4px", md: "1.08px" },
                        lineHeight: {
                          xs: "24px",
                          md: idx === 0 ? "34px" : "28px",
                        },
                      }}
                    >
                      {snippet}
                    </Typography>
                  }
                  sx={{ m: 0, alignItems: "flex-start" }}
                />
              ))}
            </RadioGroup>

            <Typography
              sx={{
                fontFamily: ibmPlexSans.style.fontFamily,
                fontSize: { xs: "14px", md: "16px" },
                  lineHeight: { xs: 1.2, md: 1.4 },
                color: Colors.TEXT_MUTED,
            
                mb: 4,
                whiteSpace: "pre-line",
                mt: { xs: 4, md: 6 },
                textAlign: { xs: "center", md: "left" },
              }}
            >
              {contact.newUpdate}
            </Typography>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box component="form" onSubmit={formik.handleSubmit} sx={{ p: { xs: 0, md: 2 } }}>
              <Grid container spacing={{ xs: 3, md: 4 }}>
                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    variant="standard"
                    label={contact.form.firstName}
                    name="firstName"
                    value={formik.values.firstName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                    helperText={formik.touched.firstName && formik.errors.firstName}
                    sx={fieldSx}
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    variant="standard"
                    label={contact.form.lastName}
                    name="lastName"
                    value={formik.values.lastName}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                    helperText={formik.touched.lastName && formik.errors.lastName}
                    sx={fieldSx}
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    variant="standard"
                    label={contact.form.email}
                    name="email"
                    value={formik.values.email}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.email && Boolean(formik.errors.email)}
                    helperText={formik.touched.email && formik.errors.email}
                    sx={fieldSx}
                  />
                </Grid>

                <Grid size={{ xs: 12, sm: 6 }}>
                  <TextField
                    fullWidth
                    variant="standard"
                    label={contact.form.phone}
                    name="phone"
                    value={formik.values.phone}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.phone && Boolean(formik.errors.phone)}
                    helperText={formik.touched.phone && formik.errors.phone}
                    sx={fieldSx}
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    variant="standard"
                    label={contact.form.message}
                    name="message"
                    value={formik.values.message}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    error={formik.touched.message && Boolean(formik.errors.message)}
                    helperText={formik.touched.message && formik.errors.message}
                    sx={fieldSx}
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <Button
                    type="submit"
                    variant="contained"
                    endIcon={<ArrowUpRight size={18} />}
                    sx={{
                      borderRadius: "50px",
                      backgroundColor: Colors.SECONDARY,
                      fontFamily: poppins.style.fontFamily,
                      fontWeight: 600,
                      textTransform: "none",
                      "&:hover": { backgroundColor: Colors.PRIMARY },

                      
                      width: "fit-content",
                      height: 40,
                      fontSize: "14px",
                      px: 2.5,
                      "@media (min-width: 768px)": {
                        width: "auto",
                        height: 52,
                        fontSize: "15px",
                        px: 3,
                      },
                      "@media (min-width: 900px)": { 
                        height: 60,
                        fontSize: "16px",
                        px: 4,
                      }
                    }}
                  >
                    {contact.form.submitBtn}
                  </Button>
                </Grid>
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ContactSection;