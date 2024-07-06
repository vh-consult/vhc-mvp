import { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";
import {CloudinaryProvider} from "@/providers/CloudinaryProvider";

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
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/logo.svg",

          },
          variables: {
            colorText: "#fff",
            colorPrimary: "#00AEA8",
            colorBackground: "#1C1F2E",
            colorInputBackground: "#252A41",
            colorInputText: "#fff",
            colorTextOnPrimaryBackground: "#fff",
            colorNeutral: "#f5f5f5"
          },
        }}
      >
        <CloudinaryProvider>
          <body className={`${inter.className} `}>
            <Toaster />
            {children}
          </body>
        </CloudinaryProvider>
      </ClerkProvider>
    </html>
  );
}