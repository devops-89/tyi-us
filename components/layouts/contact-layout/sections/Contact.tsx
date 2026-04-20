"use client";

import React, { useMemo, useState } from "react";
import { Box, Container, Grid, Stack, Typography, TextField, Button, Radio, RadioGroup, FormControlLabel } from "@mui/material";
import { ArrowUpRight } from "lucide-react";

import { Colors, CONSTANTS } from "@/utils/enum";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import { WEBSITE_DATA } from "@/utils/website";
import SparkleLabel from "@/components/widgets/common/SparkleLabel";

const fieldSx = {
  "& .MuiInputBase-root:before": { borderBottomColor: "#A9A9A9" },
  "& .MuiInputBase-root:hover:not(.Mui-disabled):before": { borderBottomColor: "#A9A9A9" },
  "& .MuiInputBase-root:after": { borderBottomColor: Colors.BLACK },
  "& .MuiInputBase-input": { fontFamily: poppins.style.fontFamily, fontSize: 18, py: 1.5 },
  "& .MuiInputLabel-root": { fontFamily: poppins.style.fontFamily, fontSize: 18, color: "#8D8D8D" },
};

const { contact } = WEBSITE_DATA;

const ContactSection = () => {
  const [subject, setSubject] = useState(contact.subjects[0].id);

  return (
    <Box sx={{ backgroundColor: Colors.WHITE, pt: { xs: 8, md: 12 }, pb: { xs: 10, md: 12 } }}>
      <Container maxWidth={false} sx={{ maxWidth: CONSTANTS.MAX_WIDTH }}>
        <Box sx={{ mb: 2 }}>
          <Stack direction="row" justifyContent="flex-start">
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
              <SparkleLabel text={contact.sparkle} />
            </Stack>
          </Stack>
        </Box>

        <Grid container spacing={8} alignItems="flex-start">
          <Grid size={{ xs: 12, md: 5 }}>
            <Typography
              sx={{
                fontFamily: poppins.style.fontFamily,
                fontWeight: 700,
                fontSize: { xs: 32, md: 40 },
                color: Colors.BLACK,
                letterSpacing: "-0.4px",
                mb: 3,
              }}
            >
              {contact.title}
            </Typography>

            <Typography
              sx={{
                fontFamily: ibmPlexSans.style.fontFamily,
                fontSize: 18,
                color: Colors.TEXT_MUTED,
                lineHeight: "35px",
                mb: 4,
                whiteSpace: "pre-line",
              }}
            >
              {contact.description}
            </Typography>

            <Stack spacing={3} sx={{ mt: 6 }}>
              {contact.infoSnippets.map((snippet, idx) => (
                <Stack key={idx} direction="row" spacing={2} alignItems="flex-start">
                  <Radio checked disabled sx={{ p: 0.2, color: Colors.SECONDARY, "&.Mui-checked": { color: Colors.SECONDARY } }} />
                  <Typography sx={{ fontFamily: poppins.style.fontFamily, fontSize: 14, color: "#2F2F2F", letterSpacing: "1.08px", lineHeight: idx === 0 ? "34px" : "28px" }}>
                    {snippet}
                  </Typography>
                </Stack>
              ))}
            </Stack>
          </Grid>

          <Grid size={{ xs: 12, md: 7 }}>
            <Box sx={{ p: { xs: 0, md: 2 } }}>
              <Grid container spacing={4}>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth variant="standard" label={contact.form.firstName} sx={fieldSx} />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth variant="standard" label={contact.form.lastName} defaultValue="Doe" sx={fieldSx} />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth variant="standard" label={contact.form.email} sx={fieldSx} />
                </Grid>
                <Grid size={{ xs: 12, md: 6 }}>
                  <TextField fullWidth variant="standard" label={contact.form.phone} defaultValue="+1 012 3456 789" sx={fieldSx} />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <Typography sx={{ fontFamily: poppins.style.fontFamily, fontWeight: 700, fontSize: 20, color: Colors.BLACK, mb: 1.5 }}>
                    {contact.form.subjectLabel}
                  </Typography>
                  <RadioGroup row value={subject} onChange={(e) => setSubject(e.target.value)} sx={{ gap: 4 }}>
                    {contact.subjects.map((s) => (
                      <FormControlLabel
                        key={s.id}
                        value={s.id}
                        control={
                          <Radio
                            sx={{
                              color: "#D0D0D0",
                              "&.Mui-checked": { color: Colors.SECONDARY },
                            }}
                          />
                        }
                        label={
                          <Typography sx={{ fontFamily: poppins.style.fontFamily, fontSize: 16, color: Colors.BLACK }}>
                            {s.label}
                          </Typography>
                        }
                      />
                    ))}
                  </RadioGroup>
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <TextField
                    fullWidth
                    variant="standard"
                    label={contact.form.message}
                    defaultValue="Write your message.."
                    sx={fieldSx}
                  />
                </Grid>

                <Grid size={{ xs: 12 }}>
                  <Button
                    variant="contained"
                    endIcon={<ArrowUpRight size={18} />}
                    sx={{
                      height: 60,
                      borderRadius: "50px",
                      backgroundColor: Colors.SECONDARY,
                      fontFamily: poppins.style.fontFamily,
                      fontWeight: 600,
                      fontSize: 16,
                      px: 4,
                      "&:hover": { backgroundColor: Colors.PRIMARY },
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

