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
    <section className="w-full min-h-screen flex flex-col lg:grid lg:grid-cols-5 overflow-hidden">
      
      {/* Image */}
      <div className="w-full h-[40vh] sm:h-[50vh] lg:h-auto lg:col-span-2 relative overflow-hidden">
        <img
          src={image}
          alt="section"
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>

      {/* Content */}
      <div className="flex flex-col lg:col-span-3 lg:grid lg:grid-rows-3 h-full">
        
        {/* Top Content */}
        <div
          className="flex flex-col justify-center px-6 sm:px-10 py-10 lg:py-0 lg:row-span-2"
          style={{ backgroundColor: bgColor }}
        >
          <h1
            className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold leading-tight"
            style={{ color: titleColor }}
          >
            {title}
          </h1>

          <p
            className="mt-4 sm:mt-6 text-base sm:text-lg md:text-xl max-w-2xl"
            style={{ color: descriptionColor }}
          >
            {description}
          </p>

          {ctaText && (
            <div
              onClick={onClick}
              className="mt-6 sm:mt-8 flex text-base sm:text-lg md:text-xl items-center gap-3 sm:gap-4 cursor-pointer group w-fit"
              style={{ color: ctaColor }}
            >
              <span>{ctaText}</span>

              <div
                className="w-8 h-8 sm:w-10 sm:h-10 rounded-full border flex items-center justify-center transition group-hover:translate-x-1"
                style={{ borderColor: ctaColor }}
              >
                →
              </div>
            </div>
          )}
        </div>

        {/* Bottom Section */}
        <div
          className="flex items-center justify-center lg:justify-end px-4 py-6 lg:py-0 lg:pr-4 lg:row-span-1 overflow-hidden"
          style={{ backgroundColor: bottomBgColor }}
        >
          {bottomElement}
        </div>
      </div>
    </section>
  );
}