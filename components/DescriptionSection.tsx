import { ArrowRight } from "lucide-react";

type DescriptionSectionProps = {
  title: React.ReactNode;
  description: React.ReactNode;
  buttonText: string;
  buttonLink?: string;
};

export default function DescriptionSection({
  title,
  description,
  buttonText,
  buttonLink = "#",
}: DescriptionSectionProps) {
  return (
    <section className="relative bg-[#FBF6EE] overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-4 sm:px-6 md:px-10 lg:px-12 py-16 sm:py-20 md:py-24 lg:py-32 grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-start">
        {/* LEFT - TITLE */}
        <div>
          <h2
            className="
            text-3xl 
            sm:text-4xl 
            md:text-5xl 
            lg:text-6xl 
            xl:text-7xl 
            leading-tight 
            font-semibold 
            text-[#01249E]
          "
          >
            {title}
          </h2>
        </div>

        {/* RIGHT - DESCRIPTION */}
        <div
          className="
          max-w-2xl 
          text-[#3B4A54] 
          text-base 
          sm:text-lg 
          md:text-xl 
          lg:text-2xl 
          leading-relaxed 
          space-y-4 sm:space-y-6
        "
        >
          {description}

          {buttonText && (
            <div className="pt-6 sm:pt-8 md:pt-10">
              <a
                href={buttonLink}
                className="
                  inline-flex 
                  items-center 
                  gap-3 
                  text-[#E75023] 
                  text-base 
                  sm:text-lg 
                  md:text-xl 
                  font-medium 
                  group
                "
              >
                {buttonText}

                <span
                  className="
                  flex 
                  h-8 w-8 
                  sm:h-9 sm:w-9 
                  md:h-10 md:w-10 
                  items-center 
                  justify-center 
                  rounded-full 
                  border 
                  border-[#E75023]
                  transition-transform 
                  duration-300 
                  group-hover:translate-x-1
                "
                >
                  <ArrowRight size={18} />
                </span>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
