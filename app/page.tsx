import DescriptionSection from "@/components/DescriptionSection";
import FestivalSection from "@/components/FestivalSection";
import HighlightSection from "@/components/HighlightSection";
import CirclePattern from "@/components/icons/CirclePattern";
import ImageContainer from "@/components/ImageContainer";
import JournalSection from "@/components/JournalSection";
import Landing from "@/components/Landing";
import OsacaSection from "@/components/OsacaSection";
import PartnershipsSection from "@/components/PartnershipsSection";
import SpeakersSection from "@/components/SpeakersSection";
const items = [
  {
    title: `Promote the culture, health,
finance and education of the
South Asian community in
Ontario`,
    icon: (
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        className="mx-auto"
      >
        <path
          d="M12 2v4M12 18v4M4 12H0M24 12h-4M5.6 5.6l-2.8-2.8M21.2 21.2l-2.8-2.8M5.6 18.4l-2.8 2.8M21.2 2.8l-2.8 2.8"
          stroke="#ff3b4a"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: `Foster community spirit,
diversity, peace and
understanding among
Canadians of different
cultures`,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2c2 4 6 6 10 10-4 4-8 6-10 10-2-4-6-6-10-10 4-4 8-6 10-10z"
          stroke="#ff3b4a"
          strokeWidth="2"
          fill="none"
        />
      </svg>
    ),
  },
  {
    title: `Promote local Ottawa and
South Asian artists and
culture to all audiences`,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <path
          d="M3 20c0-5 4-9 9-9M3 14c0-3 3-6 6-6M3 8c0-2 2-4 4-4"
          stroke="#ff3b4a"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: `Enrich the cultural landscape
of the National Capital Region
by hosting the annual family
friendly South Asian Fest`,
    icon: (
      <svg width="36" height="36" viewBox="0 0 24 24" fill="none">
        <path
          d="M12 2l2 4 4 2-4 2-2 4-2-4-4-2 4-2 2-4z"
          stroke="#ff3b4a"
          strokeWidth="2"
        />
      </svg>
    ),
  },
];
export default function Home() {
  return (
    <>
      <Landing
        bgImage="/landing/Homepage.jpg"
        subtitle="Welcome"
        textColor=""
        highlightColor=""
        title={
          <>
            Ontario <br />
            *South Asian* <br />
            Community <br />
            Association
          </>
        }
      />
      <DescriptionSection
        title={
          <>
            A comm-
            <br />
            <span className="text-[#FF3850]">unity </span>
            like
            <br />
            no other
          </>
        }
        description={
          <>
            <p>
              The Ontario South Asian Community Association (OSACA) was founded
              in 2009 as an Ottawa-based, not-for-profit corporation with a
              mandate to promote cultural awareness.
            </p>
            <p>
              It hosts an annual showcase event, the South Asian Festival, the
              largest such festival in North America to celebrate the cultural
              heritage of the south Asian region.
            </p>
          </>
        }
        buttonText="About Us"
        buttonLink="/about"
      />
      <OsacaSection
        heading="OSACA strives to"
        items={items}
        sectionBg="#f5f5f5"
        boxBg="#1a237e"
        bottomBg="#e53935"
        headingColor="#0d47a1"
      />
      <FestivalSection
        image="/home/OSACA-Homepage-02.jpg"
        title={
          <>
            South Asian <br />
            Festival <span className="text-red-500">2021</span>
          </>
        }
        description="We host the South Asian Festival, the largest such festival in North America to celebrate the cultural heritage of the South Asian region."
        ctaText="Find out more"
        bottomElement={
          <div className="grid grid-cols-4 gap-6">
            {Array.from({ length: 16 }).map((_, i) => (
              <div
                key={i}
                className="w-10 h-10 bg-white rounded-full opacity-90"
              />
            ))}
          </div>
        }
      />
      <SpeakersSection />
      <HighlightSection
        text="OSACA and SAF are blessed to have prominent individuals speak and attend our events."
        bgColor="#0d2c8f"
        textColor="#ffffff"
      />
      <FestivalSection
        image="/home/OSACA-Homepage-03.jpg"
        title={
          <>
            Become a <br />
            <span className="text-red-500">Member</span>
          </>
        }
        description="OSACA offers a free membership to individuals and businesses. Membership benefits include access to Covid-related advertising sponsorship and access to community events, among others."
        ctaText="Find out how"
        bottomElement={<CirclePattern />}
      />
      <PartnershipsSection
        title="Our partnerships"
        sectionBg="#e9e3db"
        cardBg="#0d2c9b"
        titleColor="#0d2c9b"
        dividerColor="rgba(255,255,255,0.4)"
        bottomStripColor="#ff3b4a"
        partners={[
          {
            src: "/logos/radiohuns.png",
            alt: "Radio Huns",
            width: 200,
          },
          {
            src: "/logos/southasian.png",
            alt: "South Asian Fest",
            width: 180,
          },
          {
            src: "/logos/fineqia.png",
            alt: "Fineqia",
            width: 160,
          },
        ]}
      />
      <JournalSection />
      <ImageContainer
        image={{
          url: "/home/OSACA-Homepage-05.jpg",
          alt: "Festival Image",
        }}
      />
    </>
  );
}
