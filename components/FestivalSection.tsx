/* eslint-disable @next/next/no-img-element */
"use client";

import React from "react";

type FestivalSectionProps = {
  image: string;
  title: React.ReactNode;
  description: string;
  ctaText?: string;
  onClick?: () => void;
  bottomElement?: React.ReactNode;

  // color props
  bgColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  ctaColor?: string;
  bottomBgColor?: string;
};

export default function FestivalSection({
  image,
  title,
  description,
  ctaText = "",
  onClick,
  bottomElement,

  bgColor = "#e7e1db",
  titleColor = "#1e3a8a", 
  descriptionColor = "#4b5563",
  ctaColor = "#ef4444",
  bottomBgColor = "#ef4444",
}: FestivalSectionProps) {
  return (
    <section className="w-full h-screen grid grid-cols-5 overflow-hidden">
      <div className="col-span-2 relative overflow-hidden">
        <img
          src={image}
          alt="section"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      <div className="col-span-3 grid grid-rows-3 h-full">
        <div
          className="row-span-2 flex flex-col justify-center px-10"
          style={{ backgroundColor: bgColor }}
        >
          <h1
            className="text-8xl font-bold leading-tight"
            style={{ color: titleColor }}
          >
            {title}
          </h1>

          <p
            className="mt-6 text-xl max-w-2xl"
            style={{ color: descriptionColor }}
          >
            {description}
          </p>

          <div
            onClick={onClick}
            className="mt-8 flex  text-xl items-center gap-4 cursor-pointer group w-fit"
            style={{ color: ctaColor }}
          >
            <span className="text-xl">{ctaText}</span>

            <div
              className="w-10 h-10 rounded-full border flex items-center justify-center transition"
              style={{ borderColor: ctaColor }}
            >
              →
            </div>
          </div>
        </div>

        <div
          className="row-span-1 flex items-center justify-end pr-4 overflow-hidden"
          style={{ backgroundColor: bottomBgColor }}
        >
          {bottomElement}
        </div>
      </div>
    </section>
  );
}