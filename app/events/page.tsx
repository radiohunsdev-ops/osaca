import CalendarSection from "@/components/CalendarSection";
import FestivalSection from "@/components/FestivalSection";
import Footer from "@/components/Footer";
import HighlightSection from "@/components/HighlightSection";
import CirclePattern from "@/components/icons/CirclePattern";
import ImageContainer from "@/components/ImageContainer";
import Landing from "@/components/Landing";
import SubmitEventSection from "@/components/SubmitEventSection";

const page = () => {
  return (
    <div>
      <Landing
        bgImage="/landing/Events.jpg"
        subtitle="Events"
        highlightColor="#37E8DA"
        textColor="#37E8DA"
        title={
          <>
            Clear your
            <br />
            diary & make <br />
            an *event* of it
            <br />
          </>
        }
      />
      <CalendarSection
        heading={"Events calendar"}
        body={
          "OSACA maintains a calendar of local cultural events. This is to help people attend as well as organise promote items of community interest. Fill your event details in our online calendaring tool for visibility and potential radio interviews on Radio Huns, with organisers of events."
        }
      />
      <ImageContainer
        image={{
          url: "/home/OSACA-Homepage-05.jpg",
          alt: "Festival Image",
        }}
      />
      <SubmitEventSection />
      <FestivalSection
        image="/home/OSACA-Homepage-02.jpg"
        title={
          <>
            South Asian Festival
            <br />
            <span className="text-[#37E8DA]">2021</span>
          </>
        }
        ctaLink="https://www.southasianfest.net/"
        ctaColor="#37E8DA"
        description="We host the South Asian Festival, the largest such festival in North America to celebrate the cultural heritage of the South Asian region."
        ctaText="Find out more"
        bottomBgColor="#01249E"
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
      <HighlightSection
        text="OSACA and SAF are blessed to have prominent individuals speak and attend our events."
        bgColor="#37E8DA"
        textColor="#ffffff"
      />
      <FestivalSection
        ctaLink="/membership"
        ctaColor="#37E8DA"
        bottomBgColor="#01249E"
        image="/home/OSACA-Homepage-03.jpg"
        title={
          <>
            Become a <br />
            <span className="text-[#37E8DA]">Member</span>
          </>
        }
        description="OSACA offers a free membership to individuals and businesses. Membership benefits include access to Covid-related advertising sponsorship and access to community events, among others."
        ctaText="Find out how"
        bottomElement={<CirclePattern />}
      />
      <Footer secondaryColor="#37E8DA" />
    </div>
  );
};

export default page;
