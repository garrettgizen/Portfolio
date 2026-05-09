import type { Metadata } from "next";
import localFont from "next/font/local";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer/Footer";
import "./globals.css";

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
      <body className="min-h-full flex flex-col">
        <header>
          <Navigation />
        </header>

        {children}
        <Footer />
      </body>
    </html>
  );
}
