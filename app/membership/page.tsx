import DescriptionSection from "@/components/DescriptionSection";
import Landing from "@/components/Landing";

const page = () => {
  return (
    <div>
      <Landing
        bgImage="/landing/membership.jpg"
        subtitle="Memberships"
        highlightColor="#37E8DA"
        textColor="#37E8DA"
        title={
          <>
            Join our
            <br />
            growing
            <br />
            *community* <br />
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
    </div>
  );
};

export default page;
