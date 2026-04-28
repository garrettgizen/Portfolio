import React from "react";

interface SerperatorProps {
  height?: number;
}

export default function Seperator({ height = 96 }: SerperatorProps) {
  return (
    <section
      aria-hidden="true"
      className="flex border-b border-border pointer-events-none"
    >
      <div className="container grid-layout px-0!">
        <div
          style={{ "--separator-height": `${height}px` } as React.CSSProperties}
          className={`h-(--separator-height) bg-[url('/dot_bg.svg')] bg-repeat bg-center`}
        ></div>
      </div>
    </section>
  );
}
