import type { Metadata } from "next";
import { ViewTransition } from "react";
import localFont from "next/font/local";
import Navigation from "@/components/Navigation";
import Footer from "@/components/footer/Footer";
import SplashScreenWrapper from "@/components/SplashScreen";
import PageTransition from "@/components/PageTransition";
import "./global.css";

const fontSans = localFont({
  src: "./fonts/Satoshi.woff2",
  variable: "--font-sans",
  weight: "500",
});

const fontHeadings = localFont({
  src: "./fonts/CabinetGrotesk.woff2",
  variable: "--font-heading",
});

export const metadata: Metadata = {
  title: "Garrett Gizen | Creative Engineer - Explore Creative Solutions Today",
  description:
    "Discover Garrett Gizen, a Canadian creative engineer specializing in web design, branding, print, illustration, and video editing. Explore his portfolio today.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fontSans.variable} ${fontHeadings.variable} h-full antialiased`}
    >
      <body className="grid grid-rows-[auto_1fr_auto] min-h-full">
        {/* <SplashScreenWrapper> */}
        <header>
          <Navigation />
        </header>
        <main className="flex flex-col"> {children}</main>

        <Footer />
        {/* </SplashScreenWrapper> */}
      </body>
    </html>
  );
}
