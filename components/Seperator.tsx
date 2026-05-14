import React from "react";

interface SerperatorProps {
  height?: number;
  noGrid?: boolean;
}

export default function Seperator({ noGrid, height = 98 }: SerperatorProps) {
  return (
    <section
      aria-hidden
      className="flex border-b border-border pointer-events-none"
    >
      <div
        className={`container ${!noGrid ? "grid-layout" : "border-x border-border"} px-0!`}
      >
        <div
          style={{ "--separator-height": `${height}px` } as React.CSSProperties}
          className={`h-(--separator-height) bg-dot bg-repeat bg-center`}
        ></div>
      </div>
    </section>
  );
}
