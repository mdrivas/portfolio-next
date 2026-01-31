import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import CornerLogo from "@/components/ui/CornerLogo";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Mattheos Drivas - Portfolio",
  description:
    "Mattheos Drivas Portfolio",
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
  openGraph: {
    title: "Mattheos Drivas - Portfolio",
    description:
      "Mattheos Drivas Portfolio",
    images: [{ url: "/mattpic2.png", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Mattheos Drivas - Portfolio",
    description:
      "Mattheos Drivas Portfolio",
    images: ["/mattpic2.png"],
  },
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
