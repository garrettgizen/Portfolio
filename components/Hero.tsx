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
    <section
      aria-label="Hero Section"
      className="flex md:min-h-[calc(100dvh-80px)] [@media(min-height:880px)]:min-h-220  md:h-full sm:py-0 border-b border-border"
    >
      <div className="container grid-layout">
        <div className="grid grid-cols-1 gap-10 items-center h-full pt-5 pb-12 tablet:px-4 mw:px-10 sm:gap-4 tablet:grid-cols-2 tablet:py-sectionHeight">
          <div className="flex flex-col items-center text-center tablet:text-left tablet:items-start gap-8 order-1 tablet:order-0">
            <div className="flex flex-col font-heading font-black text-5xl tablet:text-4xl laptop:text-5xl">
              <h1>
                I'm Garrett Gizen,
                <div className="flex gap-2 min-h-(--text-5xl) tablet:min-h-(--text-4xl) laptop:min-h-(--text-5xl)">
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
          <figure
            className="mx-auto max-w-176 tablet:mx-0 tablet:max-w-none"
            aria-label="Avatar Image"
          >
            {" "}
            {View}
          </figure>
        </div>
      </div>
    </section>
  );
}
