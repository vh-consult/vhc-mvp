import { ReactNode } from "react";
import type { Metadata, Viewport } from "next";
import { ClerkProvider } from "@clerk/nextjs";
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
      <ClerkProvider
        appearance={{
          layout: {
            socialButtonsVariant: "iconButton",
            logoImageUrl: "/logo.svg",
            
          },
          variables: {
            colorText: "#041F20",
            colorPrimary: "#00AEA8",
            colorBackground: "#f5f5f5",
            colorInputBackground: "#f4ffff",
            colorInputText: "#041f20",
            colorTextOnPrimaryBackground: "#fff",
            colorTextSecondary: "#041F20",
          },
          
        }}
      >
          <body className={`${inter.className} `}>
            <Toaster />
            <EdgeStoreProvider>
              {children}
            </EdgeStoreProvider>
          </body>
      </ClerkProvider>
    </html>
  );
}