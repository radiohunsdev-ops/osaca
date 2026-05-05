import BusinessMembership from "@/components/BusinessMembership";
import DescriptionSection from "@/components/DescriptionSection";
import FestivalSection from "@/components/FestivalSection";
import Footer from "@/components/Footer";
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
          </>
        }
        buttonText=""
        buttonLink=""
      />
      <HunsClubForm />
      <FestivalSection
        image="/images/OSACCA-Huns-Club-02-15-770x1080.jpg"
        title={
          <>
            A <span className="text-[#37E8DA]">celebration</span> of
            <br /> Hunsdeep 
          </>
        }
        description="We host the South Asian Festival, the largest such festival in North America to celebrate the cultural heritage of the South Asian region."
        ctaText="Find out more"
        bottomBgColor="#37E8DA"
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
          url: "/images/bundeep.jpg",
          alt: "Festival Image",
        }}
      />
      <Footer secondaryColor="#37E8DA"/>
    </div>
  );
};

export default page;
