import Calendar from "./Calendar";

type DescriptionSectionProps = {
  heading: string;
  body: string;
};

export default function CalendarSection({
  heading,
  body,
}: DescriptionSectionProps) {
  const formatHeading = (text: string) => {
    const parts = text.split(/(\*.*?\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith("*") && part.endsWith("*")) {
        return (
          <span key={index} className="text-[#F4B860]">
            {part.replace(/\*/g, "")}
          </span>
        );
      }
      return part;
    });
  };
  return (
    <div className="relative">
      <section className="bg-[#F6F1E7] ">
        <div className="flex flex-col lg:grid lg:grid-cols-[40%_60%]">
          <div className="flex flex-col">
            <div className="bg-[#01249E] px-6 py-10 sm:px-8 sm:py-16 lg:px-10 lg:py-30 space-y-4">
              <h1 className="text-[42px] sm:text-[56px] lg:text-[75px] text-white max-w-lg  font-extrabold leading-[1.05] tracking-wide">
                {formatHeading(heading)}
              </h1>
              <p className="max-w-xl text-white font-bold text-base sm:text-lg leading-relaxed">
                {body}
              </p>
            </div>

            <div className=" relative w-full flex items-end justify-end content-end p-5  h-[55vh] bg-[#37E8DA] overflow-hidden">
              <div className="w-100 h-100 ">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 324.01 324.02"
                  fill="white"
                >
                  <path d="M235.51,324a12.37,12.37,0,0,0,12.37-12.38,63.83,63.83,0,0,1,63.76-63.75,12.38,12.38,0,0,0,0-24.75,88.6,88.6,0,0,0-88.51,88.5A12.38,12.38,0,0,0,235.51,324Z"></path>
                  <path d="M180.64,324A12.38,12.38,0,0,0,193,311.64,118.75,118.75,0,0,1,311.64,193a12.38,12.38,0,0,0,0-24.75c-79.06,0-143.37,64.32-143.37,143.37A12.37,12.37,0,0,0,180.64,324Z"></path>
                  <path d="M125.54,324a12.38,12.38,0,0,0,12.38-12.38c0-95.79,77.93-173.72,173.72-173.72a12.38,12.38,0,0,0,0-24.75c-109.44,0-198.47,89-198.47,198.47A12.37,12.37,0,0,0,125.54,324Z"></path>
                  <path d="M69.07,324a12.38,12.38,0,0,0,12.38-12.38c0-126.93,103.26-230.19,230.19-230.19a12.38,12.38,0,0,0,0-24.75C171.06,56.7,56.7,171.07,56.7,311.64A12.37,12.37,0,0,0,69.07,324Z"></path>
                  <path d="M12.37,324a12.38,12.38,0,0,0,12.38-12.38c0-158.19,128.7-286.89,286.89-286.89a12.38,12.38,0,0,0,0-24.75C139.8,0,0,139.8,0,311.64A12.37,12.37,0,0,0,12.37,324Z"></path>
                </svg>
              </div>
            </div>
          </div>

          <div className="px-2 pt-6 sm:pt-8 lg:pt-10 flex flex-col">
            <Calendar />
            <div className="flex items-center justify-center gap-6 sm:gap-10 py-4">
              <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#01249E] flex items-center justify-center text-[#01249E]">
                ←
              </button>
              <span className=" text-[#01249E] text-lg sm:text-xl">
                January 2026
              </span>
              <button className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-[#01249E] flex items-center justify-center text-[#01249E]">
                →
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
