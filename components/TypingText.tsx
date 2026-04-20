import React from "react";
import "typingfx/dist/index.css";
import { TypeOut } from "typingfx";

interface TypingTextProps {
  texts: string[];
  delay: number;
}

export default function TypingText({ texts, delay }: TypingTextProps) {
  const steps = texts.map((t) => <>{t}{delay}</>);
  return (
    <TypeOut className="text-primary"
      repeat={0}
      steps={steps}
    ></TypeOut> 
  );
}
