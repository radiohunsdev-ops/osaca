import DescriptionSection from "@/components/DescriptionSection";
import FestivalSection from "@/components/FestivalSection";
import Footer from "@/components/Footer";
import GallerySection from "@/components/GallerySection";
import ImageContainer from "@/components/ImageContainer";
import Landing from "@/components/Landing";
import OsacaSection from "@/components/OsacaSection";
import PartnershipsSection from "@/components/PartnershipsSection";
import VideoComponent from "@/components/VideoComponent";
import { slides } from "@/lib";
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
          stroke="#37E8DA"
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
          stroke="#37E8DA"
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
          stroke="#37E8DA"
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
          stroke="#37E8DA"
          strokeWidth="2"
        />
      </svg>
    ),
  },
];
const page = () => {
  return (
    <div>
      <Landing
        bgImage="/landing/AboutUs.jpg"
        subtitle="About us"
        textColor="#01249E"
        highlightColor="#01249E"
        title={
          <>
            A comm*unity* <br />
            like no other
            <br />
          </>
        }
      />
      <DescriptionSection
        title={
          <>
            Bringing
            <br />
            <span className="text-[#B371D8]">people </span>
            <br />
            <span className="text-[#B371D8]">together </span>
            <br />
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
              It hosts an annual showcase event, the
              <a
                href="https://www.southasianfest.net/"
                className="underline ml-2"
              >
                South Asian Festival
              </a>
              , the largest such festival in North America to celebrate the
              cultural heritage of the south Asian region.
            </p>
          </>
        }
        buttonText=""
        buttonLink=""
      />
      <OsacaSection
        heading="OSACA strives to"
        items={items}
        sectionBg="#f5f5f5"
        boxBg="#B371D8"
        bottomBg="#01249E"
        headingColor="#0d47a1"
      />
      <GallerySection
        slides={slides}
        title="Previous events"
        fromColor="#641FDC"
        toColor="#946EE7"
        accentColor="#01249E"
      />
      <VideoComponent
        videoUrl="https://www.youtube.com/watch?v=S_E5wYdhbxY&t"
        thumbnail="/slide/events/slide6.jpg"
        showBackground={true}
        title="South Asian Festival"
        subtitle=""
      />
      <FestivalSection
        image="/home/OSACA-Homepage-02.jpg"
        ctaLink=""
        title={
          <>
            View upcoming
            <br />
            <span className="text-[#B371D8]">events</span>
          </>
        }
        ctaColor="#B371D8"
        description="We host the South Asian Festival, the largest such festival in North America to celebrate the cultural heritage of the South Asian region."
        ctaText="Find out more"
        bottomBgColor="#B371D8"
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
      <PartnershipsSection
        title="Our partnerships"
        sectionBg="#e9e3db"
        cardBg="#0d2c9b"
        titleColor="#0d2c9b"
        dividerColor="rgba(255,255,255,0.4)"
        bottomStripColor="#B371D8"
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
      <ImageContainer
        image={{
          url: "/home/OSACA-Homepage-05.jpg",
          alt: "Festival Image",
        }}
      />
      <Footer />
    </div>
  );
};

export default page;
