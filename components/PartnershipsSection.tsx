"use client";

import Image from "next/image";

type Partner = {
  src: string;
  alt: string;
  width?: number;
  height?: number;
};

type PartnershipsSectionProps = {
  title: string;
  partners: Partner[];
  sectionBg?: string;
  cardBg?: string;
  titleColor?: string;
  dividerColor?: string;
  bottomStripColor?: string;
};

export default function PartnershipsSection({
  title,
  partners,
  sectionBg = "#e9e3db",
  cardBg = "#0d2c9b",
  titleColor = "#0d2c9b",
  dividerColor = "rgba(255,255,255,0.4)",
  bottomStripColor = "#ff3b4a",
}: PartnershipsSectionProps) {
  return (
    <section
      className="w-full py-20 relative overflow-hidden"
      style={{ backgroundColor: sectionBg }}
    >
      <h2
        className="text-center font-extrabold text-5xl md:text-7xl mb-16 relative z-10"
        style={{ color: titleColor }}
      >
        {title}
      </h2>

      <div className="relative z-10 max-w-6xl mx-auto">
        <div
          className="px-10 py-10 flex items-center justify-between"
          style={{ backgroundColor: cardBg }}
        >
          {partners.map((partner, index) => (
            <div key={index} className="flex items-center w-full">
              <div className="flex items-center justify-center w-full">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  width={partner.width || 180}
                  height={partner.height || 100}
                  className="object-contain"
                />
              </div>

              {index !== partners.length - 1 && (
                <div
                  className="h-16 w-px"
                  style={{ backgroundColor: dividerColor }}
                />
              )}
            </div>
          ))}
        </div>
      </div>

      <div
        className="absolute bottom-0 left-0 w-full h-40 z-0"
        style={{ backgroundColor: bottomStripColor }}
      />
    </section>
  );
}