import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import CornerLogo from "@/components/ui/CornerLogo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mattheos Drivas - Portfolio",
  description:
    "Graduate student and software engineer crafting modern web applications, exploring sports analytics, and building multilingual solutions with cutting-edge technologies",
  icons: {
    icon: [{ url: "/MD-logo.png", type: "image/png" }, { url: "/favicon.ico" }],
    apple: [{ url: "/MD-logo.png" }],
    other: [
      {
        rel: "mask-icon",
        url: "/MD-logo.png",
      },
    ],
  },
  manifest: "/manifest.json",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          <CornerLogo />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
