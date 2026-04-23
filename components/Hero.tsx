"use client";

import * as AvatarLottie from "@/lib/avatar-lottie.json";
import { useLottie } from "lottie-react";
import TypingText from "./TypingText";

export default function Hero() {
  const options = {
    animationData: JSON.parse(JSON.stringify(AvatarLottie)),
    loop: false,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return (
    <section className="flex md:min-h-[calc(100vh-80px)] md:max-h-220 sm:py-0 border-b border-border">
      <div className="container grid-layout">
        <div className="grid grid-cols-1 gap-10 items-center h-full pt-5 pb-12 tablet:px-4 mw:px-10 sm:gap-4 md:grid-cols-2 md:py-0">
          <div className="flex flex-col items-center text-center md:text-left md:items-start gap-8 order-1 md:order-0">
            <div className="flex flex-col font-heading font-black text-5xl tablet:text-4xl laptop:text-5xl">
              <h1>
                I'm Garrett Gizen,
                <div className="flex gap-2 text-">
                  <TypingText
                    speed={80}
                    deleting={25}
                    pause={3000}
                    className={"text-primary"}
                    steps={[
                      "Web Developer",
                      "UI/UX Designer",
                      "Graphic Designer",
                      "Video Editor",
                      "Creative Engineer",
                    ]}
                  />
                </div>
              </h1>
            </div>
            <p className="opacity-80 leading-loose">
              I am a Website & Graphic Designer living in the Canadian prairies,
              working in branding, visual identities and production editing for
              film and editorials.
            </p>
            <button className="button">See Portfolio</button>
          </div>
          {View}
        </div>
      </div>
    </section>
  );
}
