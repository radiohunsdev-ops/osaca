import BusinessMembership from "@/components/BusinessMembership";
import DescriptionSection from "@/components/DescriptionSection";
import ImageContainer from "@/components/ImageContainer";
import Landing from "@/components/Landing";
import MembershipPage from "@/components/MembershipPage";

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
            Our <br />
            <span className="text-[#FF3850]">purpose</span>
          </>
        }
        description={
          <>
            <p>
              OSACA was created in 2009 to weave a community tapestry of people,
              activities and events related to the South Asian community in the
              province of Ontario, with a focus on the National Capital Region.
              The objects of its incorporation include:
            </p>
            <p>
              1. Pursuing interests in the civic, social and economic welfare of
              the South Asian community in Ontario.
            </p>
            <p>
              2. Promoting South Asian health, education, athletics and sports,
              arts and culture, recreation, civic emergency, social service and
              other community endeavours, and public appreciation and interest
              therein.
            </p>
            <p>
              3. Organising and sponsoring cultural, educational, sporting, and
              recreational events including festivals, forums and conventions
              for the promotion of people of South Asian origin.
            </p>
            <p>
              4. Promoting public interest in the culture and history of South
              Asia and to encourage research and education therein.
            </p>
            <p>
              5. Fostering community spirit, diversity, peace, and mutual
              understanding among Canadians of different cultural backgrounds by
              seeking to include and engage the larger community in events and
              provide a forum for the gathering, discussion and exchange of
              ideas and information.
            </p>
            <p>
              6. Uniting all persons interested in good fellowship, mutual
              understanding, and the establishment of peace in the South Asian
              region.
            </p>
            <p>
              7. Such other complementary purposes and activities not
              inconsistent with these objects.
            </p>
          </>
        }
        buttonText=""
        buttonLink=""
      />
      <ImageContainer
        image={{
          url: "/images/OSACCA-Membership.jpg",
          alt: "Festival Image",
        }}
      />
      <DescriptionSection
        title={
          <>
            Become a <br />
            <span className="text-[#FF3850]">member</span>
          </>
        }
        description={
          <>
            <p>
              OSACA membership has its privileges. It brings you a network of
              local connections, access to local events as well as airtime on
              Radio Huns to promote your own events, community clubs and
              businesses. To help alleviate the economic effects of the Covid
              situation, OSACA is assisting business by co-sponsoring
              advertising on Radio Huns. See the section on Huns Club for more
              info. Membership is free for individuals and businesses.
            </p>
          </>
        }
        buttonText="Buisness Membership"
        buttonLink="/"
      />
      <BusinessMembership />
      <MembershipPage />
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
