import type { Metadata } from "next";
import { StrictMode } from "react";
import "./globals.scss";

import RootContext from "@/context/RootContext";
import LayoutSite from "@/components/layout/LayoutSite";

import { JetBrains_Mono, Inconsolata } from "next/font/google";
import SnowBackground from "@/components/ui/snowBackground/SnowBackground";

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

const inconsolata = Inconsolata({
  variable: "--font-inconsolata",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Arzubek | Frontend Developer",
  description: "Portfolio showcasing web development and creative coding.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${jetBrainsMono.variable} ${inconsolata.variable}`}
    >
      <head>
        <link rel="icon" href="/icons/headerlogo.png" type="image/webp"/>
      </head>
      <body suppressHydrationWarning>
        <StrictMode>
          <RootContext>
            <SnowBackground />
              {children}
          </RootContext>
        </StrictMode>
      </body>
    </html>
  );
}
