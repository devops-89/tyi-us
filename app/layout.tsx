import type { Metadata } from "next";
import { poppins, ibmPlexSans } from "@/utils/fonts";
import "./globals.css";
import Navbar from "@/components/widgets/navbar";
import { Box } from "@mui/material";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';

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
        <AppRouterCacheProvider>
          <Navbar/>
          
          <Box component="main" sx={{ pt: "100px" }}>
            {children}
          </Box>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
