"use client";

import React from "react";

type Item = {
  title: string;
  icon: React.ReactNode;
};

type OsacaSectionProps = {
  heading: string;
  items: Item[];
  sectionBg?: string;
  boxBg?: string;
  bottomBg?: string;
  headingColor?: string;
};

export default function OsacaSection({
  heading,
  items,
  sectionBg = "#f2eee7",
  boxBg = "#112f91",
  bottomBg = "#ff3b4a",
  headingColor = "#0b2c8f",
}: OsacaSectionProps) {
  return (
    <section
      className="relative w-full pt-24 pb-32"
      style={{ backgroundColor: sectionBg }}
    >
      <div className="text-center mb-20">
        <h2
          className="text-[72px] font-semibold tracking-wide"
          style={{ color: headingColor }}
        >
          {heading}
        </h2>
      </div>

      <div className="max-w-350 mx-auto relative z-10">
        <div
          className="px-16 py-20 flex flex-col md:flex-row items-center justify-between"
          style={{ backgroundColor: boxBg }}
        >
          {items.map((item, index) => (
            <div key={index} className="flex-1 text-center px-8 relative">
              {index !== 0 && (
                <div className="hidden md:block absolute left-0 top-1/2 -translate-y-1/2 h-22.5 w-px bg-white/30" />
              )}

              <div className="mb-6 flex justify-center">{item.icon}</div>

              <p className="text-white text-[16px] leading-7 whitespace-pre-line max-w-65 mx-auto">
                {item.title}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-80"
        style={{ backgroundColor: bottomBg }}
      />
    </section>
  );
}
