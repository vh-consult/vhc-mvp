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
            socialButtonsVariant: "blockButton",
            logoImageUrl: "/logo.svg",
          },
          variables: {
            colorText: "#041F20",
            colorPrimary: "#00AEA8",
            colorBackground: "#F4FFFF",
            colorInputBackground: "#F4FFFF",
            colorInputText: "#041F20",
          },
        }}
      >
        <body className={`${inter.className}`}>
          <Toaster />
          {children}
        </body>
      </ClerkProvider>
    </html>
  );
}