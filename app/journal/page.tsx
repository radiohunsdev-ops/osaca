import CardSection from "@/components/CardSection";
import Footer from "@/components/Footer";
import ImageContainer from "@/components/ImageContainer";
import Landing from "@/components/Landing";
import { demoCards } from "@/lib";

const page = () => {
  return (
    <div>
      <Landing
        bgImage="/landing/OSACA-Journal.jpg"
        subtitle="Journal"
        textColor="#FF3850"
        highlightColor="#FF3850"
        title={
          <>
            Keep up <br />
            to date with <br />
            *what&apos;s new* <br />
          </>
        }
      />
      <CardSection cards={demoCards} />
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
