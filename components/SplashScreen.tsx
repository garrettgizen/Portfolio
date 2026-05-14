"use client";

import React from "react";
import { useState, useEffect, useContext, createContext, useRef } from "react";
import { AnimatePresence, motion } from "motion/react";

const SplashShowContext = createContext(false);
export const useShowSplash = () => useContext(SplashShowContext);

const splashAnimation = {
  hidden: { width: 0 },
  show: { width: "100dvw" },
};

export default function SplashScreenWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [mounted, setMounted] = useState(false);
  const [alreadyLoaded, setAlreadyLoaded] = useState(false);

  useEffect(() => {
    setAlreadyLoaded(sessionStorage.getItem("welcomeSplashLoaded") === "true");
    setMounted(true);
  }, []);

  return <SplashScreen>{children}</SplashScreen>;
}

export function SplashScreen({ children }: { children: React.ReactNode }) {
  const [showSplash, setShowSplash] = useState(true);
  const [progress, setProgress] = useState(0);

  const progressRef = useRef(0);
  const rafRef = useRef<number | null>(null);

  useEffect(() => {
    const tick = () => {
      const remaining = 95 - progressRef.current;
      const increment = Math.max(0.2, remaining * 0.02);
      progressRef.current = Math.min(95, progressRef.current + increment);
      setProgress(progressRef.current);

      if (progressRef.current < 95) {
        rafRef.current = requestAnimationFrame(tick);
      }
    };

    rafRef.current = requestAnimationFrame(tick);

    const fullyLoadedPage = () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      progressRef.current = 100;
      setProgress(100);
      setTimeout(() => setShowSplash(false), 1000);
      sessionStorage.setItem("welcomeSplashLoaded", "true");
    };

    if (document.readyState === "complete") {
      fullyLoadedPage();
    } else {
      window.addEventListener("load", fullyLoadedPage);
      return () => {
        window.removeEventListener("load", fullyLoadedPage);
        if (rafRef.current) cancelAnimationFrame(rafRef.current);
      };
    }

    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", showSplash);
  }, [showSplash]);

  return (
    <SplashShowContext.Provider value={showSplash}>
      <AnimatePresence onExitComplete={() => setShowSplash(false)}>
        {showSplash && (
          <motion.div
            role="status"
            aria-label="Loading Screen"
            className="fixed inset-0 flex items-center justify-center bg-primary z-999 "
            variants={splashAnimation}
            initial="show"
            transition={{ duration: 0.7, ease: [0.78, 0, 0.22, 1] }}
            animate="show"
            exit="hidden"
            key="splashScreen"
          >
            <div className="flex flex-col justify-center items-center gap-8 w-full h-full px-4">
              <motion.svg
                initial={{ scale: 0, opacity: 1 }}
                animate={{ scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.4, ease: [0.9, 0, 0.1, 1] }}
                className="w-[30dvw] max-w-32 h-fit"
                width="59"
                height="32"
                viewBox="0 0 59 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g clipPath="url(#clip0_4_514)">
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M58.7661 16V31.7647H43.0952C34.4461 31.7647 27.4242 24.7008 27.4242 16C27.4242 7.29924 34.4461 0.235294 43.0952 0.235294C47.7929 0.235294 52.0105 2.31924 54.8838 5.61747L48.0298 12.3061C46.9079 10.7925 45.1145 9.81159 43.0952 9.81159C39.7 9.81159 36.9435 12.5845 36.9435 16C36.9435 19.4155 39.7 22.1884 43.0952 22.1884C46.4903 22.1884 49.2468 19.4155 49.2468 16H58.7661Z"
                    fill="white"
                  />
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M31.5758 30.0228V31.7647H15.9049C7.25584 31.7647 0.233902 24.7008 0.233902 16C0.233902 7.29924 7.25584 0.235294 15.9049 0.235294C20.6026 0.235294 24.8202 2.31924 27.6935 5.61747L20.8395 12.3061C19.7176 10.7925 17.9242 9.81159 15.9049 9.81159C12.5097 9.81159 9.75325 12.5845 9.75325 16C9.75325 19.4155 12.5097 22.1884 15.9049 22.1884C19.3 22.1884 22.0565 19.4155 22.0565 16H25.009C25.009 21.6402 27.5657 26.6844 31.5758 30.0228Z"
                    fill="white"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_4_514">
                    <rect width="59" height="32" fill="white" />
                  </clipPath>
                </defs>
              </motion.svg>
              <motion.div
                className="max-w-48 w-full h-0.5 bg-background/20 rounded-full overflow-hidden"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1, transition: { delay: 0.5 } }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
                aria-hidden
              >
                <motion.div
                  className="h-full bg-white rounded-full origin-left"
                  style={{ scaleX: progress / 100 }}
                  transition={{ ease: "easeOut", duration: 0.2 }}
                />
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </SplashShowContext.Provider>
  );
}
