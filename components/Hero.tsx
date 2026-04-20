"use client";

import React from "react";
import Image from "next/image";
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
    <section className="flex min-h-225 py-20">
      <div className="container">
        <div className="grid grid-cols-2 gap-4 items-center h-full">
          <div className="flex flex-col gap-8 ">
            <div className="flex flex-col font-heading font-black text-6xl">
              <h1 className="">
                Hi I’m Garrett Gizen,{" "}
                <div className="flex gap-2">
                  a
                  <TypingText  texts={["Graphic Designer", "Web Developer"]} />
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
