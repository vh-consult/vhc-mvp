import { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import { EdgeStoreProvider } from "@/lib/edgestore";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  manifest: '/manifest.json',
  title: "V-Healthcare | Your health needs prioritized!",
  description: "Virtual Consultation Room",
  icons: {
    icon: "/favicon.svg",
  },
};

export const viewport: Viewport = {
  themeColor: '#161925'
}

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${inter.className} `}>
        <Toaster />
        <EdgeStoreProvider>
          {children}
        </EdgeStoreProvider>
      </body>
    </html>
  );
}