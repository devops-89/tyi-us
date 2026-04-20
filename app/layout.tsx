import type { Metadata } from "next";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import "./globals.css";
import Navbar from "@/components/widgets/navbar";
import { Box } from "@mui/material";

export const metadata: Metadata = {
  title: "America's Top Young Innovators",
  description: "Next generation of innovators",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${poppins.variable} ${ibmPlexSans.variable}`}>
      <body style={{ margin: 0, padding: 0, fontFamily: ibmPlexSans.style.fontFamily }}>
        <Navbar />
        <Box component="main" sx={{ pt: "100px" }}>
          {children}
        </Box>
      </body>
    </html>
  );
}
