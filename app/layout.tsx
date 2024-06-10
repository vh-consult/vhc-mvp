import { ReactNode } from "react";
import type { Metadata } from "next";
import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";

import "@stream-io/video-react-sdk/dist/css/styles.css";
import "react-datepicker/dist/react-datepicker.css";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "V-Healthcare | Your health needs prioritized!",
  description: "Virtual Consultation Room",
  icons: {
    icon: "/favicon.svg",
  },
};

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
            colorText: "#1C1F2E",
            colorPrimary: "#00AEA8",
            colorBackground: "#f5f5f5",
            colorInputBackground: "#ff",
            colorInputText: "#1C1F2E",
            // colorTextOnPrimaryBackground: "#1C1F2E",
            // colorNeutral: "#f5f5f5"
          },
        }}
      >
        <body className={`${inter.className} `}>
          <Toaster />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}