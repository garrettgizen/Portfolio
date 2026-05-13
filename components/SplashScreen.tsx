"use client";

import React from "react";
import Image from "next/image";
import { useState, useEffect, useContext, createContext } from "react";
import { AnimatePresence, motion } from "motion/react";

const SplashContext = createContext(true);
export const useSplashFinished = () => useContext(SplashContext);

const splashAnimation = {
  hidden: { width: 0 },
  show: {
    width: "100dvw",
  },
};

export default function SplashScreen({
  children,
}: {
  children: React.ReactNode;
}) {
  const [ShowSplash, setShowSplash] = useState(true);

  //   useEffect(() => {
  //     const timer = setTimeout(() => setShowSplash(false), 1000);
  //     return () => clearTimeout(timer);
  //   }, []);

  return (
    <SplashContext.Provider value={ShowSplash}>
      <AnimatePresence>
        {ShowSplash && (
          <motion.div
            aria-hidden={!ShowSplash}
            className="fixed inset-0 flex items-center justify-center bg-primary z-999"
            variants={splashAnimation}
            initial="show"
            transition={{ duration: 0.7 }}
            animate="show"
            exit="hidden"
            key="splashScreen"
          >
            <div>
              <motion.svg
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="size-42"
                width="59"
                height="32"
                viewBox="0 0 59 32"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g className="group" clipPath="url(#clip0_4_514)">
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
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      {children}
    </SplashContext.Provider>
  );
}
