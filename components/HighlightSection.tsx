type HighlightSectionProps = {
  text: string | React.ReactNode;
  bgColor?: string;
  textColor?: string;
};

export default function HighlightSection({
  text,
  bgColor = "#0d2c8f",
  textColor = "#ffffff",
}: HighlightSectionProps) {
  return (
    <section
      className="w-full py-24 px-6 flex items-center justify-center"
      style={{ backgroundColor: bgColor }}
    >
      <div className="max-w-4xl text-center">
        <p
          className="text-[30px] leading-relaxed tracking-wide"
          style={{ color: textColor }}
        >
          {text}
        </p>
      </div>
    </section>
  );
}