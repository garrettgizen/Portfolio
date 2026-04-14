"use client";

import React from "react";
import Image from "next/image";
import * as AvatarLottie from "@/lib/avatar-lottie.json";
import { useLottie } from "lottie-react";

export default function Hero() {
  const options = {
    animationData: JSON.parse(JSON.stringify(AvatarLottie)),
    loop: false,
  };

  const { View } = useLottie(options);

  return (
    <section className="flex min-h-225 py-20">
      <div className="container">
        <div className="grid grid-cols-2 gap-4 items-center h-full">
          <div className="flex flex-col gap-8 ">
            <h1 className="font-heading font-black text-6xl">
              Hi I’m Garrett Gizen, <br></br>a Graphic Designer
            </h1>
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
