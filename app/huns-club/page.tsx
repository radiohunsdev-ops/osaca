import BusinessMembership from "@/components/BusinessMembership";
import DescriptionSection from "@/components/DescriptionSection";
import FestivalSection from "@/components/FestivalSection";
import HunsClubForm from "@/components/HunsClubForm";
import ImageContainer from "@/components/ImageContainer";
import Landing from "@/components/Landing";
import MembershipPage from "@/components/MembershipPage";

const page = () => {
  return (
    <div>
      <Landing
        bgImage="/landing/OSACCA-Huns-Club.jpg"
        subtitle="Huns club"
        highlightColor="#01249E"
        textColor="#01249E"
        title={
          <>
            Let us
            <br />
            *Support*
            <br />
            you
            <br />
          </>
        }
      />
      <DescriptionSection
        title={
          <>
            Providing <br />
            <span className="text-[#37E8DA]">
              financial
              <br /> help
            </span>
          </>
        }
        description={
          <>
            <p>
              Huns Club was set up in honour of Hunsdeep “Huns” Singh Rangar –
              an initiative of the Ontario South Asian Community Association
              (OSACA) to provide need-based financial support. This program is
              especially designed to help those affected by the coronavirus
              contagion and available to members of OSACA.
            </p>
            <p>
              For businesses seeking to generate sales and recover lost revenue
              due to the coronavirus contagion, OSACA will finance the creation
              and airing of advertisements to cover the cost of 3 months’ worth
              of advertising on Radio Huns.
            </p>
            <p>
              Eligible businesses must be registered in Canada and operate their
              business within a 100-kilometre range of Ottawa or be selling
              online into the Ottawa market.
            </p>
            <p>Please complete the form below to apply.</p>
          </>
        }
        buttonText="Become a Member"
        buttonLink=""
      />
      <HunsClubForm />
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
      <ImageContainer
        image={{
          url: "/home/OSACA-Homepage-05.jpg",
          alt: "Festival Image",
        }}
      />
    </div>
  );
};

export default page;
