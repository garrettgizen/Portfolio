"use client";
import { useMediaQuery } from "react-responsive";
import MobileNavbar from "./Navigation/MobileNavbar";
import Navbar from "./Navigation/Navbar";

export default function Navigation() {
  const showMobileNavigation = useMediaQuery({
    query: "(max-width: 767px)",
  });

  return (
    <header className="flex w-full border-b border-border">
      {showMobileNavigation ? <MobileNavbar /> : <Navbar />}
    </header>
  );
}
