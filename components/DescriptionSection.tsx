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
      <div className="max-w-8xl px-20 mx-auto py-32 grid grid-cols-1 lg:grid-cols-2">
        <div>
          <h2 className="text-[100px] leading-[1.1] font-semibold text-[#01249E]">
            {title}
          </h2>
        </div>

        <div className="max-w-3xl text-[#3B4A54] text-lg leading-relaxed space-y-6">
          {description}

          <div className="mt-12">
            {buttonText && (
              <div className="mt-12">
                <a
                  href={buttonLink}
                  className="inline-flex items-center gap-3 text-[#E75023] text-lg font-medium"
                >
                  {buttonText}
                  <span className="flex h-10 w-10 items-center justify-center rounded-full border border-[#E75023]">
                    <ArrowRight />
                  </span>
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
